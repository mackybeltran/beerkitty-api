import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Group from '#models/group'

export default class extends BaseSeeder {
  public async run () {

    await User.create(
      {
        name: 'virk',
        email: 'virk@adonisjs.com',
        password: 'secret',
      }
    )
    await Group.create(
      {
        name: 'Toronto',
        password: 'secret',
        fundsAmount: 100000
      }
    )
  }

}