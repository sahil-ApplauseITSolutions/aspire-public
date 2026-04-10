import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import ImpactReachPage from "./pages/ImpactReach";
import Gallery from "./pages/Gallery";
import GuaranteedInternshipDetails from "./pages/GuaranteedInternshipDetails";
import CampusToCorporateDetails from "./pages/CampusToCorporateDetails";
import UIUXDeveloperDetails from "./pages/UIUXDeveloperDetails";
import CloudTechnologyDetails from "./pages/CloudTechnologyDetails";
import CyberSecurityDetails from "./pages/CyberSecurityDetails";
import EEDPDetails from "./pages/EEDPDetails";
import CreditLinkedCoursesDetails from "./pages/CreditLinkedCoursesDetails";
import QuantumComputingDetails from "./pages/QuantumComputingDetails";
import FinancialStatementAnalysisDetails from "./pages/FinancialStatementAnalysisDetails";
import FinancialModellingDetails from "./pages/FinancialModellingDetails";
import ResearchAnalystCertificationDetails from "./pages/ResearchAnalystCertificationDetails";
import CertificateFinancialReportingDetails from "./pages/CertificateFinancialReportingDetails";
import CertificatePerformanceManagementDetails from "./pages/CertificatePerformanceManagementDetails";
import CertificateAuditDetails from "./pages/CertificateAuditDetails";
import CertificateMutualFundsDetails from "./pages/CertificateMutualFundsDetails";
import CertificateInvestmentAdvisoryDetails from "./pages/CertificateInvestmentAdvisoryDetails";
import CertificatePortfolioManagementDetails from "./pages/CertificatePortfolioManagementDetails";
import DigitalMarketingDetails from "./pages/DigitalMarketingDetails";
import DigitalMarketingSEOGoogleAdsDetails from "./pages/DigitalMarketingSEOGoogleAdsDetails";
import DigitalMarketingSocialMediaDetails from "./pages/DigitalMarketingSocialMediaDetails";
import FundamentalsFinancialServicesDetails from "./pages/FundamentalsFinancialServicesDetails";
import InvestmentBankingOperationsDetails from "./pages/InvestmentBankingOperationsDetails";
import AlternativeInvestmentsDetails from "./pages/AlternativeInvestmentsDetails";
import CertificateFinancialMarketsDetails from "./pages/CertificateFinancialMarketsDetails";
import TechnicalAnalysisDetails from "./pages/TechnicalAnalysisDetails";
import CertificateEquityDerivativesDetails from "./pages/CertificateEquityDerivativesDetails";
import StockMarketAnalyticsDetails from "./pages/StockMarketAnalyticsDetails";
import PythonForFinanceDetails from "./pages/PythonForFinanceDetails";
import MachineLearningFinanceDetails from "./pages/MachineLearningFinanceDetails";
import GenerativeAIDetails from "./pages/GenerativeAIDetails";
import EnglishCompetitiveExamsDetails from "./pages/EnglishCompetitiveExamsDetails";
import MathCompetitiveExamsDetails from "./pages/MathCompetitiveExamsDetails";
import LogicCompetitiveExamsDetails from "./pages/LogicCompetitiveExamsDetails";
import Careers from "./pages/Careers";

function AdminRedirect() {
  useEffect(() => {
    const adminPath = window.location.pathname.replace(/^\/admin/, "") || "/";
    const normalizedPath = adminPath.startsWith('/') ? adminPath : `/${adminPath}`;
    const targetUrl = `${window.location.protocol}//${window.location.hostname}/admin/#${normalizedPath}${window.location.search}`;
    window.location.replace(targetUrl);
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRedirect />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impact-reach" element={<ImpactReachPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/programs/guaranteed-internship" element={<GuaranteedInternshipDetails />} />
        <Route path="/programs/campus-to-corporate" element={<CampusToCorporateDetails />} />
        <Route path="/programs/uiux-developer" element={<UIUXDeveloperDetails />} />
        <Route path="/programs/cloud-technology" element={<CloudTechnologyDetails />} />
        <Route path="/programs/cyber-security" element={<CyberSecurityDetails />} />
        <Route path="/programs/eedp" element={<EEDPDetails />} />
        <Route path="/programs/credit-linked-courses" element={<CreditLinkedCoursesDetails />} />
        <Route path="/programs/quantum-computing" element={<QuantumComputingDetails />} />
        <Route path="/programs/financial-statement-analysis" element={<FinancialStatementAnalysisDetails />} />
        <Route path="/programs/financial-modelling" element={<FinancialModellingDetails />} />
        <Route path="/programs/research-analyst-certification" element={<ResearchAnalystCertificationDetails />} />
        <Route path="/programs/certificate-financial-reporting" element={<CertificateFinancialReportingDetails />} />
        <Route path="/programs/certificate-performance-management" element={<CertificatePerformanceManagementDetails />} />
        <Route path="/programs/certificate-audit" element={<CertificateAuditDetails />} />
        <Route path="/programs/certificate-mutual-funds" element={<CertificateMutualFundsDetails />} />
        <Route path="/programs/certificate-investment-advisory" element={<CertificateInvestmentAdvisoryDetails />} />
        <Route path="/programs/certificate-portfolio-management" element={<CertificatePortfolioManagementDetails />} />
        <Route path="/programs/digital-marketing" element={<DigitalMarketingDetails />} />
        <Route path="/programs/digital-marketing-seo-google-ads" element={<DigitalMarketingSEOGoogleAdsDetails />} />
        <Route path="/programs/digital-marketing-social-media" element={<DigitalMarketingSocialMediaDetails />} />
        <Route path="/programs/fundamentals-financial-services" element={<FundamentalsFinancialServicesDetails />} />
        <Route path="/programs/investment-banking-operations" element={<InvestmentBankingOperationsDetails />} />
        <Route path="/programs/alternative-investments" element={<AlternativeInvestmentsDetails />} />
        <Route path="/programs/certificate-financial-markets" element={<CertificateFinancialMarketsDetails />} />
        <Route path="/programs/technical-analysis" element={<TechnicalAnalysisDetails />} />
        <Route path="/programs/certificate-equity-derivatives" element={<CertificateEquityDerivativesDetails />} />
        <Route path="/programs/stock-market-analytics" element={<StockMarketAnalyticsDetails />} />
        <Route path="/programs/python-for-finance" element={<PythonForFinanceDetails />} />
        <Route path="/programs/machine-learning-finance" element={<MachineLearningFinanceDetails />} />
        <Route path="/programs/generative-ai" element={<GenerativeAIDetails />} />
        <Route path="/programs/english-competitive-exams" element={<EnglishCompetitiveExamsDetails />} />
        <Route path="/programs/math-competitive-exams" element={<MathCompetitiveExamsDetails />} />
        <Route path="/programs/logic-competitive-exams" element={<LogicCompetitiveExamsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
