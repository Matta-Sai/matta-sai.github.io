import "./index.css"

const CertificateCard = (props) => {
    const { imgSrc, title,certUrl } = props.certficateDetails;

    const onClickCert = () => {
        window.open(certUrl, "_blank");
    }
    return(
        <li className = "certificate-card" onClick = {onClickCert}>
            <img src = {imgSrc} alt = {title} className = "certificate-img"/>
            <p className = "certificate-title">{title}</p>
        </li>
    )
}

export default CertificateCard;