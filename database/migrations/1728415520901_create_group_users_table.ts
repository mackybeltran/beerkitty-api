import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'group_user'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('group_id').unsigned().index()
      table.integer('user_id').unsigned().index()
      table.foreign('group_id').references('groups.id').onDelete('cascade')
      table.foreign('user_id').references('users.id').onDelete('cascade')
      table.integer('funds')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}