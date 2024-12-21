import { Response } from 'express'
import { db } from './config/firebase'

type GroupType = {

    name: string,
    user_id: string
    groupName: string

}

type Request  = {

    body: GroupType,
    params: { groupId: string }

}

const addGroup = async (req: Request, res: Response) => {
    const { name, user_id, groupName } = req.body
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