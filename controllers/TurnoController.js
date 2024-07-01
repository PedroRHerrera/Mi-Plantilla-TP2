import TurnoService from "../services/TurnoService.js";

class TurnoController {
    TurnoService = new TurnoService();

    crearTurno = async (req, res) => {
        try {
            const turno = req.body;
            const data = await this.TurnoService.crearTurnoService(turno);
            res.status(200).send(data);
        } catch (error) {
            res.status(422).send({ errorMsg: error.message });
        }
    };
    
    reporteDiversidad = async (req, res) => {
        try {
            const { mes } = req.params;
            const data = await this.TurnoService.reporteDiversidadService(mes);
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send({ errorMsg: 'Error al generar el reporte de diversidad' })
        }
    };

    obtenerTurnos = async (req, res) => {
        try {
            const data = await this.TurnoService.getTurnosService();
            res.status(200).send(data);
        } catch (error) {
            res.status(422).send("no hay turnos");
        }
    };
}

export default TurnoController;