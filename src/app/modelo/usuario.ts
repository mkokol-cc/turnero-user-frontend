import { Pago } from "./pago";

export class Usuario {
    public id: number;
    public email: string;
    public password: string;
    public nombre: string;
    public apellido: string;
    public dni: string;
    public telefono: string;
    public enabled: boolean;
    public perfil: string;
    public fbEmpresarial: string;
    public wppEmpresarial: string;
    public igEmpresarial: string;
    public emailEmpresarial: string;
    public twitterEmpresarial: string;
    public ubicacionEmpresarial: string;
    public autopago: boolean;
    public deshabilitarAutopagoSiCambiaElPrecio: boolean;
    public dbUrl: string;
    public dbUsername: string;
    public dbPassword: string;
    public pagos: Pago[];

    
}
