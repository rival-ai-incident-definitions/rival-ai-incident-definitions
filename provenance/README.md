# Provenance

Every quotation on this site and every number on it traces to a file in this folder.

## Quotations

Each file in `claims/` is a record kept with the [`citations`](https://pypi.org/project/citations/) tool. A record names one source, gives the source file's name and its sha256, and lists each quotation used from it verbatim, with its line in the source text where recorded. Every record passed `citations verify --strict` against its source before the site used it.

- `claims/definitions/`: the definitions and databases on the Definitions pages (OECD, EU AI Act, CSET first and second editions, AI Incident Database, MIT AI Incident Tracker, PAGCF).
- `claims/foundations/`: the primary texts quoted on the Theoretical Foundations pages.

`SOURCES.tsv` lists the source files fetched for the study, with the URL each came from, the date and the sha256. To check a quotation, download its source from that URL, confirm the sha256 in the record, and find the quoted text in it; with the source files beside the records, `citations verify --claims provenance/claims --strict` checks them all at once.

## Numbers

`results/aiid_joint_tables.json` holds every agreement statistic on the [Crosswalk](https://rival-ai-incident-definitions.github.io/rival-ai-incident-definitions/crosswalk/) page and in the Where Coders Disagree table on the home page, computed from the AI Incident Database snapshot of 21 September 2026 (the snapshot's sha256 is in the file).

## Page to record

| Page | Records its quotations come from |
|---|---|
| `definitions/aiid.md` | `claims/definitions/aiid2026editors.yaml`, `claims/definitions/cset2023guide.yaml` |
| `definitions/cset.md` | `claims/definitions/cset2023guide.yaml` |
| `definitions/eu-ai-act.md` | `claims/definitions/eu2024aiact.yaml`, `claims/definitions/oecd2024defining.yaml` |
| `definitions/index.mdx` | `claims/definitions/aiid2026editors.yaml`, `claims/definitions/oecd2024defining.yaml` |
| `definitions/oecd.md` | `claims/definitions/oecd2024defining.yaml` |
| `foundations/aviation.mdx` | `claims/definitions/aiid2026editors.yaml`, `claims/definitions/oecd2024defining.yaml`, `claims/foundations/eu2010aviation.yaml`, `claims/foundations/eu2012seveso.yaml`, `claims/foundations/eu2014occurrence.yaml`, `claims/foundations/nasa2001asrs.yaml` |
| `foundations/cybersecurity.mdx` | `claims/definitions/aiid2026editors.yaml`, `claims/definitions/cset2023guide.yaml`, `claims/definitions/oecd2024defining.yaml`, `claims/foundations/aiid2026editors.yaml`, `claims/foundations/cichonski2012computer.yaml`, `claims/foundations/nelson2025incident.yaml`, `claims/foundations/nist2024csf.yaml` |
| `foundations/index.md` | `claims/foundations/whoumc_causality.yaml` |
| `foundations/medical-devices.mdx` | `claims/definitions/aiid2026editors.yaml`, `claims/definitions/eu2024aiact.yaml`, `claims/definitions/oecd2024defining.yaml`, `claims/foundations/eu2017mdr.yaml`, `claims/foundations/fda2024cfr803.yaml`, `claims/foundations/mdcg2023vigilance.yaml` |
| `foundations/nuclear-safety.mdx` | `claims/definitions/eu2024aiact.yaml`, `claims/definitions/oecd2024defining.yaml`, `claims/foundations/cset2023guide.yaml`, `claims/foundations/iaea2008ines.yaml`, `claims/foundations/nrc2024cfr5072.yaml`, `claims/foundations/oecd2025towards.yaml` |
| `foundations/patient-safety.mdx` | `claims/definitions/aiid2026editors.yaml`, `claims/definitions/oecd2024defining.yaml`, `claims/foundations/cset2023guide.yaml`, `claims/foundations/oecd2023stocktaking.yaml`, `claims/foundations/who2009icps.yaml` |
| `foundations/pharmacovigilance.mdx` | `claims/definitions/aiid2026editors.yaml`, `claims/definitions/cset2023guide.yaml`, `claims/definitions/oecd2024defining.yaml`, `claims/foundations/aiid2026editors.yaml`, `claims/foundations/cset2023guide.yaml`, `claims/foundations/ich1994e2a.yaml`, `claims/foundations/whoumc_causality.yaml` |
| `foundations/process-safety.mdx` | `claims/definitions/aiid2026editors.yaml`, `claims/definitions/oecd2024defining.yaml`, `claims/foundations/epa2024cfr68.yaml`, `claims/foundations/eu2012seveso.yaml`, `claims/foundations/osha2024cfr1910119.yaml` |
| `foundations/public-health.mdx` | `claims/definitions/cset2023guide.yaml`, `claims/definitions/eu2024aiact.yaml`, `claims/foundations/aiid2026editors.yaml`, `claims/foundations/cdc1993impact.yaml`, `claims/foundations/cdc1997casedefs.yaml` |
| `framework/index.mdx` | `claims/definitions/aiid2026editors.yaml`, `claims/definitions/cset2023guide.yaml`, `claims/definitions/oecd2024defining.yaml` |
| `index.mdx` | `claims/definitions/oecd2024defining.yaml` |
| `readings/index.md` | `claims/definitions/oecd2024defining.yaml` |
