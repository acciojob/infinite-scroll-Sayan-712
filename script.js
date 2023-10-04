//your code here!
document.addEventListener("DOMContentLoaded",function() {
	const infiList=document.getElementById("infi-List");
	function addListItem() {
		const ListItem=document.createElement("li");
		listItem.textContent="List item";
		infiList.appendChild(listItem);
	}
for(let i=1;i<=10;i++)
	{
		addListItem();
	}
function handleScroll() {
	const{scrollTop,scrollHeight,clientHeight}=infiList;
	if(scrollTop+clientHeight>=scrollHeight)
	{
		for(let i=0;i<2;i++)
			{
				addListItem();
			}
	}
}
	infiList.addEventListener("scroll",handleScroll);
});

