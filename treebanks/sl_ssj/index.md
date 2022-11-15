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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsl_ssj211)<br />
Download all treebanks: [UD 2.11](/#download)

License: CC BY-SA 4.0

Genre: news, nonfiction, fiction

Questions, comments?
General annotation questions (either Slovenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Slovenian-SSJ/issues).
If you want to collaborate, please contact [kaja&nbsp;•&nbsp;dobrovoljc&nbsp;(æt)&nbsp;ijs&nbsp;•&nbsp;si].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description

The SSJ treebank is the reference UD treebank for Slovenian, consisting of approximately 13,000 sentences and 267,097 tokens from fiction, non-fiction, periodical and Wikipedia texts in standard modern Slovenian. As of UD release 2.10 in May 2022, the original version of the SSJ UD treebank has been partially manually revised and extended with new manually annotated data.



The original Slovenian SSJ UD Treebank, first released as part of UD v1.2 in 2015 (Dobrovoljc et al. 2017), was created through a fine-grained rule-based conversion of the ssj500k treebank (Krek et al. 2021), the largest collection of manually syntactically annotated data in Slovenian, originally annotated in the JOS annotation scheme (Erjavec et al. 2010). With the exception of the manual disambiguation of the AUX and VERB occurrences of the verb 'biti' (to be), the conversion was fully automatic, based on a set of rules for both morphosyntactic and syntactic layer, which include different lexical, morphological and dependency features, while the original ssj500k tokenization and lemmatization principles remained unchanged. The rules and conversion scripts are available at https://github.com/clarinsi/jos2ud.

In 2022, the original SSJ UD treebank was partially manually revised to correct the previously identified annotation inconsistencies, and implement the newly introduced changes in the annotation guidelines. In addition, the treebank was substantially extended to almost double the original size, with new manually annotated sentences coming from the previously unreleased subset of the ssj500k corpus, and the Slovenian subset of the ELEXIS parallel sense-annotated corpus of Wikipedia texts (Martelli et al. 2021). Despite the extension, the data split remained unchanged with the original SSJ sentences being preserved as part of the same train-dev-test subset. More details on the latest SSJ UD version are given in Dobrovoljc and Ljubešić (2022).

## Acknowledgments

We wish to thank all of the contributors to the original ssj500k training corpus (Kristina Bizjak, Živa Blaževič, Klara Canzutti, Lea Cibrič, Kaja Dobrovoljc, Tadeja Dušej, Tomaž Erjavec, Ivana Fekeža, Nanika Holz, Urška Kamenšek, Simon Krek, Andreja Košir, Robert Kuret, Nina Ledinek, Andrej Lovšin, Boštjan Marhold, Nina Mikulin, Barbara Modrijan, Sara Može, Tanja Novak, Lea Peršič, Tanja Radovič, Simona Šinkovec, Urška Vranjek, Jerneja Umer, Petra Žalodec), and the annotators within the Development of Slovene in the Digital Environment project (Tina Munda, Ina Poteko, Rebeka Roblek, Luka Terčon and Karolina Zgaga).

## Key references

* Kaja Dobrovoljc, Tomaž Erjavec, Simon Krek. 2017. The Universal Dependencies Treebank for Slovenian. In: Proceeding of the 6th Workshop on Balto-Slavic Natural Language Processing (BSNLP 2017), 33–38. Valencia, 2017.

* Kaja Dobrovoljc, Nikola Ljubešić. 2022. Extending the SSJ Universal Dependencies Treebank for Slovenian: Was it Worth it?. In: Proceedings of the 16th Linguistic Annotation Workshop (LAW-XVI), LREC 2022, 15–22. Marseille, 2022.

## Other

* Tomaž Erjavec, Darja Fišer, Simon Krek and Nina Ledinek. 2010. The JOS Linguistically Tagged Corpus of Slovene. In: Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10). Malta, 2010.

* Simon Krek et al. 2021. Training corpus ssj500k 2.3, Slovenian language resource repository CLARIN.SI, ISSN 2820-4042, http://hdl.handle.net/11356/1434.

* Federico Martelli et al. 2022. Parallel sense-annotated corpus ELEXIS-WSD 1.0, Slovenian language resource repository CLARIN.SI, ISSN 2820-4042, http://hdl.handle.net/11356/1674.



# Statistics of UD Slovenian SSJ

## POS Tags

