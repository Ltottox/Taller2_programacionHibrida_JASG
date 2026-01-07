import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Cita } from '../modelos/cita.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;

  async initializeDatabase(): Promise<void> {
    this.db = await this.sqlite.createConnection('citas.db', false, 'no-encryption', 1, false);
    await this.db.open();
    // Crear tabla de citas si no existe
    const schema = `CREATE TABLE IF NOT EXISTS citas (id INTEGER PRIMARY KEY AUTOINCREMENT, frase TEXT NOT NULL, autor TEXT NOT NULL)`;
    await this.db.execute(schema);
    console.log('SQLite inicializado');
  }
  // add, getAll, delete metodos para citas
  async addCita(cita: Cita): Promise<void> {
    await this.db.run('INSERT INTO citas (frase, autor) VALUES (?, ?)', [cita.frase, cita.autor]);
  }

  async getAllCitas(): Promise<Cita[]> {
    const result = await this.db.query('SELECT * FROM citas ORDER BY id DESC');
    return result.values || [];
  }

  async deleteCita(id: number): Promise<void> {
    await this.db.run('DELETE FROM citas WHERE id = ?', [id]);
  }
}