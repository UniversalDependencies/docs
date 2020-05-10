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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhr_set26)<br />
Download all treebanks: [UD 2.6](/#download)

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

The Croatian UD treebank is based on the extension of the SETimes-HR corpus, the [hr500k](http://hdl.handle.net/11356/1183) corpus.




The sentences are partially parallel with the smaller Serbian UD treebank, which
comes from the Serbian edition of SETimes. For the UD release 2.4, the Croatian and Serbian
corpus were enriched with ```newdoc``` metadata and re-split so that the corresponding
documents are in the same section (train/dev/test) in Croatian and Serbian.

Sentence ids have also been changed to reflect the domain / source the data comes from,
and not the dependence to one of the sections (train/dev/test), as was the case
in previous releases.

### Training set.

Contains 6,844 sentences (151,226 tokens) from three sources:

1. sentence ids ```set.hr*```: pseudorandom 80% of documents of newspaper text from the [Southeast European Times](http://en.wikipedia.org/wiki/Southeast_European_Times) news website, obtained from the [SETimes parallel corpus](http://nlp.ffzg.hr/resources/corpora/setimes/). This part of the treebank is built on top of the [SETimes.HR dependency treebank of Croatian](https://github.com/ffnlp/sethr);
2. sentence ids ```news.hr*```: pseudorandom 80% of documents of Croatian news web sources.
3. sentence ids ```web.hr*``` : pseudorandom 80% of sentences of [Croatian web sources](http://nl.ijs.si/isjt14/proceedings/isjt2014_10.pdf).

### Development set.

Contains 954 sentences (21,952 tokens) from three sources:

1. sentence ids ```set.hr*```: pseudorandom 10% of documents of newspaper text from the Southeast European Times.
2. sentence ids ```news.hr*```: pseudorandom 10% of documents of Croatian news web sources.
3. sentence ids ```web.hr*``` : pseudorandom 10% of sentences of Croatian web sources.

### Test set.

Contains 1214 sentences (26,263 tokens) from four sources:

1. sentence ids ```set.hr*```: pseudorandom 10% of documents of newspaper text from the Southeast European Times (+ the previous test set from the same source).
2. sentence ids ```wiki.hr*```: old Wikipedia-based test set.
2. sentence ids ```news.hr*```: pseudorandom 10% of documents of Croatian news web sources.
3. sentence ids ```web.hr*``` : pseudorandom 10% of sentences of Croatian web sources.

### Details

Sentence and word segmentation was manually checked. The treebank does not include multiword tokens. No language-specific features and relations were used. The POS tags and features were converted from [Multext East v6](http://nl.ijs.si/ME/V6/msd/html/msd-hbs.html) (present in the XPOS column) and manually checked. The syntactic annotation was done manually.

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

[acl](hr_set-dep-acl.html) – [advcl](hr_set-dep-advcl.html) – [advmod](hr_set-dep-advmod.html) – [advmod:emph](hr_set-dep-advmod-emph.html) – [amod](hr_set-dep-amod.html) – [appos](hr_set-dep-appos.html) – [aux](hr_set-dep-aux.html) – [case](hr_set-dep-case.html) – [cc](hr_set-dep-cc.html) – [ccomp](hr_set-dep-ccomp.html) – [compound](hr_set-dep-compound.html) – [conj](hr_set-dep-conj.html) – [cop](hr_set-dep-cop.html) – [csubj](hr_set-dep-csubj.html) – [dep](hr_set-dep-dep.html) – [det](hr_set-dep-det.html) – [discourse](hr_set-dep-discourse.html) – [dislocated](hr_set-dep-dislocated.html) – [expl](hr_set-dep-expl.html) – [fixed](hr_set-dep-fixed.html) – [flat](hr_set-dep-flat.html) – [flat:foreign](hr_set-dep-flat-foreign.html) – [iobj](hr_set-dep-iobj.html) – [list](hr_set-dep-list.html) – [mark](hr_set-dep-mark.html) – [nmod](hr_set-dep-nmod.html) – [nsubj](hr_set-dep-nsubj.html) – [nummod](hr_set-dep-nummod.html) – [obj](hr_set-dep-obj.html) – [obl](hr_set-dep-obl.html) – [orphan](hr_set-dep-orphan.html) – [parataxis](hr_set-dep-parataxis.html) – [punct](hr_set-dep-punct.html) – [root](hr_set-dep-root.html) – [vocative](hr_set-dep-vocative.html) – [xcomp](hr_set-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 9010 sentences and 199409 tokens.</li>
</ul>

<ul>
<li>This corpus contains 23422 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 635 types of words that contain both letters and punctuation. Examples: UN-a, NATO-u, NATO-a, dr., OESS-a, EBRD-a, KFOR-a, MMF-a, tzv., BDP-a, UNMIK-a, prof., EU-a, HDZ-a, SAD-u, Pop-Lazić, SAD-a, SDP-a, g., npr., tj., Index.hr, sl., sv., ICTY-em, Izbori.net, Lukić-Nagy, OHR-a, UN-ova, r., web-stranica, Bukumirić-Katić, EP-a, EULEX-a, MMF-om, Moody's, PDV-a, UNESCO-a, e-mail, engl., mil., sc., st., HAMAG-a, ICTY-a, KBC-u, NLO-ima, UN-ovog, al-Qaede, on-line</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 33 word types tagged as particles (PART): Eto, ali, ama, bar, barem, baš, bilo, da, evo, god, i, jedva, kako, li, ma, moguće, ne, neka, nešto, ni, niti, npr., ono, pak, sve, tako, tek, tj., to, ustvari, zar, čak, što</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as pronouns (PRON): biti, itko, išta, ja, mi, netko, nešto, nitko, ništa, on, onaj, oni, sebe, svatko, svašta, taj, ti, tko, vi, što, štošta</li>
</ul>

<ul>
<li>This corpus contains 53 lemmas tagged as determiners (DET): barem, baš, bilo, biti, die, drugi, ikakav, isti, ičiji, jedan, kakav, kakav-takav, koji, koliki, mnogi, mnogo, moj, naš, nekakav, neki, nečiji, ni, nikakav, niti, ničiji, njegov, njen, njezin, njihov, određen, onaj, onakav, ostali, ovaj, ovakav, ovakv, pokoji, sam, sav, svakakav, svaki, svačiji, sve, svoj, taj, takav, te, the, tolik, toliko, tvoj, vaš, čiji</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as PRON and sometimes as DET: biti, onaj, taj</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): biti, htjeti</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: htjeti</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>ADV: uključujući, zahvaljujući, govoreći, ističući, dodajući, ukazujući, tražeći, opisujući, pozivajući, sudeći</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>ADV: sam</li>
    <li>AUX: je, su, će, bi, nije, smo, sam, neće, nisu, ćete</li>
    <li>DET: sam</li>
    <li>VERB: može, ima, kaže, treba, mogu, nema, mora, postoji, možete, imaju</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>ADV: zauzvrat</li>
    <li>AUX: biti, bit</li>
    <li>VERB: imati, pomoći, raditi, pronaći, vidjeti, reći, nastaviti, dobiti, doći, morati</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: održana, otvorena, održan, povećana, objavljenom, održano, otvoren, rođen, postignut, usmjerene</li>
    <li>ADV: debelo, pomalo, radoznalo</li>
    <li>AUX: bio, bilo, bila, bili, bile, si</li>
    <li>DET: bilo</li>
    <li>VERB: izjavio, rekao, kazao, mogli, mogla, dodao, mogao, moglo, trebala, dobili</li>
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
      <li>ADJ: prošle, hrvatske, sve, nove, europske, druge, nova, novu, političke, srpske</li>
      <li>ADJ-Part: održana, otvorena, povećana, smještene, uspostavljena, objavljena, provedena, završena, integrirane, izrečena</li>
      <li>AUX-Part: bila, bile</li>
      <li>CCONJ: te</li>
      <li>DET: koje, koja, ove, koju, kojoj, svoje, svoju, te, ta, kojima</li>
      <li>NOUN: godine, godina, zemlje, kuna, zemalja, stranke, država, strane, vlada, vlasti</li>
      <li>NUM: dvije, jedna, jednu, dviju, jedne, obje, jednoj, prva, druge, jednom</li>
      <li>PRON: ona, joj, je, ju, one, nje, njom, nju, njoj, njome</li>
      <li>PROPN: BiH, Hrvatskoj, Srbije, Hrvatska, Srbija, Hrvatske, Europe, Srbiji, Makedonija, Turske</li>
      <li>VERB-Part: mogla, trebala, izjavila, dobila, priopćila, rekla, postala, imala, kazala, objavila</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: novi, svi, drugi, vanjskih, prvi, glavni, hrvatski, bivši, najveći, novog</li>
      <li>ADJ-Part: održan, otvoren, rođen, postignut, namijenjen, objavljen, osuđen, uhićen, izloženi, nazvan</li>
      <li>AUX-Part: bio, bili</li>
      <li>DET: koji, svoj, taj, neki, koje, ovaj, ovog, kojem, kojim, kojima</li>
      <li>NOUN: milijuna, eura, ljudi, dana, predsjednik, poslova, način, ministar, dio, ponedjeljak</li>
      <li>NUM: jedan, jednog, prvi, jednom, jednim, jedni, drugi, oba, dvaju, prvih</li>
      <li>PRON: ga, mu, on, oni, tko, nitko, njega, njemu, netko, svatko</li>
      <li>PROPN: EU, SETimes, UN-a, Windows, Beogradu, NATO-u, NATO-a, Bog, Zagrebu, Zagreb</li>
      <li>VERB-Part: izjavio, rekao, kazao, mogli, dodao, mogao, dobili, trebao, trebali, imali</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: moguće, potrebno, važno, dobro, drugo, internetskog, ljudskih, pravo, radnih, radno</li>
      <li>ADJ-Part: održano, objavljenom, objavljeno, omogućeno, pronađeno, utvrđeno, učinjeno, predviđeno, provedeno, uhićeno</li>
      <li>ADP: to</li>
      <li>ADV: debelo, nešto, pomalo, radoznalo</li>
      <li>ADV-Part: debelo, pomalo, radoznalo</li>
      <li>AUX-Part: bilo, bila, si</li>
      <li>DET: to, toga, koje, tome, sve, ovo, koja, svoje, time, tim</li>
      <li>DET-Part: bilo</li>
      <li>NOUN: vrijeme, mjesto, prava, pitanje, mjesta, pitanja, ulaganja, rješenje, članstvo, području</li>
      <li>NUM: jedno, prvo, prvom, drugo, prvim, jednog, jednom, treće, Dvoje, Oba</li>
      <li>PRON: što, ništa, nešto, ono, čime, čega, čemu, ona, išta, nečemu</li>
      <li>PROPN: Kosova, Kosovo, Kosovu, Sarajevu, Skoplju, Kosovom, Skoplja, Skoplje, Jarinje, Sarajevo</li>
      <li>SCONJ: što</li>
      <li>VERB-Part: moglo, trebalo, došlo, pokazalo, dogodilo, omogućilo, ostalo, dovelo, počelo, prošlo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: bivšeg, najboljeg, novog, glavnog, drugog, drugoga, britanskog, kosovskog, optuženog, popularnog</li>
      <li>ADJ-Part: optuženog, gonjenog, nagrađivani, nominiranog, organizirani, plaćenog, podređenog, predloženog, zaštićenog</li>
      <li>DET: kojeg, svojeg, nekoga, njegova, svog, svoga, kojega, svakog, onoga, jednog</li>
      <li>NOUN: predsjednika, kandidata, ministra, premijera, čovjeka, izvođača, sina, povjerenika, ravnatelja, savjetnika</li>
      <li>NUM: jednog, prvog</li>
      <li>PRON: nikoga</li>
      <li>PROPN: Boga, Đinđića, Erdogana, Antu, Borisa, Burkaya, Gruevskog, Ivanova, Krasniqia, Krista</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: novi, prvi, veći, veliki, drugi, gospodarski, velik, najbolji, isti, najveći</li>
      <li>ADJ-Part: nazvan, očekivani, predloženi, baziran, iskazan, isticani, kategoriziran, ljubljeni, nadziran, obavljeni</li>
      <li>DET: svoj, koji, taj, ovaj, njihov, svaki, neki, naš, takav, njegov</li>
      <li>NOUN: način, ponedjeljak, utorak, petak, četvrtak, rad, posao, život, sustav, razvoj</li>
      <li>NUM: jedan, prvi, drugi, treći, pedeseti, trideset</li>
      <li>PROPN: SETimes, EU, NATO, Windows, Balkan, Haag, Zagreb, Cipar, Beograd, Ferrari</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: svi, sve, vanjskih, novih, svih, drugih, unutarnjih, nove, drugi, svim</li>
      <li>ADJ-Part: izloženi, smještene, usmjerene, izabrani, korištene, podijeljeni, integrirane, održani, podignute, uključene</li>
      <li>AUX-Fin: su, smo, će, bi, nisu, ćete, ćemo, ste, biste, bismo</li>
      <li>AUX-Part: bili, bile, bila</li>
      <li>DET: koji, koje, kojima, svoje, neki, koja, tih, svojim, oni, svojih</li>
      <li>NOUN: godina, milijuna, eura, ljudi, kuna, zemalja, poslova, dana, zemlje, prava</li>
      <li>NUM: dvije, dviju, prvih, triju, jedni, drugih, drugim, dvaju, druge, prve</li>
      <li>PRON: ih, im, njih, mi, nam, vam, nas, oni, njima, vas</li>
      <li>PROPN: Srbi, Srba, Albanaca, Albanci, Grka, Turaka, Grci, Hrvata, Hrvati, Crnogorci</li>
      <li>VERB-Fin: mogu, možete, imaju, moraju, postoje, kažu, žele, možemo, rade, nalaze</li>
      <li>VERB-Part: mogli, dobili, trebali, imali, uspjeli, potpisali, morali, mogle, odlučili, postigli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: novi, prvi, glavni, prošle, novog, drugi, bivši, prošlog, potrebno, najveći</li>
      <li>ADJ-Part: održana, održan, otvorena, objavljenom, povećana, održano, otvoren, rođen, postignut, namijenjen</li>
      <li>ADP: to</li>
      <li>ADV-Fin: sam</li>
      <li>ADV-Part: debelo, pomalo, radoznalo</li>
      <li>AUX: je, će, bi, nije, bio, bilo, sam, bila, neće, bude</li>
      <li>AUX-Fin: je, će, bi, nije, sam, neće, bude, jest, bih, nisam</li>
      <li>AUX-Part: bio, bilo, bila, si</li>
      <li>CCONJ: te</li>
      <li>DET: to, koji, koja, toga, ove, koje, koju, svoj, tome, sve</li>
      <li>DET-Fin: sam</li>
      <li>DET-Part: bilo</li>
      <li>NOUN: godine, predsjednik, vrijeme, način, ministar, dio, ponedjeljak, tjedna, premijer, broj</li>
      <li>NUM: jedan, jedna, jednom, jednog, jednu, prvi, jedno, jedne, jednoj, prva</li>
      <li>PRON: ga, mu, on, ona, mi, joj, ono, ja, je, njega</li>
      <li>PROPN: EU, BiH, Kosova, Hrvatskoj, Srbije, SETimes, Hrvatska, Kosovo, Srbija, UN-a</li>
      <li>VERB-Fin: može, ima, kaže, treba, nema, mora, postoji, radi, očekuje, navodi</li>
      <li>VERB-Part: izjavio, rekao, kazao, dodao, mogla, mogao, moglo, trebala, trebao, istaknuo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: sve, novi, novu, nove, prvi, veliku, druge, ratne, brojne, političke</li>
      <li>ADJ-Part: usmjerene, usmjerenu, dodanu, ispunjene, iznesene, izrečeno, nazvan, optuženog, oročene, oročenu</li>
      <li>ADP: za, u, na, uz, kroz, po, pred, pod, među, nad</li>
      <li>DET: to, koje, svoje, koju, svoj, sve, svoju, koji, taj, tu</li>
      <li>NOUN: način, ponedjeljak, vrijeme, srijedu, godinu, utorak, petak, mjesto, četvrtak, pomoć</li>
      <li>NUM: jedan, jednu, dvije, prvi, jednog, jedno, drugi, prvu, drugo, oba</li>
      <li>PRON: se, ga, ih, što, nas, je, ništa, vas, nešto, me</li>
      <li>PROPN: SETimes, EU, Kosovo, Hrvatsku, BiH, Srbiju, Tursku, NATO, Bugarsku, Windows</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: svim, drugima, europskoj, međunarodnim, svima, gospodarskom, bivšem, drugim, državnim, europskim</li>
      <li>ADJ-Part: održanom, otežanim, podijeljenom, potpisanim, povećanim, priznatim, provedenim, ubijenom, uključenim, unesrećenome</li>
      <li>ADP: unatoč, ka, usprkos, k, nasuprot</li>
      <li>DET: tome, kojima, onima, svojim, kojoj, svim, svojoj, kojemu, kojem, toj</li>
      <li>NOUN: novinarima, zemlji, djeci, građanima, javnosti, integraciji, premijeru, uniji, zajednici, članstvu</li>
      <li>NUM: jednoj, drugim, Dvjema, objema, prvoj, trećem</li>
      <li>PRON: im, mu, nam, vam, mi, joj, ti, si, nikome, nama</li>
      <li>PROPN: EU, NATO-u, Beogradu, Srbiji, Hrvatskoj, Europi, Kosovu, Vladi, Turskoj, Bogu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: vanjskih, novih, prošle, svih, prošlog, novog, drugih, unutarnjih, europske, hrvatske</li>
      <li>ADJ-Part: organizirane, postavljenih, financiranog, ispitanih, izabranih, iznesenih, nadređenih, namijenjenih, obnovljenih, odobrenog</li>
      <li>ADP: od, iz, do, nakon, zbog, tijekom, protiv, prije, bez, između</li>
      <li>CCONJ: te</li>
      <li>DET: toga, ove, ovog, tih, svojih, te, tog, kojih, svih, svoje</li>
      <li>NOUN: godine, milijuna, eura, godina, kuna, dana, zemalja, poslova, ljudi, tjedna</li>
      <li>NUM: dviju, jednog, jedne, prvih, triju, drugih, dvaju, obiju, druge, prvog</li>
      <li>PRON: njih, čega, njega, ih, nas, sebe, nje, koga, nečeg, nečega</li>
      <li>PROPN: EU, Kosova, Srbije, BiH, UN-a, Hrvatske, Europe, Turske, NATO-a, Crne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: drugim, ostalim, velikim, novim, političkim, brojnim, međunarodnim, samim, većim, najvećim</li>
      <li>ADJ-Part: nadređenima, zaštićenim, Navedenim, Provedenom, dokazanom, kvalificiranim, najavljenim, nanesenom, nominiranima, nošenim</li>
      <li>ADP: s, sa, među, pod, za, pred, nad, Preda, umjesto</li>
      <li>DET: kojim, kojima, tim, time, svojim, kojom, svojom, takvim, ovom, nekim</li>
      <li>NOUN: obzirom, ljudima, predsjednikom, zemljama, nazivom, godinama, kolegom, sporazumom, pritiskom, zakonom</li>
      <li>NUM: jednim, jednom, drugim, drugom, prvim, obje, trećim, trećom, trima</li>
      <li>PRON: čime, njima, sobom, njim, njom, nama, njime, kim, kime, mnom</li>
      <li>PROPN: Srbijom, Crnom, Gorom, Grčkom, Kosovom, EU, Hrvatskom, ICTY-em, Makedonijom, Beogradom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: svim, novom, drugim, hrvatskom, drugom, međunarodnim, prvom, svjetskom, tiskovnoj, objavljenom</li>
      <li>ADJ-Part: objavljenom, održanoj, održanom, pogođenim, danom, objavljenoj, postavljenoj, danim, danoj, dostavljenom</li>
      <li>ADP: u, na, o, prema, po, pri, ka, naspram, pred</li>
      <li>DET: kojoj, kojem, tome, tom, kojima, ovom, svojoj, ovoj, svojim, toj</li>
      <li>NOUN: godini, zemlji, svijetu, području, mjestu, slučaju, odnosu, regiji, izvješću, priopćenju</li>
      <li>NUM: jednom, prvom, jednoj, prvoj, drugom, trećem, dvama, obje, objema, prvim</li>
      <li>PRON: njemu, sebi, čemu, njima, nama, njoj, meni, nečemu, nečem, svačemu</li>
      <li>PROPN: Hrvatskoj, Kosovu, Srbiji, Beogradu, EU, Europi, Makedoniji, BiH, NATO-u, Zagrebu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: svi, drugi, novi, glavni, hrvatski, bivši, moguće, potrebno, prvi, najveći</li>
      <li>ADJ-Part: održana, otvorena, održan, povećana, održano, rođen, otvoren, postignut, namijenjen, objavljen</li>
      <li>ADP: to</li>
      <li>ADV: nešto</li>
      <li>AUX: ja</li>
      <li>DET: koji, to, koja, koje, neki, ta, ovo, sve, taj, oni</li>
      <li>NOUN: predsjednik, ministar, premijer, dio, vlada, zemlja, ljudi, broj, većina, zemlje</li>
      <li>NUM: jedan, jedna, dvije, prvi, jedno, prva, jedni, obje, oba, druga</li>
      <li>PRON: što, on, mi, ona, oni, tko, ono, ja, nitko, netko</li>
      <li>PROPN: Hrvatska, Srbija, Kosovo, Makedonija, Bugarska, Turska, Windows, Vlada, EU, Bog</li>
      <li>SCONJ: što</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: Najdraži, Nespretni, Uzoriti, dobri, dragi, mala, prvi, svemogući</li>
      <li>DET: moj, moja, moji</li>
      <li>NOUN: gospodine, akademiče, braćo, budale, gospodo, gradonačelniče, kurvo, mediji, ministre, pape</li>
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
      <li>ADJ: novi, sve, svi, vanjskih, glavni, novih, nove, prošle, hrvatski, moguće</li>
      <li>ADJ-Part: održana, otvorena, povećana, objavljenom, održano, usmjerene, izloženi, objavljena, smještene, uspostavljena</li>
      <li>DET: sve, svih, svi, svim, sva, mnogi, ostalih, mnoge, ostala, ostale</li>
      <li>NUM: 11-tog, devedesetim, osamdesetih, prvoj, prvom, trećom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: velik, sam, dobar, važan, poznat, održan, otvoren, postignut, rođen, siguran</li>
      <li>ADJ-Part: održan, otvoren, rođen, postignut, namijenjen, objavljen, osuđen, uhićen, nazvan, povećan</li>
      <li>DET: sam, određen</li>
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
      <li>ADJ: veći, veće, manji, veća, veću, većeg, bolje, bolji, niže, većim</li>
      <li>ADV: više, dalje, manje, kasnije, bolje, ranije, brže, češće, lakše, dulje</li>
      <li>DET: više</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: novi, sve, svi, drugi, vanjskih, prvi, glavni, novih, nove, prošle</li>
      <li>ADJ-Part: održana, otvorena, održan, povećana, objavljenom, održano, otvoren, rođen, postignut, usmjerene</li>
      <li>ADV: samo, još, također, posto, već, međutim, oko, vrlo, danas, kada</li>
      <li>DET: sve, svih, svi, svim, sva, mnogi, ostalih, mnoge, druge, ostala</li>
      <li>NUM: prvi, prva, prvih, prvom, drugi, drugih, druge, drugim, prvo, prvoj</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: najveći, najbolji, najveća, najveće, najvećih, najbolje, najboljeg, najvažnije, najvećim, najvećem</li>
      <li>ADV: najviše, najmanje, najbolje, najčešće, najvjerojatnije, najradije, najgore, najteže, Najdalje, najbrže</li>
      <li>NUM: trećom</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: nije, neće, nisu, nismo, nisam, nećemo, niste, nećete, neću, nećeš</li>
      <li>DET: Niti, ni</li>
      <li>PART: ne, niti, ni</li>
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
      <li>AUX-Fin: bi, biste, bismo, bih</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: budite</li>
      <li>VERB-Fin: kliknite, recimo, izbjegavajte, koristite, potražite, pročitajte, čuvajte, daj, nemojte, odaberite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV-Fin: sam</li>
      <li>AUX-Fin: je, su, će, nije, smo, sam, neće, nisu, ćete, ćemo</li>
      <li>DET-Fin: sam</li>
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
      <li>ADV-Conv: dodavši, rekavši, kazavši, pobijedivši, završivši, dosegnuvši, naglasivši, primijetivši, Izrazivši, Napomenuvši</li>
      <li>ADV-Part: debelo, pomalo, radoznalo</li>
      <li>AUX-Fin: bi, biste, bismo, bih</li>
      <li>AUX-Part: bio, bilo, bila, bili, bile, si</li>
      <li>DET-Part: bilo</li>
      <li>VERB-Fin: može, dogodi, hoće, iznosi, osigura, pobuni</li>
      <li>VERB-Part: izjavio, rekao, kazao, mogli, mogla, dodao, mogao, moglo, trebala, dobili</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADV-Conv: uključujući, zahvaljujući, govoreći, ističući, dodajući, ukazujući, tražeći, opisujući, pozivajući, sudeći</li>
      <li>ADV-Fin: sam</li>
      <li>AUX-Fin: je, su, će, nije, smo, sam, neće, nisu, ćete, ćemo</li>
      <li>DET-Fin: sam</li>
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
      <li>ADV-Part: debelo, pomalo, radoznalo</li>
      <li>AUX-Part: bio, bilo, bila, bili, bile, si</li>
      <li>DET-Part: bilo</li>
      <li>VERB-Part: izjavio, rekao, kazao, mogli, mogla, dodao, mogao, moglo, trebala, dobili</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: održana, otvorena, održan, povećana, objavljenom, održano, otvoren, rođen, postignut, usmjerene</li>
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
      <li>ADP: to</li>
      <li>ADV: sada, tako, tada, onda, tu, ovdje, zato, toliko, stoga, tamo</li>
      <li>CCONJ: te</li>
      <li>DET: to, ove, toga, tome, taj, ovog, te, tom, ovaj, ovo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: nekoliko, ponekad, ikad, nekada, negdje, ikada, nekad, nekako, nešto, odnekud</li>
      <li>DET: neki, neke, nekim, neka, nekog, nekih, neku, neko, nekoga, nekom</li>
      <li>NUM: nekoliko</li>
      <li>PRON: nešto, netko, itko, išta, nečemu, nekome, nečeg, nečega, nekog, nečem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADV: kada, kad, gdje, koliko, kako, zašto, odakle</li>
      <li>DET: koji, koje, koja, kojima, koju, kojoj, kojem, kojim, kojeg, kojih</li>
      <li>PRON: što, tko, čime, čega, čemu, koga, kim, kome, kime, čim</li>
      <li>SCONJ: što</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nikad, nikada, nikako, nigdje</li>
      <li>DET: nikakve, nikakvu, nikakvih, nikakvo, nikakvi, Nikakva, nikakav, ničiju</li>
      <li>PRON: ništa, nitko, nikome, nikoga, ničeg, NIKOG</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>AUX: ja</li>
      <li>DET: svoje, svoj, svoju, svojim, njegova, svojih, njegov, njihov, naše, svojoj</li>
      <li>NUM: svojoj</li>
      <li>PRON: se, ih, mi, ga, im, mu, on, njih, nam, vam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: uvijek, svakako, svuda, svugdje, posvuda</li>
      <li>DET: sve, svaki, svaka, svakog, svega, svake, svakom, svemu, svako, svaku</li>
      <li>PRON: svatko, svačemu, svašta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: jedan, jednog, jednu</li>
      <li>NUM: tri, dva, jedan, pet, četiri, 20, 10, šest, dvije, deset</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>NUM: desetak, oba, dvoje, obje, dvadesetak, stotinjak, troje, obiju, 6-4, tridesetak</li>
      <li>SYM: 50%, 20%, 30%, 13%, 14%, 16%, 40%, 45%, 60%, 66%</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: 1., 2004., 2008., 2007., 2009., 2., 2005., 2006., 2010., 21.</li>
      <li>NUM: 11., 1., 30., 10., 14., 2001., 27., 28., 6., 12.</li>
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
      <li>DET: svoje, svoj, svoju, svojim, njegova, svojih, njegov, njihov, naše, svojoj</li>
      <li>NUM: svojoj</li>
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
      <li>NUM: svojoj</li>
      <li>PRON: se, sebe, sebi, sobom, si</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADV-Fin: sam</li>
      <li>AUX: smo, sam, ćemo, bismo, nismo, bih, nisam, ću, nećemo, neću</li>
      <li>AUX-Fin: smo, sam, ćemo, bismo, nismo, bih, nisam, ću, nećemo, neću</li>
      <li>DET: naše, naš, naša, našim, naših, moj, moja, našeg, naši, našu</li>
      <li>DET-Fin: sam</li>
      <li>PRON: mi, nam, nas, ja, me, nama, mene, meni, mnom</li>
      <li>VERB-Fin: možemo, mislim, imamo, moramo, želimo, mogu, nadamo, vjerujem, nadam, znam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: ćete, ste, biste, bi, niste, Jeste, si, nećete, ćeš, budite</li>
      <li>DET: vaše, vašem, vaš, vaša, vašim, vašeg, tvoj, Tvoji, tvoja, tvoje</li>
      <li>PRON: vam, vas, ti, vi, vama, te, tebe, tebi</li>
      <li>VERB-Fin: možete, želite, kliknite, imate, morate, nemojte, koristite, možeš, nemate, očekujete</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: je, su, će, bi, nije, neće, nisu, bude, jest, hoće</li>
      <li>DET: njegova, njegov, njihov, njihova, njegove, njihove, njegovu, njihovu, njezina, njihovo</li>
      <li>PRON: ih, ga, im, mu, on, njih, ona, joj, oni, ono</li>
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
      <li>DET: njezina, njezine, njezin, njen, njezinu, njezinih, njene, njezino, njezinom, njena</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>DET: njegova, njegov, njegove, njegovu, njegovim, njegovoj, njegovog, njegovo, njegovih, njegovom</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: njihov, naše, njihova, naš, njihove, naša, njihovu, našim, naših, njihovo</li>
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
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: biti.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: biti, htjeti.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (7)</li>
      <li>VERB-Fin--NOUN-Acc (31)</li>
      <li>VERB-Fin--NOUN-Dat (2)</li>
      <li>VERB-Fin--NOUN-Gen (110)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(do) (3)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(od) (14)</li>
      <li>VERB-Fin--NOUN-Nom (2690)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(diljem) (1)</li>
      <li>VERB-Fin--NOUN-Voc (1)</li>
      <li>VERB-Fin--PRON-Acc (6)</li>
      <li>VERB-Fin--PRON-Gen (5)</li>
      <li>VERB-Fin--PRON-Gen-ADP(od) (1)</li>
      <li>VERB-Fin--PRON-Nom (349)</li>
      <li>VERB-Inf--NOUN-Acc (11)</li>
      <li>VERB-Inf--NOUN-Gen (15)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(od) (2)</li>
      <li>VERB-Inf--NOUN-Nom (468)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Nom (53)</li>
      <li>VERB-Part--NOUN (6)</li>
      <li>VERB-Part--NOUN-Acc (12)</li>
      <li>VERB-Part--NOUN-Acc-ADP(na) (1)</li>
      <li>VERB-Part--NOUN-Gen (79)</li>
      <li>VERB-Part--NOUN-Gen-ADP(od) (21)</li>
      <li>VERB-Part--NOUN-Gen-ADP(oko) (1)</li>
      <li>VERB-Part--NOUN-Gen-ADP(više) (1)</li>
      <li>VERB-Part--NOUN-Nom (2289)</li>
      <li>VERB-Part--NOUN-Nom-ADP(između) (1)</li>
      <li>VERB-Part--PRON-Acc (5)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Gen (5)</li>
      <li>VERB-Part--PRON-Gen-ADP(od) (1)</li>
      <li>VERB-Part--PRON-Nom (208)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (7)</li>
      <li>VERB-Fin--NOUN-Acc (1910)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(na) (3)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(od) (2)</li>
      <li>VERB-Fin--NOUN-Dat (121)</li>
      <li>VERB-Fin--NOUN-Gen (204)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(od) (12)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(preko) (1)</li>
      <li>VERB-Fin--NOUN-Ins (31)</li>
      <li>VERB-Fin--NOUN-Loc (5)</li>
      <li>VERB-Fin--NOUN-Nom (45)</li>
      <li>VERB-Fin--PRON-Acc (498)</li>
      <li>VERB-Fin--PRON-Acc-ADP(na) (2)</li>
      <li>VERB-Fin--PRON-Acc-ADP(za) (3)</li>
      <li>VERB-Fin--PRON-Dat (73)</li>
      <li>VERB-Fin--PRON-Gen (3)</li>
      <li>VERB-Fin--PRON-Gen-ADP(od) (1)</li>
      <li>VERB-Fin--PRON-Ins (3)</li>
      <li>VERB-Fin--PRON-Loc (1)</li>
      <li>VERB-Fin--PRON-Nom (11)</li>
      <li>VERB-Inf--NOUN (3)</li>
      <li>VERB-Inf--NOUN-Acc (1255)</li>
      <li>VERB-Inf--NOUN-Dat (42)</li>
      <li>VERB-Inf--NOUN-Gen (95)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(do) (2)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(između) (1)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(od) (2)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(oko) (1)</li>
      <li>VERB-Inf--NOUN-Ins (15)</li>
      <li>VERB-Inf--NOUN-Loc (1)</li>
      <li>VERB-Inf--NOUN-Loc-ADP(u) (1)</li>
      <li>VERB-Inf--NOUN-Nom (17)</li>
      <li>VERB-Inf--PRON-Acc (162)</li>
      <li>VERB-Inf--PRON-Dat (20)</li>
      <li>VERB-Inf--PRON-Ins (2)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (1820)</li>
      <li>VERB-Part--NOUN-Acc-ADP(na) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(po) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(za) (1)</li>
      <li>VERB-Part--NOUN-Dat (110)</li>
      <li>VERB-Part--NOUN-Gen (167)</li>
      <li>VERB-Part--NOUN-Gen-ADP(do) (1)</li>
      <li>VERB-Part--NOUN-Gen-ADP(od) (6)</li>
      <li>VERB-Part--NOUN-Ins (26)</li>
      <li>VERB-Part--NOUN-Loc (13)</li>
      <li>VERB-Part--NOUN-Loc-ADP(o) (1)</li>
      <li>VERB-Part--NOUN-Nom (36)</li>
      <li>VERB-Part--PRON-Acc (310)</li>
      <li>VERB-Part--PRON-Acc-ADP(na) (1)</li>
      <li>VERB-Part--PRON-Acc-ADP(za) (4)</li>
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
      <li>VERB-Fin--NOUN-Dat (84)</li>
      <li>VERB-Fin--NOUN-Gen (5)</li>
      <li>VERB-Fin--NOUN-Ins (18)</li>
      <li>VERB-Fin--NOUN-Loc (4)</li>
      <li>VERB-Fin--PRON-Dat (106)</li>
      <li>VERB-Fin--PRON-Ins (1)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Dat (60)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Ins (15)</li>
      <li>VERB-Inf--NOUN-Loc (2)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Dat (44)</li>
      <li>VERB-Inf--PRON-Loc (1)</li>
      <li>VERB-Part--NOUN-Dat (94)</li>
      <li>VERB-Part--NOUN-Gen (4)</li>
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



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 260 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: baviti se, nalaziti se, vratiti se, kretati se, moći se, nadati se, pojaviti se, boriti se, odlučiti se, trebati se, činiti se, dogoditi se, odnositi se, osjećati se, pridružiti se, priključiti se, vraćati se, zalagati se, događati se, grijati se, okladiti se, očitovati se, pokazati se, pripremati se, raditi se, sastati se, sastojati se, uvjeriti se, dizati se, morati se, naći se, obratiti se, okupljati se, pitati se, probuditi se, razvijati se, služiti se, suočiti se, temeljiti se, upoznati se, širiti se, aktivirati se, brinuti se, fokusirati se, gaditi se, izjasniti se, javiti se, mijenjati se, odlučivati se, odreći se</li>
    <ul>
      <li>Out of those, 6 lemmas occurred more than once, but never without a reflexive dependent. Examples: grijati, okladiti, fokusirati, gaditi, požaliti, pridruživati</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 2 relation subtypes: <a>advmod:emph</a>, <a>flat:foreign</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
