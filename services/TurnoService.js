import Turno from "../models/Turno.js";

class TurnoService{

    turnoModel = new Turno();

    crearTurnoService = async (turno) => {
        const { dia, mes, hora, nombre, telefono, tipoServicio } = turno;
        if (!Number.isInteger(dia) || dia <= 0) throw new Error('Día no válido');
        if (!Number.isInteger(mes) || mes < 1 || mes > 12) throw new Error('Mes no válido');
        if (!Number.isInteger(hora) || hora < 0 || hora > 23) throw new Error('Hora no válido');
        if (typeof nombre !== 'string' || nombre.trim() === '') throw new Error('Nombre no válido');
        if (!/^\d+$/.test(telefono)) throw new Error('Teléfono no válido');
        if (!['programado', 'auxilio', 'cotizacion'].includes(tipoServicio)) throw new Error('Tipo de Servicio no válido');

        if (tipoServicio === 'auxilio' && !(await this.turnoModel.verificarLimiteAuxilio())) {
            throw new Error('Límite de turnos de auxilio alcanzado');
        }

        return await this.turnoModel.create(turno);
    };

    reporteDiversidadService = async (mes) => {
        if (!Number.isInteger(parseInt(mes)) || mes < 1 || mes > 12) throw new Error('Mes no válido');
        return await this.turnoModel.contarTipoDeServicio(parseInt(mes));
    };

    getTurnosService = async() => {
        try {
            const data = await this.turnoModel.getAll();
            if(!data) throw error;
            return data;
        } catch (error) {
            throw error;
        }
    };
}

export default TurnoService;