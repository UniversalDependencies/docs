---
layout: base
title:  'UD_Slovenian-SST'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Slovenian SST

Language: [Slovenian](/sl/index.html) (code: `sl`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v1.3 release.

The following people have contributed to making this treebank part of UD: Kaja Dobrovoljc, Joakim Nivre.

Repository: [UD_Slovenian-SST](https://github.com/UniversalDependencies/UD_Slovenian-SST)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsl_sst28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-NC-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either Slovenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Slovenian-SST/issues).
If you want to collaborate, please contact [kaja&nbsp;•&nbsp;dobrovoljc&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

The Spoken Slovenian UD Treebank (SST) is the first syntactically annotated corpus of spoken Slovenian, based on a sample of the reference GOS corpus, a collection of transcribed audio recordings of monologic, dialogic and multi-party spontaneous speech in different everyday situations.



The Spoken Slovenian UD Treebank (SST) is the first syntactically annotated corpus of spoken Slovenian. The manual annotations have been performed on a representative sample of the reference Gos corpus of spoken Slovenian (Zwitter Vitez et al. 2013), a collection of transcribed audio recordings of monologic, dialogic and multi-party spontaneous speech in different everyday situations. The treebank is representative of speakers (sex, age, region, education), communication channels (TV, radio, telephone, personal contact) and communication settings (TV and radio shows, lectures, meetings, consultations, services, conversations between friends etc.).

The spelling, tokenization and segmentation principles follow the transcription guidelines of the reference corpus (Verdonik et al. 2013) with the syntactic trees spanning over individual utterances (semantically, syntactically and acoustically delimited units, roughly corresponding to written sentences). The morphological and syntactic analysis in the SST treebank has been performed on top of normalized transcriptions that reduce the number of token types due to regional, colloquial and other pronunciation variation. However, information on pronunciation-based transcription and tokenization has been included as part of the MISC column.

The SST treebank includes manual annotations of lemmas, part-of-speech categories, morphological features and dependency relations in accordance with the Universal Dependencies annotation scheme. In addition to language-specific extensions, in line with the written Slovenian UD Treebank, the SST treebank also includes new speech-specific extensions to accommodate the structural and pragmatic particularities of spoken language syntax, such as disfluencies, fillers, parentheticals, general extenders etc. More information on the treebank construction and annotation is given in Dobrovoljc and Nivre (2016).


The current version of the SST treebank includes 3,188 utterances (sentences) or 29,488 tokens, produced by 606 speakers in 287 different speech events. As opposed to previous releases with unequal genre distributions, sentence-level randomization and different train-dev-test splits (UDv1 to UDv2.1), the SST UDv2.2 data has been randomized on text-level and split into testing (10,015) and training (19,473) subsets, in accordance with the CONLL-ST 2018 requirements. The original order of the utterances can be restored by sentence IDs.

## Acknowledgments

Kaja Dobrovoljc (treebank construction and annotation)
Joakim Nivre (guidelines consulting)



# Statistics of UD Slovenian SST

## POS Tags

[ADJ](sl_sst-pos-ADJ.html) – [ADP](sl_sst-pos-ADP.html) – [ADV](sl_sst-pos-ADV.html) – [AUX](sl_sst-pos-AUX.html) – [CCONJ](sl_sst-pos-CCONJ.html) – [DET](sl_sst-pos-DET.html) – [INTJ](sl_sst-pos-INTJ.html) – [NOUN](sl_sst-pos-NOUN.html) – [NUM](sl_sst-pos-NUM.html) – [PART](sl_sst-pos-PART.html) – [PRON](sl_sst-pos-PRON.html) – [PROPN](sl_sst-pos-PROPN.html) – [PUNCT](sl_sst-pos-PUNCT.html) – [SCONJ](sl_sst-pos-SCONJ.html) – [VERB](sl_sst-pos-VERB.html) – [X](sl_sst-pos-X.html)

## Features

[Animacy](sl_sst-feat-Animacy.html) – [Aspect](sl_sst-feat-Aspect.html) – [Case](sl_sst-feat-Case.html) – [Definite](sl_sst-feat-Definite.html) – [Degree](sl_sst-feat-Degree.html) – [Foreign](sl_sst-feat-Foreign.html) – [Gender](sl_sst-feat-Gender.html) – [Gender[psor]](sl_sst-feat-Gender-psor.html) – [Mood](sl_sst-feat-Mood.html) – [Number](sl_sst-feat-Number.html) – [Number[psor]](sl_sst-feat-Number-psor.html) – [NumForm](sl_sst-feat-NumForm.html) – [NumType](sl_sst-feat-NumType.html) – [Person](sl_sst-feat-Person.html) – [Polarity](sl_sst-feat-Polarity.html) – [Poss](sl_sst-feat-Poss.html) – [PronType](sl_sst-feat-PronType.html) – [Tense](sl_sst-feat-Tense.html) – [Variant](sl_sst-feat-Variant.html) – [VerbForm](sl_sst-feat-VerbForm.html)

## Relations

[acl](sl_sst-dep-acl.html) – [advcl](sl_sst-dep-advcl.html) – [advmod](sl_sst-dep-advmod.html) – [amod](sl_sst-dep-amod.html) – [appos](sl_sst-dep-appos.html) – [aux](sl_sst-dep-aux.html) – [case](sl_sst-dep-case.html) – [cc](sl_sst-dep-cc.html) – [cc:preconj](sl_sst-dep-cc-preconj.html) – [ccomp](sl_sst-dep-ccomp.html) – [conj](sl_sst-dep-conj.html) – [conj:extend](sl_sst-dep-conj-extend.html) – [cop](sl_sst-dep-cop.html) – [csubj](sl_sst-dep-csubj.html) – [dep](sl_sst-dep-dep.html) – [det](sl_sst-dep-det.html) – [discourse](sl_sst-dep-discourse.html) – [discourse:filler](sl_sst-dep-discourse-filler.html) – [dislocated](sl_sst-dep-dislocated.html) – [expl](sl_sst-dep-expl.html) – [fixed](sl_sst-dep-fixed.html) – [flat](sl_sst-dep-flat.html) – [flat:foreign](sl_sst-dep-flat-foreign.html) – [flat:name](sl_sst-dep-flat-name.html) – [goeswith](sl_sst-dep-goeswith.html) – [iobj](sl_sst-dep-iobj.html) – [mark](sl_sst-dep-mark.html) – [nmod](sl_sst-dep-nmod.html) – [nsubj](sl_sst-dep-nsubj.html) – [nummod](sl_sst-dep-nummod.html) – [obj](sl_sst-dep-obj.html) – [obl](sl_sst-dep-obl.html) – [orphan](sl_sst-dep-orphan.html) – [parataxis](sl_sst-dep-parataxis.html) – [parataxis:discourse](sl_sst-dep-parataxis-discourse.html) – [parataxis:restart](sl_sst-dep-parataxis-restart.html) – [punct](sl_sst-dep-punct.html) – [reparandum](sl_sst-dep-reparandum.html) – [root](sl_sst-dep-root.html) – [vocative](sl_sst-dep-vocative.html) – [xcomp](sl_sst-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3188 sentences and 29488 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 13 types of words that contain both letters and punctuation. Examples: [gap], [name:personal], [pause], [speaker:laughter], [name:surname], [audience:laughter], [:voice], [all:laughter], [incident], [name:address], [name:organisation], [name:place], macdonald's</li>
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
<li>This corpus contains 46 word types tagged as particles (PART): alora, arki, baje, baš, bržkone, celo, da, domala, edino, evo, i, itak, ja, kajne, kajneda, le, ma, menda, morda, naj, najbrž, najsibo, ne, niti, no, pač, prav, pravzaprav, predvsem, ravno, samo, seveda, sicer, skoraj, skorajda, sploh, tipo, tudi, valjda, več, vsaj, zgolj, zlasti, še, šele, že</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as pronouns (PRON): jaz, kaj, kar, karkoli, kdo, kdor, kdorkoli, marsikaj, nekdo, nihče, nobeden, on, se, ti, vame, zame, zase, što</li>
</ul>

<ul>
<li>This corpus contains 52 lemmas tagged as determiners (DET): dosti, dovolj, enak, isti, kak, kakršen, kakršenkoli, kakšen, kateri, katerikoli, koliko, kolikšen, malce, malo, manj, mnog, moj, najin, največ, naš, nek, nekaj, nekateri, nikakršen, nič, njegov, njen, njihov, noben, oba, obadva, ogromno, oni, ovi, par, pol, preveč, svoj, ta, tak, takle, takšen, tale, tisti, toliko, tvoj, vaš, veliko, ves, več, vsak, četrt</li>
</ul>

<ul>
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
    <li>ADV: rekoč</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: je, so, sem, bi, bo, smo, ni, si, bomo, ste</li>
    <li>VERB: je, vem, veš, mislim, ni, recimo, ima, so, bo, pravi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: biti</li>
    <li>VERB: biti, narediti, reči, iti, videti, delati, imeti, priti, kupiti, pomagati</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: vnet, preverjeno, znan, odprta, pozdravljeni, rečeno, imenovana, imenovani, narejeno, ostali</li>
    <li>AUX: bila, bil, bilo, bili, bile</li>
    <li>VERB: bilo, bil, imela, rekel, imeli, šla, bila, imel, rekla, rekli</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>VERB: delat, jest, ponavljat, žegnat, gledat, izpeljat, naročit, osvajat, peljat, preverjat</li>
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
      <li>ADJ: drugo, druga, lepa, rdeča, same, druge, glavna, sama, dobra, tretjo</li>
      <li>ADJ-Part: odprta, postavljena, zagrožena, dani, določena, določeni, fiksirana, imenovana, imenovani, izdelano</li>
      <li>AUX-Part: bila, bile</li>
      <li>DET: ta, te, to, tej, take, naša, neke, neko, teh, moja</li>
      <li>NOUN: strani, stvari, hvala, minut, stopinj, gospa, stran, razmere, stvar, veze</li>
      <li>NUM: eno, ena, dve, ene, tri, štiri, dveh, eni, treh, štirih</li>
      <li>PRON: jo, ona, jih, ji, je, njej, njo, midve, me, nje</li>
      <li>PROPN: slovenija, sloveniji, slovenije, božjah, karavanke, bistrica, evropi, jugoslaviji, orsa, viktorije</li>
      <li>VERB-Part: imela, šla, bila, rekla, videla, dala, naredila, delala, izdala, mogla</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: dober, prvi, drugi, lep, sam, stari, mali, sami, cel, pravi</li>
      <li>ADJ-Part: vnet, znan, pozdravljeni, ostali, prepričan, pripravljen, pripravljeni, spočit, znani, delujoč</li>
      <li>AUX-Part: bil, bili, bila</li>
      <li>DET: ta, tisti, tem, vsi, tega, kakšen, ti, oni, vsak, teh</li>
      <li>NOUN: dan, redu, čas, evrov, koncu, gospod, ljudi, način, dni, del</li>
      <li>NUM: dva, en, enega, tri, eden, eni, štirje, enim, štiri, trije</li>
      <li>PRON: ga, mi, jih, kdo, vi, on, jim, mu, oni, njega</li>
      <li>PROPN: jones, tom, david, healy, iraku, jezus, herman, paranoid, petty, quincy</li>
      <li>VERB-Part: bil, rekel, imeli, imel, rekli, šel, dobil, videl, videli, mogel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: dobro, glavnem, zanimivo, drugega, mogoče, drugo, hudega, jasno, podobno, pomembno</li>
      <li>ADJ-Part: preverjeno, rečeno, narejeno, ostalo, prikazano, določeno, dovoljeno, imenovana, izrečeno, izrisano</li>
      <li>AUX-Part: bilo, bila</li>
      <li>DET: to, vse, nič, tem, tega, nekaj, tisto, tole, temu, tako</li>
      <li>NOUN: bistvu, jutro, leto, leta, vprašanje, letih, ime, mestu, let, leti</li>
      <li>NUM: eno, tri, ena, dve, enim, tremi, štirih, štirim</li>
      <li>PRON: kaj, kar, česa, čim, jih, karkoli, ga, marsikaj, čem, čemer</li>
      <li>PROPN: pohorja, celja, jezerskim, laškega, madžarskem, pohorje, posočju, velenju</li>
      <li>VERB-Part: bilo, šlo, prišlo, zgodilo, dalo, ostalo, moglo, moralo, potegnilo, ratalo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>NOUN: cimra, gospoda, otroka, sina, atija, babeka, dedca, duha, ekonomista, eksponenta</li>
      <li>PROPN: arturja, boruca, giordanota, miklavža, petra, planinška, poljanška, sinclairja</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>NOUN: dan, način, petek, denar, izraz, teden, primer, čas, konec, mesec</li>
      <li>PROPN: paranoid, rodik, triglav, erasmus, etnoblog, frutiq, ikš, lech, maribor, piran</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: blagovni, blagovnih, drugih, grozna, mali, napisana, predvidena, spodnji, sprejeta, upognjena</li>
      <li>ADJ-Part: napisana, predvidena, sprejeta, upognjena</li>
      <li>AUX-Fin: sta, sva, bova, bosta, nisva</li>
      <li>AUX-Part: bila</li>
      <li>DET: obe, oba, obeh, moja, obadva, ona, onih, takšni, ti</li>
      <li>NOUN: dni, elementa, milijona, akterja, bivola, brata, datuma, disciplinah, dneva, dogodka</li>
      <li>NUM: dva, dve, dveh</li>
      <li>PRON: midve, onadva, vidva, midva, nama, vidve, njima, vaju</li>
      <li>PROPN: američanki, italijanki, štajer</li>
      <li>VERB-Fin: sta, gledava, imava, dajva, greva, imata, morata, sva, vesta, bosta</li>
      <li>VERB-Part: šla, bila, prišla, imela, našla, brala, dobila, dogovarjala, dosegla, izmislila</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: sami, zadnjih, same, dobri, druge, drugih, ljudske, psihološki, tujih, bogatejši</li>
      <li>ADJ-Part: ostali, ostalih, pozdravljeni, pripravljeni, znani, dogovorjeni, določene, imenovana, izplačane, izrisane</li>
      <li>AUX-Fin: so, smo, bomo, ste, boste, bodo, nismo, niso, bojo, bodite</li>
      <li>AUX-Part: bili, bila, bile</li>
      <li>DET: te, teh, vsi, take, ti, tistih, vse, naših, vseh, kakšne</li>
      <li>NOUN: evrov, ljudi, stvari, dni, minut, stopinj, letih, let, razmere, leti</li>
      <li>NUM: tri, tisoč, dvajset, pet, petnajst, štiri, sto, šest, deset, petdeset</li>
      <li>PRON: jih, mi, nas, vi, vam, jim, vas, oni, nam, nami</li>
      <li>PROPN: božjah, karavanke, ledinah, triestini, zrečah, alpe, američanov, beatlese, benetke, božje</li>
      <li>VERB-Fin: recimo, so, imamo, imajo, imate, gremo, vemo, smo, greste, moramo</li>
      <li>VERB-Part: imeli, rekli, videli, dali, dobili, šli, bili, delali, naredili, prišli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: dobro, drugo, prvi, dober, drugi, zanimivo, druga, drugega, glavnem, lep</li>
      <li>ADJ-Part: vnet, preverjeno, znan, odprta, rečeno, imenovani, narejeno, ostalo, postavljena, prepričan</li>
      <li>AUX-Fin: je, sem, bo, ni, si, bom, boš, nisem, nisi, biti</li>
      <li>AUX-Part: bil, bila, bilo</li>
      <li>DET: to, ta, vse, tem, tega, nič, tisto, nekaj, tole, tisti</li>
      <li>NOUN: bistvu, dan, redu, strani, jutro, leto, čas, koncu, gospod, hvala</li>
      <li>NUM: eno, en, ena, enega, ene, eden, enim, eni, enemu</li>
      <li>PRON: kaj, jaz, ti, mi, ga, jo, kar, kdo, on, ona</li>
      <li>PROPN: slovenija, sloveniji, jones, slovenije, tom, david, healy, iraku, jezus, bistrica</li>
      <li>VERB-Fin: je, vem, veš, mislim, ni, ima, bo, pravi, gre, imaš</li>
      <li>VERB-Part: bilo, bil, rekel, imela, šla, bila, imel, rekla, šel, šlo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: dobro, drugo, celo, dober, prvi, drugi, cel, lep, prvo, druge</li>
      <li>ADJ-Part: zagotovljeno, dogovorjen, določene, določeno, izdelano, izolirano, izplačane, nagubano, napisana, napisano</li>
      <li>ADP: za, na, v, po, čez, med, skozi, skoz, nad, pod</li>
      <li>DET: to, vse, ta, te, nič, nekaj, tisto, neko, tole, kakšen</li>
      <li>NOUN: dan, jutro, leto, način, petek, denar, izraz, teden, primer, stran</li>
      <li>NUM: eno, dva, en, tri, dvajset, sto, tisoč, dve, enega, štiri</li>
      <li>PRON: kaj, ga, jih, jo, me, kar, nas, te, vas, mene</li>
      <li>PROPN: paranoid, ameriko, rodik, triglav, albanijo, ano, arturja, avstralijo, beatlese, benetke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: drugemu, državni, javnim, krompirjevi, krompirjevim, levi, meteorološki, meteorološkim, neumnemu, novim</li>
      <li>ADP: k, proti, h, kljub, navkljub</li>
      <li>DET: temu, tem, vsakemu, mojemu, nobenemu, onemu, svojemu, svojim, tej, vsem</li>
      <li>NOUN: bogu, očetu, analizam, bližnjici, borcu, familijam, gospodu, gostom, hiši, izobraževanju</li>
      <li>NUM: enemu, štirim</li>
      <li>PRON: mi, si, ti, vam, meni, jim, mu, ji, nam, njemu</li>
      <li>PROPN: robertu, savianu, turnšku</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: drugega, drugih, hudega, novega, druge, slovenske, drobnih, finančnih, iraških, logarske</li>
      <li>ADJ-Part: gorečega, imenovanega, ostalih, pogojenih, preiskovanih, pripetih, prisiljenih, prodanih, rezerviranega, zadolžene</li>
      <li>ADP: od, do, iz, brez, z, zaradi, s, poleg, preko, blizu</li>
      <li>DET: tega, teh, tistih, naše, neke, te, nobene, nobenega, takega, takšnega</li>
      <li>NOUN: evrov, leta, dni, ljudi, minut, stopinj, časa, let, veze, stvari</li>
      <li>NUM: ene, enega, osmih, petih, sedmih, dvajsetih, dvanajstih, enih, osemdesetih, treh</li>
      <li>PRON: jih, ga, mene, česa, je, me, nas, nje, te, tebe</li>
      <li>PROPN: slovenije, pohorja, viktorije, iraka, mure, afrike, američanov, borna, camorre, celja</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: drugo, tretjo, vremenskimi, kratkim, pravim, aktivnim, belo, bivšim, debelim, dobrimi</li>
      <li>ADJ-Part: sesekljanimi</li>
      <li>ADP: z, s, pred, med, nad, pod, za</li>
      <li>DET: tem, katerimi, neko, tisto, njihovo, onim, temi, tistim, kakšnimi, katerim</li>
      <li>NOUN: leti, copati, pinceto, pojavi, stresom, avtom, bajto, besedami, dnevi, gospodom</li>
      <li>NUM: enim, eno, dvanajstimi, enaindvajsetimi, petdesetimi, sedemnajstimi, tremi, štirinajstimi</li>
      <li>PRON: nami, mano, njimi, sabo, vami, njo, čim, njim, seboj, tabo</li>
      <li>PROPN: [name:personal], [name:surname], andersonom, avstrijo, bennyjem, bojanom, dimitrijem, dimom, istrabenzom, jezerskim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: glavnem, zadnjih, drugi, prvi, spletni, laični, majhni, beli, bolniški, delovnih</li>
      <li>ADJ-Part: dani, določenem, določeni, imenovani, omenjenem, ostalih, združenih, znanem</li>
      <li>ADP: v, na, pri, po, o, ob</li>
      <li>DET: tem, tej, teh, tistem, naših, katerih, naši, nekem, neki, vsakem</li>
      <li>NOUN: bistvu, redu, strani, koncu, letih, mestu, primeru, nadaljevanju, začetku, trenutku</li>
      <li>NUM: dveh, eni, štirih, desetih, devetnajstih, enajstih, petih, treh</li>
      <li>PRON: nas, njej, meni, njih, njem, sebi, vas, čem, čemer</li>
      <li>PROPN: sloveniji, božjah, iraku, evropi, jugoslaviji, gazi, ledinah, ljubljani, zrečah, aktualu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: druga, lepa, rdeča, sam, stari, zanimivo, dober, mali, drugi, prvi</li>
      <li>ADJ-Part: vnet, preverjeno, znan, odprta, pozdravljeni, rečeno, imenovana, ostali, ostalo, postavljena</li>
      <li>DET: to, ta, vse, nič, tisti, vsi, ti, te, nekaj, tisto</li>
      <li>NOUN: gospod, hvala, gospa, oče, problem, vprašanje, čas, človek, del, a</li>
      <li>NUM: ena, en, dva, tisoč, tri, šest, devet, eden, pet, dve</li>
      <li>PRON: jaz, kaj, ti, mi, kdo, vi, on, ona, kar, oni</li>
      <li>PROPN: slovenija, jones, tom, david, healy, jezus, karavanke, bistrica, herman, orsa</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: drugi, mali, stari, pravi, zalivski, boljši, edini, morski, naslednji, celi</li>
      <li>ADJ-Part: delujoči, imenovani, nariti, pozdravljeni, vladajoči</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: dober, lep, sam, cel, velik, vnet, slab, znan, drug, moder</li>
      <li>ADJ-Part: vnet, znan, prepričan, pripravljen, spočit, delujoč, dodan, dogovorjen, izračunan, izvrševan</li>
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
      <li>ADJ: mlajši, bogatejši, boljše, boljši, manjše, manjši, večja, večji, večje, boljša</li>
      <li>ADV: bolj, prej, rajši, kasneje, večkrat, bolje, boljše, ceneje, dlje, konkretneje</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: dobro, dober, zanimivo, glavnem, lep, lepa, mali, rdeča, sam, stari</li>
      <li>ADJ-Part: vnet, preverjeno, znan, odprta, pozdravljeni, rečeno, imenovana, imenovani, narejeno, ostali</li>
      <li>ADV: tako, zdaj, a, pol, kako, lahko, tam, kar, potem, res</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: največja, največji, najbogatejši, najboljša, najboljše, najdebelejši, najlažje, najljubše, najnovejšo, največje</li>
      <li>ADV: najprej, najbolj, najmanj, najrajši, najboljše</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: ni, nisem, nismo, niso, nisi, niste, nisva</li>
      <li>PART: ne</li>
      <li>VERB-Fin: ni, nima, nimam, nisem, nimajo, niso, noče, nimamo, nimate, nimaš</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX-Fin: je, so, sem, bo, smo, si, bomo, ste, bom, sta</li>
      <li>VERB-Fin: je, ima, so, bo, imamo, imaš, imajo, imate, sem, imam</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Bound
    <ul>
      <li>PRON: zanjo, vanj, zame, zanj, zase, zate</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>PRON: se, mi, ga, jih, si, ti, jo, me, jim, mu</li>
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
      <li>AUX-Part: bil, bilo</li>
      <li>VERB-Fin: vem, veš, mislim, ima, imamo, imaš, imajo, zdi, imate, imam</li>
      <li>VERB-Inf: delati, imeti, jesti, pisati, gnati, govoriti, hoditi, prositi, barvati, brati</li>
      <li>VERB-Part: imela, imeli, imel, mogel, delal, delali, mislil, delala, mogla, poznal</li>
      <li>VERB-Sup: delat, jest, ponavljat, gledat, osvajat, peljat, preverjat, sekirat, čakat, štet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Fin: recimo, daj, da, pride, daš, povej, reče, poglejte, prideš, dobijo</li>
      <li>VERB-Inf: narediti, reči, priti, kupiti, povedati, vprašati, pogledati, spraviti, stisniti, dati</li>
      <li>VERB-Part: rekel, rekla, rekli, dobil, dala, dali, dobili, prišla, prišlo, povedal</li>
      <li>VERB-Sup: izpeljat, naročit, vrnit</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: bi</li>
      <li>VERB-Fin: bi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: bodite, bodi</li>
      <li>VERB-Fin: recimo, daj, glej, čakaj, povej, glejte, poglejte, gremo, dajmo, požri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: je, so, sem, bo, smo, ni, si, bomo, ste, bom</li>
      <li>VERB-Fin: je, vem, veš, mislim, ni, ima, so, bo, pravi, imamo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: bo, bomo, bom, boš, boste, bodo, bova, bosta, bojo</li>
      <li>VERB-Fin: bo, bom, boš, bodo, bomo, bojo, bosta, bova</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: je, so, sem, smo, ni, si, ste, sta, nisem, nismo</li>
      <li>VERB-Fin: je, vem, veš, mislim, ni, ima, so, pravi, imamo, gre</li>
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
      <li>DET: to, ta, tem, tega, te, tisto, teh, tisti, tole, take</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: malo, nekaj, več, dosti, toliko, veliko, pol, manj, preveč, neko</li>
      <li>PRON: nekdo, nekoga, nekomu, marsikaj</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: koliko, kakšen, kakšna, kakšne, kakšni, kateri, kako, kakšno, katere, katerih</li>
      <li>PRON: kaj, kdo, česa, koga, čim, komu, čem, čemu, što</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: nič, noben, nobene, nobenega, nobena, nikakršne, ničesar, nobenem, nobenemu, nobeni</li>
      <li>PRON: nihče, nobeden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADJ: sirovo, andrejevo, belvijevega, bertrandova, blaževi, bučkino, centrovi, dolinarjeva, gobovo, heglovem</li>
      <li>DET: naša, naše, moja, naš, naši, svoje, moje, naših, moj, mojega</li>
      <li>PRON: se, jaz, mi, ti, ga, jih, si, jo, nas, vi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: kakršnakoli, kakršne, kakršni, kateremkoli</li>
      <li>PRON: kar, karkoli, kdor, kdorkoli, čemer, česar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: vse, vsi, vsak, vsako, vseh, vsa, obe, vsakega, vsakem, vsakemu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: eno, dva, en, ena, tri, tisoč, dvajset, dve, pet, enega</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADJ: dvojni, dvojno, trojni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: prvi, prvo, prva, tretjo, prvega, devetindvajseti, peta, tretja, tretji, trideseti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: dvoje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: sirovo, andrejevo, belvijevega, bertrandova, blaževi, bučkino, centrovi, dolinarjeva, gobovo, heglovem</li>
      <li>DET: naša, naše, moja, naš, naši, moje, naših, moj, mojega, tvoja</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sem, smo, bomo, bom, nisem, nismo, sva, bova, nisva</li>
      <li>DET: naša, naše, moja, naš, naši, moje, naših, moj, mojega, mojo</li>
      <li>PRON: jaz, mi, nas, me, meni, mene, nam, nami, mano, midve</li>
      <li>VERB-Fin: vem, mislim, recimo, imamo, sem, imam, gremo, bom, moram, prosim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: si, ste, boš, boste, nisi, bodite, niste, bodi</li>
      <li>DET: tvoja, vaš, vaša, vaše, vašo, tvoj, tvoje, tvoji, tvojo, vašega</li>
      <li>PRON: ti, vi, vam, te, vas, vami, tebe, tebi, vidva, tabo</li>
      <li>VERB-Fin: veš, imaš, daj, imate, si, glej, čakaj, daš, greš, moraš</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: je, so, bo, ni, sta, bodo, niso, bosta, bojo, biti</li>
      <li>DET: njegova, njeni, njihove, njihovega, njihovo, njegove, njegovo, njen, njene, njeno</li>
      <li>PRON: ga, jih, jo, on, ona, jim, mu, ji, oni, njega</li>
      <li>VERB-Fin: je, ni, ima, so, bo, pravi, gre, imajo, zdi, da</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: njeni, njen, njene, njeno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>DET: njegova, njegove, njegovo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>DET: najino</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: naša, naše, naš, naši, naših, našega, našo, vaš, vaša, vaše</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: moja, moje, moj, mojega, tvoja, mojo, mojemu, njegova, njeni, tvoj</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: green, of, grass, home, non, stop, beautiful, day, fa, gung</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Word
        <ul>
          <li>NUM: eno, dva, en, ena, tri, tisoč, dvajset, dve, pet, enega</li>
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
      <li>VERB-Fin--NOUN-Gen (35)</li>
      <li>VERB-Fin--NOUN-Nom (263)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(kakor) (1)</li>
      <li>VERB-Fin--PRON-Gen (4)</li>
      <li>VERB-Fin--PRON-Nom (215)</li>
      <li>VERB-Part--NOUN-Gen (15)</li>
      <li>VERB-Part--NOUN-Nom (100)</li>
      <li>VERB-Part--PRON-Gen (7)</li>
      <li>VERB-Part--PRON-Nom (138)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (254)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(preko) (1)</li>
      <li>VERB-Fin--NOUN-Dat (5)</li>
      <li>VERB-Fin--NOUN-Gen (51)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(preko) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(čez) (1)</li>
      <li>VERB-Fin--NOUN-Nom (4)</li>
      <li>VERB-Fin--PRON-Acc (155)</li>
      <li>VERB-Fin--PRON-Dat (76)</li>
      <li>VERB-Fin--PRON-Gen (17)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Acc (45)</li>
      <li>VERB-Inf--NOUN-Gen (10)</li>
      <li>VERB-Inf--NOUN-Nom (2)</li>
      <li>VERB-Inf--PRON-Acc (17)</li>
      <li>VERB-Inf--PRON-Dat (2)</li>
      <li>VERB-Inf--PRON-Gen (3)</li>
      <li>VERB-Part--NOUN-Acc (217)</li>
      <li>VERB-Part--NOUN-Acc-ADP(navkljub) (1)</li>
      <li>VERB-Part--NOUN-Gen (37)</li>
      <li>VERB-Part--PRON-Acc (83)</li>
      <li>VERB-Part--PRON-Dat (35)</li>
      <li>VERB-Part--PRON-Gen (10)</li>
      <li>VERB-Sup--NOUN-Acc (7)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (3)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Dat (39)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (3)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Dat (3)</li>
      <li>VERB-Part--PRON-Acc (5)</li>
      <li>VERB-Part--PRON-Dat (35)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>cc:preconj</a>, <a>conj:extend</a>, <a>discourse:filler</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>parataxis:discourse</a>, <a>parataxis:restart</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a></li>
</ul>
