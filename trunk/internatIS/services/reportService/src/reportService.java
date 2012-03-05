import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.DownloadResponse;
import java.net.URL;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;
import com.internatDB.*;

public class reportService extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
   
   public DownloadResponse getReport() throws Exception{
   
       DownloadResponse ret=new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap= new ConfigurableMimeFileTypeMap();
       
       try{
           InternatDB service= (InternatDB) RuntimeAccess.getInstance().getService(InternatDB.class);
           service.begin();
           Session session = service.getDataServiceManager().getSession();
           String reportName = "skupina";
           URL fileurl= this.getClass().getResource(reportName + ".jasper");
           
           //invocar-Cargar Jasper nota: loadObject -loadobject
           JasperReport report2= (JasperReport)JRLoader.loadObject(fileurl);
           
           //cargar Conexion: la conexion de la base de datos al reporte, parametros y el archivo jasper
           JasperPrint jasperPrint= JasperFillManager.fillReport(report2,null,session.connection());
           
           //exportando el projecto a PDF
           ByteArrayOutputStream out= new ByteArrayOutputStream();
           JasperExportManager.exportReportToPdfStream(jasperPrint, out);
           
           //cargando PDF como repsuesta de Descarga
           ret.setContentType(mimeFileTypeMap.getContentType(reportName + ".pdf"));
           ret.setContents(new ByteArrayInputStream(out.toByteArray()));
           ret.setFileName(reportName + ".pdf");
       
         }catch(Exception e){
                e.printStackTrace();
         }
       return ret;
   } 
}
