class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :title
      t.string :description
      t.integer :author_id
      t.date :appointment_date
      t.time :time
      t.timestamps null: false
    end
    add_index :appointments, [:appointment_date, :time], unique: true
  end
end
