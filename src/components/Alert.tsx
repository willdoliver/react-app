
interface Props {
    children: string;
    onClose: () => void;
}



const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-success alert-dismissible" role="alert">
        { children }
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}

export default Alert