[ADJ](sl_ssj-pos-ADJ.html) – [ADP](sl_ssj-pos-ADP.html) – [ADV](sl_ssj-pos-ADV.html) – [AUX](sl_ssj-pos-AUX.html) – [CCONJ](sl_ssj-pos-CCONJ.html) – [DET](sl_ssj-pos-DET.html) – [INTJ](sl_ssj-pos-INTJ.html) – [NOUN](sl_ssj-pos-NOUN.html) – [NUM](sl_ssj-pos-NUM.html) – [PART](sl_ssj-pos-PART.html) – [PRON](sl_ssj-pos-PRON.html) – [PROPN](sl_ssj-pos-PROPN.html) – [PUNCT](sl_ssj-pos-PUNCT.html) – [SCONJ](sl_ssj-pos-SCONJ.html) – [SYM](sl_ssj-pos-SYM.html) – [VERB](sl_ssj-pos-VERB.html) – [X](sl_ssj-pos-X.html)

## Features

[Abbr](sl_ssj-feat-Abbr.html) – [Animacy](sl_ssj-feat-Animacy.html) – [Aspect](sl_ssj-feat-Aspect.html) – [Case](sl_ssj-feat-Case.html) – [Definite](sl_ssj-feat-Definite.html) – [Degree](sl_ssj-feat-Degree.html) – [Foreign](sl_ssj-feat-Foreign.html) – [Gender](sl_ssj-feat-Gender.html) – [Gender[psor]](sl_ssj-feat-Gender-psor.html) – [Mood](sl_ssj-feat-Mood.html) – [Number](sl_ssj-feat-Number.html) – [Number[psor]](sl_ssj-feat-Number-psor.html) – [NumForm](sl_ssj-feat-NumForm.html) – [NumType](sl_ssj-feat-NumType.html) – [Person](sl_ssj-feat-Person.html) – [Polarity](sl_ssj-feat-Polarity.html) – [Poss](sl_ssj-feat-Poss.html) – [PronType](sl_ssj-feat-PronType.html) – [Reflex](sl_ssj-feat-Reflex.html) – [Tense](sl_ssj-feat-Tense.html) – [Variant](sl_ssj-feat-Variant.html) – [VerbForm](sl_ssj-feat-VerbForm.html)

## Relations

