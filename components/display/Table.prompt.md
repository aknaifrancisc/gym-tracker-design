Data table; numeric columns get mono + tabular nums. compact for logs.
```jsx
<Table compact columns={[{key:'date',label:'Date'},{key:'kg',label:'Weight',align:'right',numeric:true}]} rows={data} />
```