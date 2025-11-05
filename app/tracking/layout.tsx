import Header from "../../features/tracking_page/Header";

export default function TrackingLayout({children}:{children:React.ReactNode}){
return(
    <div className="max-w-[1440px] mx-auto">
        <Header />
        {children}
    </div>
)
} 