[acl](sl_ssj-dep-acl.html) – [advcl](sl_ssj-dep-advcl.html) – [advmod](sl_ssj-dep-advmod.html) – [amod](sl_ssj-dep-amod.html) – [appos](sl_ssj-dep-appos.html) – [aux](sl_ssj-dep-aux.html) – [case](sl_ssj-dep-case.html) – [cc](sl_ssj-dep-cc.html) – [cc:preconj](sl_ssj-dep-cc-preconj.html) – [ccomp](sl_ssj-dep-ccomp.html) – [conj](sl_ssj-dep-conj.html) – [cop](sl_ssj-dep-cop.html) – [csubj](sl_ssj-dep-csubj.html) – [dep](sl_ssj-dep-dep.html) – [det](sl_ssj-dep-det.html) – [discourse](sl_ssj-dep-discourse.html) – [dislocated](sl_ssj-dep-dislocated.html) – [expl](sl_ssj-dep-expl.html) – [fixed](sl_ssj-dep-fixed.html) – [flat](sl_ssj-dep-flat.html) – [flat:foreign](sl_ssj-dep-flat-foreign.html) – [flat:name](sl_ssj-dep-flat-name.html) – [iobj](sl_ssj-dep-iobj.html) – [list](sl_ssj-dep-list.html) – [mark](sl_ssj-dep-mark.html) – [nmod](sl_ssj-dep-nmod.html) – [nsubj](sl_ssj-dep-nsubj.html) – [nummod](sl_ssj-dep-nummod.html) – [obj](sl_ssj-dep-obj.html) – [obl](sl_ssj-dep-obl.html) – [orphan](sl_ssj-dep-orphan.html) – [parataxis](sl_ssj-dep-parataxis.html) – [punct](sl_ssj-dep-punct.html) – [root](sl_ssj-dep-root.html) – [vocative](sl_ssj-dep-vocative.html) – [xcomp](sl_ssj-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 13435 sentences and 267097 tokens.</li>
</ul>

<ul>
<li>This corpus contains 39149 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 148 types of words that contain both letters and punctuation. Examples: dr., i., št., d., t., m., o., p., l., oz., str., itd., npr., A., n., sv., tel., k., r., s., j., pr., š., g., b., v., H., II., c., itn., E., ipd., TAM-u, angl., mag., odst., prof., z., f., med., W., it., opr., st., tj., IV., IX., gl., ok., 1990-ih</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 56 word types tagged as particles (PART): Ma, baje, bojda, bržkone, bržčas, celo, celó, da, domala, edino, itak, ja, kajne, kajneda, kajpada, kajpak, koli, kvečjemu, le, menda, morda, morebiti, naj, najbrž, ne, nej, nemara, nikar, niti, no, pač, prav, pravzaprav, predvsem, ravno, sam, samo, samó, sem, seveda, sicer, skoraj, skorajda, sploh, tud, tudi, več, vsaj, vsej, vsekakor, zgolj, zlasti, češ, še, šele, že</li>
</ul>

<ul>
<li>This corpus contains 34 lemmas tagged as pronouns (PRON): isti, jaz, jest, kaj, kar, karkoli, kdo, kdor, kdorkoli, malokdo, marsikaj, marsikdo, medse, nadme, name, nase, nekaj, nekdo, nihče, nič, nobeden, obme, on, pome, se, skozme, teu, ti, vame, vase, vsakdo, zame, zase, čezme</li>
</ul>

<ul>
<li>This corpus contains 68 lemmas tagged as determiners (DET): dosti, dovolj, enak, isti, kak, kakršen, kakršenkoli, kakšen, kateri, katerikoli, koliko, kolikšen, malo, malokateri, manj, marsikateri, mnog, mnogo, moj, najin, največ, naš, nek, nekaj, nekak, nekakšen, nekateri, neki, nešteto, nikakršen, njegov, njen, njihov, njun, noben, oba, obilo, oboj, ogromno, oni, par, pol, premnog, prenekateri, preveč, svoj, ta, tak, takle, takšen, tale, tisti, tolik, toliko, tolikšen, tvoj, un, vajin, vaš, veliko, ves, več, vsak, vsakršen, četrt, čigar, čigav, čimveč</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: isti, nekaj</li>
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
    <li>ADV: rekoč, sodeč, molče, nehote, nevede, stoje, upoštevaje, držeč, hote, jokaje</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: je, so, bi, bo, ni, sem, bodo, sta, smo, niso</li>
    <li>VERB: je, ima, ni, gre, so, imajo, bo, mora, pomeni, pravi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: biti</li>
    <li>VERB: videti, biti, slišati, imeti, razumeti, upoštevati, vedeti, dobiti, narediti, pomagati</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: znano, določene, znana, določenih, znani, prepričan, povezani, pripravljeni, zaposlenih, znan</li>
    <li>AUX: bil, bila, bilo, bili, bile, bla, blo, bli</li>
    <li>VERB: bilo, imel, bila, imeli, moral, morali, povedal, imela, bil, rekel</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>VERB: delat, organizirat, pogledat, spat, gledat, hodit, iskat, krpat, mižat, odpotovat</li>
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
      <li>ADJ: druge, drugi, prva, nove, velika, sama, novo, druga, evropske, drugih</li>
      <li>ADJ-Part: določene, znana, povezane, prepričana, ustanovljena, določenih, namenjena, združene, določeno, imenovana</li>
      <li>AUX-Part: bila, bile, bili, bla</li>
      <li>DET: svojo, te, svoje, ta, vse, to, svoji, tej, kateri, vseh</li>
      <li>NOUN: strani, države, večina, možnosti, vrste, država, oči, podlagi, poti, skupine</li>
      <li>NUM: ena, eno, dve, eni, tri, dveh, štiri, ene, treh, dvema</li>
      <li>PRON: jo, jih, ji, njej, njo, je, ona, jim, njih, nje</li>
      <li>PROPN: Slovenije, Sloveniji, EU, Slovenija, ZDA, Evropi, Ljubljana, Ljubljani, Evrope, Slovenijo</li>
      <li>VERB-Part: bila, imela, postala, morala, začela, rekla, dobila, prišla, pokazala, povedala</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: prvi, drugi, sam, drugih, slovenski, sami, velik, novi, pravi, veliki</li>
      <li>ADJ-Part: znani, prepričan, pripravljeni, zaposlenih, znan, povezani, namenjen, sprejet, pripravljen, odraslih</li>
      <li>AUX-Part: bil, bili, bila, bli</li>
      <li>DET: ta, vsi, tem, vsak, svoj, njegov, katerem, vse, tega, tisti</li>
      <li>NOUN: primer, dan, ljudi, čas, del, času, dni, tolarjev, svetu, milijonov</li>
      <li>NUM: dva, eden, en, enega, dveh, enem, tri, treh, trije, štiri</li>
      <li>PRON: ga, jih, mu, jim, kdo, njim, njimi, njih, njem, nihče</li>
      <li>PROPN: New, Maribor, Janez, Mariboru, Bojan, ESS, Windows, Jože, Slovenci, Slovencev</li>
      <li>VERB-Part: imel, moral, povedal, imeli, morali, bil, rekel, začel, dejal, postal</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: mogoče, potrebno, pomembno, jasno, novo, drugim, težko, znano, dobro, podobno</li>
      <li>ADJ-Part: znano, povezano, prepovedano, rečeno, dovoljeno, odprto, zapisano, določeno, namenjeno, povezana</li>
      <li>AUX-Part: bilo, bila, bili, blo</li>
      <li>DET: to, tem, tega, vse, temu, svoje, njegovo, tisto, vsega, vsem</li>
      <li>NOUN: leta, let, delo, leto, letih, mesto, dela, življenje, vprašanje, mestu</li>
      <li>NUM: eno, dve, tri, štirih, dveh, enem, treh, štiri, dvema, tremi</li>
      <li>PRON: kar, kaj, nekaj, nič, ga, jih, čemer, česar, ničesar, marsikaj</li>
      <li>PROPN: Celje, Kosova, Hrvaškem, Japonskem, Kitajskem, Koroškem, Kosovu, Laško, Slovenskem, Celju</li>
      <li>VERB-Part: bilo, zgodilo, uspelo, prišlo, šlo, zdelo, začelo, ostalo, dalo, imelo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>NOUN: otroka, človeka, predsednika, moža, boga, sina, duha, konja, prijatelja, fanta</li>
      <li>PROPN: Billyja, Andreja, Henrika, Tomaža, Toneta, Boja, Carlosa, Damijana, Damjana, Filipa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>NOUN: primer, dan, čas, način, del, razvoj, denar, teden, svet, sistem</li>
      <li>PROPN: Dunaj, Irak, Jeruzalem, Nato, Pariz, Windows, Atlantik, Bled, Bruselj, Center</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: trebušni, izgubljeni, novi, posamični, zadnja, desnima, dodatna, drugačna, drugih, edini</li>
      <li>ADJ-Part: izgubljeni, interpelirana, obsojena, povezana, predstavljena, pridobljeni, Preostalih, identificirana, izoblikovana, izrezani</li>
      <li>AUX-Fin: sta, sva, bosta, nista, nisva, bova</li>
      <li>AUX-Part: bila, bili</li>
      <li>DET: oba, obeh, obe, obema, ti, svoja, ta, katerih, katerima, njuni</li>
      <li>NOUN: leti, letoma, meseca, letih, otroka, policista, primerih, starša, strani, državi</li>
      <li>NUM: dve, dva, dveh, dvema</li>
      <li>PRON: ju, nama, jima, njima, njiju, naju, midva, onadva, vaju, vama</li>
      <li>PROPN: Francoza, Belokranjca, Egipčana, Francozov, Litijana, Makedonca</li>
      <li>VERB-Fin: imata, sta, morata, prideta, sva, omogočata, postaneta, predstavljata, prihajata, vodita</li>
      <li>VERB-Part: imela, morala, bila, odšla, bili, dobila, začela, pogovarjala, srečala, hotela</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: drugih, druge, različnih, nove, drugi, novih, sami, drugimi, zadnjih, slovenskih</li>
      <li>ADJ-Part: določene, določenih, zaposlenih, povezani, pripravljeni, povezane, združenih, odraslih, prepričani, zaposleni</li>
      <li>AUX-Fin: so, bodo, smo, niso, bomo, boste, ste, nismo, niste, bodite</li>
      <li>AUX-Part: bili, bile, bila, bli</li>
      <li>DET: vse, vseh, vsi, teh, katerih, te, svojih, svoje, nekatere, nekateri</li>
      <li>NOUN: let, ljudi, letih, dni, tolarjev, milijonov, ljudje, odstotkov, oči, podatkov</li>
      <li>NUM: tri, štiri, pet, tisoč, treh, deset, štirih, sto, šest, sedem</li>
      <li>PRON: jih, nas, jim, nam, vam, njih, njimi, vas, vi, mi</li>
      <li>PROPN: ZDA, Slovenci, Slovencev, Nemci, Francozi, Rusi, Slovence, Američani, Aten, Atenah</li>
      <li>VERB-Fin: so, imajo, moramo, morajo, imamo, uporabljajo, živijo, nimajo, denimo, moremo</li>
      <li>VERB-Part: imeli, morali, začeli, dobili, bili, prišli, našli, odločili, predstavili, ugotovili</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: prvi, mogoče, drugi, sam, novo, veliko, prva, drugo, potrebno, drugega</li>
      <li>ADJ-Part: znano, znana, prepričan, znan, namenjen, sprejet, določeno, prepričana, pripravljen, ustanovljena</li>
      <li>AUX-Fin: je, bo, ni, sem, bom, nisem, si, boš, nisi, bodi</li>
      <li>AUX-Part: bil, bila, bilo, bla, blo</li>
      <li>DET: to, tem, tega, ta, vse, svojo, svoje, vsak, katerem, svoj</li>
      <li>NOUN: leta, strani, delo, primer, dan, leto, čas, del, mesto, času</li>
      <li>NUM: eno, ena, eden, enega, en, enem, eni, ene, enim, dvoje</li>
      <li>PRON: ga, jo, kar, mu, kaj, mi, ji, me, nekaj, kdo</li>
      <li>PROPN: Slovenije, Sloveniji, EU, Slovenija, Evropi, Ljubljana, Ljubljani, New, Evrope, Slovenijo</li>
      <li>VERB-Fin: je, ima, ni, gre, bo, mora, pomeni, pravi, zdi, velja</li>
      <li>VERB-Part: bilo, imel, moral, povedal, bila, bil, rekel, začel, dejal, postal</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: druge, novo, nove, veliko, drugo, prvi, prvo, različne, prihodnje, splošno</li>
      <li>ADJ-Part: določene, določeno, minuli, ostale, določen, odrasle, zaposlene, pripravljene, dodano, imenovano</li>
      <li>ADP: za, na, v, čez, skozi, po, med, pod, zoper, pred</li>
      <li>DET: to, vse, svoje, svojo, svoj, ta, vsak, te, ves, njegovo</li>
      <li>NOUN: leto, primer, delo, dan, življenje, čas, način, mesto, vlogo, voljo</li>
      <li>NUM: eno, dve, tri, dva, štiri, tisoč, pet, deset, en, enega</li>
      <li>PRON: ga, jih, jo, kaj, me, kar, nas, nekaj, vas, ju</li>
      <li>PROPN: Slovenijo, EU, Evropo, Ljubljano, Jugoslavijo, Slovence, Francijo, Nemčijo, Japonsko, Rusijo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: drugim, drugemu, novim, državnemu, mlajšim, drugi, evropskim, novemu, velikemu, desni</li>
      <li>ADJ-Part: zbranim, sodelujočim, Združenim, Zmletemu, določenemu, določeni, določenim, gnilim, grozeči, imenovanemu</li>
      <li>ADP: k, proti, kljub, h, navkljub, blizu, Klub, nasproti</li>
      <li>DET: temu, vsem, vsemu, svoji, tistim, tej, svojim, njegovi, svojemu, tem</li>
      <li>NOUN: ljudem, členu, delu, koncu, moškim, bogovom, otrokom, predsedniku, skupini, članom</li>
      <li>NUM: eni, trem, enemu, petim, štirim, petdesetim</li>
      <li>PRON: si, mu, mi, ji, jim, nam, vam, ti, njemu, sebi</li>
      <li>PROPN: Sloveniji, Evropi, Janezu, Kopaču, Ljubljani, Mariji, Srbom, Bosku, Diegu, Eulerju</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: drugih, različnih, novega, drugega, novih, evropske, slovenskih, slovenske, prvega, velikih</li>
      <li>ADJ-Part: zaposlenih, združenih, določenega, določenih, znanih, omenjenih, obolelih, nasičenih, odraslih, okuženih</li>
      <li>ADP: iz, od, do, zaradi, brez, z, poleg, s, izmed, glede</li>
      <li>DET: tega, vseh, te, teh, svojega, svoje, svojih, katerih, vsega, njegovega</li>
      <li>NOUN: leta, let, dela, ljudi, tolarjev, milijonov, časa, dni, sveta, zakona</li>
      <li>NUM: dveh, treh, enega, ene, petih, štirih, sedmih, desetih, osmih, petnajstih</li>
      <li>PRON: jih, ga, njih, nas, česar, je, njega, sebe, nje, ničesar</li>
      <li>PROPN: Slovenije, EU, Evrope, RS, ESS, Ljubljane, Slovencev, Amerike, Kosova, Zemlje</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: drugim, drugimi, različnimi, veliko, kratkim, drugo, novimi, številnimi, velikim, evropsko</li>
      <li>ADJ-Part: znanimi, ostalimi, povečanim, določenim, določenimi, imenovanimi, izrečeno, oslabljeno, povišanim, pridobljenimi</li>
      <li>ADP: z, s, med, pred, pod, za, nad</li>
      <li>DET: tem, svojo, katerimi, svojim, katerim, katero, svojimi, vsemi, temi, njegovimi</li>
      <li>NOUN: leti, pomočjo, delom, letom, vojno, časom, imenom, ljudmi, besedami, naslovom</li>
      <li>NUM: dvema, tremi, petimi, enim, eno, desetimi, šestimi, štirimi, sedmimi, devetimi</li>
      <li>PRON: njimi, njim, seboj, njo, nami, sabo, mano, njima, čimer, menoj</li>
      <li>PROPN: ZDA, Madžarsko, Rusijo, Britanijo, Davidom, Francijo, Hrvaško, Irakom, Jugoslavijo, Marjanom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: drugi, drugem, drugih, zadnjih, prvem, prvi, različnih, glavnem, novem, zadnjem</li>
      <li>ADJ-Part: določenih, odraslih, končani, minulih, omenjenem, ostalih, preteklih, imenovanem, končanem, odprtem</li>
      <li>ADP: v, na, po, pri, o, ob</li>
      <li>DET: tem, katerem, katerih, kateri, tej, svoji, vseh, njegovem, svojem, teh</li>
      <li>NOUN: letih, strani, času, svetu, delu, mestu, koncu, letu, podlagi, področju</li>
      <li>NUM: dveh, enem, eni, štirih, treh, petih, šestih, desetih, osmih, sedmih</li>
      <li>PRON: njem, njej, nas, njih, čemer, sebi, meni, čem, vas, marsičem</li>
      <li>PROPN: Sloveniji, Evropi, Ljubljani, ZDA, Ameriki, Italiji, Mariboru, Nemčiji, Rimu, Zemlji</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: mogoče, drugi, sam, prvi, prva, velika, sama, druga, potrebno, sami</li>
      <li>ADJ-Part: znano, znana, prepričan, znani, pripravljeni, znan, povezani, namenjen, prepričana, sprejet</li>
      <li>DET: to, ta, vsi, vse, njegov, njegova, vsak, tisti, nekateri, te</li>
      <li>NOUN: predsednik, ljudje, del, večina, človek, država, čas, mesto, zakon, otroci</li>
      <li>NUM: ena, eden, dva, dve, trije, tri, en, pet, tisoč, eno</li>
      <li>PRON: kar, kaj, kdo, jaz, nič, nekaj, nihče, nekdo, vi, on</li>
      <li>PROPN: Slovenija, Ljubljana, New, Maribor, Janez, LJUBLJANA, Bojan, Jože, Slovenci, Boris</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: drugi, novi, pravi, slovenski, državni, veliki, glavni, edini, zadnji, največji</li>
      <li>ADJ-Part: minuli, znani, izbrani, omenjeni, spoštovani, diplomirani, imenovani, izpodbijani, nagrajeni, navedeni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: sam, velik, drug, nov, pomemben, dober, prepričan, podoben, znan, lep</li>
      <li>ADJ-Part: prepričan, znan, namenjen, sprejet, pripravljen, povezan, rojen, določen, sestavljen, imenovan</li>
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
      <li>ADJ: večje, večji, večja, boljše, boljši, manjše, manjši, večjo, starejši, višje</li>
      <li>ADV: bolj, prej, pozneje, bolje, večkrat, kasneje, raje, dlje, hitreje, laže</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: mogoče, nove, različnih, sam, novo, veliko, velika, slovenski, novi, potrebno</li>
      <li>ADJ-Part: znano, določene, znana, določenih, znani, prepričan, povezani, pripravljeni, zaposlenih, znan</li>
      <li>ADV: lahko, tako, zelo, kako, vedno, potem, zdaj, kar, treba, danes</li>
      <li>DET: obilo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: največji, največja, najboljši, največje, največjih, najboljša, najboljših, najvišja, najmlajši, najpomembnejši</li>
      <li>ADV: najbolj, najprej, najmanj, najbolje, največkrat, najpogosteje, najverjetneje, najraje, najpozneje, najkasneje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: ni, niso, nisem, nismo, niste, nista, nisi, nisva</li>
      <li>PART: ne</li>
      <li>VERB-Fin: ni, nima, nimajo, nimam, noče, nimamo, niso, nočem, nimate, nočemo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX-Fin: je, so, bo, sem, bodo, sta, smo, bomo, boste, ste</li>
      <li>VERB-Fin: je, ima, so, imajo, bo, imamo, imam, hoče, imate, bodo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Bound
    <ul>
      <li>PRON: zanj, zase, zame, zanjo, nanj, nanjo, vanj, vanjo, nase, zanje</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>PRON: se, ga, jih, si, jo, mu, mi, ji, jim, me</li>
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
      <li>VERB-Fin: ima, imajo, mora, zdi, moramo, morajo, velja, omogoča, more, nima</li>
      <li>VERB-Inf: imeti, vedeti, živeti, govoriti, delati, veljati, sodelovati, uporabljati, igrati, paziti</li>
      <li>VERB-Part: imel, imeli, moral, morali, imela, morala, hotel, mogel, vedel, govoril</li>
      <li>VERB-Sup: delat, spat, gledat, hodit, iskat, krpat, mižat, prest, prosit, smučat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Fin: pride, postane, denimo, recimo, začne, da, povzroči, nastane, dobi, najdemo</li>
      <li>VERB-Inf: dobiti, narediti, povedati, reči, sprejeti, najti, doseči, plačati, spremeniti, ohraniti</li>
      <li>VERB-Part: povedal, rekel, začel, dejal, postal, dobil, začeli, začela, zgodilo, postala</li>
      <li>VERB-Sup: pogledat, odpotovat, ogledat, osvobodit, skuhat, zajebat</li>
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
      <li>AUX-Fin: bodite, bodi</li>
      <li>VERB-Fin: denimo, recimo, dodajte, dajte, glej, Ugotovimo, povej, vzemite, govori, pazite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: je, so, bo, ni, sem, bodo, sta, smo, niso, bomo</li>
      <li>VERB-Fin: je, ima, ni, gre, so, imajo, bo, mora, pomeni, pravi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: bo, bodo, bomo, boste, bom, bosta, boš, bova, bojo</li>
      <li>VERB-Fin: bo, bodo, boste, bom, bomo, bosta, boš</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: je, so, ni, sem, sta, smo, niso, ste, nisem, sva</li>
      <li>VERB-Fin: je, ima, ni, gre, so, imajo, mora, pomeni, pravi, zdi</li>
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
      <li>DET: več, nekaj, veliko, manj, dovolj, malo, pol, preveč, največ, nekatere</li>
      <li>PRON: nekaj, nekdo, marsikaj, nekoga, nečesa, neki, marsikoga, marsičem, nekom, marsikdo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: katerih, katerem, kateri, katere, katero, katerega, koliko, kakšno, katerimi, katerim</li>
      <li>PRON: kaj, kdo, komu, česa, koga, čem, kom, čim, kej, kva</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: nobene, nobenega, nobena, nobenih, noben, nobeno, nikakršne, nobenem, nikakršnega, nikakršnih</li>
      <li>PRON: nič, nihče, ničesar, nikogar, nikomur, ničemer, nobeden, nč, ničemur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: svoje, svojo, svoj, njegov, svojih, svojega, svoji, njegovo, njegova, njegove</li>
      <li>PRON: se, ga, jih, si, jo, mu, mi, nas, ji, jim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: kakršen, kakršnih, kakršno, kakršna, kakršne, kakršnokoli, kakršni, čigar, kakršnega, kakršnegakoli</li>
      <li>PRON: kar, čemer, česar, kdor, čimer, karkoli, kdorkoli, komerkoli, komurkoli, kogar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: vse, vseh, vsi, vsak, vsem, ves, oba, vsako, obeh, vsega</li>
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
      <li>NUM: 2, eno, 1, dve, dva, dveh, tri, ena, eden, 10</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADJ: dvojna, dvojne, dvojnega, dvojnim, dvojnimi, dvojno, trojnim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: prvi, prva, prvo, prve, prvem, prvega, prvih, tretji, tretje, tretjem</li>
      <li>NUM: 1., 20., 9., 2., 3., 18., 19., 11., 5., 17.</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: dvoje, troje, tisočerih</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: človekovih, Nobelovo, človekove, Marijinega, ogljikovih, Mešlova, Vallaressovi, alzheimerjeve, litijev, otrokove</li>
      <li>DET: svoje, svojo, svoj, njegov, svojih, svojega, svoji, njegovo, njegova, njegove</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: svoje, svojo, svoj, svojih, svojega, svoji, svojim, svojem, svojimi, svoja</li>
      <li>PRON: se, si, seboj, sebi, sebe, zase, sabo, nase, vase, medse</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sem, smo, bomo, bom, nisem, sva, nismo, nisva, bova</li>
      <li>DET: naše, moj, naša, naših, moja, naši, naš, moje, našo, moji</li>
      <li>PRON: mi, nas, nam, me, jaz, meni, zame, mene, nama, nami</li>
      <li>VERB-Fin: moramo, imamo, vem, mislim, denimo, moremo, recimo, imam, smemo, vemo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: boste, ste, si, niste, boš, bodite, nisi, bodi, sta, bosta</li>
      <li>DET: vaš, vaša, vaše, vašo, tvoje, tvoja, vašega, vašem, vaši, vaših</li>
      <li>PRON: vam, vas, ti, vi, te, vami, tebe, vaju, tebi, vama</li>
      <li>VERB-Fin: imate, morate, veste, želite, dobite, dodajte, ste, veš, imaš, potrebujete</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: je, so, bo, ni, bodo, sta, niso, bosta, nista, bojo</li>
      <li>DET: njegov, njegovo, njegova, njegove, njeno, njihove, njen, njegovem, njegovi, njene</li>
      <li>PRON: ga, jih, jo, mu, ji, jim, njih, njimi, njim, njem</li>
      <li>VERB-Fin: je, ima, ni, gre, so, imajo, bo, mora, pomeni, pravi</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: njeno, njen, njene, njena, njeni, njenih, njenega, njenim, njenem, njenemu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>DET: njegov, njegovo, njegova, njegove, njegovem, njegovi, njegovega, njegovih, njegovim, njegovimi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>DET: njegov, njegova</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>DET: njun, njuna, njuno, njunih, njuni, njune, njunega, vajino, najin, najinih</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: naše, njihove, naša, njihova, njihovo, naših, njihov, naši, njihovi, njihovih</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: njegov, njegovo, njegova, njegove, njeno, njen, njegovem, njegovi, njene, njegovega</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: dr., št., d., t., m., o., p., i., l., oz.</li>
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
          <li>X: de, the, of, a, la, and, to, on, el, von</li>
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
          <li>NUM: 2, 1, 10, 3, 6, 30, 1., 20, 4, 2000</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: I., II, II., III, I, IV., IX., V., VIII, VI</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: eno, dve, dva, dveh, tri, ena, eden, štiri, enega, pet</li>
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
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Gen (258)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(do) (4)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(okoli) (2)</li>
      <li>VERB-Fin--NOUN-Nom (3322)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Gen (28)</li>
      <li>VERB-Fin--PRON-Nom (297)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Nom (47)</li>
      <li>VERB-Inf--PRON-Nom (4)</li>
      <li>VERB-Part--NOUN-Gen (174)</li>
      <li>VERB-Part--NOUN-Gen-ADP(do) (2)</li>
      <li>VERB-Part--NOUN-Loc (1)</li>
      <li>VERB-Part--NOUN-Nom (3133)</li>
      <li>VERB-Part--PRON-Acc (7)</li>
      <li>VERB-Part--PRON-Gen (21)</li>
      <li>VERB-Part--PRON-Nom (242)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (2743)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(za) (1)</li>
      <li>VERB-Fin--NOUN-Dat (128)</li>
      <li>VERB-Fin--NOUN-Gen (554)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(do) (1)</li>
      <li>VERB-Fin--NOUN-Nom (9)</li>
      <li>VERB-Fin--PRON (16)</li>
      <li>VERB-Fin--PRON-Acc (777)</li>
      <li>VERB-Fin--PRON-Dat (227)</li>
      <li>VERB-Fin--PRON-Gen (50)</li>
      <li>VERB-Fin--PRON-Nom (7)</li>
      <li>VERB-Inf--NOUN-Acc (689)</li>
      <li>VERB-Inf--NOUN-Dat (46)</li>
      <li>VERB-Inf--NOUN-Gen (221)</li>
      <li>VERB-Inf--NOUN-Nom (3)</li>
      <li>VERB-Inf--PRON (8)</li>
      <li>VERB-Inf--PRON-Acc (175)</li>
      <li>VERB-Inf--PRON-Dat (34)</li>
      <li>VERB-Inf--PRON-Gen (49)</li>
      <li>VERB-Inf--PRON-Nom (2)</li>
      <li>VERB-Part--NOUN-Acc (3020)</li>
      <li>VERB-Part--NOUN-Dat (145)</li>
      <li>VERB-Part--NOUN-Gen (562)</li>
      <li>VERB-Part--NOUN-Gen-ADP(do) (3)</li>
      <li>VERB-Part--NOUN-Ins (1)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON (45)</li>
      <li>VERB-Part--PRON-Acc (1029)</li>
      <li>VERB-Part--PRON-Dat (304)</li>
      <li>VERB-Part--PRON-Gen (68)</li>
      <li>VERB-Part--PRON-Nom (2)</li>
      <li>VERB-Sup--NOUN-Acc (7)</li>
      <li>VERB-Sup--NOUN-Gen (1)</li>
      <li>VERB-Sup--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (15)</li>
      <li>VERB-Fin--NOUN-Dat (127)</li>
      <li>VERB-Fin--NOUN-Loc (2)</li>
      <li>VERB-Fin--PRON-Acc (22)</li>
      <li>VERB-Fin--PRON-Dat (192)</li>
      <li>VERB-Inf--NOUN-Acc (8)</li>
      <li>VERB-Inf--NOUN-Dat (44)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Dat (45)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Part--NOUN-Acc (19)</li>
      <li>VERB-Part--NOUN-Dat (145)</li>
      <li>VERB-Part--PRON (4)</li>
      <li>VERB-Part--PRON-Acc (27)</li>
      <li>VERB-Part--PRON-Dat (295)</li>
      <li>VERB-Sup--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 150 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: predstaviti se, izbrati si, zagotoviti si, poiskati si, privoščiti si, pridobiti si, kupiti si, narediti si, pomagati si, sleči se, vpisati se, nadeti si, obdati se, obleči si, obremenjevati se, poviteziti se, poškodovati se, preživljati se, prijaviti se, pripeljati se, priskrbeti si, reči si, rešiti se, služiti si, umiti se, uničiti si, zaščititi se, zlomiti si, želeti si, biti se, bičati se, braniti se, darovati sebe, delati si, določiti si, doživeti svojo, financirati se, hraniti se, identificirati se, iskati si, iskati svojo, izboljšati si, izboriti si, izbrizgati si, izdelati si, izničiti se, izprositi si, karikirati sebe, kaznovati sebe, kopati si</li>
    <ul>
      <li>Out of those, 3 lemmas occurred more than once, but never without a reflexive dependent. Examples: obleči, poviteziti, preobleči</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 3 relation subtypes: <a>cc:preconj</a>, <a>flat:foreign</a>, <a>flat:name</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
