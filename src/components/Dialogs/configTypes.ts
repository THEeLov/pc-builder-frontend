export const gpuPowerConnectors = [
    { value: "6pin", label: "6-Pin" },
    { value: "8pin", label: "8-Pin" },
    { value: "6pin_8pin", label: "6-Pin + 8-Pin" },
    { value: "dual_8pin", label: "Dual 8-Pin" },
    { value: "8pin_6pin", label: "8-Pin + 6-Pin" },
    { value: "triple_8pin", label: "Triple 8-Pin" },
]

export const gpuInterfaces = [
    { value: "pcie", label: "PCI Express (PCIe)" },
    { value: "agp", label: "AGP" },
    { value: "pci", label: "PCI" },
    { value: "mxm", label: "MXM" },
    { value: "sli", label: "SLI" },
    { value: "crossfire", label: "CrossFire" },
]

export const sockets = [
    { value: "lga1200", label: "LGA 1200" },
    { value: "am4", label: "AM4" },
    { value: "lga1700", label: "LGA 1700" },
    { value: "tr4", label: "TR4" },
    { value: "sTRX4", label: "sTRX4" },
    { value: "lga1151", label: "LGA 1151" },
]

export const formFactors = [
    { value: "atx", label: "ATX" },
    { value: "microATX", label: "Micro ATX" },
    { value: "miniITX", label: "Mini ITX" },
    { value: "eATX", label: "E-ATX" },
    { value: "xlATX", label: "XL-ATX" },
]

export const ramTypes = [
    { value: "ddr3", label: "DDR3" },
    { value: "ddr4", label: "DDR4" },
    { value: "ddr5", label: "DDR5" },
    { value: "lpddr4", label: "LPDDR4" },
    { value: "lpddr5", label: "LPDDR5" },
]

export const storageBusTypes = [
    { value: "sata", label: "SATA" },
    { value: "nvme", label: "NVMe" },
    { value: "sas", label: "SAS" },
    { value: "pata", label: "PATA" },
]

export const powerSupplyEfficiencies = [
    { value: "80plus", label: "80 PLUS" },
    { value: "80plus_bronze", label: "80 PLUS Bronze" },
    { value: "80plus_silver", label: "80 PLUS Silver" },
    { value: "80plus_gold", label: "80 PLUS Gold" },
    { value: "80plus_platinum", label: "80 PLUS Platinum" },
    { value: "80plus_titanium", label: "80 PLUS Titanium" },
]

export const processorArchitectures = [
    { value: "x86", label: "x86" },
    { value: "x86_64", label: "x86_64" },
    { value: "arm", label: "ARM" },
    { value: "arm64", label: "ARM64" },
    { value: "riscv", label: "RISC-V" },
    { value: "powerpc", label: "PowerPC" },
]

export const storageTypes = [
    { value: "hdd", label: "HDD" },
    { value: "ssd", label: "SSD" },
    { value: "nvme", label: "NVMe" },
    { value: "hybrid", label: "Hybrid" },
]

export const computerTypes = [
    { value: "DESKTOP", label: "DESKTOP" },
    { value: "LAPTOP", label: "LAPTOP" },
]
