<script lang="ts">
	import SectionHeader from '../lib/SectionHeader.svelte';
	import PageHeader from '../lib/PageHeader.svelte';

	import thumbnail from '/src/static/thumbnail.jpg';
	import athens from '/src/static/athens.jpg';
	import roma from '/src/static/roma.jpg';
	import medieval from '/src/static/medieval.jpg';
	import byzantine from '/src/static/byzantine.jpg';
	import romanesque from '/src/static/romanesque.jpg';
	import gothic from '/src/static/gothic.jpg';
	import renaissance from '/src/static/renaissance.jpg';
	import baroque from '/src/static/baroque.jpg';
	import rococo from '/src/static/rococo.jpg';
	import neoclassical from '/src/static/neoclassical.jpg';

	import greek_styles from '/src/static/greek-styles.jpg';
	import romanesque_style from '/src/static/romanesque-style.jpg';

	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
	});
</script>

<PageHeader src={thumbnail} />
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Architektura odegrała ważną rolę w kształtowaniu świata, w którym dziś żyjemy. Od starożytnych
	cywilizacji do czasów współczesnych, architektura służyła nie tylko jako środek schronienia, ale
	także jako odzwierciedlenie kultury, społeczeństwa i wartości swoich czasów. Historia architektury
	to fascynująca podróż w czasie, która podkreśla ewolucję projektu budynku i technik budowlanych,
	jak również zmieniające się style artystyczne i wpływy kulturowe, które wpłynęły na tę dziedzinę.<br
	/><br />

	Najwcześniejsze przykłady architektury sięgają starożytnych cywilizacji Mezopotamii, Egiptu
	i Grecji, gdzie architekci i budowniczowie tworzyli monumentalne budowle, takie jak świątynie,
	pałace i grobowce, które do dziś budzą podziw. Stąd style architektoniczne ewoluowały przez wieki,
	od ozdobnych gotyckich katedr w średniowieczu po wielkie barokowe pałace w XVII i XVIII wieku.<br
	/><br />

	Rewolucja przemysłowa przyniosła dramatyczną zmianę w projektowaniu architektonicznym, a nowe
	materiały i techniki budowlane pozwoliły na tworzenie większych i bardziej złożonych konstrukcji.
	W XX wieku nastąpił rozwój modernizmu i odrzucenie tradycyjnej ornamentyki na rzecz czystych linii
	i prostych form.<br /><br />

	Dziś architektura nadal ewoluuje i dostosowuje się do potrzeb i wymagań współczesnego
	społeczeństwa. Historia architektury to bogaty zbiór innowacji, kreatywności i ekspresji
	kulturowej, który wciąż inspiruje i wpływa na architektów i projektantów na całym świecie.
</p>

<SectionHeader id="0" src={athens}>
	<div class="backdrop-brightness-[.65] contrast-200 grayscale text-white w-fit py-5 px-10">
		Starożytna Grecja
	</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Architektura starożytnej Grecji to budownictwo tworzone w okresie od IX w. p.n.e. aż do I w. n.e.
	Jest one głównie nastawione na sprawy związane z kultem. Świątynie powstawały na planie prostokąta
	z dachem wspartym na belkowaniu i podtrzymywanym przez kolumny. Ponadto Grecy są znani z budowy
	teatrów na świeżym powietrzu, które są związane przede wszystkim z obrzędami ku czci Dionizosa.
	Budynki mieszkalne powstawały z mniej trwałych materiałów. Domy dla przeciętnych obywateli były
	zbudowane na planie koła o kamiennej podstawie. Ściany składały się z cegieł wysuszonych na
	słońcu. W centrum domu znajdowało się ognisko, a nam nim otwór w dachy, gdyż greckie domy nie
	posiadały kominów. <br /><br />
	W architekturze greckiej możemy wyróżnić trzy style(uporządkowane chronologicznie): <br /><br />
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
	<img src={greek_styles} alt="three styles of greek architecture" />
</p>

