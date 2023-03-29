<script lang="ts">
	import SectionHeader from '../lib/SectionHeader.svelte';
	import PageHeader from '../lib/PageHeader.svelte';
	import athens from '/src/static/athens.jpg';
	let els = ['1', '2', '3'];
</script>

<PageHeader src="/src/static/thumbnail.jpg" />
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Architektura odegrała ważną rolę w kształtowaniu świata, w którym dziś żyjemy. Od starożytnych
	cywilizacji do czasów współczesnych, architektura służyła nie tylko jako środek schronienia, ale
	także jako odzwierciedlenie kultury, społeczeństwa i wartości swoich czasów. Historia architektury
	to fascynująca podróż w czasie, która podkreśla ewolucję projektu budynku i technik budowlanych,
	jak również zmieniające się style artystyczne i wpływy kulturowe, które wpłynęły na tę dziedzinę.<br
	/><br />

	Najwcześniejsze przykłady architektury sięgają starożytnych cywilizacji Mezopotamii, Egiptu i
	Grecji, gdzie architekci i budowniczowie tworzyli monumentalne budowle, takie jak świątynie,
	pałace i grobowce, które do dziś budzą podziw. Stąd style architektoniczne ewoluowały przez wieki,
	od ozdobnych gotyckich katedr w średniowieczu po wielkie barokowe pałace w XVII i XVIII wieku.<br
	/><br />

	Rewolucja przemysłowa przyniosła dramatyczną zmianę w projektowaniu architektonicznym, a nowe
	materiały i techniki budowlane pozwoliły na tworzenie większych i bardziej złożonych konstrukcji.
	W XX wieku nastąpił rozwój modernizmu i odrzucenie tradycyjnej ornamentyki na rzecz czystych linii
	i prostych form.<br /><br />

	Dziś architektura nadal ewoluuje i dostosowuje się do potrzeb i wymagań współczesnego
	społeczeństwa. Historia architektury to bogaty zbiór innowacji, kreatywności i ekspresji
	kulturowej, który wciąż inspiruje i wpływa na architektów i projektantów na całym świecie.
</p>

<SectionHeader src={athens}
	><div class="backdrop-brightness-[.65] contrast-200 grayscale text-white w-fit py-5 px-10">
		Starożytna Grecja
	</div></SectionHeader
>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Architektura starożytnej Grecji to budownictwo tworzone w okresie od IX w. p. n. e. aż do I w. n.
	e. Jest one głównie nastawione na sprawy związane z kultem. Świątynie powstawały na planie
	prostokąta z dachem wspartym na belkowaniu i podtrzymywanym przez kolumny. Ponadto Grecy są znani
	z budowy teatrów na świeżym powietrzu, które są związane przede wszystkim z obrzędami ku czci
	Dionizosa. Budynki mieszkalne powstawały z mniej trwałych materiałów. Domy dla przeciętnych
	obywateli były zbudowane na planie koła o kamiennej podstawie. Ściany składały się z cegieł
	wysuszonych na słońcu. W centrum domu znajdowało się ognisko, a nam nim otwór w dachy, gdyż
	greckie domy nie posiadały kominów. <br /><br /> W architekturze greckiej możemy wyróżnić trzy
	style(uporządkowane chronologicznie): <br /><br />
	<a href="#styl-dorycki" class="ml-10 flex items-center">
		1. Dorycki - VII w. p.n.e. &thinsp;
		<span class="h-min material-symbols-outlined">link</span>
	</a>
	<a href="#styl-jonski" class="ml-10 flex items-center">
		2. Joński - VI w. p.n.e. &thinsp;
		<span class="h-min material-symbols-outlined">link</span>
	</a>
	<a href="#styl-koryncki" class="ml-10 flex items-center">
		3. Koryncki - V - VI w. p.n.e. &thinsp;
		<span class="h-min material-symbols-outlined">link</span>
	</a>
</p>

<h2 id="styl-dorycki" class="py-8 px-[20%]">Styl dorycki</h2>
<p class="py-8 px-[20%]">
	Głównymi cechami stylu doryckiego są ciężkie proporcje, surowość oraz monumentalizm. Funkcjonalizm
	dominował nad pięknem. Z tym porządkiem jest związana ściśle zasada tryglifu(element dekoracyjny w
	postaci prostokątnej płyty stosowanej we fryzie belkowania), która mówi, że nad każdą kolumną a
	międzysłupiem(przestrzeń pomiędzy kolumnami) powinien znajdować się tryglif. Ponadto budowle
	posiadały ściśle określone proporcje - kolumna - 12 modułów, kapitel i tryglif - 1 moduł, a metopa
	- 1,6. Przykładami budowli powstałych w tym okresie są świątynia Ateny Nikeforos w Pergamonie oraz
	Ateny Lindia w Lindos na Rodos.
</p>

<h2 id="styl-jonski" class="py-8 px-[20%]">Styl joński</h2>
<p class="py-8 px-[20%]">
	Najbardziej rozpoznawalną cechą stylu jońskiego są woluty(ozdobny ornament w kształcie spirali lub
	zwoju). Ponadto w tym porządku występuje trójczłonowy architraw oraz fryz ciągły(taki, który nie
	jest przerwany tryglifami). Budowle zachowane w tym stylu to świątynia Ateny Apteros (Nike
	Bezskrzydła) i świątynia Posejdona.
</p>

<h2 id="styl-koryncki" class="py-8 px-[20%]">Styl koryncki</h2>
<p class="py-8 px-[20%]">
	Styl koryncki to dalsze rozwinięcie stylu jońskiego. Jest to najbardziej ozdobny ze wszystkich
	stylów. Głowica kolumny w tym porządku ma kształt koszyka uformowanego z rzędów liści akantów
	mocno rozchylonych na zewnątrz.
</p>

<SectionHeader src={'/src/static/roma.jpg'}
	><div class="backdrop-invert-[.75] backdrop-hue-rotate-90 text-white w-fit py-5 px-10">
		Starożytny Rzym
	</div></SectionHeader
>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Początek architektury rzymskiej(III w. p.n.e.) jest bardzo skromny. Pierwsze budowle były bardzo
	prymitywne, a do ich budowy posłużyło drewno, a na dach kładziono słomę. Dopiero w 3 w. p.n.e.
	zaczęto wykorzystywać kamień jako budulec. Sytuacja Rzymu zmieniła się po nawiązaniu kontaktów
	handlowych z kulturą grecką. Kultura grecka miała znaczny wpływ na architekturę Rzymską. Styl ten
	istniał do upadku cesarstwa Zachodniorzymskiego w 476 roku.
</p>
