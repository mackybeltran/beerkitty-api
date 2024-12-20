import { Response } from 'express'
import { db } from './config/firebase'

type GroupType = {

    members: [
        {
            name: string,
            funds: number,
            userId: string
        }
    ],
    groupName: string

}

type Request  = {

    body: GroupType,
    params: { groupId: string }

}

const addGroup = async (req: Request, res: Response) => {
    const { members, groupName } = req.body
    try {
        const group = db.collection('groups').doc()
        const groupObject = {
            id: group.id,
            members,
            groupName
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

export { addGroup }