import {
  TechnologiesSection,
  CallToAction,
} from '../../components/MarketingSections'
import { EcosystemScope } from '../../components/EcosystemScope'
export default function Technologies() {
  return (
    <>
      <TechnologiesSection full />
      <div className="section ecosystem-section">
        <div className="container">
          <EcosystemScope />
        </div>
      </div>
      <CallToAction />
    </>
  )
}
