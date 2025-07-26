export interface AgentItem {
    id: string;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface AgentCategory {
    title: string;
    data: AgentItem[];
  }
  
  export interface AgentFilterOption {
    id: string;
    label: string;
  }