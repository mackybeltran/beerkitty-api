import { Response } from 'express'
import { db } from './config/firebase'
import { FieldValue } from 'firebase-admin/firestore'

type GroupType = {

    name: string,
    user_id: string
    group_name: string

}

type addGroupRequest  = {

    body: GroupType,
    // params: { groupId: string }

}

type MemberType = {

    name: string,
    user_id: string

}

type addMemberRequest = {

    body: MemberType
    params: { id: string }

}

const addGroup = async (req: addGroupRequest, res: Response) => {
    const { name, user_id, group_name } = req.body
    try {
        const group = db.collection('groups').doc()
        const groupObject = {
            id: group.id,
            members: [
                {
                    name,
                    user_id,
                    funds: 0
                }
            ],
            group_name
        }

        group.set(groupObject)
        res.status(200).send({
            status: 'success',
            message: 'entry added successfully',
            data: groupObject
        })
    } catch(error:any) {
        res.status(500).json(error.message)
    }
}

const addMember = async (req: addMemberRequest, res: Response) => {
    const { name, user_id } = req.body
    try {
        db.collection('groups').doc(req.params.id)
        .update('members', FieldValue.arrayUnion({
            name,
            funds: 0,
            user_id 
        }))
        res.status(200).send({
            status: 'success',
            message: 'entry added successfully',
            data: {
                name
            }
        })
    } catch(error:any) {
        res.status(500).json(error.message)
    }
}

export { addGroup, addMember }
