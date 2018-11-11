---
layout: base
title:  'UD_Croatian-SET'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Croatian SET

Language: [Croatian](/hr/index.html) (code: `hr`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v1.1 release.

The following people have contributed to making this treebank part of UD: Željko Agić, Nikola Ljubešić, Daniel Zeman.

Repository: [UD_Croatian-SET](https://github.com/UniversalDependencies/UD_Croatian-SET)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhr_set22)<br />
Download all treebanks: [UD 2.2](/#download)

License: CC BY-SA 4.0

Genre: news, web, wiki

Questions, comments?
General annotation questions (either Croatian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Croatian-SET/issues).
If you want to collaborate, please contact [zeljko&nbsp;•&nbsp;agic&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

The Croatian UD treebank is based on the SETimes-HR corpus.




The sentences are partially parallel with the smaller Serbian UD treebank, which
comes from the Serbian edition of SETimes. For the CoNLL 2018 shared task in parsing
(and for UD release 2.2), the Croatian corpus was re-split so that corresponding
sentences are in the same section (train/dev/test) in Croatian and Serbian.
The re-split had to be done on the Croatian side because the Serbian corpus is smaller
and most of it correspond to what used to be training data in Croatian.

For the time being, sentence ids have not been changed although they contain references
to train/dev/test. Therefore it is now possible that e.g. sentence id "train-s2852"
occurs in the development data, not in training data. This may be changed in future
releases.

Also note that the following description of data split and sources refers to the _old_
data split. Thus, sentences 0001-3557 of the "training set" have ids "train-s1" to
"train-s3557" but some of them are now in the dev file and some in the test file.

### Training set.

Contains 7,689 sentences (169,283 tokens) from three sources:

1. Sentences 0001-3557: Newspaper text from the [Southeast European Times](http://en.wikipedia.org/wiki/Southeast_European_Times) news website, obtained from the [SETimes parallel corpus](http://nlp.ffzg.hr/resources/corpora/setimes/). This part of the treebank is built on top of the [SETimes.HR dependency treebank of Croatian](https://github.com/ffnlp/sethr);
2. Sentences 3558-5792: Text from various [Croatian web sources](http://nl.ijs.si/isjt14/proceedings/isjt2014_10.pdf).
3. Sentences 5793-7689: Croatian news web sources.

### Development set.

Contains 600 sentences (14,533 tokens) from two sources:

1. 001-200: newspaper text from the Croatian SETimes,
2. 201-600: Croatian news web sources.

### Test set.

Contains 600 sentences (13,228 tokens) from three sources:

1. sentences 001-100: newspaper text,
2. sentences 101-200: Wikipedia,
3. sentences 201-297: web sources, and
4. sentences 298-600: Croatian news web sources.

### Details

Sentence and word segmentation was manually checked. The treebank does not include multiword tokens. No language-specific features and relations were used. The POS tags and features were converted from [Multext East v4](http://nlp.ffzg.hr/data/tagging/msd-hr.html) and manually checked. The syntactic annotation was done manually.


## Acknowledgments

When using the Croatian UD treebank, please cite the following paper:

* Željko Agić and Nikola Ljubešić. 2015. [Universal Dependencies for Croatian (that work for Serbian, too).](http://aclweb.org/anthology/W/W15/W15-5301.pdf). In Proc. BSNLP, pp. 1--8 ([bib](http://aclweb.org/anthology/W/W15/W15-5301.bib)).

See file LICENSE.txt for further licensing information.



# Statistics of UD Croatian SET

## POS Tags

[ADJ](hr_set-pos-ADJ.html) – [ADP](hr_set-pos-ADP.html) – [ADV](hr_set-pos-ADV.html) – [AUX](hr_set-pos-AUX.html) – [CCONJ](hr_set-pos-CCONJ.html) – [DET](hr_set-pos-DET.html) – [INTJ](hr_set-pos-INTJ.html) – [NOUN](hr_set-pos-NOUN.html) – [NUM](hr_set-pos-NUM.html) – [PART](hr_set-pos-PART.html) – [PRON](hr_set-pos-PRON.html) – [PROPN](hr_set-pos-PROPN.html) – [PUNCT](hr_set-pos-PUNCT.html) – [SCONJ](hr_set-pos-SCONJ.html) – [SYM](hr_set-pos-SYM.html) – [VERB](hr_set-pos-VERB.html) – [X](hr_set-pos-X.html)

## Features

[Animacy](hr_set-feat-Animacy.html) – [Case](hr_set-feat-Case.html) – [Definite](hr_set-feat-Definite.html) – [Degree](hr_set-feat-Degree.html) – [Gender](hr_set-feat-Gender.html) – [Gender[psor]](hr_set-feat-Gender-psor.html) – [Mood](hr_set-feat-Mood.html) – [Number](hr_set-feat-Number.html) – [Number[psor]](hr_set-feat-Number-psor.html) – [NumType](hr_set-feat-NumType.html) – [Person](hr_set-feat-Person.html) – [Polarity](hr_set-feat-Polarity.html) – [Poss](hr_set-feat-Poss.html) – [PronType](hr_set-feat-PronType.html) – [Reflex](hr_set-feat-Reflex.html) – [Tense](hr_set-feat-Tense.html) – [VerbForm](hr_set-feat-VerbForm.html) – [Voice](hr_set-feat-Voice.html)

## Relations

[acl](hr_set-dep-acl.html) – [advcl](hr_set-dep-advcl.html) – [advmod](hr_set-dep-advmod.html) – [advmod:emph](hr_set-dep-advmod-emph.html) – [amod](hr_set-dep-amod.html) – [appos](hr_set-dep-appos.html) – [aux](hr_set-dep-aux.html) – [aux:pass](hr_set-dep-aux-pass.html) – [case](hr_set-dep-case.html) – [cc](hr_set-dep-cc.html) – [ccomp](hr_set-dep-ccomp.html) – [compound](hr_set-dep-compound.html) – [conj](hr_set-dep-conj.html) – [cop](hr_set-dep-cop.html) – [csubj](hr_set-dep-csubj.html) – [csubj:pass](hr_set-dep-csubj-pass.html) – [dep](hr_set-dep-dep.html) – [det](hr_set-dep-det.html) – [discourse](hr_set-dep-discourse.html) – [dislocated](hr_set-dep-dislocated.html) – [expl](hr_set-dep-expl.html) – [expl:pv](hr_set-dep-expl-pv.html) – [fixed](hr_set-dep-fixed.html) – [flat](hr_set-dep-flat.html) – [flat:foreign](hr_set-dep-flat-foreign.html) – [goeswith](hr_set-dep-goeswith.html) – [iobj](hr_set-dep-iobj.html) – [list](hr_set-dep-list.html) – [mark](hr_set-dep-mark.html) – [nmod](hr_set-dep-nmod.html) – [nsubj](hr_set-dep-nsubj.html) – [nsubj:pass](hr_set-dep-nsubj-pass.html) – [nummod](hr_set-dep-nummod.html) – [obj](hr_set-dep-obj.html) – [obl](hr_set-dep-obl.html) – [orphan](hr_set-dep-orphan.html) – [parataxis](hr_set-dep-parataxis.html) – [punct](hr_set-dep-punct.html) – [root](hr_set-dep-root.html) – [vocative](hr_set-dep-vocative.html) – [xcomp](hr_set-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 8889 sentences and 197044 tokens.</li>
</ul>

<ul>
<li>This corpus contains 23092 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 627 types of words that contain both letters and punctuation. Examples: UN-a, NATO-u, NATO-a, dr., OESS-a, EBRD-a, MMF-a, KFOR-a, tzv., BDP-a, UNMIK-a, prof., EU-a, HDZ-a, SAD-u, SAD-a, SDP-a, g., npr., Pop-Lazić, tj., Index.hr, sl., sv., ICTY-em, Izbori.net, Lukić-Nagy, OHR-a, r., web-stranica, Bukumirić-Katić, EP-a, MMF-om, Moody's, PDV-a, UN-ova, UNESCO-a, e-mail, engl., sc., EULEX-a, HAMAG-a, ICTY-a, KBC-u, NLO-ima, UN-ovog, on-line, st., Alpe-Adria, CiO-a</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 31 word types tagged as particles (PART): Eto, ali, ama, bar, baš, bilo, da, dakle, evo, god, i, jedva, kako, li, ma, naime, ne, neka, nešto, ni, niti, ono, pak, samo, sve, tako, to, ustvari, više, zar, što</li>
</ul>

<ul>
<li>This corpus contains 31 lemmas tagged as pronouns (PRON): ikakav, itko, ičiji, išta, ja, kakav-takav, mi, neki, netko, nečiji, nešto, nikoji, nitko, ništa, on, onakav, oni, ovakav, pokoji, sebe, svatko, svačiji, svašta, sve, ti, tko, tolik, vi, šta, što, štošta</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as determiners (DET): kakav, koji, koliki, moj, naš, nekakav, nekoliko, nikakav, njegov, njen, njezin, njihov, onaj, ovaj, sav, svaki, svoj, taj, takav, toliko, tvoj, vaš, čiji</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 17 lemmas tagged as auxiliaries (AUX): Ivan, autor, banka, bilo, biti, bivati, budeti, davati, gladovati, htjeti, moći, nakostriješiti, smjeti, susretati, težiti, za, željeti</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as AUX and sometimes as VERB: bivati, budeti, davati, htjeti, moći, smjeti, susretati, težiti, željeti</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>ADV: zahvaljujući, uključujući, govoreći, Budući, dodavši, koristeći, sudeći, tražeći, Komentirajući, baveći</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: je, su, će, bi, nije, smo, sam, neće, nisu, ćete</li>
    <li>VERB: može, ima, kaže, treba, mogu, nema, mora, postoji, možete, imaju</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: biti, bit</li>
    <li>VERB: imati, pomoći, raditi, pronaći, vidjeti, reći, nastaviti, dobiti, doći, morati</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: održana, otvorena, održan, povećana, objavljenom, održano, otvoren, rođen, namijenjen, objavljen</li>
    <li>AUX: bio, bilo, bila, bili, bile</li>
    <li>VERB: izjavio, rekao, kazao, mogli, dodao, mogla, moglo, mogao, trebala, dobili</li>
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
      <li>ADJ: prošle, hrvatske, nove, europske, druge, prva, novu, nova, političke, srpske</li>
      <li>ADJ-Part: održana, otvorena, povećana, smještene, uspostavljena, objavljena, provedena, završena, integrirane, izrečena</li>
      <li>AUX-Part: bila, bile</li>
      <li>DET: koje, koja, ove, koju, kojoj, svoje, svoju, sve, te, ta</li>
      <li>NOUN: godine, godina, zemlje, kuna, zemalja, stranke, vlada, država, strane, vlasti</li>
      <li>NUM: dvije, jedna, jednu, dviju, jedne, obje, jednoj, jednom, obiju, objema</li>
      <li>PRON: ona, joj, neke, je, ju, neku, nekim, one, nje, njom</li>
      <li>PROPN: EU, BiH, Hrvatskoj, Srbije, Hrvatska, Srbija, Hrvatske, Europe, Srbiji, Makedonija</li>
      <li>VERB-Part: mogla, trebala, izjavila, dobila, priopćila, rekla, postala, kazala, imala, objavila</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: novi, prvi, drugi, vanjskih, glavni, hrvatski, najveći, novog, bivši, prošlog</li>
      <li>ADJ-Part: održan, otvoren, rođen, namijenjen, objavljen, postignut, uhićen, nazvan, osuđen, povećan</li>
      <li>ADV: najviše</li>
      <li>AUX-Fin: Ivan, autor</li>
      <li>AUX-Part: bio, bili</li>
      <li>DET: koji, svi, svoj, taj, koje, ovaj, ovog, kojem, kojim, sve</li>
      <li>NOUN: milijuna, eura, ljudi, dana, predsjednik, način, poslova, dio, ministar, posto</li>
      <li>NUM: jedan, jednog, jednom, dva, jednim, jedni, oba, dvaju, dvama, obaju</li>
      <li>PRON: ga, mu, on, neki, oni, tko, nitko, njega, njemu, netko</li>
      <li>PROPN: SETimes, UN-a, Windows, NATO-u, Beogradu, NATO-a, Zagrebu, Zagreb, Balkanu, EU</li>
      <li>VERB-Part: izjavio, rekao, kazao, mogli, dodao, mogao, dobili, trebao, trebali, imali</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: potrebno, moguće, važno, dobro, drugo, internetskog, prvo, ljudskih, pravo, radno</li>
      <li>ADJ-Part: održano, objavljenom, objavljeno, omogućeno, predviđeno, pronađeno, utvrđeno, učinjeno, provedeno, uhićeno</li>
      <li>AUX-Part: bilo, bila</li>
      <li>DET: to, toga, koje, tome, ovo, koja, svoje, time, tim, tom</li>
      <li>NOUN: vrijeme, mjesto, prava, pitanje, mjesta, pitanja, rješenje, ulaganja, članstvo, području</li>
      <li>NUM: jedno, dva, jednog, jednom, Dvoje, Oba, jednoga</li>
      <li>PRON: što, sve, ništa, nešto, ono, čime, čega, čemu, svega, neka</li>
      <li>PROPN: Kosova, Kosovo, Kosovu, Sarajevu, Skoplju, Kosovom, Skoplja, Skoplje, Sarajevo, Vetvendosje</li>
      <li>VERB-Part: moglo, trebalo, došlo, pokazalo, dogodilo, omogućilo, dovelo, ostalo, počelo, prošlo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: najboljeg, novog, bivšeg, drugog, drugoga, popularnog, britanskog, brži, dugogodišnjeg, gangsterskog</li>
      <li>ADJ-Part: nagrađivani, nominiranog, organizirani, podređenog</li>
      <li>DET: kojeg, svojeg, njegova, svog, svoga, kojega, svakog, onoga, mog, našeg</li>
      <li>NOUN: predsjednika, kandidata, ministra, premijera, čovjeka, izvođača, sina, povjerenika, boga, ravnatelja</li>
      <li>NUM: jednog</li>
      <li>PRON: tko, nitko, nekoga, netko, koga, nekog, nikoga, nikome, svatko</li>
      <li>PROPN: Đinđića, Boga, Erdogana, Antu, Borisa, Burkaya, Gruevskog, Ivanova, Krasniqia, Krista</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: prvi, novi, veći, drugi, isti, velik, veliki, manji, najbolji, najveći</li>
      <li>ADJ-Part: baziran, iskazan, isticani, ljubljeni, nazvan, obavljeni, odgođeni, održani, oročen, otisnuti</li>
      <li>DET: svoj, koji, taj, ovaj, svaki, njihov, naš, njegov, takav, kakav</li>
      <li>NOUN: način, ponedjeljak, petak, utorak, četvrtak, rad, posao, sustav, život, razvoj</li>
      <li>NUM: jedan, dva, pedeseti, trideset</li>
      <li>PRON: što, čime, ništa, nešto, neki, čega, čemu, ovakav, čim, nečemu</li>
      <li>PROPN: SETimes, NATO, Windows, Balkan, Haag, Zagreb, Cipar, EU, Internet, Beograd</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: vanjskih, novih, drugih, mnogi, nove, unutarnjih, drugim, drugi, političkih, ostalih</li>
      <li>ADJ-Part: smještene, izabrani, izloženi, usmjerene, korištene, podijeljeni, integrirane, održani, otkriveni, podignute</li>
      <li>ADV: najviše</li>
      <li>AUX-Fin: su, smo, će, bi, nisu, ćete, ćemo, ste, biste, bismo</li>
      <li>AUX-Part: bili, bile, bila</li>
      <li>DET: koji, koje, kojima, sve, svi, svoje, svih, koja, svim, tih</li>
      <li>NOUN: milijuna, godina, eura, ljudi, kuna, zemalja, poslova, dana, zemlje, prava</li>
      <li>NUM: tri, dva, dvije, dviju, pet, deset, šest, četiri, sedam, devet</li>
      <li>PRON: ih, im, njih, mi, nam, vam, nas, neki, oni, neke</li>
      <li>PROPN: Srbi, Srba, Albanaca, Albanci, Grka, Turaka, kg, Grci, Hrvata, Hrvati</li>
      <li>VERB-Fin: mogu, možete, imaju, moraju, postoje, kažu, žele, možemo, rade, nalaze</li>
      <li>VERB-Part: mogli, dobili, trebali, imali, uspjeli, potpisali, mogle, morali, odlučili, postigli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: prvi, novi, glavni, prošle, drugi, novog, prošlog, bivši, potrebno, europske</li>
      <li>ADJ-Part: održana, održan, otvorena, povećana, objavljenom, održano, otvoren, rođen, namijenjen, objavljen</li>
      <li>AUX-Fin: je, će, bi, nije, sam, neće, bude, jest, bih, nisam</li>
      <li>AUX-Part: bio, bilo, bila</li>
      <li>DET: to, koji, koja, toga, koje, ove, koju, svoj, tome, taj</li>
      <li>NOUN: godine, predsjednik, vrijeme, način, dio, ministar, posto, ponedjeljak, tjedna, vlada</li>
      <li>NUM: jedan, jedna, jednog, jednom, jednu, jedno, jedne, jednim, jednoj, dva</li>
      <li>PRON: ga, mu, on, sve, ona, mi, joj, ono, ja, je</li>
      <li>PROPN: EU, BiH, Kosova, Hrvatskoj, Srbije, SETimes, Hrvatska, Kosovo, Srbija, Hrvatske</li>
      <li>VERB-Fin: može, ima, kaže, treba, nema, mora, postoji, radi, očekuje, navodi</li>
      <li>VERB-Part: izjavio, rekao, kazao, dodao, mogla, moglo, mogao, trebala, trebao, istaknuo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: prvi, novi, novu, nove, veliku, druge, ratne, brojne, drugi, političke</li>
      <li>ADJ-Part: usmjerene, usmjerenu, dodanu, ispunjene, iznesene, izrečeno, optuženog, organizirani, oročene, oročenu</li>
      <li>ADP: za, na, u, uz, kroz, po, pred, pod, među, nad</li>
      <li>AUX-Fin: za</li>
      <li>DET: to, koje, svoje, koju, svoj, sve, svoju, koji, taj, tu</li>
      <li>NOUN: način, vrijeme, ponedjeljak, srijedu, godinu, petak, utorak, mjesto, pomoć, potporu</li>
      <li>NUM: jedan, jednu, dvije, dva, jednog, jedno, tri, oba, obje, četiri</li>
      <li>PRON: se, što, ga, ih, nas, sve, je, nešto, ništa, vas</li>
      <li>PROPN: SETimes, EU, Kosovo, Hrvatsku, BiH, Srbiju, NATO, Tursku, Bugarsku, Europu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: drugima, europskoj, međunarodnim, drugim, gospodarskom, bivšem, državnim, europskim, hrvatskim, mnogima</li>
      <li>ADJ-Part: održanom, otežanim, podijeljenom, potpisanim, povećanim, priznatim, provedenim, ubijenom, uključenim, unesrećenome</li>
      <li>ADP: unatoč, ka, usprkos, k, nasuprot</li>
      <li>DET: kojima, tome, svim, onima, svojim, svima, kojoj, svojoj, kojemu, kojem</li>
      <li>NOUN: novinarima, zemlji, djeci, građanima, javnosti, integraciji, premijeru, uniji, članstvu, internetu</li>
      <li>NUM: jednoj, trima, Dvjema, objema, četirima</li>
      <li>PRON: im, mu, nam, vam, mi, joj, si, ti, nikome, nama</li>
      <li>PROPN: EU, NATO-u, Beogradu, Srbiji, Hrvatskoj, Europi, Kosovu, Turskoj, Bugarskoj, HDZ-u</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: vanjskih, novih, prošle, drugih, prošlog, novog, europske, unutarnjih, političkih, hrvatske</li>
      <li>ADJ-Part: organizirane, financiranog, ispitanih, izabranih, iznesenih, nadređenih, najizoliranijih, namijenjenih, obnovljenih, odobrenog</li>
      <li>ADP: od, iz, do, nakon, zbog, prije, protiv, tijekom, bez, između</li>
      <li>ADV: najviše</li>
      <li>DET: toga, ove, svih, ovog, tih, svojih, te, tog, kojih, svoje</li>
      <li>NOUN: godine, milijuna, eura, godina, kuna, dana, zemalja, poslova, posto, ljudi</li>
      <li>NUM: dviju, jednog, jedne, triju, dvaju, obiju, četiriju, obaju, desetaka, jednoga</li>
      <li>PRON: njih, čega, njega, nekog, ih, nekih, svega, nas, sebe, neke</li>
      <li>PROPN: EU, Kosova, Srbije, BiH, Hrvatske, UN-a, Europe, Turske, NATO-a, Crne</li>
      <li>SYM: %</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: drugim, ostalim, velikim, novim, političkim, brojnim, međunarodnim, samim, većim, najvećim</li>
      <li>ADJ-Part: nadređenima, predviđenim, zaštićenim, Navedenim, Provedenom, dokazanom, kvalificiranim, najavljenim, najizoliranijom, nanesenom</li>
      <li>ADP: s, sa, među, pod, za, pred, nad, Preda, umjesto</li>
      <li>DET: kojim, kojima, tim, time, svojim, kojom, svojom, svim, takvim, ovom</li>
      <li>NOUN: obzirom, ljudima, zemljama, predsjednikom, nazivom, početkom, putem, godinama, sporazumom, kolegom</li>
      <li>NUM: jednim, jednom</li>
      <li>PRON: čime, njima, sobom, njim, njom, nama, nekim, njime, čim, kim</li>
      <li>PROPN: Srbijom, Crnom, Gorom, Grčkom, Kosovom, EU, Hrvatskom, ICTY-em, Makedonijom, Beogradom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: prvom, novom, drugom, drugim, prvoj, međunarodnim, hrvatskom, svjetskom, velikoj, bivšoj</li>
      <li>ADJ-Part: objavljenom, održanoj, održanom, pogođenim, danom, objavljenoj, postavljenoj, danim, danoj, dostavljenom</li>
      <li>ADP: u, na, o, prema, po, pri, Nasuprot, ka, naspram, pred</li>
      <li>DET: kojoj, kojem, tome, tom, kojima, ovom, svojoj, ovoj, svojim, toj</li>
      <li>NOUN: godini, zemlji, svijetu, području, mjestu, slučaju, odnosu, izvješću, priopćenju, regiji</li>
      <li>NUM: jednom, jednoj, dvama, obje, objema, jednome, oba, četirima</li>
      <li>PRON: njemu, sebi, čemu, nekim, njima, svemu, nama, nekom, nekoj, nekima</li>
      <li>PROPN: Hrvatskoj, Kosovu, Srbiji, EU, Europi, Beogradu, BiH, Makedoniji, NATO-u, Zagrebu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: drugi, novi, glavni, prvi, hrvatski, bivši, potrebno, mnogi, moguće, najveći</li>
      <li>ADJ-Part: održana, otvorena, održan, povećana, održano, rođen, otvoren, namijenjen, objavljen, postignut</li>
      <li>AUX-Fin: Ivan, autor</li>
      <li>DET: koji, to, koja, koje, svi, ta, ovo, ovaj, sve, taj</li>
      <li>NOUN: predsjednik, ministar, vlada, dio, premijer, zemlja, ljudi, broj, većina, zemlje</li>
      <li>NUM: jedan, jedna, dvije, jedno, jedni, dva, obje, oba, deseci, Dvoje</li>
      <li>PRON: što, on, mi, neki, ona, oni, tko, ono, sve, ja</li>
      <li>PROPN: Hrvatska, Srbija, Kosovo, Makedonija, Bugarska, Turska, Windows, EU, Rusija, Albanija</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: Nespretni, Uzoriti, dobri, dragi, izviješteno, mala, prvi, svemogući</li>
      <li>ADJ-Part: izviješteno</li>
      <li>DET: moj, moja</li>
      <li>NOUN: gospodine, G., akademiče, braćo, budale, gospodo, gradonačelniče, kurvo, mediji, ministre</li>
      <li>PRON: ti</li>
      <li>PROPN: Bože, Isuse, Radoviću</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: novi, hrvatske, hrvatski, moguće, nove, novih, potrebno, najveći, sami, hrvatskog</li>
      <li>ADJ-Part: održana, omogućeno, otvorena, povećana, smještene, objavljena, osnovana, predviđeno, pronađeno, uvršteni</li>
      <li>ADV: najviše</li>
      <li>DET: svi, sve, svih, svim, sva, svima, svu, svoj, svega, svime</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: velik, sam, dobar, novi, prvi, gospodarski, značajan, čitav, poznat, rođen</li>
      <li>ADJ-Part: rođen, namijenjen, objavljen, nazvan, osuđen, predstavljen, uhićen, najavljen, napisan, napravljen</li>
      <li>DET: sav</li>
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
      <li>ADJ: veći, manji, veće, veća, veću, većeg, bolje, bolji, niže, većim</li>
      <li>ADJ-Part: rašireniji, složenija, složenijem</li>
      <li>ADV: više, dalje, kasnije, bolje, ranije, manje, brže, češće, lakše, dulje</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: novi, vanjskih, glavni, novih, nove, prošle, hrvatski, novog, hrvatske, moguće</li>
      <li>ADJ-Part: održana, otvorena, održan, povećana, objavljenom, održano, otvoren, rođen, namijenjen, objavljen</li>
      <li>ADV: samo, još, također, već, međutim, posto, oko, danas, kada, ipak</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: najveći, najbolji, najveća, najveće, najvećih, najbolje, najboljeg, najvažnije, najvećim, najviši</li>
      <li>ADJ-Part: najizoliranijih, najcjenjenijih, najistaknutiji, najistaknutijih, najizoliranijom, najprodavanije, najtraženijih, najčuvanijih</li>
      <li>ADV: uključujući, najviše, najbolje, najčešće, ističući, dodajući, govoreći, najmanje, ukazujući, najvjerojatnije</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADP: osim</li>
      <li>AUX-Fin: nije, neće, nisu, nisam, nismo, nećemo, neću, niste</li>
      <li>CCONJ: ni, niti</li>
      <li>NOUN: godine, investicije, isporuka, kvartalu, ljudi, mlijeka, rada, rasponu, regiji, svijeta</li>
      <li>PART: ne, ni, niti</li>
      <li>PROPN: Department, Grka, Yalcinkaya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>PART: da</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: bi, biste, bih, bismo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: budite</li>
      <li>VERB-Fin: kliknite, recimo, izbjegavajte, koristite, potražite, pročitajte, čuvajte, daj, odaberite, otiđite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: je, su, će, nije, smo, sam, neće, nisu, ćete, ćemo</li>
      <li>VERB-Fin: može, ima, kaže, treba, mogu, nema, mora, postoji, možete, imaju</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: bijaše</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADV-Conv: dodavši, rekavši, Izrazivši, Upucavši, darovavši, došavši, iskusivši, ispričavši, istaknuvši, nadmašivši</li>
      <li>AUX-Fin: bi, biste, bih, bismo</li>
      <li>AUX-Part: bio, bilo, bila, bili, bile</li>
      <li>VERB-Fin: može, dogodi, hoće, iznosi, osigura, pobuni</li>
      <li>VERB-Part: izjavio, rekao, kazao, mogli, dodao, mogla, moglo, mogao, trebala, dobili</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADV-Conv: zahvaljujući, uključujući, govoreći, Budući, koristeći, sudeći, tražeći, Komentirajući, baveći, dodajući</li>
      <li>AUX-Fin: je, su, će, nije, smo, sam, neće, nisu, ćete, ćemo</li>
      <li>VERB-Fin: može, ima, kaže, treba, mogu, nema, mora, postoji, možete, imaju</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Part: bio, bilo, bila, bili, bile</li>
      <li>VERB-Part: izjavio, rekao, kazao, mogli, dodao, mogla, moglo, mogao, trebala, dobili</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: održana, otvorena, održano, otvoren, postignut, povećana, ubijen, pronađeno, provedena, uhićen</li>
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
      <li>ADV: sada, tako, tada, onda, tu, ovdje, toliko, stoga, tamo, ondje</li>
      <li>DET: to, ove, toga, tome, taj, te, ovog, tom, ovaj, ovo</li>
      <li>PRON: ovakav, ovakve, ovakvih, ovakvim, ovakva, ovakvi, ovakvo, ovakvom, onakve, onakvi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: više, vrlo, manje, malo, mnogo, najviše, najmanje, dosta, ponekad, nekada</li>
      <li>DET: nekoliko, nekakav, nekakve, nekakvim</li>
      <li>PRON: neki, neke, nešto, nekim, neka, nekog, netko, nekih, neku, nekoga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: Koji, Kakav, Kakva, Kakvi, Kakvu, Koje</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADV: kada, kad, kako, gdje, koliko, zašto, odakle</li>
      <li>DET: koji, koje, koja, kojima, koju, kojoj, kojem, kojim, kojeg, kojih</li>
      <li>PRON: što, tko, čime, čega, čemu, koga, čim, kim, kome, kime</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nikako, nigdje, ikad</li>
      <li>DET: nikakve, nikakvu, nikakvih, nikakvi, Nikakva, nikakav, nikakvo</li>
      <li>PRON: ništa, nitko, nikome, nikoga, ničeg, NIKOG</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: svoje, svoj, svoju, svojim, njegova, svojih, njegov, naše, svojoj, njihov</li>
      <li>PRON: se, ih, mi, ga, im, mu, on, njih, nam, vam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: uvijek, svakako, svuda</li>
      <li>DET: sve, svi, svih, svim, svaki, svaka, sva, svakog, svake, svakom</li>
      <li>PRON: sve, svega, svatko, svemu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADV: više, vrlo, manje, koliko, malo, mnogo, najviše, toliko, najmanje, dosta</li>
      <li>DET: nekoliko, tolikoj</li>
      <li>NUM: tri, dva, jedan, 20, pet, 10, četiri, dvije, 15, 2</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>NUM: desetak, oba, obje, stotinjak, obiju, dvadesetak, tridesetak, dvoje, 17:00, 3:00</li>
      <li>SYM: 50%, 20%, 30%, 9%, 13%, 14%, 16%, 40%, 45%, 60%</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: 1., 2004., 2009., 2008., prvi, 2007., 2., 2005., 2006., 2010.</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: nevladinih, nevladine, UN-ova, vladinih, Appleovih, Ashdownov, Božju, UN-ovog, vladini, Appleov</li>
      <li>DET: svoje, svoj, svoju, svojim, njegova, svojih, njegov, naše, svojoj, njihov</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: svoje, svoj, svoju, svojim, svojih, svojoj, svojeg, svog, svom, svojem</li>
      <li>PRON: se, sebe, sebi, si, sobom</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: smo, sam, ćemo, bih, bismo, nismo, nisam, ću, nećemo, neću</li>
      <li>DET: naše, naš, naša, naših, našim, moj, moja, našeg, naši, našu</li>
      <li>PRON: mi, nam, nas, ja, me, nama, mene, meni, mnom</li>
      <li>VERB-Fin: možemo, mislim, imamo, moramo, želimo, mogu, vjerujem, nadamo, znam, imam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ćete, ste, biste, niste, Jeste, bi, nećete, si, ćeš, budite</li>
      <li>DET: vaš, vaša, vaše, vašem, vašim, vašeg, Tvoji, tvoja, tvoje, tvojim</li>
      <li>PRON: vam, vas, ti, vi, vama, te, tebe, tebi</li>
      <li>VERB-Fin: možete, želite, kliknite, imate, morate, nemojte, koristite, nemate, očekujete, tražite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: je, su, će, bi, nije, neće, nisu, bude, jest, budu</li>
      <li>DET: njegova, njegov, njihov, njihova, njegove, njihove, njegovu, njihovu, njezina, njihovo</li>
      <li>PRON: ih, ga, im, mu, on, njih, ona, ništa, joj, oni</li>
      <li>VERB-Fin: može, ima, kaže, treba, mogu, nema, mora, postoji, imaju, radi</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: njezina, njezine, njezin, njen, njezinu, njezinih, njezino, njene, njena, njezinim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>DET: njegova, njegov, njegove, njegovu, njegovim, njegovoj, njegovog, njegovih, njegovo, njegovom</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: naše, njihov, njihova, naš, njihove, naša, njihovu, naših, našim, njihovo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: njegova, njegov, njegove, njegovu, njezina, moj, njegovim, njezine, moja, njegovoj</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 13 lemmas as copulas (<a>cop</a>). Examples: biti, sebe, Ivan, autor, bilo, bivati, budeti, davati, gladovati, smjeti, težiti, za, željeti.</li>
</ul>

<ul>
<li>This corpus uses 23 lemmas as auxiliaries (<a>aux</a>). Examples: biti, htjeti, sebe, li, neka, on, u, od, taj, za, Dimitar, bilo, državni, isto, iz, na, o, ploviti, prav, protiv, s, svaki, svečan.</li>
<li>This corpus uses 9 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: biti, sebe, htjeti, dozvoliti, ja, na, po, također, u.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (7)</li>
      <li>VERB-Fin--NOUN-Acc (26)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(od) (1)</li>
      <li>VERB-Fin--NOUN-Dat (2)</li>
      <li>VERB-Fin--NOUN-Gen (115)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(do) (3)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(od) (13)</li>
      <li>VERB-Fin--NOUN-Nom (2489)</li>
      <li>VERB-Fin--NOUN-Voc (1)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Gen (5)</li>
      <li>VERB-Fin--PRON-Gen-ADP(od) (1)</li>
      <li>VERB-Fin--PRON-Nom (348)</li>
      <li>VERB-Inf--NOUN-Acc (8)</li>
      <li>VERB-Inf--NOUN-Gen (13)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(od) (2)</li>
      <li>VERB-Inf--NOUN-Nom (427)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Nom (55)</li>
      <li>VERB-Part--NOUN (7)</li>
      <li>VERB-Part--NOUN-Acc (11)</li>
      <li>VERB-Part--NOUN-Acc-ADP(na) (1)</li>
      <li>VERB-Part--NOUN-Gen (77)</li>
      <li>VERB-Part--NOUN-Gen-ADP(između) (1)</li>
      <li>VERB-Part--NOUN-Gen-ADP(od) (20)</li>
      <li>VERB-Part--NOUN-Gen-ADP(oko) (1)</li>
      <li>VERB-Part--NOUN-Nom (2193)</li>
      <li>VERB-Part--NOUN-Nom-ADP(nevladin) (1)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Gen (5)</li>
      <li>VERB-Part--PRON-Gen-ADP(od) (1)</li>
      <li>VERB-Part--PRON-Nom (204)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (5)</li>
      <li>VERB-Fin--NOUN-Acc (1881)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(na) (3)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(od) (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(velik) (1)</li>
      <li>VERB-Fin--NOUN-Dat (118)</li>
      <li>VERB-Fin--NOUN-Gen (216)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(od) (11)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(po) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(preko) (1)</li>
      <li>VERB-Fin--NOUN-Ins (31)</li>
      <li>VERB-Fin--NOUN-Loc (7)</li>
      <li>VERB-Fin--NOUN-Nom (45)</li>
      <li>VERB-Fin--PRON-Acc (507)</li>
      <li>VERB-Fin--PRON-Acc-ADP(na) (2)</li>
      <li>VERB-Fin--PRON-Acc-ADP(za) (3)</li>
      <li>VERB-Fin--PRON-Dat (75)</li>
      <li>VERB-Fin--PRON-Gen (2)</li>
      <li>VERB-Fin--PRON-Gen-ADP(od) (1)</li>
      <li>VERB-Fin--PRON-Ins (3)</li>
      <li>VERB-Fin--PRON-Loc (1)</li>
      <li>VERB-Fin--PRON-Nom (11)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Acc (1236)</li>
      <li>VERB-Inf--NOUN-Dat (42)</li>
      <li>VERB-Inf--NOUN-Gen (98)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(do) (2)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(između) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(od) (2)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(oko) (1)</li>
      <li>VERB-Inf--NOUN-Ins (15)</li>
      <li>VERB-Inf--NOUN-Loc (1)</li>
      <li>VERB-Inf--NOUN-Loc-ADP(u) (1)</li>
      <li>VERB-Inf--NOUN-Nom (23)</li>
      <li>VERB-Inf--PRON-Acc (175)</li>
      <li>VERB-Inf--PRON-Dat (20)</li>
      <li>VERB-Inf--PRON-Ins (2)</li>
      <li>VERB-Inf--PRON-Nom (2)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (1784)</li>
      <li>VERB-Part--NOUN-Acc-ADP(na) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(po) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(za) (1)</li>
      <li>VERB-Part--NOUN-Dat (111)</li>
      <li>VERB-Part--NOUN-Gen (163)</li>
      <li>VERB-Part--NOUN-Gen-ADP(do) (1)</li>
      <li>VERB-Part--NOUN-Gen-ADP(od) (6)</li>
      <li>VERB-Part--NOUN-Ins (25)</li>
      <li>VERB-Part--NOUN-Loc (14)</li>
      <li>VERB-Part--NOUN-Loc-ADP(o) (1)</li>
      <li>VERB-Part--NOUN-Nom (40)</li>
      <li>VERB-Part--PRON-Acc (316)</li>
      <li>VERB-Part--PRON-Acc-ADP(na) (1)</li>
      <li>VERB-Part--PRON-Acc-ADP(za) (3)</li>
      <li>VERB-Part--PRON-Dat (36)</li>
      <li>VERB-Part--PRON-Gen (2)</li>
      <li>VERB-Part--PRON-Ins (1)</li>
      <li>VERB-Part--PRON-Loc (1)</li>
      <li>VERB-Part--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (3)</li>
      <li>VERB-Fin--NOUN-Dat (78)</li>
      <li>VERB-Fin--NOUN-Gen (5)</li>
      <li>VERB-Fin--NOUN-Ins (18)</li>
      <li>VERB-Fin--NOUN-Loc (6)</li>
      <li>VERB-Fin--PRON-Dat (107)</li>
      <li>VERB-Fin--PRON-Ins (1)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Dat (59)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Ins (15)</li>
      <li>VERB-Inf--NOUN-Loc (2)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Dat (44)</li>
      <li>VERB-Inf--PRON-Loc (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Dat (92)</li>
      <li>VERB-Part--NOUN-Gen (3)</li>
      <li>VERB-Part--NOUN-Ins (14)</li>
      <li>VERB-Part--NOUN-Ins-ADP(sa) (1)</li>
      <li>VERB-Part--NOUN-Loc (5)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Dat (65)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Ins (1)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 680 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: moći se, nalaziti se, očekivati se, navoditi se, nadati se, raditi se, sastati se, odnositi se, dogoditi se, smatrati se, činiti se, trebati se, baviti se, slagati se, složiti se, koristiti se, naći se, protiviti se, morati se, suočavati se, održavati se, boriti se, osjećati se, nastaviti se, provoditi se, održati se, odvijati se, pojaviti se, pridružiti se, isticati se, pokazati se, pozivati se, sastojati se, sučeljavati se, vratiti se, žaliti se, promijeniti se, ticati se, vidjeti se, mijenjati se, povećati se, priključiti se, tražiti se, zvati se, bojati se, dodavati se, nastavljati se, okupiti se, procjenjivati se, vjerovati se</li>
</ul>


<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 260 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: baviti se, nalaziti se, vratiti se, kretati se, moći se, nadati se, pojaviti se, boriti se, odlučiti se, trebati se, činiti se, dogoditi se, odnositi se, osjećati se, pridružiti se, priključiti se, vraćati se, zalagati se, događati se, grijati se, okladiti se, očitovati se, pokazati se, pripremati se, raditi se, sastati se, sastojati se, uvjeriti se, dizati se, morati se, naći se, obratiti se, okupljati se, pitati se, probuditi se, razvijati se, služiti se, suočiti se, temeljiti se, upoznati se, širiti se, aktivirati se, brinuti se, fokusirati se, gaditi se, izjasniti se, javiti se, mijenjati se, odlučivati se, odreći se</li>
    <ul>
      <li>Out of those, 13 lemmas occurred more than once, but never without a reflexive dependent. Examples: boriti, zalagati, grijati, okladiti, probuditi, fokusirati, gaditi, izjasniti, oslanjati, požaliti, pridruživati, spojiti, zaduživati</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>advmod:emph</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>expl:pv</a>, <a>flat:foreign</a>, <a>nsubj:pass</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>reparandum</a></li>
</ul>
