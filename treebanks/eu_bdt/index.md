---
layout: base
title:  'UD_Basque-BDT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Basque BDT

Language: [Basque](/eu/index.html) (code: `eu`)<br/>
Family: Basque

This treebank has been part of Universal Dependencies since the UD v1.1 release.

The following people have contributed to making this treebank part of UD: Maria Jesus Aranzabe, Aitziber Atutxa, Kepa Bengoetxea, Arantza Diaz de Ilarraza, Iakes Goenaga, Koldo Gojenola, Larraitz Uria.

Repository: [UD_Basque-BDT](https://github.com/UniversalDependencies/UD_Basque-BDT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udeu_bdt27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-NC-SA 3.0

Genre: news

Questions, comments?
General annotation questions (either Basque-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Basque-BDT/issues).
If you want to collaborate, please contact [koldo&nbsp;•&nbsp;gojenola&nbsp;(æt)&nbsp;ehu&nbsp;•&nbsp;eus].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually in non-UD style, automatically converted to UD |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The Basque UD treebank is based on a automatic conversion from part of the Basque Dependency Treebank (BDT), created at the University of of the Basque Country by the IXA NLP research group. The treebank consists of 8.993 sentences (121.443 tokens) and covers mainly literary and journalistic texts.



The Basque UD treebank is based on a automatic conversion from part of the Basque Dependency Treebank (BDT) (Aduriz et al., 2003), created at the University of of the Basque Country by the IXA NLP research group. The treebank consists of 5274 sentences (60563 tokens) and covers mainly literary and journalistic texts. The Basque language can be described as a morphologically rich, agglutinative language with a high capacity of generating inflected word-forms, with free constituent order of sentence elements. It can be considered a head-final language, as the syntactic head of phrases is located at the end of the last word of the phrase, in the form of a suffix. BDT is a pure dependency treebank from its original design, annotated in the CoNLL-X format, and it shares with UD a lexicalist hypothesis in syntax, where dependencies occur between whole individual wordforms. Under this lexicalist approach, each word shows several morphosyntactic associated features, corresponding to affixes (prefixes and suffixes) attached to the base forms, such as case (there are 14 morphological cases in Basque), number, definiteness or type of subordinate sentence (adversative, conditional, ...). These suffixes usually appear as separated wordforms in non agglutinative languages. The last version of BDT contains 150,000 tokens forming 11,225 sentences, with 1.3% of non-projective arcs. BDT encodes 16 different POS and 28 dependencies. Although BDT was in accord with many UD guidelines, the process was not trivial, converting around 80% of the tokens (121.443 tokens). The set of remaining sentences correspond to either special cases not accounted by the conversion rules or other types of less frequent phenomena which have not been dealt with at the moment.


## Acknowledgments

The conversion of the original treebank has been performed by Aitziber Atutxa, Iakes Goenaga and Koldo Gojenola at University of the Basque Country (EHU/UPV). In contrast, the conversion of the UD treebank v1.2 to v2.0 has been performed by Dan Zeman. We thank everyone who has collaborate in the transformation of the Basque Dependency Treebank.

Sentences were randomized and divided in 60-20-20 splits for the train, dev and test files, repectively.


# Statistics of UD Basque BDT

## POS Tags

[ADJ](eu_bdt-pos-ADJ.html) – [ADP](eu_bdt-pos-ADP.html) – [ADV](eu_bdt-pos-ADV.html) – [AUX](eu_bdt-pos-AUX.html) – [CCONJ](eu_bdt-pos-CCONJ.html) – [DET](eu_bdt-pos-DET.html) – [INTJ](eu_bdt-pos-INTJ.html) – [NOUN](eu_bdt-pos-NOUN.html) – [NUM](eu_bdt-pos-NUM.html) – [PART](eu_bdt-pos-PART.html) – [PRON](eu_bdt-pos-PRON.html) – [PROPN](eu_bdt-pos-PROPN.html) – [PUNCT](eu_bdt-pos-PUNCT.html) – [SYM](eu_bdt-pos-SYM.html) – [VERB](eu_bdt-pos-VERB.html) – [X](eu_bdt-pos-X.html)

## Features

[Animacy](eu_bdt-feat-Animacy.html) – [Aspect](eu_bdt-feat-Aspect.html) – [Case](eu_bdt-feat-Case.html) – [Definite](eu_bdt-feat-Definite.html) – [Degree](eu_bdt-feat-Degree.html) – [Gender](eu_bdt-feat-Gender.html) – [Gender[dat]](eu_bdt-feat-Gender-dat.html) – [Gender[erg]](eu_bdt-feat-Gender-erg.html) – [Mood](eu_bdt-feat-Mood.html) – [Number](eu_bdt-feat-Number.html) – [Number[abs]](eu_bdt-feat-Number-abs.html) – [Number[dat]](eu_bdt-feat-Number-dat.html) – [Number[erg]](eu_bdt-feat-Number-erg.html) – [NumType](eu_bdt-feat-NumType.html) – [Person](eu_bdt-feat-Person.html) – [Person[abs]](eu_bdt-feat-Person-abs.html) – [Person[dat]](eu_bdt-feat-Person-dat.html) – [Person[erg]](eu_bdt-feat-Person-erg.html) – [Polarity](eu_bdt-feat-Polarity.html) – [Polite](eu_bdt-feat-Polite.html) – [Polite[abs]](eu_bdt-feat-Polite-abs.html) – [Polite[dat]](eu_bdt-feat-Polite-dat.html) – [Polite[erg]](eu_bdt-feat-Polite-erg.html) – [PronType](eu_bdt-feat-PronType.html) – [VerbForm](eu_bdt-feat-VerbForm.html) – [Voice](eu_bdt-feat-Voice.html)

## Relations

[acl](eu_bdt-dep-acl.html) – [advcl](eu_bdt-dep-advcl.html) – [advmod](eu_bdt-dep-advmod.html) – [amod](eu_bdt-dep-amod.html) – [appos](eu_bdt-dep-appos.html) – [aux](eu_bdt-dep-aux.html) – [case](eu_bdt-dep-case.html) – [cc](eu_bdt-dep-cc.html) – [ccomp](eu_bdt-dep-ccomp.html) – [compound](eu_bdt-dep-compound.html) – [conj](eu_bdt-dep-conj.html) – [cop](eu_bdt-dep-cop.html) – [csubj](eu_bdt-dep-csubj.html) – [dep](eu_bdt-dep-dep.html) – [det](eu_bdt-dep-det.html) – [discourse](eu_bdt-dep-discourse.html) – [fixed](eu_bdt-dep-fixed.html) – [flat](eu_bdt-dep-flat.html) – [iobj](eu_bdt-dep-iobj.html) – [mark](eu_bdt-dep-mark.html) – [nmod](eu_bdt-dep-nmod.html) – [nsubj](eu_bdt-dep-nsubj.html) – [nummod](eu_bdt-dep-nummod.html) – [obj](eu_bdt-dep-obj.html) – [obl](eu_bdt-dep-obl.html) – [parataxis](eu_bdt-dep-parataxis.html) – [punct](eu_bdt-dep-punct.html) – [root](eu_bdt-dep-root.html) – [vocative](eu_bdt-dep-vocative.html) – [xcomp](eu_bdt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 8993 sentences and 121443 tokens.</li>
</ul>

<ul>
<li>This corpus contains 19438 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 693 types of words that contain both letters and punctuation. Examples: PSE-EEk, II.a, PSE-EEko, bat-batean, II., Euskaltel-Euskadi, I.a, II.ak, PSE-EE, bete-betean, denboraldi-aurrea, denboraldi-aurreko, parte-hartzea, behin-behineko, denboraldi-aurrean, e​l​e​k​t​r​i​z​i​t​a​t​e​-​l​i​n​e​a​r​i, poliki-poliki, PSE-EEren, Yong-Kooren, buru-belarri, cm-ko, Calcio-n, Donibane-Lohizuneko, Francine-k, Jazztel-Costa, Lutxana-Deustu, PSE-EEri, Uda-udazken, Yong-Koo, aitzin-multzoan, bizi-bizi, gorri-berdeak, kili-kolo, lur-nahaste, p​e​r​t​s​o​n​a​-​k​o​m​u​n​z​t​a​d​u​r​a​-​m​a​r​k​e​k, pixkanaka-pixkanaka, p​o​t​e​n​t​z​i​a​l​-​d​i​f​e​r​e​n​t​z​i​a, soil-soilik, t​r​a​n​s​f​o​r​m​a​z​i​o​-​z​e​n​t​r​o​a​r​i, zehatz-mehatz, zelai-erdian, zer-nolako, 30.eko, A., AEK-ko, Asegarce-Altiren, Biztanle-kopuruak, CD-ROMetan, Dae-jung, Dole-k</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SCONJ</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): bai, baietz, ez, ezetz, omen</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as pronouns (PRON): beraiek, deus, edonor, elkar, eurak, ezer, ezertxo, geu, gu, heu, hi, inor, neu, ni, nor, norbait, norbera, nornahi, nortzuk, zenbaitzuk, zer_edo_zer, zerbait, zertxobait, zeu, zu, zuek</li>
</ul>

<ul>
<li>This corpus contains 61 lemmas tagged as determiners (DET): anitz, asko, askotxo, aunitz, batere, batzuk, bera, berak, berauek, berbera, bertze, beste, den-dena, dena, dezente, dozenaka, edozein, edozer, ehundaka, ehunka, ezein, franko, gehiago, gehiegi, gehiegitxo, gehien, gehientsu, gehitxo, gehixeago, guti, gutiz-gehien, gutxi, gutxiago, gutxien, guzi, guzti, haiek, hainbat, hainbertze, hainbeste, hau, hauek, hogeitaka, hori, horiek, horrenbeste, hura, larregi, milaka, milioika, nahiko, nahikoa, oro, pixka_bat, ugari, ze, zein, zeintzuk, zenbait, zenbat, zer</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 13 lemmas tagged as auxiliaries (AUX): *edin, *edun, *ezan, ari, ari_izan, egon, geratu, ibili, izan, onartu, sartu, sortu, ukan</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as AUX and sometimes as VERB: *edin, *edun, ari_izan, egon, geratu, ibili, izan, onartu, sartu, sortu, ukan</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: izan, izaten, egoten, egon, geratzen, izaki</li>
    <li>VERB: egiten, ematen, egin, erabiltzen, ikus, ikusten, izan, izaten, agertzen, esaten</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADV: Desesperatuki</li>
    <li>AUX: izan, izango, egon, egongo, ibili, geratu, izanik, izanen, izanda, izandako</li>
    <li>VERB: egin, izan, esan, eman, izango, hartu, hasi, jokatu, joan, irabazi</li>
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
      <li>AUX: dinat, dun, naun, din, ditun, zion, ditin, gintunan, zaidan, zezaken</li>
      <li>VERB: dun, dinat, niken, baditinagu, baditinat, bazaukan, dakinat, din, dinagu, naun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>AUX: duk, diat, nian, dik, nauk, zagok, zegoan, zegok</li>
      <li>VERB: duk, zekiat, dik, ditik, dituk, gaudek, zeramatzaan, zeramatzak, zian</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADP: arteko, arabera, artean, inguru, aurrean, aurka, bezala, buruz, gisa, kontra</li>
      <li>NOUN: lagun, jokalariak, ordezkariak, jokalariek, agintariek, hilaren, ministroak, epaileak, arduradunak, gizona</li>
      <li>PROPN: Manek, Maneren, Putinek, Tirapu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: ergatibodunak, harrotsu, hesidunetan, istilutsua, kotoitsua, latza, molduradunei, osasuntsuena, sabeldunak</li>
      <li>ADP: gabe, inguruan, bezala, arabera, artean, aurrean, barruan, gora, arte, aurka</li>
      <li>NOUN: taldeak, urteko, urte, ondorioz, partidua, aukera, taldea, aurretik, garaipena, igandean</li>
      <li>PROPN: EAJk, EAk, EAJko, EAJri, ELAk, EAri, EAren, ELAko, Bilbaoko, EA</li>
      <li>SYM: m, m., km</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: nagusiak, handiak, onak, berriak, Batuetako, onenak, ezberdinak, bereziak, desberdinak, ezagunak</li>
      <li>ADP: artean, arteko, arabera, inguruan, aurrean, bidez, aurka, bezala, buruz, aurkako</li>
      <li>ADV: egungoak, goranzkoak, samarretan</li>
      <li>AUX: dutenak, direnak, dituztenak, zirenak, dutenek, daitezkeenak, direnek, dutenen, zeudenak, zituztenak</li>
      <li>DET: batzuk, guztiak, horiek, hauek, beren, gehienak, batzuek, guztiek, hauetan, haien</li>
      <li>NOUN: gauzak, urteetan, arazoak, egunetan, hauteskundeak, jokalariak, eskubideen, egunotan, jokalariek, urteotan</li>
      <li>PRON: geu, geure, zenbaitzuk, Geuregan, Geuri</li>
      <li>PROPN: EEBBetako, EEBBek, EEBBetan, EEBBak, EEBBetara, Filipinetako, Moluketan, Bahamak, Bahametako, EEBBen</li>
      <li>SYM: kv</li>
      <li>VERB: eginak, atxilotuak, dituztenak, dutenak, eginez, gonbidatuak, ikasiak, jarriak, zaurituak, armatuak</li>
      <li>VERB-Part: eginak, atxilotuak, eginez, gonbidatuak, ikasiak, jarriak, zaurituak, armatuak, armatuen, baztertuak</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: handia, ona, bakarra, nagusia, zaila, berria, onena, garrantzitsua, osoa, berezia</li>
      <li>ADP: arabera, aurka, kontra, inguruan, aurrean, aurkako, zehar, arte, buruz, kontrako</li>
      <li>ADV: samarra, adinakoa, atzokoa, atzokoan, atzokoaren, aurtengoa, aurtengoak, aurtengora, gaurkoa, kontrakoa</li>
      <li>AUX: duena, dena, zuena, izateaz, dutena, zena, izateagatik, dituena, duenak, izateak</li>
      <li>AUX-Part: izana, izanagatik, izandakoa, izandakoak, sortua</li>
      <li>DET: bere, hori, hau, horretan, honetan, horrek, bera, berak, haren, horren</li>
      <li>NOUN: partidua, taldea, taldeak, ostean, gobernuak, aurretik, aukera, garaipena, herrian, igandean</li>
      <li>NUM: 21na</li>
      <li>PRON: neure, norberak, neu, norberaren, Neuk, Zeu, Zeuk, heure, zeure</li>
      <li>PROPN: Europako, Espainiako, Frantziako, Israelgo, Nafarroako, Jugoslaviako, Miarritzek, EAJk, Osasunak, Realak</li>
      <li>SYM: cm-ko, kg, m, m., KV, cm, km</li>
      <li>VERB: izana, egina, hasia, litekeena, egiteak, azpimarratzekoa, dagokionean, irekia, bateratua, esana</li>
      <li>VERB-Part: izana, egina, hasia, irekia, bateratua, esana, galdua, gertatutakoa, izanak, orekatua</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: onetik, Batutik, berritik, finkorik, gaztetatik, handirik, nagusitik, Garaitik, Nazionaletik, Zuritik</li>
      <li>ADP: aurretik, aldetik, gainetik, ondotik, atzetik, eskutik, azpitik, aitzinetik, barrutik, goitik</li>
      <li>ADV: handik, hortik, hemendik, aspalditik, Aspaldidanik, bihartik, gaurtik, gertutik, lehenagotik, oraindik</li>
      <li>AUX: izatetik, dutenenetatik</li>
      <li>DET: bestetik, horretatik, honetatik, beretik, hartatik, haietatik, horietatik, askotatik, batzuetatik, berarengandik</li>
      <li>NOUN: aurretik, hasieratik, etxetik, urtetik, zalantzarik, arazorik, dudarik, goitik, egunetik, herritik</li>
      <li>PROPN: Espainiatik, Bermeotik, EBtik, Egiptotik, Europatik, Gomatik, Herritik, Iruñetik, Kosovotik, Oriorengandik</li>
      <li>VERB: izatetik, egitetik, ginenekotik, mintzatutik, normalizatutik, zaurituetatik</li>
      <li>VERB-Part: mintzatutik, normalizatutik, zaurituetatik</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADJ: handia, ona, bakarra, nagusia, zaila, berria, onena, garrantzitsua, nagusi, osoa</li>
      <li>ADP: arte, aurka, gisa, gain, esker, alde, kanpo, inguru, esku, barru</li>
      <li>ADV: samarra, gaurko, adinakoa, atzokoa, aurtengoa, betirako, biharko, egungoak, gaurkoa, goranzkoak</li>
      <li>AUX: izatea, duena, dena, dutenak, zuena, izateko, direnak, dituztenak, dutena, zena</li>
      <li>AUX-Part: izana, izan, izandakoa, sortua</li>
      <li>DET: hori, hau, batzuk, zer, guztiak, gehiago, bera, asko, horiek, hauek</li>
      <li>NOUN: behar, nahi, uste, ezin, urte, partidua, aukera, taldea, garaipena, lana</li>
      <li>NUM: bana, 16na, 21na, 31na, bedera</li>
      <li>PRON: zerbait, ezer, inor, norbait, elkar, zertxobait, edonor, neu, deus, ezertxo</li>
      <li>PROPN: EH, Alaves, Reala, Athletic, Bizkaia, Frantzia, Zaragoza, EEBBak, ETA, Errusia</li>
      <li>SYM: kg, kv, m, m., cm, km</li>
      <li>VERB: izatea, egitea, egotea, ematea, sartzea, egiteko, lortzea, hartzea, irabaztea, emateko</li>
      <li>VERB-Part: izana, egina, hasia, izan, irekia, bateratua, egin, eginak, esana, galdua</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>ADJ: hobera, laburrera, politikora, Zurira, gorenera, onera, osora, publikora, Batuetara, Nagusira</li>
      <li>ADP: aurrera, batera, aldera, gainera, ingurura, kanpora, behera, erdira, antzera, alderat</li>
      <li>ADV: aurtengora</li>
      <li>AUX: izatera, egotera</li>
      <li>DET: horretara, gutxira, honetara, bera, guztietara, zertara, batzuetara, bestera, hartara, guztira</li>
      <li>NOUN: behera, segundora, aurrera, etxera, herrira, kalera, urtera, atzera, kanpora, mailara</li>
      <li>PRON: norbaitengana</li>
      <li>PROPN: Sydneyra, Argentinara, Donostiara, Gasteizera, Iruñera, Madrilera, Oronozera, EEBBetara, Europara, Frantziara</li>
      <li>VERB: egitera, ematera, irabaztera, hartzera, ikustera, jokatzera, deklaratzera, bizitzera, hastera, izatera</li>
      <li>VERB-Part: gonbidatuetara, aginduetara, armatura, itxietara, jakinetara</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ben
    <ul>
      <li>ADJ: Akziodunentzat, bahamatarrentzat, baionesentzat, bakarrarentzat, berriarentzat, berrientzat, britainiarrentzat, frantziarrarentzat, handirentzat, hungariarrarentzat</li>
      <li>AUX: denarentzat, duenarentzat, nauenarentzat, zuenarentzat</li>
      <li>DET: gehienentzat, guztientzat, harentzat, guztiontzat, horientzat, Zerendako, askorentzat, batzuentzat, berarentzat, beretzat</li>
      <li>NOUN: emakumeentzat, ertzainentzat, gorritxoentzat, jokalarientzat, Estatuarentzat, Greziarrentzat, Hegoaldekoentzat, Munduarentzat, T​x​i​r​r​i​n​d​u​l​a​r​i​t​z​a​r​e​n​t​z​a​t, Zuzenbidearentzat</li>
      <li>PRON: norbaitentzat</li>
      <li>PROPN: Alavesentzat, Eibarrentzat, Udalbiltzarentzat, Andreasentzat, Astillerorentzat, Athleticentzat, Barakentzat, Batistutarentzat, Bretainiarentzat, Echevarrieta-rentzat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>ADJ: bikoitzagatik, eskasagatik, espainiarragatik, handiagatik, handiengatik, hutsagatik, ikusgarriarengatik, militarragatik, normal-normalengatik, politikoengatik</li>
      <li>AUX: izateagatik, dutenagatik, gintuenagatik, izanagatik, zitzaionagatik</li>
      <li>AUX-Part: izanagatik</li>
      <li>DET: horregatik, beragatik, honengatik, Horrexegatik, batzuengatik, berarengatik, berberagatik, guztiagatik, hargatik, honegatik</li>
      <li>NOUN: arazoengatik, delituengatik, finantzaketagatik, gorrotoarengatik, hilketagatik, kasuengatik, Bartzelonakoengatik, Euriagatik, adierazpenengatik, arrazoiengatik</li>
      <li>PRON: zerbaitengatik</li>
      <li>PROPN: Batistutarengatik</li>
      <li>VERB: aurkitzearren, azaltzearren, ekartzearren, emateagatik, formalizatzearren, hitzegitearren, hondatzearren, irudikatzearren, kontatzearren, lortzearren</li>
      <li>VERB-Part: izanagatik</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: handiarekin, onenekin, osoarekin, bakarrarekin, handiekin, ingelesarekin, koadroarekin, nagusiarekin, ohiarekin, onarekin</li>
      <li>AUX: dituztenekin, dudanarekin, duzunarekin, egotearekin, zenarekin, zizkiotenekin</li>
      <li>DET: horrekin, honekin, batzuekin, horiekin, berarekin, gehiagorekin, hauekin, harekin, gutxiagorekin, haiekin</li>
      <li>NOUN: taldearekin, urterekin, punturekin, taldekideekin, aldearekin, lagunekin, selekzioarekin, erabakiarekin, kideekin, laguntzarekin</li>
      <li>NUM: banarekin</li>
      <li>PRON: elkarrekin, Norbaitekin, elgarrekin, ezerekin</li>
      <li>PROPN: Israelekin, Osasunarekin, Alavesekin, Alkortarekin, Arafatekin, Bartzelonarekin, EAJrekin, ETArekin, Eugirekin, Ibarretxerekin</li>
      <li>VERB: aldentzearekin, erasoekin, handi-handituekin, igarotzearekin, irabaztearekin, kualifikatuarekin</li>
      <li>VERB-Part: erasoekin, handi-handituekin, kualifikatuarekin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: ohiari, Batuari, politikoari, zaleei, bakoitzari, baltseroari, demokratikoari, fisikoari, onari, politikoei</li>
      <li>ADV: beti, Berriki, estetikoki, nahi, orai, supituki</li>
      <li>AUX: denari, izateari, duenari, dugunari, zenari, zituenei</li>
      <li>DET: horri, honi, hari, guztiei, horiei, hauei, batzuei, askori, berari, besteei</li>
      <li>NOUN: mahai, gobernuari, zelai, Jaurlaritzari, denboraldiari, buruari, palestinarrei, jokalariei, taldeari, aurrekontuei</li>
      <li>PRON: elkarri, elgarri, norbaiti, Geuri, inori</li>
      <li>PROPN: ETAri, Realari, Athletici, Aznarri, EAJri, Jerusalemi, Ibarretxeri, EAri, Kontxari, Lizasori</li>
      <li>VERB: aztertzeari, dagokionari, dituztenei, prefabrikatuari, zimurtuari, zirenei, Eztabaidatzeari, afiliatuei, antolatzeari, aritzeari</li>
      <li>VERB-Part: prefabrikatuari, zimurtuari, afiliatuei, elbarrituei, eroritakoei, eztabaidatutakoei, kaltetutakoei, zaurituei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>ADJ: bakoitzak, Gorenak, ohiak, nagusiak, gazteak, berriak, estatubatuarrak, sozialistak, zibilak, Batuek</li>
      <li>ADV: aurtengoak</li>
      <li>AUX: dutenek, duenak, izateak, direnek, daudenek, denak, diotenek, dituztenek, dudanak, garenok</li>
      <li>AUX-Part: izandakoak</li>
      <li>DET: horrek, berak, honek, horiek, batzuek, guztiek, hauek, hark, askok, gehienek</li>
      <li>NOUN: taldeak, gobernuak, presidenteak, ministroak, poliziak, lehendakariak, entrenatzaileak, jokalariek, agintariek, kideek</li>
      <li>PRON: inork, norbaitek, norberak, Neuk, Nornahik, Zeuk, ezerk, zerbaitek</li>
      <li>PROPN: Miarritzek, EAJk, Osasunak, Realak, Athleticek, Alavesek, EHk, Lotinak, PPk, ETAk</li>
      <li>VERB: egiteak, izanak, izateak, armatuak, begiratzeak, ezabatzeak, ikusteak, inplikatuek, irabazteak, ixteak</li>
      <li>VERB-Part: izanak, armatuak, inplikatuek, moderatuek, Abokatuek, aritutakoek, atxilotutakoek, defendituak, desplazatuak, eginikoak</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: ezinbestekotzat, garrantzitsutzat, nagusitzat, basatitzat, egokitzat, historikotzat, normaltzat, positibotzat, Batutzat, Naturaltzat</li>
      <li>NOUN: erreformistatzat, oinarritzat, aitzakiatzat, amaieratzat, arriskutzat, aurrebaldintzatzat, babeslekutzat, dialektotzat, egiletzat, erreferentziatzat</li>
      <li>PROPN: Hegoameriketako, Koreetako</li>
      <li>VERB-Part: amaitutzat, desagertutzat, erabakitzat, galdutzat, jaiotakotzat, lortutzat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: berriaren, bakoitzaren, zaleen, handien, nazionalaren, politikoaren, ohiaren, Batuen, atzerritarren, palestinarraren</li>
      <li>ADP: arabera, bezalakoen, gorakoen</li>
      <li>ADV: gainerakoen, atzokoaren, hemen</li>
      <li>AUX: duenaren, dutenen, dagoenaren, daiteekenaren, daitekeenaren, daudenen, denaren, direnen, dituztenen, dutenaren</li>
      <li>DET: bere, horren, haren, honen, horien, beren, haien, guztien, hauen, batzuen</li>
      <li>NOUN: eskubideen, taldearen, gobernuaren, euskararen, abuztuaren, irailaren, hilaren, abertzaleen, epailearen, herriaren</li>
      <li>PRON: elkarren, norbere, norberaren, neure, norbaiten, inoren, geure, heure, zeure</li>
      <li>PROPN: ETAren, Rojoren, Athleticen, Alavesen, Houdaren, Valentziaren, EHren, Goreren, Osasunaren, PPren</li>
      <li>VERB: sustatzearen, esandakoaren, armatuen, daudenen, egitearen, entzundakoaren, gertatutakoaren, izanaren, Bateratzearen, Gutxituen</li>
      <li>VERB-Part: esandakoaren, armatuen, entzundakoaren, gertatutakoaren, izanaren, Gutxituen, Irekien, Jakinaren, afiliatuen, atxilotutakoen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ine
    <ul>
      <li>ADJ: osoan, nagusian, zabalean, Batuetan, bakoitzean, onean, onenean, nagusietan, batuan, betean</li>
      <li>ADP: artean, aurrean, inguruan, barruan, gainean, atzean, erdian, bitartean, aldean, ondoan</li>
      <li>ADV: orain, sekulan, han, Aspaldian, ASPALDIAN, aurrerantzean, bertan, bezain, nonbaiten, atzokoan</li>
      <li>AUX: izaten, egoten, geratzen, direnetan, naizenetan</li>
      <li>DET: horretan, honetan, berean, hartan, hauetan, batzuetan, horietan, guztian, guztietan, haietan</li>
      <li>NOUN: ostean, igandean, herrian, taldean, urtean, moduan, egunetan, etxean, lanean, urteetan</li>
      <li>PRON: Geuregan</li>
      <li>PROPN: Gasteizen, Sydneyn, Mendizorrotzan, Madrilen, Mamesen, Nafarroan, Alemanian, Bilbon, Donostian, Europan</li>
      <li>VERB: egiten, sartzen, jokatzen, ematen, aztertzen, ikertzen, ikusten, hartzen, sortzen, bilatzen</li>
      <li>VERB-Part: amaitutakoan, entzundakoan, Afizionatuetan, Irekian, aurreratuenetan, bilduetan, gertatutakoan, gutxituetan, idatzian, ihesian</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: handiz, onez, osoz, biziz, estreinakoz, azkenekoz, kulturalaz, naturalez, olinpiarrez, sozialaz</li>
      <li>ADP: bidez, bitartez, aldeaz, partez</li>
      <li>AUX: izateaz, dagoenez, izanez</li>
      <li>AUX-Part: izanez</li>
      <li>DET: horretaz, horrez, Honetaz, hauez, horiez, batzuez, guztiaz, hainbatez, honez, horrezaz</li>
      <li>NOUN: ondorioz, aldiz, ustez, legez, asmoz, euskaraz, urtez, aburuz, iritziz, orduz</li>
      <li>PRON: ezertaz, inortaz</li>
      <li>PROPN: Cardosoz, Redondoz, Bidasoaz, Brivez, Leoz, Serjent-Iurtez, Txetxeniaz</li>
      <li>VERB: eginez, erabiliz, esanez, utziz, eraginez, izanez, emanez, errespetatuz, idatziz, irabaziz</li>
      <li>VERB-Part: eginez, erabiliz, esanez, utziz, eraginez, izanez, emanez, errespetatuz, idatziz, irabaziz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Lat
    <ul>
      <li>ADJ: Baturantz</li>
      <li>ADV: gorantz</li>
      <li>DET: besterantz</li>
      <li>NOUN: beherantz, Beherantza, barnerantz, helmugarantz, iparralderantz, mahaigainerantz, txokorantz, zeruertzerantz</li>
      <li>PROPN: Ingalaterrarantz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: handiko, Batuetako, Nazionaleko, bakoitzeko, zibileko, goreneko, Batuko, osoko, bakarreko, Demokratikoko</li>
      <li>ADP: arteko, aurkako, aldeko, kontrako, buruzko, inguruko, gabeko, aurreko, kanpoko, gaineko</li>
      <li>ADV: atzoko, egungo, iazko, hango, gaurko, aurtengo, antzinako, hurrengo, biharko, oraingo</li>
      <li>AUX: izateko, izandako, delako, zuelako, egoteko, duteneko, zuteneko</li>
      <li>AUX-Part: izandako</li>
      <li>DET: horretako, bereko, honetako, horietako, hauetako, askotako, haietako, besteko, horretarako, guztietako</li>
      <li>NOUN: taldeko, munduko, herriko, urteko, mailako, aurreko, goizeko, ligako, batasuneko, arratsaldeko</li>
      <li>NUM: 36nako</li>
      <li>PRON: elkarrekiko, zerbaitetarako</li>
      <li>PROPN: Europako, Espainiako, Frantziako, Israelgo, Nafarroako, EEBBetako, Jugoslaviako, Errusiako, Gasteizko, Italiako</li>
      <li>SYM: cm-ko</li>
      <li>VERB: egiteko, egindako, jokatzeko, lortzeko, irabazteko, emateko, hartzeko, izandako, eginiko, sartzeko</li>
      <li>VERB-Part: egindako, izandako, eginiko, lortutako, aurkeztutako, jokatutako, sortutako, aipatutako, emandako, hartutako</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Par
    <ul>
      <li>ADJ: handirik, halakorik, onik, horrelakorik, berezirik, faboritorik, larririk, politikorik, ziurrenik, garbirik</li>
      <li>ADV: seguruenik</li>
      <li>AUX: izanik, duenik</li>
      <li>AUX-Part: izanik</li>
      <li>DET: besterik, askorik, gehiegirik, nahikorik</li>
      <li>NOUN: aukerarik, arazorik, aldaketarik, asmorik, garaipenik, arriskurik, lekurik, unerik, zerikusirik, erantzunik</li>
      <li>PROPN: Emilionerik, NOBrik</li>
      <li>VERB: osaturik, jokatzerik, erretiratzerik, harturik, izanik, utzirik, ezkutaturik, ikusirik, arrestaturik, ateratzerik</li>
      <li>VERB-Part: osaturik, harturik, izanik, utzirik, ezkutaturik, ikusirik, arrestaturik, beterik, harriturik, hilik</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: handia, ona, bakarra, nagusia, zaila, berria, onena, garrantzitsua, nagusiak, osoa</li>
      <li>ADP: arabera, artean, aurka, arteko, inguruan, kontra, aurrean, aurkako, buruz, zehar</li>
      <li>ADV: samarra, adinakoa, atzokoa, atzokoan, atzokoaren, aurtengoa, aurtengoak, aurtengora, egungoak, gaurkoa</li>
      <li>AUX: duena, dena, dutenak, zuena, direnak, izateaz, dituztenak, dutena, zena, zirenak</li>
      <li>AUX-Part: izana, izanagatik, izandakoa, izandakoak, sortua</li>
      <li>DET: hori, hau, horretan, batzuk, guztiak, honetan, horiek, horrek, bera, hauek</li>
      <li>NOUN: taldeak, partidua, taldea, ostean, gobernuak, aurretik, aukera, garaipena, herrian, igandean</li>
      <li>PRON: neure, norberak, neu, norberaren, geu, geure, zenbaitzuk, Geuregan, Geuri, Neuk</li>
      <li>PROPN: Europako, Espainiako, Frantziako, Israelgo, Nafarroako, EEBBetako, Jugoslaviako, Miarritzek, EAJk, Osasunak</li>
      <li>SYM: cm-ko, kg, kv, m, m., cm, km</li>
      <li>VERB: izana, egina, hasia, litekeena, egiteak, azpimarratzekoa, dagokionean, irekia, izanak, armatuak</li>
      <li>VERB-Part: izana, egina, hasia, irekia, izanak, armatuak, bateratua, eginak, esana, galdua</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: nagusi, bizi, handirik, handiz, zuzen, ziur, berri, indartsu, sendo, ageri</li>
      <li>ADP: gabe, gabeko, kontra, aurka, artean, ezean, bezala, gain, gisan, kanpo</li>
      <li>ADV: seguruenik, gaurko, betirako, biharko, lehenbiziko, samar</li>
      <li>AUX: izateko, izanik, duenik, dutenen, egoteko, izan, izanez</li>
      <li>AUX-Part: izanik, izan, izanez</li>
      <li>DET: zer, gehiago, asko, ugari, horretarako, gutxi, beste, gehiegi, zein, askok</li>
      <li>NOUN: behar, nahi, uste, ezin, urte, ondorioz, aldiz, espero, lagun, ahal</li>
      <li>NUM: bana, 16na, 21na, 31na, banarekin, bedera</li>
      <li>PRON: zerbait, ezer, inork, inor, elkarrekin, norbait, elkar, elkarri, norbaitek, zertxobait</li>
      <li>PROPN: Briverekiko, EEBBetarako, Eurokoparako, Klodenekiko, Madrilen, OLBKren, Txetxeniarako, Vueltarako</li>
      <li>VERB: egiteko, emateko, izateko, eginez, erabiliz, lortzeko, irabazteko, jokatzeko, izan, jakiteko</li>
      <li>VERB-Part: eginez, erabiliz, izan, esanez, osaturik, utziz, eraginez, izanez, emanez, errespetatuz</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADJ: azkarregi, handiegia, estuegiak, berantegi, garestiegi, Urrutiegi, alaiegia, altuegia, bigunegia, handiegi</li>
      <li>ADV: goizegi, urrunegi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: handiagoa, azkarrago, errazago, indartsuago, sendoago, txikiagoa, txikiagoan, altuago, argiagoa, ezkorrago</li>
      <li>ADV: beranduago, geroago, gorago, lasaiago, atzerago, aurrerago, goizago, gusturago, maizago, mantsoago</li>
      <li>NOUN: nahiago, gehiago, beherago, haratago, Barrualderago, Errondagoa, atzerago, gehiagotan, lehenago, luzaroagoan</li>
      <li>VERB-Part: atsekabetuago, bermatuagoa, bideratuagoa, irekiagoa, orekatuagoa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: onena, garrantzitsuena, handiena, onenak, indartsuena, onenean, azkarrena, garrantzitsuenak, onenetakoa, egokiena</li>
      <li>ADP: arteko, artean, pare, zain</li>
      <li>ADV: ondoen, seguruenik, Goren, Ondoren, berrikien, larrien</li>
      <li>NOUN: onenetakoa, aktiboenetakoa, argienetakoa, bakarrenetakoa, eraginkorrenetakoa, oinarrizkoenetakoa</li>
      <li>VERB-Part: orekatuenak, Txalotuena, aurreratuenak, erabiliena, ezagutuenetakoa, zabalduena, zabalduenetakoa</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: ez, ezetz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: bada, bazuen, badira, badirela, baditu, badu, badute, baliteke, balituzkete, baziren</li>
      <li>PART: bai, baietz</li>
      <li>VERB: badu, baliteke, badago, badaude, bada, badakigu, badirudi, badaki, badakit, badira</li>
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
      <li>AUX-Inf: izaten, egoten, geratzen</li>
      <li>VERB-Inf: egiten, ematen, erabiltzen, ikusten, izaten, agertzen, esaten, hartzen, gertatzen, jarraitzen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Part: izan, ibili, geratu, egon</li>
      <li>VERB-Inf: merezita</li>
      <li>VERB-Part: egin, izan, esan, eman, joan, lortu, hasi, hil, irabazi, azaldu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>AUX: da, dira, dela, zen, dago, den, zegoen, du, direla, daude</li>
      <li>VERB: da, du, dago, dute, dira, daude, dugu, dela, dut, zegoen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX-Part: izango, egongo, izanen, ibiliko, egonen</li>
      <li>VERB-Part: izango, egingo, jokatuko, hartuko, egongo, emango, hasiko, aurkeztuko, joango, saiatuko</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: litzateke, balitz, luke, nuke, balu, lirateke, litzaidake, lukeela, lukete, lioke</li>
      <li>VERB: nuke, luke, balitz, niken, Badakit, bagina, bailitzan, balego, banitu, bazekikeen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: ezazu, itzazu, zaitez, ezan, ezazue, iezaiezu, Zaude, iezaidazu, iezaion, iezaiozu</li>
      <li>VERB: egizu, hago, Demagun, Hoa, emaidazu, zaude, zaudezte, zoaz, zoazte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: da, zuen, zen, du, dira, dute, zuten, ziren, ditu, zituen</li>
      <li>VERB: da, du, dago, dute, dira, daude, dugu, dela, dut, zegoen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>AUX: daiteke, dezake, daitezke, daitekeela, daitezkeen, liteke, daitekeen, dezakeen, dezakete, ditzakete</li>
      <li>VERB: baliteke, litekeena, lekarkioke, liteke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: dadin, dezagun, dezan, dezala, dadila, daitezen, dezaten, ditzan, zezaten, daitezela</li>
      <li>VERB: dagokionean, zioen, dabiltzen, dagola, dauden, nindoala, zegoela, zihoazen</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: adierazi, jakinarazi, adierazten, ohartarazi, jakinaraziko, geldiarazi, gogorarazi, galarazi, gogorarazten, oroitarazi</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: nola, zergatik, non, noiz, nondik, zelan, nora, zertan, noraino, nolaz</li>
      <li>PRON: nork, nor, noren, nori, nortzuren</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: gure, nire, nik, euren, guk, ni, zure, gu, beraiek, niri</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: bat, bi, hiru, batean, baten, batek, lau, batez, bost, sei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: azken, lehen, bigarren, hirugarren, lehenengo, laugarren, bosgarren, seigarren, II.a, lehena</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADP: artean, inguruan, aldetik, begira, bezala, atzeko, barneko, buruan, zai, zain</li>
      <li>NOUN: geurea, nireak</li>
      <li>PRON: neure, neu, geu, geure, Geuregan, Geuri, Neuk</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADP: artean, barneko, gain, gisara, inguruan</li>
      <li>PRON: Zeu, Zeuk, heure, zeure</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: arteko, aitzinean, artean, esku, kontra</li>
      <li>PRON: zenbaitzuk</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Infm
    <ul>
      <li>AUX: duk, dinat, dun, naun, diat, din, ditun, nian, zion, dik</li>
      <li>PRON: heure</li>
      <li>VERB: dun, dinat, duk, niken, zekiat, baditinagu, baditinat, bazaukan, dakinat, dik</li>
    </ul>
  </li>
</ul>



<h3>Other Features</h3>


<ul>
  <li><a>Gender[dat]</a>
    <ul>
      <li>Masc
        <ul>
          <li>AUX: diat, nian, zaik</li>
          <li>VERB: diagu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[erg]</a>
    <ul>
      <li>Fem
        <ul>
          <li>AUX: ezan, dun, dunala, iezaion, nazan</li>
          <li>VERB: daukanan</li>
        </ul>
      </li>
      <li>Masc
        <ul>
          <li>AUX: duan, duk</li>
          <li>VERB: Badakik, baduala, duk</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[abs]</a>
    <ul>
      <li>Plur
        <ul>
          <li>AUX: dira, ziren, ditu, zituen, dituzte, zituzten, diren, direla, gara, ditugu</li>
          <li>VERB: dira, daude, ditu, dauden, zeuden, ziren, dituzte, ditugu, datozen, zituen</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX: da, zuen, zen, du, dute, zuten, den, dela, zion, duen</li>
          <li>VERB: da, du, dago, dute, dugu, dela, dut, zegoen, zuen, dio</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[dat]</a>
    <ul>
      <li>Plur
        <ul>
          <li>AUX: zien, die, diete, zieten, zigun, digu, zaie, digute, zaigu, zitzaien</li>
          <li>VERB: dagokienez, die, zaie, deritze, zaigu, dagokie, dagokienei, dagokigunez, dagozkie, dagozkien</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX: zion, dio, zioten, diote, zaio, zitzaion, zait, zidan, diogu, dit</li>
          <li>VERB: dagokionez, dio, dagokion, zaio, zait, dagokio, dagokionean, diot, diogu, dagokionari</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[erg]</a>
    <ul>
      <li>Plur
        <ul>
          <li>AUX: dute, zuten, dituzte, dugu, zituzten, duten, zioten, ditugu, diote, genuen</li>
          <li>VERB: dute, dugu, zuten, duten, dituzte, ditugu, genuen, dutela, diote, badakigu</li>
        </ul>
      </li>
      <li>Sing
        <ul>
          <li>AUX: zuen, du, ditu, zituen, zion, duen, dut, duela, dio, zuenez</li>
          <li>VERB: du, dut, ditu, zuen, dio, duela, duen, dauka, dirudi, badu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[abs]</a>
    <ul>
      <li>1
        <ul>
          <li>AUX: naiz, gara, nintzen, ginen, nago, garela, naizela, nau, gaude, naiteke</li>
          <li>VERB: nago, gaude, naiz, gara, goaz, nengoen, geunden, nagoela, nenbilen, noa</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX: zara, haiz, zaitez, zinen, zaitu, zarela, zaitut, zarete, zintudan, Zaude</li>
          <li>VERB: zaude, zoaz, hago, zatoz, Hoa, bazabiltza, zaitugunok, zaitut, zara, zarete</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX: da, zuen, zen, du, dira, dute, zuten, ziren, ditu, zituen</li>
          <li>VERB: da, du, dago, dute, dira, daude, dugu, dela, dut, zegoen</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[dat]</a>
    <ul>
      <li>1
        <ul>
          <li>AUX: zait, zidan, zigun, digu, dit, zitzaidan, digute, litzaidake, zaigu, didate</li>
          <li>VERB: zait, zaigu, dabilkidalarik, dagokidan, dagokigunez, digute, emaidazu, zauzkigu, zitzaigun, zitzaizkidan</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX: zaizu, dizu, dizute, dizuet, zaizkizun, diat, dizut, genizuen, zaizkizu, bazaizu</li>
          <li>VERB: dagokizun, datorkizuna, diagu, diotsu, dizuet</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX: zion, dio, zioten, diote, zaio, zien, die, zitzaion, diete, zieten</li>
          <li>VERB: dagokionez, dagokienez, dio, dagokion, zaio, dagokio, dagokionean, diot, die, diogu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[erg]</a>
    <ul>
      <li>1
        <ul>
          <li>AUX: dugu, dut, nuen, ditugu, genuen, ditut, diogu, dugun, ditugun, dezagun</li>
          <li>VERB: dugu, dut, ditugu, genuen, dakit, nuen, badakigu, diot, badakit, daukagu</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX: duzu, dituzu, duzue, ezazu, itzazu, zenuen, baduzu, dezakezu, dituzun, duzun</li>
          <li>VERB: duzu, badakizu, dakizu, diozu, baduzu, daramazu, dituzu, dituzue, duzue, egizu</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX: zuen, du, dute, zuten, ditu, zituen, zion, dituzte, duen, zituzten</li>
          <li>VERB: du, dute, ditu, zuen, dio, duela, duen, zuten, dauka, duten</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite[abs]</a>
    <ul>
      <li>Infm
        <ul>
          <li>AUX: haiz, haiteke, haudala, hinduan, hintzen</li>
          <li>VERB: hago, Hoa</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite[dat]</a>
    <ul>
      <li>Infm
        <ul>
          <li>AUX: diat, nian, zaik</li>
          <li>VERB: diagu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite[erg]</a>
    <ul>
      <li>Infm
        <ul>
          <li>AUX: ezan, huan, duan, duk, dun, dunala, iezaion, nazan</li>
          <li>VERB: Badakik, baduala, baheukan, daukanan, duk</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 13 lemmas as copulas (<a>cop</a>). Examples: izan, egon, ukan, ibili, geratu, apropos, ari_izan, aurkari, gizon, onartu, sartu, sortu, txiki.</li>
</ul>

<ul>
<li>This corpus uses 19 lemmas as auxiliaries (<a>aux</a>). Examples: *edun, izan, egin, *edin, *ezan, ari, ukan, baldin, ohi, egon, omen, jakin, eskertu, gelditu, geu, guzti, ibili, joan, oso.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (332)</li>
      <li>VERB--NOUN-Abs (436)</li>
      <li>VERB--NOUN-Erg (376)</li>
      <li>VERB--NOUN-Gen (2)</li>
      <li>VERB--NOUN-Loc (1)</li>
      <li>VERB--NOUN-Par (44)</li>
      <li>VERB--PRON (57)</li>
      <li>VERB--PRON-Abs (13)</li>
      <li>VERB--PRON-Erg (11)</li>
      <li>VERB-Inf--NOUN (160)</li>
      <li>VERB-Inf--NOUN-Abs (202)</li>
      <li>VERB-Inf--NOUN-Erg (228)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(_) (1)</li>
      <li>VERB-Inf--NOUN-Par (7)</li>
      <li>VERB-Inf--PRON (22)</li>
      <li>VERB-Inf--PRON-Abs (3)</li>
      <li>VERB-Inf--PRON-Erg (9)</li>
      <li>VERB-Part--NOUN (627)</li>
      <li>VERB-Part--NOUN-ADP(_) (1)</li>
      <li>VERB-Part--NOUN-ADP(inguru) (1)</li>
      <li>VERB-Part--NOUN-Abs (873)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Erg (1120)</li>
      <li>VERB-Part--NOUN-Gen (3)</li>
      <li>VERB-Part--NOUN-Gen-ADP(_) (1)</li>
      <li>VERB-Part--NOUN-Ine (1)</li>
      <li>VERB-Part--NOUN-Ine-ADP(inguru) (5)</li>
      <li>VERB-Part--NOUN-Loc (6)</li>
      <li>VERB-Part--NOUN-Par (25)</li>
      <li>VERB-Part--PRON (80)</li>
      <li>VERB-Part--PRON-Abs (11)</li>
      <li>VERB-Part--PRON-Cau (1)</li>
      <li>VERB-Part--PRON-Erg (13)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (562)</li>
      <li>VERB--NOUN-ADP(arte) (1)</li>
      <li>VERB--NOUN-ADP(erdi) (1)</li>
      <li>VERB--NOUN-Abl (1)</li>
      <li>VERB--NOUN-Abs (1484)</li>
      <li>VERB--NOUN-All (1)</li>
      <li>VERB--NOUN-Erg (10)</li>
      <li>VERB--NOUN-Gen (6)</li>
      <li>VERB--NOUN-Par (111)</li>
      <li>VERB--PRON (3)</li>
      <li>VERB--PRON-Abs (22)</li>
      <li>VERB-Inf--NOUN (214)</li>
      <li>VERB-Inf--NOUN-ADP(inguru) (1)</li>
      <li>VERB-Inf--NOUN-Abs (491)</li>
      <li>VERB-Inf--NOUN-Erg (3)</li>
      <li>VERB-Inf--NOUN-Gen (4)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(antzeko) (1)</li>
      <li>VERB-Inf--NOUN-Par (22)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-Abs (12)</li>
      <li>VERB-Part--NOUN (966)</li>
      <li>VERB-Part--NOUN-ADP(antzeko) (1)</li>
      <li>VERB-Part--NOUN-ADP(inguru) (2)</li>
      <li>VERB-Part--NOUN-Abl-ADP(gabe) (1)</li>
      <li>VERB-Part--NOUN-Abs (2442)</li>
      <li>VERB-Part--NOUN-All (2)</li>
      <li>VERB-Part--NOUN-Erg (13)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Ins (1)</li>
      <li>VERB-Part--NOUN-Loc (4)</li>
      <li>VERB-Part--NOUN-Loc-ADP(inguru) (1)</li>
      <li>VERB-Part--NOUN-Par (141)</li>
      <li>VERB-Part--PRON-Abs (38)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (43)</li>
      <li>VERB--NOUN-Dat (137)</li>
      <li>VERB--PRON (6)</li>
      <li>VERB--PRON-Dat (3)</li>
      <li>VERB-Inf--NOUN (20)</li>
      <li>VERB-Inf--NOUN-Dat (58)</li>
      <li>VERB-Inf--NOUN-Par (1)</li>
      <li>VERB-Inf--PRON (5)</li>
      <li>VERB-Part--NOUN (79)</li>
      <li>VERB-Part--NOUN-Dat (329)</li>
      <li>VERB-Part--NOUN-Erg (1)</li>
      <li>VERB-Part--PRON (9)</li>
      <li>VERB-Part--PRON-Dat (7)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 7 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
