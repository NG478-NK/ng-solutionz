import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'NG Solutionz | Document Digitization & Data Services',description:'Document scanning, OCR, indexing, data entry, searchable PDFs and manpower services in Bangalore.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
