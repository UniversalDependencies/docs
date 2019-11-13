---
layout: base
title:  'UD_Slovenian-SSJ'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Slovenian SSJ

Language: [Slovenian](/sl/index.html) (code: `sl`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v1.2 release.

The following people have contributed to making this treebank part of UD: Kaja Dobrovoljc, Tomaž Erjavec, Simon Krek.

Repository: [UD_Slovenian-SSJ](https://github.com/UniversalDependencies/UD_Slovenian-SSJ)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsl_ssj25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-NC-SA 4.0

Genre: news, nonfiction, fiction

Questions, comments?
General annotation questions (either Slovenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Slovenian-SSJ/issues).
If you want to collaborate, please contact [kaja&nbsp;•&nbsp;dobrovoljc&nbsp;(æt)&nbsp;ijs&nbsp;•&nbsp;si; tomaz&nbsp;•&nbsp;erjavec&nbsp;(æt)&nbsp;ijs&nbsp;•&nbsp;si; simon&nbsp;•&nbsp;krek&nbsp;(æt)&nbsp;ijs&nbsp;•&nbsp;si].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The Slovenian UD Treebank is a rule-based conversion of the ssj500k
treebank, the largest collection of manually syntactically annotated
data in Slovenian, originally annotated in the JOS annotation scheme.




The Slovenian SSJ UD Treebank (Dobrovoljc et al. 2017) is based on the ssj500k treebank
(Krek et al. 2019), a balanced collection of sampled texts from the FidaPLUS reference
corpus of written Slovene (Arhar and Gorjanc 2007). The original ssj500k corpus has
been manually segmented, tokenized, lemmatized and morphosyntactically tagged within
JOS project, in which the annotation guidelines have also been developed (Erjavec et
al. 2010). Additionally, approximately one half of the ssj500k treebank has been
manually annotated for dependency relations, according to the JOS syntactic annotation
scheme. The syntactically annotated part of the ssj500k corpus (known as ssj200k),
consisting of 11,411 annotated sentences and 235,864 tokens, has been used as the
basis for conversion to the Slovenian UD Treebank.

The conversion from ssj200k to the Slovenian SSJ UD Treebank was
automatic (except for "biti"), based on a set of rules for both
morphosyntactic and syntactic layer, which include different lexical,
morphological and dependency features. The rules and conversion
scripts are available at https://github.com/clarinsi/jos2ud

Due to the specifics of the original JOS syntactic annotation scheme,
not all dependency relations from the original ssj200k treebank could
be converted automatically, resulting in a smaller UD treebank
size. The current version of the Slovenian UD Treebank thus contains
8,000 sentences with 140,670 tokens taken from various text types,
e.g. fiction, non-fiction and periodicals, dating from 1990-2000. The
original JOS annotations are included as part of the POSTAG (JOS
morphosyntactic tags) and MISC (JOS dependency heads and labels)
columns in the CONLLU format.

The corpus is linearly split into training (80%), development (10%) and test
(10%) data.


## Acknowledgments

We wish to thank all of the contributors to the original ssj500k
training corpus: Kristina Bizjak, Živa Blaževič, Klara Canzutti, Lea
Cibrič, Kaja Dobrovoljc, Tadeja Dušej, Tomaž Erjavec, Ivana Fekeža,
Nanika Holz, Urška Kamenšek, Simon Krek, Andreja Košir, Robert Kuret,
Nina Ledinek, Andrej Lovšin, Boštjan Marhold, Nina Mikulin, Barbara
Modrijan, Sara Može, Tanja Novak, Lea Peršič, Tanja Radovič, Simona
Šinkovec, Urška Vranjek, Jerneja Umer, Petra Žalodec.



# Statistics of UD Slovenian SSJ

## POS Tags

[ADJ](sl_ssj-pos-ADJ.html) – [ADP](sl_ssj-pos-ADP.html) – [ADV](sl_ssj-pos-ADV.html) – [AUX](sl_ssj-pos-AUX.html) – [CCONJ](sl_ssj-pos-CCONJ.html) – [DET](sl_ssj-pos-DET.html) – [INTJ](sl_ssj-pos-INTJ.html) – [NOUN](sl_ssj-pos-NOUN.html) – [NUM](sl_ssj-pos-NUM.html) – [PART](sl_ssj-pos-PART.html) – [PRON](sl_ssj-pos-PRON.html) – [PROPN](sl_ssj-pos-PROPN.html) – [PUNCT](sl_ssj-pos-PUNCT.html) – [SCONJ](sl_ssj-pos-SCONJ.html) – [VERB](sl_ssj-pos-VERB.html) – [X](sl_ssj-pos-X.html)

## Features

[Abbr](sl_ssj-feat-Abbr.html) – [Animacy](sl_ssj-feat-Animacy.html) – [Aspect](sl_ssj-feat-Aspect.html) – [Case](sl_ssj-feat-Case.html) – [Definite](sl_ssj-feat-Definite.html) – [Degree](sl_ssj-feat-Degree.html) – [Foreign](sl_ssj-feat-Foreign.html) – [Gender](sl_ssj-feat-Gender.html) – [Gender[psor]](sl_ssj-feat-Gender-psor.html) – [Mood](sl_ssj-feat-Mood.html) – [Number](sl_ssj-feat-Number.html) – [Number[psor]](sl_ssj-feat-Number-psor.html) – [NumForm](sl_ssj-feat-NumForm.html) – [NumType](sl_ssj-feat-NumType.html) – [Person](sl_ssj-feat-Person.html) – [Polarity](sl_ssj-feat-Polarity.html) – [Poss](sl_ssj-feat-Poss.html) – [PronType](sl_ssj-feat-PronType.html) – [Reflex](sl_ssj-feat-Reflex.html) – [Tense](sl_ssj-feat-Tense.html) – [Variant](sl_ssj-feat-Variant.html) – [VerbForm](sl_ssj-feat-VerbForm.html)

## Relations

[acl](sl_ssj-dep-acl.html) – [advcl](sl_ssj-dep-advcl.html) – [advmod](sl_ssj-dep-advmod.html) – [amod](sl_ssj-dep-amod.html) – [appos](sl_ssj-dep-appos.html) – [aux](sl_ssj-dep-aux.html) – [case](sl_ssj-dep-case.html) – [cc](sl_ssj-dep-cc.html) – [cc:preconj](sl_ssj-dep-cc-preconj.html) – [ccomp](sl_ssj-dep-ccomp.html) – [conj](sl_ssj-dep-conj.html) – [cop](sl_ssj-dep-cop.html) – [csubj](sl_ssj-dep-csubj.html) – [dep](sl_ssj-dep-dep.html) – [det](sl_ssj-dep-det.html) – [discourse](sl_ssj-dep-discourse.html) – [expl](sl_ssj-dep-expl.html) – [fixed](sl_ssj-dep-fixed.html) – [flat](sl_ssj-dep-flat.html) – [flat:foreign](sl_ssj-dep-flat-foreign.html) – [flat:name](sl_ssj-dep-flat-name.html) – [iobj](sl_ssj-dep-iobj.html) – [mark](sl_ssj-dep-mark.html) – [nmod](sl_ssj-dep-nmod.html) – [nsubj](sl_ssj-dep-nsubj.html) – [nummod](sl_ssj-dep-nummod.html) – [obj](sl_ssj-dep-obj.html) – [obl](sl_ssj-dep-obl.html) – [parataxis](sl_ssj-dep-parataxis.html) – [punct](sl_ssj-dep-punct.html) – [root](sl_ssj-dep-root.html) – [vocative](sl_ssj-dep-vocative.html) – [xcomp](sl_ssj-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 8000 sentences and 140670 tokens.</li>
</ul>

<ul>
<li>This corpus contains 25466 tokens (18%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 57 types of words that contain both letters and punctuation. Examples: dr., oz., i., t., d., sv., P., M., j., o., R., K., A., B., H., V., š., II., L., npr., F., G., O'Neal, S., TAM-u, Z., mag., n., prof., salomon.si, 200-tem, AMD-jevimi, BTC-ju, BUS-a, C., E., IV., IX., Konoplja.org, Mt., O'Briana, ROM-u, SFOR-ju, SVIZ-ove, XI., XIV., angl., http://dnka.com/, itd., ml.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 51 word types tagged as particles (PART): Ja, Kajpada, Ma, bojda, bržkone, bržčas, celo, da, domala, edino, kajne, kajpak, koli, kvečjemu, le, menda, morda, morebiti, naj, najbrž, ne, nej, nemara, nikar, niti, no, pač, prav, pravzaprav, predvsem, ravno, sam, samo, samó, seveda, sicer, skoraj, skorajda, sploh, tud, tudi, več, vsaj, vsej, vsekakor, zgolj, zlasti, češ, še, šele, že</li>
</ul>

<ul>
<li>This corpus contains 31 lemmas tagged as pronouns (PRON): jaz, jest, kaj, kar, karkoli, kdo, kdor, kdorkoli, malokdo, marsikaj, marsikdo, nadme, name, nase, nekaj, nekdo, nihče, nič, nobeden, obme, on, pome, se, skozme, teu, ti, vame, vase, vsakdo, zame, zase</li>
</ul>

<ul>
<li>This corpus contains 66 lemmas tagged as determiners (DET): dosti, dovolj, enak, isti, kak, kakršen, kakršenkoli, kakšen, kateri, katerikoli, koliko, kolikšen, malo, malokateri, manj, marsikateri, mnog, mnogo, moj, najin, največ, naš, nek, nekaj, nekak, nekakšen, nekateri, neki, nešteto, nikakršen, njegov, njen, njihov, njun, noben, oba, obilo, oboj, ogromno, oni, par, pol, premnog, prenekateri, preveč, svoj, ta, tak, takšen, tale, tisti, tolik, toliko, tolikšen, tvoj, vajin, vaš, veliko, ves, več, vsak, vsakršen, četrt, čigar, čigav, čimveč</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: nekaj</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): biti</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: biti</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>ADV: rekoč, sodeč, Molče, hote, nehote, neupoštevaje, nevede, sklicujoč, stoje, upoštevaje</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: je, so, bi, bo, ni, sem, bodo, sta, smo, niso</li>
    <li>VERB: je, ima, ni, gre, so, bo, imajo, mora, pomeni, zdi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: biti</li>
    <li>VERB: videti, slišati, biti, pomagati, razumeti, imeti, reči, narediti, vedeti, dobiti</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: znani, prepričan, znano, določene, pripravljeni, zaposlenih, prepričani, zaposleni, pripravljen, sprejet</li>
    <li>AUX: bil, bila, bilo, bili, bile</li>
    <li>VERB: bilo, bila, imel, moral, povedal, imela, imeli, morali, bil, morala</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>VERB: delat, organizirat, spat, gledat, iskat, krpat, mižat, odpotovat, osvobodit, pogledat</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: druge, drugi, nove, novo, prva, sama, velika, veliko, druga, drugo</li>
      <li>ADJ-Part: določene, namenjena, povezane, prepričana, pripravljena, ustanovljena, znana, določeno, imenovana, končani</li>
      <li>AUX-Part: bila, bile, bili</li>
      <li>DET: svojo, te, svoje, ta, to, vse, svoji, tej, vseh, njegove</li>
      <li>NOUN: strani, države, pomoč, oči, možnosti, poti, pot, stvari, skupine, vode</li>
      <li>NUM: ena, eno, tri, dve, štiri, eni, dveh, ene, dvema, treh</li>
      <li>PRON: jo, jih, ji, njej, njo, ona, je, nje, jim, nanjo</li>
      <li>PROPN: Slovenije, Sloveniji, Slovenija, EU, Ljubljani, ZDA, Evropi, Slovenijo, LJUBLJANA, Ljubljana</li>
      <li>VERB-Part: bila, imela, morala, začela, prišla, rekla, pokazala, vedela, dobila, sprejela</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: sam, prvi, drugi, slovenski, drugih, pravi, sami, novi, velik, državni</li>
      <li>ADJ-Part: prepričan, znani, pripravljeni, zaposlenih, prepričani, zaposleni, pripravljen, sprejet, minuli, povezani</li>
      <li>AUX-Part: bil, bili, bila</li>
      <li>DET: ta, tem, vsi, vsak, svoj, katerem, vse, njegov, tega, ves</li>
      <li>NOUN: dan, čas, ljudi, del, tolarjev, dni, način, času, časa, otrok</li>
      <li>NUM: dva, eden, en, dveh, enega, enem, tri, trije, štirih, štiri</li>
      <li>PRON: ga, jih, mu, kdo, jim, njim, njih, njem, nihče, njimi</li>
      <li>PROPN: Mariboru, Slovenci, Maribor, Jože, Drnovšek, Gregor, Janez, Milan, New, Slovencev</li>
      <li>VERB-Part: imel, moral, povedal, imeli, bil, morali, dejal, začeli, postal, rekel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: mogoče, pomembno, jasno, potrebno, težko, novo, drugim, novega, prihodnje, drugo</li>
      <li>ADJ-Part: znano, povezano, določeno, minulega, odprto, opravljeno, prepovedano, preteklih, skrita, skrito</li>
      <li>AUX-Part: bilo, bila</li>
      <li>DET: to, tem, tega, vse, svoje, temu, njegovo, tisto, katerem, vsega</li>
      <li>NOUN: leta, let, leto, letih, življenje, dela, delo, mesto, mestu, vprašanje</li>
      <li>NUM: eno, štirih, dve, treh, tri, štiri, dveh, tremi, dvema, dvoje</li>
      <li>PRON: kaj, kar, nekaj, nič, ga, jih, čemer, česar, česa, čimer</li>
      <li>PROPN: Celje, Kosova, Kosovu, Koroškem, Slovenskem, Dolenjskem, Gorenjskem, Hrvaškem, Celju, Japonskem</li>
      <li>VERB-Part: bilo, zgodilo, uspelo, prišlo, zdelo, šlo, začelo, ostalo, pomenilo, dalo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>NOUN: otroka, predsednika, človeka, duha, moža, prijatelja, boga, bolnika, nasprotnika, sina</li>
      <li>PROPN: Andreja, Billyja, Henrika, Boja, Damijana, Filipa, Francija, Hočevarja, Janeza, Johna</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>NOUN: dan, čas, način, primer, denar, del, sistem, svet, teden, konec</li>
      <li>PROPN: Dunaj, Irak, Nato, Windows, Bruselj, JBX, Jeruzalem, Virtual, ATI, Afganistan</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: desnima, drugačna, najboljša, nemških, obsojena, predstavljena, slovenska, soodvisni, srečna, trebušni</li>
      <li>ADJ-Part: obsojena, predstavljena, Preostalih, identificirana, izoblikovana, ljubečih, mišljena, nagrajena, nameščeni, obrnjeni</li>
      <li>AUX-Fin: sta, sva, bosta, nista, nisva, bova</li>
      <li>AUX-Part: bila, bili</li>
      <li>DET: oba, obeh, obe, obema, svoja, njuni, ta, KATERIH, Moja, Njegova</li>
      <li>NOUN: letoma, leti, strani, meseca, otroka, primerih, starša, letih, partnerja, policista</li>
      <li>NUM: dva, dveh, dve, dvema</li>
      <li>PRON: ju, nama, jima, njima, naju, njiju, midva, vaju, zanju, onadva</li>
      <li>PROPN: Belokranjca, Egipčana, Francoza, Litijana</li>
      <li>VERB-Fin: imata, sta, omogočata, prideta, hočeta, imava, menita, morata, obtožujeta, postaneta</li>
      <li>VERB-Part: imela, morala, bila, odšla, hotela, srečala, začela, nastopila, pogovarjala, povedala</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: druge, drugih, različnih, nove, zadnjih, novih, slovenskih, sami, drugi, drugimi</li>
      <li>ADJ-Part: določene, zaposlenih, prepričani, pripravljeni, zaposleni, določenih, povezani, znani, navdušeni, povezane</li>
      <li>AUX-Fin: so, bodo, smo, niso, bomo, boste, ste, nismo, niste, bodite</li>
      <li>AUX-Part: bili, bile, bila</li>
      <li>DET: vse, vseh, vsi, te, teh, katerih, svoje, svojih, nekatere, ti</li>
      <li>NOUN: let, letih, ljudi, tolarjev, dni, milijonov, oči, odstotkov, podatkov, leti</li>
      <li>NUM: tri, tisoč, štiri, štirih, pet, sto, deset, treh, šest, sedem</li>
      <li>PRON: jih, nas, nam, vam, jim, vas, njih, njimi, vi, nami</li>
      <li>PROPN: ZDA, Slovenci, Slovencev, Francozi, Nemcev, Nemci, Slovence, Američani, Atenah, Brežice</li>
      <li>VERB-Fin: so, imajo, moramo, morajo, imamo, moremo, smemo, imate, nimajo, želijo</li>
      <li>VERB-Part: imeli, morali, začeli, dobili, odločili, predstavili, bili, pripravili, prišli, postali</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: mogoče, prvi, sam, drugi, novo, veliko, drugo, novega, pomembno, drugega</li>
      <li>ADJ-Part: prepričan, znano, pripravljen, sprejet, določeno, povezano, minuli, izbrani, namenjena, prepričana</li>
      <li>AUX-Fin: je, bo, ni, sem, nisem, bom, si, nisi, Bodi, as</li>
      <li>AUX-Part: bil, bila, bilo</li>
      <li>DET: to, tem, ta, tega, vse, svojo, svoje, katerem, vsak, svoj</li>
      <li>NOUN: leta, dan, leto, čas, življenje, strani, del, delu, način, dela</li>
      <li>NUM: eno, eden, ena, en, enega, enem, eni, ene, enim, dvoje</li>
      <li>PRON: ga, jo, mu, kaj, mi, kar, ji, me, kdo, nekaj</li>
      <li>PROPN: Slovenije, Sloveniji, Slovenija, EU, Ljubljani, Evropi, Mariboru, Slovenijo, LJUBLJANA, Ljubljana</li>
      <li>VERB-Fin: je, ima, ni, gre, bo, mora, pomeni, zdi, pravi, more</li>
      <li>VERB-Part: bilo, bila, imel, moral, povedal, bil, dejal, zgodilo, imela, morala</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: druge, novo, nove, veliko, drugo, prihodnje, prvo, dobro, prvi, različne</li>
      <li>ADJ-Part: določene, minuli, določeno, odrasle, ostale, pripravljene, dodano, imenovano, izbrana, izbrani</li>
      <li>ADP: za, na, v, skozi, čez, po, med, pod, zoper, ob</li>
      <li>DET: to, vse, svoje, svojo, svoj, ta, te, vsak, ves, njegovo</li>
      <li>NOUN: leto, dan, življenje, čas, delo, način, pomoč, mesto, primer, vlogo</li>
      <li>NUM: eno, tri, štiri, tisoč, dve, dva, deset, sto, en, pet</li>
      <li>PRON: ga, jih, jo, kaj, me, kar, nas, nekaj, vas, ju</li>
      <li>PROPN: Slovenijo, EU, Ljubljano, Dunaj, Francijo, Irak, Koroško, Slovence, Andreja, Billyja</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: drugim, državnemu, novim, drugemu, ponižnemu, velikemu, velikim, zbranim, današnjemu, delovni</li>
      <li>ADJ-Part: zbranim, Zmletemu, določenemu, grozeči, imenovanemu, izbrani, izbranim, izzvanim, markirani, nagrbljenemu</li>
      <li>ADP: k, proti, kljub, h, navkljub, blizu, nasproti</li>
      <li>DET: temu, vsem, vsemu, svojim, tej, svoji, tistim, nekaterim, svojemu, tistemu</li>
      <li>NOUN: ljudem, členu, človeku, bolnikom, delu, hiši, koncu, moškim, otroku, vladi</li>
      <li>NUM: eni, trem, enemu, štirim, Petim, petdesetim</li>
      <li>PRON: si, mu, mi, ji, nam, vam, jim, njemu, ti, meni</li>
      <li>PROPN: Srbom, Bosku, Diegu, Janezu, Jatu, Ljubljani, Sloveniji, Vatanenu, Adriaticu, Alici</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: novega, drugih, novih, drugega, slovenskih, različnih, slovenske, evropske, prvega, nove</li>
      <li>ADJ-Part: zaposlenih, določenih, znanih, določenega, imenovanih, imenovanega, minulega, odraslih, omenjenega, omenjenih</li>
      <li>ADP: iz, od, do, zaradi, brez, z, poleg, s, glede, konec</li>
      <li>DET: tega, te, vseh, teh, svoje, svojega, svojih, vsega, njegove, katerih</li>
      <li>NOUN: leta, let, tolarjev, dela, časa, ljudi, milijonov, sveta, dni, življenja</li>
      <li>NUM: dveh, ene, enega, treh, štirih, petih, desetih, osmih, sedmih, tridesetih</li>
      <li>PRON: jih, ga, nas, njega, sebe, je, njih, nje, česar, me</li>
      <li>PROPN: Slovenije, EU, Ljubljane, Evrope, Slovencev, Kosova, Hrvaške, Amerike, Dolenjske, Jugoslavije</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: drugim, drugimi, različnimi, kratkim, veliko, drugo, novimi, novo, prvim, posebnimi</li>
      <li>ADJ-Part: znanimi, imenovanimi, sproščenim, Združenimi, bolečo, cvetočo, delujočimi, določenim, doživeto, etabliranim</li>
      <li>ADP: z, s, med, pred, pod, za, nad</li>
      <li>DET: tem, svojo, katerimi, svojim, katero, katerim, svojimi, njenim, vsemi, njegovimi</li>
      <li>NOUN: leti, pomočjo, letom, delom, časom, imenom, ljudmi, vodstvom, vojno, glasom</li>
      <li>NUM: dvema, tremi, petimi, desetimi, enim, eno, šestimi, sedmimi, sto, štirimi</li>
      <li>PRON: njim, njimi, seboj, njo, nami, sabo, njima, čimer, mano, menoj</li>
      <li>PROPN: Davidom, Marjanom, Slovenijo, Freddijem, Hrvaško, Hughesom, Jugoslavijo, Miranom, Morosino, Sampsonom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: drugi, zadnjih, drugih, drugem, prvem, prvi, različnih, veliki, glavnem, zadnjem</li>
      <li>ADJ-Part: končani, imenovanem, omenjenem, opravljenem, preteklih, določeni, določenih, končanem, odprtem, SPEČEM</li>
      <li>ADP: v, na, po, o, pri, ob</li>
      <li>DET: tem, katerem, svoji, katerih, tej, vseh, kateri, svojem, njegovem, teh</li>
      <li>NOUN: letih, času, delu, strani, svetu, mestu, koncu, primeru, letu, področju</li>
      <li>NUM: dveh, enem, štirih, treh, eni, petih, šestih, osmih, desetih, tridesetih</li>
      <li>PRON: njem, njej, njih, nas, sebi, čemer, meni, čem, ničemer, vas</li>
      <li>PROPN: Sloveniji, Ljubljani, Mariboru, Evropi, ZDA, Ameriki, Jugoslaviji, Britaniji, EU, Franciji</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: mogoče, sam, prvi, velika, drugi, prva, sama, slovenska, jasno, pomembno</li>
      <li>ADJ-Part: prepričan, znani, pripravljeni, prepričani, zaposleni, znano, pripravljen, sprejet, povezani, povezano</li>
      <li>DET: to, ta, vsi, vse, vsak, njegova, te, tisti, ti, njegov</li>
      <li>NOUN: predsednik, človek, del, zakon, ljudje, otrok, vprašanje, vlada, država, čas</li>
      <li>NUM: eden, ena, dva, trije, pet, en, tri, šest, tisoč, sto</li>
      <li>PRON: kar, kdo, kaj, jaz, nič, nihče, nekaj, nekdo, ona, vi</li>
      <li>PROPN: Slovenija, LJUBLJANA, Ljubljana, Slovenci, Maribor, Jasna, Jože, Drnovšek, Gregor, Janez</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: pravi, državni, novi, slovenski, drugi, veliki, glavni, največji, edini, zadnji</li>
      <li>ADJ-Part: minuli, izbrani, znani, omenjeni, spoštovani, imenovani, izpodbijani, navedeni, odprti, plačani</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: sam, velik, nov, drug, pomemben, prepričan, dober, podoben, pripravljen, sprejet</li>
      <li>ADJ-Part: prepričan, pripravljen, sprejet, zasnovan, presenečen, sestavljen, zaposlen, namenjen, oblečen, opremljen</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: boljše, večji, večje, večja, boljši, močnejši, večjih, boljša, daljši, starejši</li>
      <li>ADV: bolj, prej, večkrat, bolje, pozneje, raje, kasneje, dlje, hitreje, laže</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: mogoče, sam, novo, nove, različnih, veliko, slovenski, velika, veliki, novega</li>
      <li>ADJ-Part: znani, prepričan, znano, določene, pripravljeni, zaposlenih, prepričani, zaposleni, pripravljen, sprejet</li>
      <li>ADV: lahko, tako, zelo, kako, vedno, potem, kar, zdaj, treba, ali</li>
      <li>DET: obilo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: največji, najboljši, največja, največjih, najboljša, najboljših, najpomembnejši, največje, najprimernejše, največjo</li>
      <li>ADV: najbolj, najprej, najmanj, najbolje, najpogosteje, največkrat, najverjetneje, Najhuje, najdlje, najkasneje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: ni, niso, nisem, nismo, niste, nista, nisva, nisi</li>
      <li>PART: ne</li>
      <li>VERB-Fin: ni, nima, nimajo, nimam, noče, nimamo, nimate, nisem, nismo, niso</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX-Fin: je, so, bo, sem, bodo, sta, smo, bomo, boste, ste</li>
      <li>VERB-Fin: je, ima, so, bo, imajo, imamo, imate, imam, hoče, sem</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Bound
    <ul>
      <li>PRON: zanj, zame, zase, nanjo, zanjo, vanjo, nanj, vanj, zanje, name</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>PRON: se, ga, jih, si, jo, mu, mi, ji, me, jim</li>
    </ul>
  </li>
</ul>

<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: ima, imajo, mora, zdi, moramo, morajo, more, velja, želi, deluje</li>
      <li>VERB-Inf: imeti, vedeti, govoriti, delati, zdraviti, živeti, igrati, paziti, pričakovati, sodelovati</li>
      <li>VERB-Part: imel, moral, imela, imeli, morali, morala, hotel, mogel, zdelo, vedela</li>
      <li>VERB-Sup: delat, spat, gledat, iskat, krpat, mižat, prest, prosit, smučat, snemat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Fin: pride, postane, začne, dobijo, nastane, da, zgodi, ostane, pove, dobi</li>
      <li>VERB-Inf: reči, narediti, dobiti, najti, povedati, spremeniti, sprejeti, plačati, izogniti, ohraniti</li>
      <li>VERB-Part: povedal, dejal, zgodilo, začeli, začela, postal, rekel, uspelo, dobil, prišel</li>
      <li>VERB-Sup: odpotovat, osvobodit, pogledat, zajebat</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: bi, b</li>
      <li>VERB-Fin: bi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: bodite, Bodi</li>
      <li>VERB-Fin: dodajte, Ugotovimo, dajte, pazite, denimo, poglejmo, pojdite, poskusite, povej, pozabite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: je, so, bo, ni, sem, bodo, sta, smo, niso, bomo</li>
      <li>VERB-Fin: je, ima, ni, gre, so, bo, imajo, mora, pomeni, zdi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: bo, bodo, bomo, boste, bom, bosta, bova, bojo, boš</li>
      <li>VERB-Fin: bo, bodo, boste, bom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: je, so, ni, sem, sta, smo, niso, ste, nisem, sva</li>
      <li>VERB-Fin: je, ima, ni, gre, so, imajo, mora, pomeni, zdi, moramo</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: to, tem, ta, tega, te, toliko, teh, temu, tej, tisti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: nekaj, več, veliko, manj, dovolj, malo, pol, preveč, največ, nekatere</li>
      <li>PRON: nekaj, nekdo, marsikaj, nekoga, marsikoga, nečesa, Marsikdo, malokdo, marsičem, neki</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: katerem, katerih, kateri, katero, katere, koliko, katerega, kakšno, katerimi, katerim</li>
      <li>PRON: kaj, kdo, česa, komu, čem, koga, kom, kej, kva</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: nobenega, nobene, noben, nobenih, nobena, nikakršne, nobenim, Nikakršnih, Nobeno, nikakršen</li>
      <li>PRON: nič, nihče, nikogar, ničesar, nikomur, ničemer, nobeden, ničemur, nč</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: svoje, svojo, svoj, svojega, njegov, svoji, njegovo, svojih, njegove, naše</li>
      <li>PRON: se, ga, jih, si, jo, mu, mi, ji, nas, nam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: kakršen, kakršnokoli, kakršna, kakršnih, kakršno, kakršni, kakršenkoli, kakršne, kakršnega, kakršnegakoli</li>
      <li>PRON: kar, čemer, česar, čimer, kdor, karkoli, kogar, komerkoli, čemerkoli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: vse, vseh, vsi, vsak, vsem, ves, vsako, oba, obeh, vsega</li>
      <li>PRON: vsakdo, vsakogar, vsakomur</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: eno, tri, dva, dveh, eden, ena, tisoč, štiri, dve, štirih</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADJ: dvojnega, dvojnim, dvojno, trojnim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: prvi, prva, prvo, prve, prvem, prvih, prvega, tretji, tretje, prvim</li>
      <li>NUM: 1., 20., 18., 9., 14., 17., 19., 6., 3., 10.</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: dvoje, tisočerih, troje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: človekovih, človekove, Vallaressovi, vodikov, človekova, Cankarjevem, Darwinove, Gregorčičevi, Kristusovega, Levovo</li>
      <li>DET: svoje, svojo, svoj, svojega, njegov, svoji, njegovo, svojih, njegove, naše</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: svoje, svojo, svoj, svojega, svoji, svojih, svojim, svojem, svoja, svojimi</li>
      <li>PRON: se, si, sebi, seboj, sebe, zase, sabo, nase, vase</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sem, smo, bomo, nisem, bom, sva, nismo, nisva, bova</li>
      <li>DET: naše, naših, naš, naša, moj, moje, naši, našo, moja, moji</li>
      <li>PRON: mi, nas, nam, me, jaz, meni, zame, nama, nami, mene</li>
      <li>VERB-Fin: moramo, mislim, imamo, moremo, smemo, vem, imam, moram, vemo, morem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: boste, ste, si, niste, bodite, nisi, sta, Bodi, as, bosta</li>
      <li>DET: vaš, vaša, vaše, vašo, tvoje, vašega, vaši, tvoj, vaših, tvoja</li>
      <li>PRON: vam, vas, ti, vi, te, tebe, tebi, vaju, vami, nate</li>
      <li>VERB-Fin: imate, morate, želite, dodajte, veš, potrebujete, boste, moraš, si, ste</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: je, so, bo, ni, bodo, sta, niso, bosta, nista, bojo</li>
      <li>DET: njegov, njegovo, njegove, njegova, njeno, njen, njihove, njegovem, njegovi, njene</li>
      <li>PRON: ga, jih, jo, mu, ji, jim, njim, njih, njem, njimi</li>
      <li>VERB-Fin: je, ima, ni, gre, so, bo, imajo, mora, pomeni, zdi</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: njeno, njen, njene, njena, njeni, njenih, njenim, njenega, njenem, njenemu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>DET: njegov, njegovo, njegove, njegova, njegovem, njegovi, njegovih, njegovega, njegovim, njegovimi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>DET: njegov</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>DET: njun, njuna, njuno, njuni, najin, najinih, vajino, Najine, najina, najinega</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: naše, naših, njihove, naš, naša, njihovo, njihov, njihova, njihovih, naši</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: njegov, njegovo, njegove, njegova, njeno, njen, njegovem, njegovi, njene, njegovih</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: dr., oz., t., d., sv., P., i., M., j., o.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: de, of, the, bin, El, Les, Party, TO, TRAVEL, WRITING</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Digit
        <ul>
          <li>NUM: 10, 15, 2000, 50, 1., 3, 30, 20, 20., 6</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: I., II, II., VI, I, III, IV., IX., V, V.</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: eno, tri, dva, dveh, eden, ena, tisoč, štiri, dve, štirih</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: biti.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: biti.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Gen (157)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(do) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(okoli) (1)</li>
      <li>VERB-Fin--NOUN-Nom (1787)</li>
      <li>VERB-Fin--PRON-Gen (14)</li>
      <li>VERB-Fin--PRON-Nom (149)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Nom (41)</li>
      <li>VERB-Inf--PRON-Nom (2)</li>
      <li>VERB-Part--NOUN-Gen (111)</li>
      <li>VERB-Part--NOUN-Gen-ADP(do) (1)</li>
      <li>VERB-Part--NOUN-Nom (1870)</li>
      <li>VERB-Part--PRON-Acc (4)</li>
      <li>VERB-Part--PRON-Gen (13)</li>
      <li>VERB-Part--PRON-Nom (146)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (1540)</li>
      <li>VERB-Fin--NOUN-Dat (79)</li>
      <li>VERB-Fin--NOUN-Gen (310)</li>
      <li>VERB-Fin--PRON-Acc (459)</li>
      <li>VERB-Fin--PRON-Dat (140)</li>
      <li>VERB-Fin--PRON-Gen (29)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Inf--NOUN-Acc (431)</li>
      <li>VERB-Inf--NOUN-Dat (29)</li>
      <li>VERB-Inf--NOUN-Gen (146)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (109)</li>
      <li>VERB-Inf--PRON-Dat (24)</li>
      <li>VERB-Inf--PRON-Gen (28)</li>
      <li>VERB-Part--NOUN-Acc (1809)</li>
      <li>VERB-Part--NOUN-Dat (83)</li>
      <li>VERB-Part--NOUN-Gen (344)</li>
      <li>VERB-Part--NOUN-Ins (1)</li>
      <li>VERB-Part--PRON-Acc (611)</li>
      <li>VERB-Part--PRON-Dat (190)</li>
      <li>VERB-Part--PRON-Gen (42)</li>
      <li>VERB-Sup--NOUN-Acc (4)</li>
      <li>VERB-Sup--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (11)</li>
      <li>VERB-Fin--NOUN-Dat (81)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Loc (2)</li>
      <li>VERB-Fin--PRON-Acc (14)</li>
      <li>VERB-Fin--PRON-Dat (91)</li>
      <li>VERB-Inf--NOUN-Acc (5)</li>
      <li>VERB-Inf--NOUN-Dat (28)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--PRON-Acc (5)</li>
      <li>VERB-Inf--PRON-Dat (23)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Part--NOUN-Acc (14)</li>
      <li>VERB-Part--NOUN-Dat (97)</li>
      <li>VERB-Part--PRON-Acc (23)</li>
      <li>VERB-Part--PRON-Dat (151)</li>
      <li>VERB-Sup--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 24 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: prositi zase, doživeti svojo, iskati svojo, karikirati sebe, kaznovati sebe, narediti svoje, obdržati zase, označevati sebe, poskrbeti zase, postaviti zase, povedati svojega, povzročiti sebi, presenetiti sebe, reči svoje, spodbuditi sebe, spremeniti sebe, spreminjati sebe, ubiti sebe, upati zase, utemeljevati sebe, videti sebe, zanikovati sebe, zatopljen vase, živeti zase</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 3 relation subtypes: <a>cc:preconj</a>, <a>flat:foreign</a>, <a>flat:name</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