<h2 id="styl-dorycki" class="py-8 px-[20%]">Styl dorycki</h2>
<p class="py-8 px-[20%]">
	Głównymi cechami stylu doryckiego są ciężkie proporcje, surowość oraz monumentalizm. Funkcjonalizm
	dominował nad pięknem. Z tym porządkiem jest związana ściśle zasada tryglifu(element dekoracyjny w
	postaci prostokątnej płyty stosowanej we fryzie belkowania), która mówi, że nad każdą kolumną a
	międzysłupiem(przestrzeń pomiędzy kolumnami) powinien znajdować się tryglif. Ponadto budowle
	posiadały ściśle określone proporcje - kolumna - 12 modułów, kapitel i tryglif - 1 moduł, a metopa
	- 1,6. Przykładami budowli powstałych w tym okresie są świątynia Ateny Nikeforos w Pergamonie oraz
	Ateny Lindia w Lindos na Rodos.
</p>

<h2 id="styl-jonski" class="py-8 px-[20%]">Styl joński</h2>
<p class="py-8 px-[20%]">
	Najbardziej rozpoznawalną cechą stylu jońskiego są woluty(ozdobny ornament w kształcie spirali lub
	zwoju). Ponadto w tym porządku występuje trójczłonowy architraw oraz fryz ciągły(taki, który nie
	jest przerwany tryglifami). Budowle zachowane w tym stylu to świątynia Ateny Apteros (Nike
	Bezskrzydła) i świątynia Posejdona.
</p>

<h2 id="styl-koryncki" class="py-8 px-[20%]">Styl koryncki</h2>
<p class="py-8 px-[20%]">
	Styl koryncki to dalsze rozwinięcie stylu jońskiego. Jest to najbardziej ozdobny ze wszystkich
	stylów. Głowica kolumny w tym porządku ma kształt koszyka uformowanego z rzędów liści akantów
	mocno rozchylonych na zewnątrz.
</p>

<SectionHeader id="1" src={roma}>
	<div class="backdrop-invert-[.75] backdrop-hue-rotate-90 text-white w-fit py-5 px-10">
		Starożytny Rzym
	</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Początek architektury rzymskiej(III w. p.n.e.) jest bardzo skromny. Pierwsze budowle były bardzo
	prymitywne, a do ich budowy posłużyło drewno, a na dach kładziono słomę. Dopiero w 3 w. p.n.e.
	zaczęto wykorzystywać kamień jako budulec. Sytuacja Rzymu zmieniła się po nawiązaniu kontaktów
	handlowych z kulturą grecką. Kultura grecka miała znaczny wpływ na architekturę Rzymską. Styl ten
	istniał do upadku cesarstwa Zachodniorzymskiego w 476 roku.
</p>

