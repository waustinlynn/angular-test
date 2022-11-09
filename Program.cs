using System;
using System.Xml;

namespace ExcelToTally
{
    class Program
    {
        static void Main(string[] args)
        {
        XmlDocument doc = new XmlDocument();
        // XmlNode docNode = doc.CreateXmlDeclaration("1.0", "UTF-8", null);
        // doc.AppendChild(docNode);

        XmlNode ENVELOPENode = doc.CreateElement("ENVELOPE");
        doc.AppendChild(ENVELOPENode);
        
          XmlNode HEADERNode = doc.CreateElement("HEADER");
          ENVELOPENode.AppendChild(HEADERNode);

          var TALLYREQUESTNode = doc.CreateElement("TALLYREQUEST");
          TALLYREQUESTNode.InnerText  = "Import Data";
          HEADERNode.AppendChild(TALLYREQUESTNode);

          var BodyNode = doc.CreateElement("BODY");
          ENVELOPENode.AppendChild(BodyNode);

          var IMPORTDATANode = doc.CreateElement("IMPORTDATA");
          BodyNode.AppendChild(IMPORTDATANode);

        var REQUESTDESCNode = doc.CreateElement("REQUESTDESC");
            IMPORTDATANode.AppendChild(REQUESTDESCNode);
         
          var REPORTNAMENode = doc.CreateElement("REPORTNAME");
          REPORTNAMENode.InnerText  = "All Master";
          REQUESTDESCNode.AppendChild(REPORTNAMENode);

           var STATICVARIABLESNode = doc.CreateElement("STATICVARIABLES");
            REQUESTDESCNode.AppendChild(STATICVARIABLESNode);

            var SVCURRENTCOMPANYNode = doc.CreateElement("SVCURRENTCOMPANY");
          SVCURRENTCOMPANYNode.InnerText  = "SHEETAL V. BHARWADA 2017-18";
          STATICVARIABLESNode.AppendChild(SVCURRENTCOMPANYNode);

///dat node
           var REQUESTDATANode = doc.CreateElement("REQUESTDATA");
            IMPORTDATANode.AppendChild(REQUESTDATANode);

             var TALLYMESSAGENode = doc.CreateElement("TALLYMESSAGE");
             TALLYMESSAGENode.SetAttribute("xmlns:UDF", "TallyUDF");
            REQUESTDATANode.AppendChild(TALLYMESSAGENode);

var VOUCHER = doc.CreateElement("VOUCHER");
             VOUCHER.SetAttribute("REMOTEID",Guid.NewGuid().ToString());
             VOUCHER.SetAttribute("VCHKEY",Guid.NewGuid().ToString());
             VOUCHER.SetAttribute("VCHTYPE","Contra");
             VOUCHER.SetAttribute("ACTION","Create");
             VOUCHER.SetAttribute("OBJVIEW","Accounting Voucher View");
             TALLYMESSAGENode.AppendChild(VOUCHER);

var OLDAUDITENTRYIDSList = doc.CreateElement("OLDAUDITENTRYIDS.LIST");
             OLDAUDITENTRYIDSList.SetAttribute("TYPE", "TYPE");
            VOUCHER.AppendChild(OLDAUDITENTRYIDSList);

            var OLDAUDITENTRYIDS = doc.CreateElement("OLDAUDITENTRYIDS");
             OLDAUDITENTRYIDS.InnerText = "-1";
            OLDAUDITENTRYIDSList.AppendChild(OLDAUDITENTRYIDS);

            var DATE = doc.CreateElement("DATE");
            DATE.InnerText = DateTime.Now.ToString("dd/MM/yyyy");
            VOUCHER.AppendChild(DATE);

 var GUID = doc.CreateElement("GUID");
            GUID.InnerText = Guid.NewGuid().ToString();
            VOUCHER.AppendChild(GUID);



        doc.Save(@"D:\\myxml.xml");
            Console.WriteLine("doc saved");
        }


        VOUCHER v = new VOUCHER();
    }
}