<h2 class="py-8 px-[20%]">Osiągnięcia</h2>
<p class="py-8 px-[20%]">
	Rzymianie korzystali z pomysłów Greków, ale posiadają też wiele własnych osiągnięć. To oni
	wymyślili łuki triumfalne, arkady(łuki wsparte na kolumnach oraz spiralne klatki schodowe. Ponadto
	jako pierwsi w świecie zachodnim wykorzystali cegłę i zaprawę cementową. Nie możemy również
	zapomnieć o oryginalnym rzymskim wynalazku jakim jest beton, który jest znacznie mniej podatny na
	niszczenie się niż obecnie stosowany beton. Natomiast wymyślenie kopuły pozwoliło na zbudowanie
	panteonu. Innym równie monumentalnym osiągnięciem Rzymian jest wał Hadriana, który ma 117 km i
	miał za zadanie oddzielać Imperium Rzymskie od Szkotów.
</p>

<h2 class="py-8 px-[20%]">Budowle</h2>
<p class="py-8 px-[20%]">
	Rzymianie kładli duży nacisk na budowle użyteczności publicznej. Pierwsze kryte hale były
	przeznaczone były na zebrania sądowe oraz różnego rodzaju posiedzenia. Ważną rolę odgrywały termy,
	gdzie można było nie tylko zadbać o swoją higienę, ale również nawiązać kontakty towarzyskie.
	Natomiast arystokracja, która dorobiła się na wojnach, mieszkała w willach z ogromnymi ogrodami.
	Amfiteatry również były powszechne w starożytnym Rzymie.
</p>

<SectionHeader id="2" src={medieval}>
	<div class="backdrop-invert-[.75] backdrop-hue-rotate-90 text-white w-fit py-5 px-10">
		Wczesne chrześcijaństwo
	</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Architektura wczesnochrześcijańska pojawiła się w późnym Cesarstwie Rzymskim, w IV wieku n.e., w
	wyniku rozprzestrzeniania się chrześcijaństwa. Jednym z najwcześniejszych przykładów tego stylu
	jest stara Bazylika św. Piotra w Rzymie, zbudowana przez cesarza Konstantyna na początku IV wieku.
	Głównymi cechami tej architektury były prostota, trzeźwość i funkcjonalność. Budowle były
	zazwyczaj bazylikami z prostokątną nawą i nawami bocznymi. Miały drewniane dachy i często były
	zdobione mozaikami i freskami.
	<br /><br />
	Elementy architektoniczne wczesnochrześcijańskich budowli były pod wpływem rzymskich precedensów. Jedną
	z najważniejszych cech tych budynków było zastosowanie łuku, który pozwalał na uzyskanie większych
	przestrzeni wewnętrznych. Łuki były często wykorzystywane do tworzenia arkad, które zapewniały efekt
	dekoracyjny i pomagały wspierać konstrukcję.
	<br /><br />
	Wczesna architektura chrześcijańska wykorzystywała również motyw krzyża jako symbolu chrześcijaństwa.
	Wiele kościołów było budowanych w kształcie krzyża, z centralną nawą i czterema ramionami. Ołtarz znajdował
	się zwykle na przecięciu ramion.
	<br /><br />
	Oprócz kościołów architektura wczesnochrześcijańska obejmowała również inne budynki, takie jak baptysteria,
	mauzolea i bazyliki. Baptysteria były małymi budynkami używanymi do chrztów, podczas gdy mauzolea służyły
	do pochówków. Bazyliki służyły do organizowania publicznych zgromadzeń, takich jak sądy i targi.
</p>

<SectionHeader id="3" src={byzantine}>
	<div class="backdrop-brightness-[.65] contrast-[4] text-white w-fit py-5 px-10">Bizancjum</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Architektura bizantyjska powstała we wschodniej części Imperium Rzymskiego i była pod silnym
	wpływem chrześcijaństwa. Najbardziej znanym przykładem architektury bizantyjskiej jest Hagia
	Sophia, która została zbudowana w Konstantynopolu (obecnie Stambuł) w VI wieku. Kopuła budynku
	była cudem technologicznym w tym czasie i nadal jest uważana za jeden z największych wyczynów
	inżynieryjnych w historii. <br /><br />Architektura bizantyjska charakteryzuje się wykorzystaniem
	misternych mozaik, które pokrywały ściany i sufity kościołów i innych budynków religijnych.
	Mozaiki przedstawiały sceny z Biblii i żywoty świętych, a ich zadaniem było inspirowanie wiernych
	i wzmacnianie nauk kościoła.<br /><br />
	Inną kluczową cechą architektury bizantyjskiej jest użycie kopuł, które często były używane do pokrycia
	centralnej przestrzeni kościoła. Kopuły te były zwykle ozdobione mozaikami i były wspierane przez duże
	łuki i filary. <br /><br />Użycie bogato zdobionego marmuru i kamienia było również znakiem
	rozpoznawczym architektury bizantyjskiej. Ściany wielu kościołów były pokryte marmurowymi płytami,
	a skomplikowane rzeźby i płaskorzeźby zdobiły drzwi i okna. <br /><br />Bizantyjscy architekci
	znani byli również z zastosowania symetrii i proporcji. Budynki często miały kształt krzyża, z
	centralną kopułą i czterema ramionami. Projekt ten miał symbolizować ukrzyżowanie Jezusa i
	podkreślać znaczenie kościoła w życiu wiernych. <br /><br />Architektura bizantyjska była
	odzwierciedleniem głębokich tradycji religijnych i kulturowych Cesarstwa Wschodniorzymskiego. Jej
	misterne mozaiki, strzeliste kopuły i bogato zdobione powierzchnie do dziś wzbudzają zachwyt i
	podziw.
</p>

<SectionHeader id="4" src={romanesque}>
	<div class="backdrop-invert-[.75] backdrop-hue-rotate-90 text-white w-fit py-5 px-10">
		Romanizm
	</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Romanizm to styl, który pojawił się w Europie w X wieku i trwał do połowy XII wieku.
	Charakteryzował się on powrotem do rzymskich form i technik architektonicznych, a także włączeniem
	elementów bizantyjskich i islamskich. Okres ten widział budowę wielu kościołów i klasztorów, które
	zostały zbudowane z silnym naciskiem na stabilność i wytrzymałość. Jedną z najbardziej
	charakterystycznych cech architektury romańskiej było użycie okrągłych łuków, które często były
	ozdobione ornamentami i rzeźbami.
	<br /><br />
	Budynki romańskie miały również zazwyczaj grube ściany, małe okna i beczkowate sufity, co dawało poczucie
	solidności i siły. Ponadto wiele kościołów z tego okresu miało transept, czyli krzyżowy plan podłogi,
	który pozwalał na większy przepływ ludzi podczas ceremonii religijnych. Fasady romańskich budynków
	były często zdobione ozdobnymi kamiennymi rzeźbami, przedstawiającymi sceny z Biblii lub żywoty świętych.
	<br /> <img src={romanesque_style} alt="rekonstrukcja wyglądu romańskiej katedry w Konstancji" />
	<br />
	Innym godnym uwagi aspektem architektury romańskiej było użycie wież, które często były budowane na
	rogach budynków lub jako oddzielne konstrukcje. Wieże te służyły zarówno celom praktycznym, jak i symbolicznym,
	zapewniając punkt obserwacyjny dla obrony budynku, a także symbolizując siłę i władzę kościoła.
	<br /><br />
	Architektura romańska charakteryzowała się przewagą funkcji nad formą, z naciskiem na solidność i trwałość.
	Chociaż styl ten został ostatecznie zastąpiony przez gotyk, wiele przykładów architektury romańskiej
	można nadal znaleźć w całej Europie i są one obchodzone ze względu na ich wyjątkową estetykę i znaczenie
	historyczne.
</p>

<SectionHeader id="5" src={gothic}>
	<div class="backdrop-invert-[.6] backdrop-sepia hue-rotate-180 text-white w-fit py-5 px-10">
		Gotyk
	</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Architektura gotycka pojawiła się w XII wieku i trwała do XVI wieku. Charakteryzuje się
	spiczastymi łukami, żebrowymi sklepieniami i latającymi przyporami. Celem architektury gotyckiej
	było stworzenie wielkich, strzelistych przestrzeni wypełnionych światłem. Łuk spiczasty umożliwiał
	budowniczym wznoszenie wyższych i bardziej skomplikowanych budynków, ponieważ był w stanie
	utrzymać większy ciężar niż łuk okrągły. Z kolei sklepienie żebrowe pozwalało na uzyskanie jeszcze
	większej wysokości i większych okien.
	<br /><br />
	Architektura gotycka charakteryzowała się również wyszukanymi dekoracjami, takimi jak misterne kamienne
	trakcje na oknach i drzwiach oraz ozdobne rzeźby i płaskorzeźby. Dekoracje te często zawierały motywy
	religijne, takie jak święci i anioły. Gotyckie katedry miały wzbudzać respekt i dawać poczucie boskości.
	W związku z tym często zawierały okazałe elementy, takie jak strzeliste wieże, masywne witraże i misterne
	rzeźby.
	<br /><br />
	Jednym z najbardziej znanych przykładów architektury gotyckiej jest Katedra Notre Dame w Paryżu. Jej
	budowę rozpoczęto w 1163 roku, a zakończono w 1345 roku. Strzelista nawa katedry i witraże są świadectwem
	wielkości i piękna architektury gotyckiej. Innym godnym uwagi przykładem jest Katedra w Canterbury
	w Anglii, która została zbudowana w XI wieku i przeszła znaczną rozbudowę i renowację w stylu gotyckim
	w XII i XIII wieku. Jej wspaniałe krużganki i sklepienia wachlarzowe są znanymi przykładami gotyckiego
	wzornictwa.
</p>

<SectionHeader id="6" src={renaissance}>
	<div
		class="backdrop-brightness-90 backdrop-contrast-150 backdrop-hue-rotate-180 text-white w-fit py-5 px-10"
	>
		Renesans
	</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Za twórcę, który zapoczątkował architekturę renesansu uważa się Filippo Brunelleschiego. Zasłynął
	on z pomysłu na kopułę florenckiej katedry Santa Maria del Fiore. Jej budowę rozpoczęto w 1418
	roku i trwała 18 lat. Cechą szczególną tego sklepienia jest to, że powstał on na planie ośmiokąta
	oraz posiada ostrołukowy profil. Architektura renesansu nawiązuje do antyku. Dąży do nadania swym
	dziełom doskonałych proporcji, harmonii i symetrii. Ceni sobie prostotę, a w ozdobach wykorzystuje
	motywy geometryczne i roślinne. W tej epoce powstało wiele rezydencji podmiejskich i pałaców
	pozbawionych już charakteru obronnego. Posiadały one dziedziniec otoczony krużgankami, który
	stanowił centrum życia pałacu. Umieszczano dużo okien, co miało lepiej doświetlić pomieszczenia.
	Ponadto typowe w tym okresie były harmonijne i regularne fasady z nadwieszonym gzymsem oraz arkady
	z kolumnami. Koniec tego stylu przypada na połowę XVII wieku.
</p>

<SectionHeader id="7" src={baroque}>
	<div class="backdrop-invert-[.75] backdrop-hue-rotate-90 text-white w-fit py-5 px-10">Barok</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Barok był nie tyle zespołem charakterystycznych wyznaczników sztuki, co raczej zmysłem
	estetycznym, stylem życia. Powodem tego było występowanie wariabilizmu, czyli tendencja, aby każda
	budowla była oryginalna. Jego okres największej popularności datuje się od końca XVI wieku do
	XVIII wieku. To co najbardziej wyróżnia tą epokę to skłonność do przesady. Fasady budynków
	zawierały kolorowe freski oraz znaczną ilość ozdób. Ponadto w budynkach sakralnych stosowano wiele
	złoceń. Częstym materiałem wykorzystywanym do ozdób był stiuk, który miał za zadanie imitować
	marmur. W rzeczywistości była to substancja powstałej w wyniku zmieszania gipsu, wapienia
	i drobnego piasku lub pyłu marmurowego. Architekci w swoich dziełach chcieli zawrzeć iluzje ruchu
	wrażaną poprzez faliste powierzchnie, krzywizny i inne nieregularne linie. Stosowano również
	zaskakujące efekty poprzez koncentrowanie światła na określonym fragmencie budowli lub kontrasty
	pomiędzy elementami wypukłymi i wklęsłymi. Barok był bez wątpienia epoką wielkiej ekspresji w
	dekoracjach architektonicznych. Za pierwowzór barokowej świątyni uważa się kościół Il Gesù w
	Rzymie projektu Giacomo della Portę oraz Jacopa Barozziego da Vignoli.
</p>

<SectionHeader id="8" src={rococo}>
	<div class="backdrop-invert-[.75] backdrop-hue-rotate-90 text-white w-fit py-5 px-10">Rokoko</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Styl ten występował w XVIII wieku. Początkowo styl rokokowy ograniczał się do wystroju wnętrz.
	Dopiero później zaczęły powstawać budowle utrzymane w całości w stylu rokokowym. Cechują się one
	kameralnością i delikatnością i asymetria. Skala budynków uległa pomniejszeniu. Kolorystyka wnętrz
	była jasna, pastelowa. Stosowano lustra, sztukaterie oraz ornamenty o motywach przypominających
	muszle, płomienie oraz grzebienie. Ściany zwieńczone były linią falistą lub łukiem odcinkowym
	pola. Architektem dojrzałego rokoka jest Germain Boffrand, który brał udział w budowie fasad placu
	Vendôme w Paryżu.
</p>

<SectionHeader id="9" src={neoclassical}>
	<div class="backdrop-invert-[.75] backdrop-hue-rotate-90 text-white w-fit py-5 px-10">
		Klasycyzm
	</div>
</SectionHeader>
<p class="py-8 px-[20%] first-letter:text-7xl first-letter:tracking-widest">
	Architektura klasycystyczna podobnie jak renesansowa nawiązuje do wzorów greckich lub rzymskich.
	Występowała ona od końca XVII wieku do początku XIX wieku. Charakterystycznym elementem budowli
	tego okresu jest portyk czyli otwarty ganek kolumnowy poprzedzający wejście. Budynki wyróżniały
	się monumentalnym stylem z oszczędną ilością dekoracji. Jako ozdoby wykorzystywano girlandy, wazy,
	rozety lub liście kantu. Stawiano je najczęściej na planie koła lub prostokąta i dbano, by były
	zwarte i symetryczne. Wnętrza były dobrze oświetlone, a sufity pokryte polichromią lub kasetonami.
	W stylu klasycystycznym budowano liczne obiekty użyteczności publicznej. Pałace były niskie, z
	wyraźnie zaakcentowaną osią symetrii. Jednym z najwybitniejszych architektów tego okresu był Jean
	François Chalgrin, który może być znany z Łuku Triumfalnego.
</p>

<div class="h-1 w-full mt-72 rounded-[100%] bg-black" />

<div class="h-screen flex flex-col justify-end pb-10 px-[20%]">
	<h3>
		<div class="leading-[5rem]">
			<h2 class="w-fit bg-black text-white after:content-none">Wykonanie:</h2>
			Szymon M., Robert P.<br />
			<h2 class="w-fit bg-black text-white after:content-none">Kod źródłowy strony:</h2>
			<a href="https://github.com/Robertx999/architecture-history-presentation">Github.com</a><br />
			<h2 class="w-fit bg-black text-white after:content-none">Źródła:</h2>
		</div>
		<div>
			<a href="https://unsplash.com/">unsplash.com</a>;
			<a href="https://www.wikipedia.org/">wikipedia.org</a>;
			<a href="https://szkolnictwo.pl/szukaj,Porz%C4%85dek_dorycki">szkolnictwo.pl</a>;
			<a href="https://www.na6.pl/historia/architektura_starozytnej_grecji">na6.pl(grecja)</a>;
			<a href="https://www.na6.pl/historia/architektura_starozytnego_rzymu">na6.pl(rzym)</a>;
			<a
				href="https://archirama.muratorplus.pl/encyklopedia-architektury/architektura-rzymu-starozytnego,62_4150.html?cat=62"
				>archirama.muratorplus.pl</a
			>;
			<a href="https://eszkola.pl/jezyk-polski/architektura-19.html">eszkola.pl</a>;
			<a href="https://klp.pl/barok/a-7569-3.html">klp.pl</a>;
			<p class="whitespace-nowrap">
				<a href="https://commons.wikimedia.org/wiki/File:Dehio_I_56_Konstanz_Section.jpg"
					>Georg Dehio/Gustav von Bezold</a
				>, Public domain, via Wikimedia Commons
			</p>
		</div>
	</h3>
</div>
<footer class="py-8 px-[20%]">&copy; Copyright 2023 Robert P. Szymon M.</footer>
