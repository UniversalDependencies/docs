---
layout: base
title:  'UD_Finnish-FTB'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Finnish FTB

Language: [Finnish](/fi/index.html) (code: `fi`)<br/>
Family: Uralic, Finnic

This treebank has been part of Universal Dependencies since the UD v1.1 release.

The following people have contributed to making this treebank part of UD: Jussi Piitulainen, Hanna Nurmi.

Repository: [UD_Finnish-FTB](https://github.com/UniversalDependencies/UD_Finnish-FTB)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfi_ftb25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Finnish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Finnish-FTB/issues).
If you want to collaborate, please contact [fin-clarin&nbsp;(æt)&nbsp;helsinki&nbsp;•&nbsp;fi].
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

FinnTreeBank 1 consists of manually annotated grammatical examples
from VISK. The UD version of FinnTreeBank 1 was converted from a
native annotation model with a script and later manually revised.



The UD version of FinnTreeBank 1 was derived from FinnTreeBank 1 2014
by a scripted mapping of labels and some restructuring in an attempt
to conform approximately to the UD Finnish model.

Unannotated linguistic material in FinnTreeBank 1 2014 was adapted
from the examples in Ison suomen kieliopin verkkoversio (The Web
Version of the Large Grammar of Finnish, VISK), available on-line as
<http://scripta.kotus.fi/visk>, and annotations originally produced
and further revised in FIN-CLARIN projects in the Department of Modern
Languages, University of Helsinki.


## Differences from the UD Finnish model

Some differences from the UD Finnish model remain unaddressed.

Surface words that have an adverb or a conjunction fused with a
following negative verb are separated into two tokens in the
FinnTreeBank model. The UD version keeps them as such but adds the
unannotated joined token before the two.

Most punctuation tokens are linked to a nearby token instead of a
clause head.

As a catchall, the dep relation is used as intended when a more proper
mapping could not be determined.

Some FinnTreeBank annotations and other notes are retained in the MISC
field.


## Splitting

The previous version of the treebank was split into training,
development, and test sets by repeatedly taking 8 sentences into
training set, 1 into development set, and 1 into test set.


## Acknowledgments

# Statistics of UD Finnish FTB

## POS Tags

[ADJ](fi_ftb-pos-ADJ.html) – [ADP](fi_ftb-pos-ADP.html) – [ADV](fi_ftb-pos-ADV.html) – [AUX](fi_ftb-pos-AUX.html) – [CCONJ](fi_ftb-pos-CCONJ.html) – [DET](fi_ftb-pos-DET.html) – [INTJ](fi_ftb-pos-INTJ.html) – [NOUN](fi_ftb-pos-NOUN.html) – [NUM](fi_ftb-pos-NUM.html) – [PART](fi_ftb-pos-PART.html) – [PRON](fi_ftb-pos-PRON.html) – [PROPN](fi_ftb-pos-PROPN.html) – [PUNCT](fi_ftb-pos-PUNCT.html) – [SCONJ](fi_ftb-pos-SCONJ.html) – [SYM](fi_ftb-pos-SYM.html) – [VERB](fi_ftb-pos-VERB.html) – [X](fi_ftb-pos-X.html)

## Features

[Abbr](fi_ftb-feat-Abbr.html) – [Case](fi_ftb-feat-Case.html) – [Clitic](fi_ftb-feat-Clitic.html) – [Connegative](fi_ftb-feat-Connegative.html) – [Degree](fi_ftb-feat-Degree.html) – [Foreign](fi_ftb-feat-Foreign.html) – [InfForm](fi_ftb-feat-InfForm.html) – [Mood](fi_ftb-feat-Mood.html) – [Number](fi_ftb-feat-Number.html) – [Number[psor]](fi_ftb-feat-Number-psor.html) – [NumType](fi_ftb-feat-NumType.html) – [PartForm](fi_ftb-feat-PartForm.html) – [Person](fi_ftb-feat-Person.html) – [Person[psor]](fi_ftb-feat-Person-psor.html) – [Polarity](fi_ftb-feat-Polarity.html) – [PronType](fi_ftb-feat-PronType.html) – [PunctSide](fi_ftb-feat-PunctSide.html) – [Reflex](fi_ftb-feat-Reflex.html) – [Style](fi_ftb-feat-Style.html) – [Tense](fi_ftb-feat-Tense.html) – [VerbForm](fi_ftb-feat-VerbForm.html) – [Voice](fi_ftb-feat-Voice.html)

## Relations

[acl](fi_ftb-dep-acl.html) – [advcl](fi_ftb-dep-advcl.html) – [advmod](fi_ftb-dep-advmod.html) – [amod](fi_ftb-dep-amod.html) – [appos](fi_ftb-dep-appos.html) – [aux](fi_ftb-dep-aux.html) – [case](fi_ftb-dep-case.html) – [cc](fi_ftb-dep-cc.html) – [ccomp](fi_ftb-dep-ccomp.html) – [compound](fi_ftb-dep-compound.html) – [compound:nn](fi_ftb-dep-compound-nn.html) – [compound:prt](fi_ftb-dep-compound-prt.html) – [conj](fi_ftb-dep-conj.html) – [cop](fi_ftb-dep-cop.html) – [csubj](fi_ftb-dep-csubj.html) – [csubj:cop](fi_ftb-dep-csubj-cop.html) – [dep](fi_ftb-dep-dep.html) – [det](fi_ftb-dep-det.html) – [discourse](fi_ftb-dep-discourse.html) – [expl](fi_ftb-dep-expl.html) – [fixed](fi_ftb-dep-fixed.html) – [flat](fi_ftb-dep-flat.html) – [goeswith](fi_ftb-dep-goeswith.html) – [mark](fi_ftb-dep-mark.html) – [nmod](fi_ftb-dep-nmod.html) – [nmod:gobj](fi_ftb-dep-nmod-gobj.html) – [nmod:gsubj](fi_ftb-dep-nmod-gsubj.html) – [nsubj](fi_ftb-dep-nsubj.html) – [nsubj:cop](fi_ftb-dep-nsubj-cop.html) – [nummod](fi_ftb-dep-nummod.html) – [obj](fi_ftb-dep-obj.html) – [orphan](fi_ftb-dep-orphan.html) – [punct](fi_ftb-dep-punct.html) – [reparandum](fi_ftb-dep-reparandum.html) – [root](fi_ftb-dep-root.html) – [vocative](fi_ftb-dep-vocative.html) – [xcomp](fi_ftb-dep-xcomp.html) – [xcomp:ds](fi_ftb-dep-xcomp-ds.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 18723 sentences, 159314 tokens and 159612 syntactic words.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1120 types of words that contain both letters and punctuation. Examples: x:n, mm., EU:n, ns., NN:n, 1900-luvulta, esim., n., A:n, EU-maiden, EU:hun, Oy:n, YK:n, ja/tai, keski-ikäinen, sosiaali-, torstai-iltana, 12-vuotias, 18-vuotiaana, 1980-luvulla, 1980-luvun, B:n, Esa-Pekka, Etelä-Amerikan, Kauppa-, Kivi-juhlat, MM-kisoihin, SAK:n, SDP:n, USA:n, ala-, ala-asteen, keng-, km/h, liike-elämässä, maa-, tv:n, tv:tä, vapaa-aikana, vapaa-ajan, -henkinen, 16-vuotiaita, 16-vuotias, 1700-luvulla, 1800-luvun, 1870-luvulla, 1900-luvun, 1970-luvulla, 1970-luvun, 1990-luvulla</li>
</ul>

<ul>
<li>This corpus contains 298 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 33 types of multi-word tokens. Examples: ettei, etten, ellei, etteikö, miksei, etteivät, jollei, muttei, vaikkei, ettet, jolleivät, elleivät, ellet, ettenkö, ehkei, ettette, vaikkeivät, Mikset, ellen, jollet, vaikket, Mutteihän, ellette, etteivätkö, jolleivat, jollen, jossei, jottei, jotten, mikseipä, mutteipa, vaikkeivat, vaikken.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 305 word types tagged as particles (PART): 28v, 2h, 30-35v, 70,00%, D.E.D, Eli, Elikä, Ettäkö, Ettäs, Ihanko, Ihanks, Johan, Joko, Jokos, Jopas, K-18, Ka, Katos, Katso, Kylläpä, Liekö, Mr., Mrs., Näinkö, OK, Tuskinpa, aika, aina, ainakaan, ainaki, ainakin, ainoastaan, aivan, arviolta, eKr, eKr., edes, ees, ehk, ehkä, ehkäpä, eiku, eikun, elikkä, em., enintään, ennää, entä, entäs, enää, enään, eres, erittäin, esim, esim., etenkin, etenkään, hyvänsä, hädin, iha, iham, ihan, ihav, ja, jne, jne., jo, jokseenkin, joku, jooko, jopa, jos, jospa, jotain, jotakuinkin, just, justii, juuri, järin, kai, kaiketi, kaikkein, kaikkiaan, kaikkiansa, kait, kans, kanssa, kas, kato, katsos, kenties, kerran, kerranki, kerrankin, kerta, km/h, ko., korkeintaan, koskapa, kovin, kovinkaan, ku, kuhan, kuitenkaan, kuitenki, kuitenkin, kumminkaan, kumminki, kumminkin, kun, kunpa, kuule, kuulemaa, kuulemma, kuulemma-, kuules, kuulkaa, kuuluu, kyl, kylhän, kyllä, kyllähän, kylläkin, kylläkään, kylläpäs, kylä, lie, lieh, lien, liene, lienee, liki, likimain, lopen, lähemmäs, lähes, läheskään, lähestulkoon, lähinnä, melkeen, melkein, melkeinpä, melkke, melko, miltei, mitä, mk/kg, mm, mm., muka, mukamas, muute, muuten, myos, myös, myöskin, myöskään, n., napin, ni, nii, niiku, niim, niin, niinkin, niinko, niinku, niinkuin, niinkun, niinpä, nikun, nimenomaan, nimittäi, nimittäin, nin, ninku, ninkun, nipin, noi, noin, ns., nuin, ny, nyk., nyt, nytten, näemmä, näet, näi, näim, näin, näinkin, näkyy, näköjeä, näköjään, nääs, o.s., oik., oikeastaan, oikeestaa, oikeestaan, olletikin, osapuilleen, pe, pelkästään, perin, peräti, plus, puolestaan, päi, päin, rp., saati, saatikka, sangen, semminkin, sen, sentää, sentään, siim, siinä, siis, silti, sitte, sitten, sittenkin, sittenkään, sitä, sitäpaitsi, suinkaan, suorastaan, taas, tahansa, tervetuloa, tiemmä, ties, tietenkin, tietenkään, tietysti, tietystikään, tms, todella, todellakaan, todellakin, toisaalta, toki, tokko, tosi, tosiaan, tosiaankaan, tosin, tota, totta, tottahan, tottakai, tuota, tuskin, v., vaa, vaan, vaikka, vaikkapa, vain, vallan, vallankin, varhmaan, varmaa, varmaan, varmaankaan, varmaankin, varmmaam, varsin, varsinkaan, varsinkin, varsinni, vas., vast, vasta, verraten, verrattain, viel, vielä, vieläk, vieläkin, vieläkö, vieläpä, vihdoin, vihdoinkin, viimein, viimeistään, vissii, vissiin, viä, viäl, vua, vv., vähintään, vähintäänkin, yhteensä, yhtikäs, yhä, yhäkö, yksinomaan, ym, yms.</li>
</ul>

<ul>
<li>This corpus contains 49 lemmas tagged as pronouns (PRON): ei-kukaan, ei-mikään, eri, eräs, harva, he, hän, itse, joka, jokainen, jokin, joku, jompi, jompikumpi, kaikki, kuka, kukaan, kukakin, kukin, kumpi, kumpikaan, kumpikin, me, mikä, mikäkin, mikään, minä, molemmat, mones, moni, muu, muutama, ne, niin, nuo, nämä, sama, se, sellainen, siksi, silleen, sinä, siten, te, toinen, tuo, tämä, usea, yksi</li>
</ul>

<ul>
<li>This corpus contains 51 lemmas tagged as determiners (DET): ei-kukaan, eri, eräs, harva, he, hän, itse, joka, jokainen, jokin, joku, jokunen, jompikumpi, kaikki, kuka, kukaan, kukin, kumpi, kumpikaan, kumpikin, me, mikä, mikäkin, mikään, minä, molemmat, mones, moni, monta, muu, muuan, muutama, ne, nuo, nämä, sama, se, sellainen, semmoinen, sinä, te, toinen, tuo, tuollainen, tuolloinen, tuommoinen, tällainen, tämmöinen, tämä, usea, yksi</li>
</ul>

<ul>
<li>Out of the above, 42 lemmas occurred sometimes as PRON and sometimes as DET: ei-kukaan, eri, eräs, harva, he, hän, itse, joka, jokainen, jokin, joku, jompikumpi, kaikki, kuka, kukaan, kukin, kumpi, kumpikaan, kumpikin, me, mikä, mikäkin, mikään, minä, molemmat, mones, moni, muu, muutama, ne, nuo, nämä, sama, se, sellainen, sinä, te, toinen, tuo, tämä, usea, yksi</li>
</ul>

<ul>
<li>This corpus contains 53 lemmas tagged as auxiliaries (AUX): VERB, alkaa, auttaa, ehtiä, ei, ennättää, haluta, huolia, joutaa, joutua, jättää, jäädä, kannattaa, kelvata, keretä, keritä, kuulua, kärsiä, käydä, lakata, mahtaa, meinata, näkyä, näyttää, olla, osata, osoittautua, ottaa, pakata, parata, passata, pitää, pyrkiä, pystyä, ruveta, ryhtyä, saada, saattaa, sattua, sopia, tahtoa, taitaa, tarvita, tavata, toimittaa, tulla, tuntua, täytyä, uhata, vaikuttaa, viitsiä, voida, yrittää</li>
</ul>

<ul>
<li>Out of the above, 51 lemmas occurred sometimes as AUX and sometimes as VERB: alkaa, auttaa, ehtiä, ei, ennättää, haluta, huolia, joutaa, joutua, jättää, jäädä, kannattaa, kelvata, keritä, kuulua, kärsiä, käydä, lakata, mahtaa, meinata, näkyä, näyttää, olla, osata, osoittautua, ottaa, pakata, parata, passata, pitää, pyrkiä, pystyä, ruveta, ryhtyä, saada, saattaa, sattua, sopia, tahtoa, taitaa, tarvita, tavata, toimittaa, tulla, tuntua, täytyä, uhata, vaikuttaa, viitsiä, voida, yrittää</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: on, ei, oli, ovat, en, ole, voi, olisi, olen, eivät</li>
    <li>VERB: on, oli, ole, tuli, tulee, ei, sanoi, ovat, saa, olisi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: olla, olemaan, saada, jättää, ruveta, voida, ollen, ryhtyä, olemasta, ollakseen</li>
    <li>VERB: olla, tehdä, mennä, tulla, lähteä, ottaa, sanoa, saada, käydä, käyttää</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: ollut, olevan, voinut, olleet, pitänyt, ollu, saanut, voitu, tullut, täytynyt</li>
    <li>VERB: ollut, olevan, saanut, tullut, oleva, tehty, käynyt, sanonut, tehnyt, nähnyt</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: uusia, suomalaiset, hyvät, hyviä, omat, omia, pienet, uudet, nuoret, suomalaisia</li>
      <li>AUX-Fin: ovat, eivät, olivat, emme, olemme, olette, ette, voivat, olisivat, älkää</li>
      <li>AUX-Part: olleet, saaneet, voineet, ehtineet, alkaneet, olevinaan, olevinasi, olleetkaan, soanneet, tainneet</li>
      <li>DET: meidän, ne, heidän, niitä, nämä, niiden, muut, useita, näitä, monet</li>
      <li>NOUN: ihmiset, lapset, naiset, miehet, asioita, ihmisiä, asiat, ihmisten, naisten, lapsia</li>
      <li>NUM: puolet, tuhansia, satoja, kymmeniä, kahdet, kaksin, kymmenien, miljoonien, puolilta, kolmissakymmenissä</li>
      <li>PRON: ne, he, me, meillä, jotka, niitä, te, meidän, meitä, joita</li>
      <li>PROPN: Yhdysvaltain, Sanomat, Yhdysvalloissa, Pohjoismaiden, Sanomien, Sanomissa, Yhdysvallat, Yhdysvaltojen, Pohjoismaissa, Ahtisaarten</li>
      <li>VERB-Fin: ovat, olivat, tulevat, saivat, eivät, haluavat, kuuluvat, olemme, tulkaa, jäivät</li>
      <li>VERB-Part: saaneet, olleet, olevat, tulleet, olevia, kuulleet, kertoneet, menneet, tehdyt, asuneet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: hyvä, hyvää, uusi, oma, ensimmäinen, uutta, uuden, suuri, ainoa, oman</li>
      <li>AUX-Fin: on, ei, oli, en, voi, olisi, olen, eikä, olin, et</li>
      <li>AUX-Part: ollut, olevan, voinut, pitänyt, ollu, saanut, voitu, tullut, täytynyt, ehtinyt</li>
      <li>DET: se, sen, hänen, tämä, sitä, joku, tällä, tässä, jotain, tämän</li>
      <li>NOUN: mies, vuoden, vuotta, asia, aikaa, äiti, vuonna, kertaa, osa, markkaa</li>
      <li>NUM: kaksi, yksi, kolme, kymmenen, viisi, kahden, pari, yhden, neljä, viiden</li>
      <li>PRON: se, hän, minä, sen, sitä, joka, mä, sinä, siitä, tämä</li>
      <li>PROPN: Suomen, suomessa, Suomi, Helsingin, Maija, Mikko, Euroopan, Anna, Helsingissä, Suomeen</li>
      <li>VERB-Fin: on, oli, tuli, tulee, ei, sanoi, saa, sanoo, meni, olisi</li>
      <li>VERB-Part: ollut, olevan, saanut, tullut, oleva, tehty, käynyt, sanonut, tehnyt, nähnyt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abe
    <ul>
      <li>ADJ: pitemmittä, pahemmitta, suuremmitta</li>
      <li>DET: muitta</li>
      <li>NOUN: ongelmitta, syyttä, luvatta, huomiotta, aiheetta, mutkitta, rahatta, rajoituksetta, tauotta, Sanoitta</li>
      <li>VERB-Inf: tekemättä, ottamatta, huomaamatta, juomatta, käyttämättä, maksamatta, sanomatta, tulematta, puuttumatta, pyytämättä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: hyvältä, oudolta, upealta, mukavalta, suomalaisilta, oikealta, omalta, selvältä, tutulta, uudelta</li>
      <li>DET: kaikilta, muilta, tältä, näiltä, siltä, eräiltä, joltakin, miltä, monelta, samalta</li>
      <li>NOUN: mieheltä, vuodelta, 1900-luvulta, ajalta, ulkomailta, asemalta, kadulta, mereltä, paikalta, puolelta</li>
      <li>NUM: kolmelta, kuudelta, puolelta, puolilta, viideltä, kahdeksalta, kymmeneltä, aamuviideltä, kahdelta, kaheksalta</li>
      <li>PRON: siltä, minulta, miltä, meiltä, häneltä, heiltä, teiltä, joltakulta, Miltähän, jolta</li>
      <li>PROPN: Rovaniemeltä, Venäjältä, Ahtisaarelta, Europaeukselta, Jämsänkoskelta, Länsirannalta, Nokialta, Pohjanmaalta, Tampereelta, Utulta</li>
      <li>VERB-Part: tulehtuneelta, hämmentyneeltä, uskomattomalta, vapauttavalta, asuneilta, hakevalta, istuvalta, jäsennellyltä, loukkaantuneelta, merkityltä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: hänet, minut, sinut, heidät, meidät, teidät, kenet, mut, sinutkin, sut</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ade
    <ul>
      <li>ADJ: omalla, ensimmäisellä, halvalla, hyvällä, pienellä, suomalaisilla, kovalla, omilla, suurella, toisella</li>
      <li>DET: tällä, sillä, samalla, näillä, toisella, millä, kaikilla, tuolla, jokaisella, monella</li>
      <li>NOUN: tavalla, hetkellä, aamulla, illalla, vuokralla, kesällä, viikolla, alueella, pöydällä, pihalla</li>
      <li>NUM: yhdellä, kolmella, kahdella, puolella, viidellä, kahdeksalla, miljardilla, neljällä, tuhannella, 12:lla</li>
      <li>PRON: minulla, meillä, hänellä, sillä, jolla, sinulla, heillä, teillä, mulla, joilla</li>
      <li>PROPN: Tampereella, Hannalla, Rovaniemellä, Suomella, Vantaalla, Venäjällä, Ahvenanmaalla, Filippiineillä, Imatralla, Kaisulla</li>
      <li>VERB-Inf: ostamalla, painamalla, antamalla, kaatamalla, myymällä, sanomalla, alentamalla, haukkumalla, luomalla, nauramalla</li>
      <li>VERB-Part: saatavilla, edellyttämällä, Avatulla, Uusittavalla, ajettavilla, annetuilla, erikoistuneilla, estävällä, jakamalla, jätetyllä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>ADJ: hyvälle, suomalaisille, kauniille, omalle, uudelle, pienelle, poliittisille, suomalaiselle, vieraalle, ahtaalle</li>
      <li>DET: kaikille, sille, toiselle, jokaiselle, niille, monelle, tälle, joillekin, meille, mille</li>
      <li>NOUN: lapselle, maalle, ihmiselle, kahville, lapsille, paikalle, pihalle, ulkomaille, äidille, asialle</li>
      <li>NUM: kahdelle, viidelle, puolelle, miljoonalle, yksille, 40:lle, 95:lle, kahdeksalle, kuudelle, kymmenkunnalle</li>
      <li>PRON: minulle, hänelle, meille, sinulle, sulle, sille, itselleen, heille, mulle, niille</li>
      <li>PROPN: Tampereelle, Rovaniemelle, Suomelle, Eilalle, Liisalle, Matille, Soilille, BBC:lle, Bulevardille, Koivuniemelle</li>
      <li>VERB-Part: olevalle, sovitulle, tehdylle, tehtävälle, Syömälakkoilleelle, arvaamattomalle, hoidettavalle, hypnotisoidulle, hävinneelle, irtisanomilleen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: asiaankuuluvine, kiiltävine, mustine, omine, pitkine, sinisine, turhine, uusine, valkoisine, ystävällisine</li>
      <li>DET: kaikkine, niine</li>
      <li>NOUN: puolisoineen, vaimoineen, juurineen, kuulokkeineen, lapsineen, perheineen, päivineen, x:ineen, aitoineen, elimineen</li>
      <li>NUM: kaksine, kolmine, satoine</li>
      <li>VERB-Part: esiintyvine, kiiluvine, lisääntyvine</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ela
    <ul>
      <li>ADJ: omasta, suomalaisista, omista, uudesta, törkeästä, edellisestä, erilaisesta, erilaisista, hyvästä, kuluvasta</li>
      <li>AUX-Inf: olemasta</li>
      <li>DET: tästä, siitä, muista, näistä, kaikista, jostakin, mistä, niistä, samasta, sellaisesta</li>
      <li>NOUN: asiasta, vuodesta, asioista, ihmisistä, lapsista, ovesta, päästä, syystä, työstä, autosta</li>
      <li>NUM: kahdesta, kolmesta, yhdestä, neljästä, viidestä, 300-400:sta, 31:stä, 32:sta, 761:stä, iltakuudesta</li>
      <li>PRON: siitä, tästä, minusta, mistä, hänestä, josta, niistä, joista, meistä, sinusta</li>
      <li>PROPN: Porvoosta, Suomesta, Jyväskylästä, Helsingistä, Virosta, Brysselistä, Englannista, Euroopasta, Maijasta, Pekasta</li>
      <li>VERB-Inf: näkemästä, puhumasta, katsomasta, käymästä, lähtemästä, menemästä, puuttumasta, sanomasta, tekemästä, aloittamasta</li>
      <li>VERB-Part: aiheuttamasta, tehdyistä, tulevasta, harkitsevista, jätetyistä, olevista, puhumastaan, saavutetuista, vaikuttavista, Kasvavista</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: ensimmäisenä, nuorena, pienenä, kuumana, tärkeänä, valmiina, vapaana, väsyneenä, hyvänä, puhtaana</li>
      <li>AUX-Part: olevinaan, olevinasi</li>
      <li>DET: tänä, sinä, jonakin, samana, jokaisena, minään, näinä, eräänä, muina, tänäkin</li>
      <li>NOUN: vuonna, päivänä, maanantaina, lauantaina, lapsena, sunnuntaina, torstaina, aikoina, vuosina, iltana</li>
      <li>NUM: yhtenä, kahtena, miljoonina, parina, viitenä, viitenätoista, yhtenäkään</li>
      <li>PRON: Sinuna, ittenä, jona, muutamana, samana, teinä</li>
      <li>PROPN: Aatuna, Buddhana, bodhisattvana</li>
      <li>VERB-Part: verrattuna, seuraavana, katsottuna, suhteutettuna, kuolleena, mitattuna, pidätettynä, elävänä, katottuna, kuultavana</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: uuden, oman, pienen, suomalaisen, ensimmäisen, erityisen, mahdollisimman, suomalaisten, hyvän, nuorten</li>
      <li>AUX-Part: olevan, olevansa, voitavan, voivan, olleen, olevani, saavan, voivani, voivansa</li>
      <li>DET: sen, hänen, tämän, meidän, minun, heidän, muutaman, niiden, mun, jonka</li>
      <li>NOUN: vuoden, kerran, ajan, miehen, auton, päivän, kirjan, talon, asian, ihmisen</li>
      <li>NUM: kahden, yhden, viiden, kolmen, kymmenen, miljoonan, neljän, parin, puolen, sadan</li>
      <li>PRON: sen, hänen, minun, itsensä, jonka, meidän, tämän, kaiken, sinun, heidän</li>
      <li>PROPN: Suomen, Helsingin, Euroopan, Ruotsin, Tampereen, Venäjän, Ranskan, EU:n, Turun, Nokian</li>
      <li>VERB-Part: olevan, olevansa, tulevan, tulleen, kuluvan, olleen, kadonneen, näkevän, pitävän, tulevansa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ill
    <ul>
      <li>ADJ: uuteen, hyvään, uusiin, pitkään, suuriin, väärään, entiseen, varsinaiseen, ensimmäiseen, isoon</li>
      <li>AUX-Inf: olemaan, oleen</li>
      <li>DET: tähän, siihen, samaan, mihinkään, johonkin, semmoseen, toiseen, mihin, näihin, kaikkiin</li>
      <li>NOUN: kotiin, aikaan, asiaan, suuntaan, mieleen, loppuun, maahan, päähän, töihin, huomioon</li>
      <li>NUM: kolmeen, yhteen, kahteen, viiteen, puoleen, neljään, kuutee, kuuteen, miljoonaan, pariin</li>
      <li>PRON: siihen, tähän, johon, toiseen, mihin, niihin, joihin, itseensä, mihinkään, minuun</li>
      <li>PROPN: Suomeen, Helsinkiin, Ruotsiin, Moskovaan, EU:hun, Englantiin, Kuusamoon, Turkkiin, Anneliin, Kuopioon</li>
      <li>VERB-Inf: tulemaan, tekemään, katsomaan, nukkumaan, puhumaan, maksamaan, olemaan, ottamaan, toimimaan, lähtemään</li>
      <li>VERB-Part: olevaan, saatuihin, sijaitsevaan, ajavaan, ajettuun, alkaviin, avanneeseen, hallitseviin, hallittaviin, haluamaansa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ine
    <ul>
      <li>ADJ: omassa, hyvässä, hyvissä, vanhassa, pienessä, suuressa, ensimmäisessä, nykyisessä, uudessa, korkeassa</li>
      <li>AUX-Inf: ollessa, ollessani, ollessaan</li>
      <li>DET: tässä, siinä, missä, kaikissa, samassa, missään, näissä, jossain, monessa, kaikessa</li>
      <li>NOUN: tapauksessa, kunnossa, asiassa, vuodessa, maailmassa, tulossa, vaiheessa, päivässä, alussa, kaupungissa</li>
      <li>NUM: kahdessa, yhdessä, viidessä, kolmessa, kolmissakymmenissä, neljässä, puolessa, 13:ssa, 27:ssä, 29:ssä</li>
      <li>PRON: siinä, jossa, missä, joissa, niissä, siinäpä, minussa, kaikessa, mis, näis</li>
      <li>PROPN: suomessa, Helsingissä, Ruotsissa, Euroopassa, Kuopiossa, Saksassa, Pariisissa, Turussa, Kanadassa, Amerikassa</li>
      <li>VERB-Inf: saamassa, syömässä, tullessaan, katsomassa, ollessa, uimassa, hakemassa, käymässä, odottaessa, tarvittaessa</li>
      <li>VERB-Part: korjattavissa, nähtävissä, tavattavissa, aistittavissa, käytettävissä, olevissa, saatavissa, tehtävissä, koskevissa, odotettavissa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: omin, selvin, taitavin, vähin, aistinvaraisin, halvoin, herkin, juhlallisin, jyrkin, järeämmin</li>
      <li>AUX-Inf: ollen</li>
      <li>DET: kaikin, monin, muin, molemmin, samoin</li>
      <li>NOUN: määrin, käsin, osin, tavoin, ajoin, kohdin, mielin, päin, päivin, ehdoin</li>
      <li>NUM: kaksin, kolmin, kymmenin</li>
      <li>PRON: samoin, toisin</li>
      <li>VERB-Inf: ollen, ottaen, lukien, tullen, katsoen, sanoen, yllättäen, käyttäen, istuen, katsellen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Lat
    <ul>
      <li>AUX-Inf: olla, saada, jättää, ruveta, voida, ryhtyä, ollapa, täytyä, joutua, jäädä</li>
      <li>VERB-Inf: olla, tehdä, mennä, tulla, lähteä, ottaa, sanoa, saada, käydä, käyttää</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: hyvä, uusi, oma, ensimmäinen, suuri, ainoa, pieni, vaikea, vanha, parempi</li>
      <li>AUX-Part: ollut, voinut, olleet, pitänyt, ollu, saanut, voitu, tullut, täytynyt, ehtinyt</li>
      <li>DET: se, kaikki, tämä, joku, ne, tuo, mikä, tää, nämä, mikään</li>
      <li>NOUN: mies, asia, äiti, osa, lapsi, nainen, kello, ihmiset, isä, tyttö</li>
      <li>NUM: kaksi, yksi, kolme, viisi, pari, neljä, kymmenen, puoli, yks, puolet</li>
      <li>PRON: se, hän, minä, joka, mä, ne, sinä, he, me, kaikki</li>
      <li>PROPN: Suomi, Maija, Mikko, Anna, Lasse, Pekka, matti, Antti, Halonen, Lipponen</li>
      <li>VERB-Part: ollut, saanut, tullut, oleva, tehty, käynyt, sanonut, tehnyt, nähnyt, ollu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Par
    <ul>
      <li>ADJ: hyvää, uutta, uusia, omaa, mahdollista, hauskaa, mukavaa, hyviä, parasta, sellaista</li>
      <li>AUX-Part: oltuaan</li>
      <li>DET: mitään, sitä, jotain, mitä, tätä, monta, niitä, useita, näitä, jotakin</li>
      <li>NOUN: vuotta, aikaa, kertaa, markkaa, rahaa, asiaa, kahvia, prosenttia, päivää, työtä</li>
      <li>NUM: miljoonaa, yhtä, tuhansia, satoja, kahta, miljardia, kymmeniä, sataa, viittä, tuhatta</li>
      <li>PRON: sitä, mitä, minua, häntä, mitään, niitä, jota, tätä, jotain, meitä</li>
      <li>PROPN: Suomea, Helsinkiä, Pekkaa, Ahtisaarta, Dianaa, Elinaa, Eurooppaa, Koivistoa, Mikkoa, Akselia</li>
      <li>VERB-Part: olevia, olevaa, tehtyä, tultua, jääneitä, levättyään, aiheuttamaa, annettavaa, katsottavaa, kuultuaan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tra
    <ul>
      <li>ADJ: valmiiksi, hyväksi, kuuluisaksi, toiseksi, hulluksi, tyhjäksi, kuuluisiksi, kyseenalaiseksi, parhaaksi, alttiiksi</li>
      <li>AUX-Inf: ollakseen, Ollaksesi, saadakseen, saadakseni, voidakseen</li>
      <li>DET: täksi, Kaikeksi, moneksi, samaksi</li>
      <li>NOUN: vuodeksi, nimekseen, sääliksi, malliksi, nimeksi, viikoksi, hyödyksi, ihmiseksi, kesäksi, mieheksi</li>
      <li>NUM: kahdeksi, viideksi, aamukuudeksi, kuudeks, pariksi, sadaksi, seittemäks, yhdeksi</li>
      <li>PRON: miksi, joksi, miksikään, muuksi, samaksi, siksi, toiseksi</li>
      <li>PROPN: Chopiniksi, Muumipeikoksi, Pikku-Myyksi, Schumanniksi, Siniksi, Tuomelaksi</li>
      <li>VERB-Inf: päästäkseen, luullakseni, muistaakseni, nähdäkseen, käsittääkseni, saadakseen, estääkseen, hoitaakseen, kertoakseen, kuollakseni</li>
      <li>VERB-Part: valituksi, hoidetuksi, kuulusteltavaksi, kuuluvaksi, hylätyksi, hyväksytyksi, tehdyksi, allekirjoitettavaksi, arvosteltaviksi, esitettäväksi</li>
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
      <li>ADJ: parempi, suurempi, vanhempi, mukavampi, parempaa, pienempiä, pitempi, aiempien, aikaisempaa, isompi</li>
      <li>ADP: lähempänä, lähemmäs, lähempää, pidemmälle</li>
      <li>ADV: enemmän, myöhemmin, paremmin, vähemmän, aikaisemmin, enempää, aiemmin, mieluummin, helpommin, ennemmin</li>
      <li>DET: useampi, useamman, useammat, Useampaa, harvemmalla, useammasta, useampia, useampiki, useampikin</li>
      <li>NOUN: connerympään, demarimpaa, ihmeempää, kiireemmäksi, rokimpaa, turvemmassa</li>
      <li>PRON: useampia, useampien, harvemman, useammalle, useamman, useampiakin</li>
      <li>VERB-Part: korostavampana</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: suurin, parasta, paras, mahdollisimman, parhaat, pahin, nopein, suurimman, suurimmat, tärkeintä</li>
      <li>ADP: Lähimpänä, lähinnä</li>
      <li>ADV: eniten, parhaiten, vähiten, Pahiten, useimmiten, mieluiten, ilmeisimmin, lähinnä, mieluimmin, pahimmillaan</li>
      <li>DET: useimmat, useimmilla, Useimmissa, Useimpien</li>
      <li>NOUN: herkuin, ihmisintä, nikseimpänä</li>
      <li>PRON: useimmat, Useimmilla, useimpien</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: ei, en, eivät, eikä, et, älä, eikö, emme, enkä, eihän</li>
      <li>VERB-Fin: ei, en, eivät, Älä, eikä, eikö, Eipä, Eipäs, eihän, et</li>
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
      <li>AUX-Fin: olisi, pitäisi, voisi, olisin, olisivat, tulisi, voisin, olis, kannattaisi, olisit</li>
      <li>VERB-Fin: olisi, tulisi, haluaisin, luulisi, tekisi, haluaisi, uskoisi, saisi, kertoisi, olis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: älä, älkää, ole, olkoon, olkaa, olkoot, älköön, älkäämme, älkööt, äläkä</li>
      <li>VERB-Fin: ota, tule, anna, tulkaa, kerro, sano, vie, mene, tee, ole</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: on, oli, ovat, ole, voi, olen, olivat, olin, pitää, täytyy</li>
      <li>VERB-Fin: on, oli, ole, tuli, tulee, sanoi, ovat, saa, sanoo, meni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>AUX-Fin: Ollos</li>
      <li>VERB-Fin: Kuullos, Nukkuos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>AUX-Fin: lienee, liene, Saanen, täytynee, voinee, lieneekö, lienevät, Liekö, Mahtaneeko, Sopinee</li>
      <li>VERB-Fin: hypänne, luvanne, lienee, joutunee, ratkennee, valmistunee, kertone, liene, päätettäneen, voittanee</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: oli, olivat, olin, ollut, piti, alkoi, sai, tuli, saattoi, oliko</li>
      <li>VERB-Fin: oli, tuli, sanoi, meni, sai, ollut, teki, jäi, lähti, olivat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: on, ovat, ole, voi, olen, pitää, täytyy, saa, onko, olet</li>
      <li>VERB-Fin: on, ole, tulee, ovat, saa, sanoo, onko, tiedä, haluaa, tekee</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: on, ei, oli, ovat, en, ole, voi, olisi, olen, eivät</li>
      <li>AUX-Inf: olla, olemaan, saada, jättää, ruveta, voida, ollen, ryhtyä, olemasta, ollakseen</li>
      <li>AUX-Part: ollut, olevan, voinut, olleet, pitänyt, ollu, saanut, tullut, täytynyt, ehtinyt</li>
      <li>VERB-Fin: on, oli, ole, tuli, tulee, ei, sanoi, ovat, saa, olisi</li>
      <li>VERB-Inf: olla, tehdä, mennä, tulla, lähteä, ottaa, sanoa, saada, käydä, käyttää</li>
      <li>VERB-Part: ollut, olevan, saanut, tullut, oleva, käynyt, sanonut, tehnyt, nähnyt, ollu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: ollaan, voidaan, oltiin, olla, voida, voitaisiin, oltu, saadaan, aletaan, alettiin</li>
      <li>AUX-Part: voitu, oltava, oltu, saatu, voitavan, alettu, ehditty, jätetty, alettava, oltuaan</li>
      <li>VERB-Fin: tehdään, tarvitaan, ollaan, mennään, otetaan, saadaan, tehtiin, pidetään, katsotaan, sanotaan</li>
      <li>VERB-Inf: tarvittaessa, löydettäessä, mentäessä, oltaessa, ostettaessa, toimitettaessa, valittaessa, etsittäessä, etsittämän, huuhdottaessa</li>
      <li>VERB-Part: tehty, verrattuna, tehtävä, valituksi, pidetty, annettu, kerrottu, kielletty, kirjoitettu, varastettu</li>
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
      <li>ADJ: sellainen, sellaista, semmoinen, tuollaista, tällaista, sellaiset, semmonen, semmosia, sellaiseksi, sellaisen</li>
      <li>ADV: siellä, täällä, sinne, niin, silloin, tässä, siinä, tänne, sieltä, näin</li>
      <li>DET: se, sen, tämä, sitä, tällä, tässä, tämän, ne, tänä, tätä</li>
      <li>PRON: se, sen, sitä, ne, siitä, tämä, niin, siihen, siinä, niitä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: jonkinlaista, samanlaisia, samanlainen, monenlaista, kaikenlaista, minkäänlaista, monenlaisia, kaikenlaisia, samanlaista, jonkinlainen</li>
      <li>ADV: usein, muuten, muualla, jotenkin, harvoin, samoin, jossakin, missään, mitenkään, miten</li>
      <li>DET: joka, kaikki, eri, mitään, joku, jotain, monta, mikään, toinen, muutaman</li>
      <li>PRON: kaikki, mitään, joku, kukaan, jotain, toinen, muuta, kaiken, muut, jotakin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADJ: millainen, minkälainen, millaisia, minkälaisen, millaisen, millaisena, millanen, mimmonen, minkälaisia, minkäslaista</li>
      <li>ADV: miten, kuinka, miksi, missä, milloin, mitä, miks, mihin, mistä, minne</li>
      <li>DET: mitä, mikä, missä, millä, minkä, kuka, kenen, mistä, ketä, mihin</li>
      <li>PRON: mitä, kuka, mikä, mistä, miltä, mitäs, minkä, kenelle, ketä, kenen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: hänen, meidän, minun, heidän, mun, sinun, teidän, sun, sinä, meistä</li>
      <li>PRON: hän, minä, mä, sinä, he, me, hänen, minulla, minua, sä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>DET: toistensa, toisensa</li>
      <li>PRON: toisiaan, toisensa, toistaan, toisiinsa, toistensa, toisilleen, toisistaan, toisemme, toisestaan, toisiamme</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADJ: jollainen, jollaisen, jollaista, jollaiseksi, jollaisia, jollaiset, jollaisissa</li>
      <li>ADV: jolloin, joten, miten, missä, jonne, minne, johon, josta, mihin, mistä</li>
      <li>DET: jonka, joiden, jona, joka, jolla, mitä-</li>
      <li>PRON: joka, jotka, mitä, jonka, jossa, jota, mikä, joita, jolla, josta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: kaksi, yksi, kolme, kymmenen, 10, viisi, kahden, pari, yhden, neljä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: ensimmäinen, ensimmäisen, toinen, toisen, toista, ensimmäisellä, ensimmäisenä, ensimmäistä, ensimmäiset, kolmas</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: itse, itsensä, itseensä</li>
      <li>PRON: itse, itsensä, itseään, itselleen, itsekin, itseni, itseäni, itsestään, itseäsi, ite</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: en, olen, olin, emme, olemme, olisin, enkä, voin, oon, voisin</li>
      <li>DET: meidän, minun, mun, meistä, meiän, Meillä, meille, meitä, minunkin, minä</li>
      <li>PRON: minä, mä, me, minulla, minua, minun, meillä, minulle, meidän, meitä</li>
      <li>VERB-Fin: olen, sanoin, olin, ajattelin, näin, tulen, haluan, lähden, sain, söin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: et, älä, olet, olette, ette, oot, älkää, voit, olisit, oletko</li>
      <li>DET: sinun, teidän, sun, sinä, te, teille, teiän</li>
      <li>PRON: sinä, sä, te, sinulle, sinun, sinua, sinulla, sulle, teillä, sinut</li>
      <li>VERB-Fin: olet, ota, tule, anna, saat, haluat, tulkaa, tulet, teet, kerro</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: on, ei, oli, ovat, voi, olisi, eivät, eikä, olivat, pitäisi</li>
      <li>DET: hänen, heidän, heillä, häne</li>
      <li>PRON: hän, he, hänen, häntä, hänellä, hänet, hänelle, heidän, hänestä, heillä</li>
      <li>VERB-Fin: on, oli, tuli, tulee, ei, sanoi, ovat, saa, sanoo, meni</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: ikäisemme, ikäistänne, nuorenne, nuorimmaisenne, parastamme, suomalaisemme, työttömistämme</li>
      <li>ADP: avullamme, aikanamme, joukostamme, luoksemme, luoksenne, luonamme, takiamme, tähtemme, tähtenne, ylitsemme</li>
      <li>ADV: keskuudessamme, tosissamme, Takanamme, edellämme, edessämme, eteemme, huviksenne, hyväksemme, kanssanne, kotonanne</li>
      <li>NOUN: maamme, aikamme, aivomme, hintavertailuumme, huoneistoonne, kirjoittajamme, koiramme, lapsenne, lapsillenne, sydämemme</li>
      <li>PRON: itseänne, toisemme, toisiamme, toisianne, toisistanne, itseemme, itsenne, itsestämme, itseämme, kaikkemme</li>
      <li>PROPN: Petterimme</li>
      <li>VERB-Inf: Saadessanne, kuvatessamme, käsittääksemme, käsittääksenne, uhrataksemme</li>
      <li>VERB-Part: järjestämiämme, Itkettyämme, Tekemämme, huomaavinamme, omistamanne, onnistuneenne, päätettävissänne, saavuttuamme, tekemiämme, valmistuvanne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: parhaani, omani, omiani, Kahdeksanvuotiaani, ainoani, ikäiseni, ikäseim, kaltaiseksesi, kaltaiseni, kokoiseni</li>
      <li>ADP: puolestani, kanssas, ansiostani, kanssasi, luonani, lähelläsi, mielestäni, mielestäsi, nähteni, takias</li>
      <li>ADV: mielestäni, pahoillani, hämilläni, kanssani, mielelläni, mukaasi, epätoivoissani, huolissani, itsekseni, polvilleni</li>
      <li>AUX-Inf: ollessani, Ollaksesi, saadakseni</li>
      <li>AUX-Part: olevani, olevinasi, voivani</li>
      <li>NOUN: ystäväni, sateenvarjoni, elämäni, äitisi, autoni, lapseni, Mieleeni, elämässäni, kissani, päähäni</li>
      <li>NUM: miljoonani</li>
      <li>PRON: itseni, itseäni, itseäsi, itselleni, itsesi, itsestäsi, itselläsikin, itsestäni, itsestänikään, itteeni</li>
      <li>PROPN: Lassesi, Alfas, Roopeseni</li>
      <li>VERB-Inf: luullakseni, muistaakseni, käsittääkseni, kirjoittaessani, kuollakseni, käyttääkseni, lainatakseni, mennessäsi, nähdäkseni, Herätessäni</li>
      <li>VERB-Part: olevani, saavani, ostamani, tekemäsi, Kuvattavakseni, Luettuani, aistivinani, aloittamani, ehdottaneeni, etsiväni</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: huumorintaj.</li>
          <li>NOUN: x, x:n, y, klo, A, mk, A:n, Oy:n, B, B:n</li>
          <li>PART: mm., ns., esim., n., OK, jne, km/h, 70,00%, em., mk/kg</li>
          <li>PROPN: EU:n, NN:n, EU, EU:hun, SAK, YK:n, SAK:n, SDP:n, TBK, USA:n</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Han
        <ul>
          <li>ADJ: Rehelliseltähän, Ujohan, olennaistahan</li>
          <li>ADP: mukaanhan, puolellahan</li>
          <li>ADV: ainahan, niinhän, nythän, kuinkahan, Nykyäänhän, Täällähän, Vastahan, huomennahan, ympärillähän, Justhan</li>
          <li>AUX-Fin: eihän, onhan, enhän, Älähän, ethän, olihan, ovathan, voidaanhan, Olenhan, Olisihan</li>
          <li>DET: Jokainenhan, Minkähän, Minunhan, Mitähän, Tämähän</li>
          <li>NOUN: teoshan, Hermothan, Karttaagohan, Lapsiinhan, Levyähän, Mieshän, Ohrahan, Oopperahan, Vaarojahan, autothan</li>
          <li>PART: Johan, kyllähän, kylhän</li>
          <li>PRON: sehän, Mitähän, Minähän, sinähän, Kaikkihan, Kukahan, Mehän, Miltähän, Tuostahan, senhän</li>
          <li>PROPN: Kallellahan, Kreikassahan, Mattihan, Mikkohan, Moonahan, Pekkahan, Venäjänhän</li>
          <li>VERB-Fin: onhan, Antakaahan, Kuulkaahan, Olithan, eihän, katohan, saanhan, Haluammehan, Jäihän, Kävinhän</li>
          <li>VERB-Part: Mentävähän, Valvottuahan, kuolluthan</li>
        </ul>
      </li>
      <li>Han,Ka
        <ul>
          <li>ADV: Mihinkähä, Miksikähän, mihinkähän</li>
        </ul>
      </li>
      <li>Han,Kin
        <ul>
          <li>NOUN: lapsijakkiihan, rahatkinhan</li>
          <li>PRON: nekinhän</li>
        </ul>
      </li>
      <li>Han,Ko
        <ul>
          <li>ADV: Miksiköhän, Näinköhän, noinkohan</li>
          <li>AUX-Fin: eiköhän, Onkohan, Olisikohan, Eivätköhän, Enköhän, Mahdatkohan, Mahtaakohan, Oletkohan, Voisikohan, onkoha</li>
          <li>PRON: Kukakohan, Mitäköhän</li>
          <li>VERB-Fin: Onkohan, Uskaltaisikohan, haluaakohan, olikohan, Enköhän, Kokeilisikohan, Oiskohan, Saaraankohan, Tietääköhän, Tulenookohan</li>
        </ul>
      </li>
      <li>Han,Pa
        <ul>
          <li>AUX-Fin: Eipähän</li>
        </ul>
      </li>
      <li>Ka
        <ul>
          <li>ADV: mitenkä, minnekkä</li>
          <li>AUX-Fin: eikä, enkä, eivätkä, emmekä, äläkä, etkä, ettekä</li>
          <li>VERB-Fin: eikä</li>
        </ul>
      </li>
      <li>Ka,S
        <ul>
          <li>ADV: mitenkäs, Millonkas</li>
          <li>DET: mihinkäs</li>
        </ul>
      </li>
      <li>Kaan
        <ul>
          <li>ADJ: ainoatakaan, ainuttakaan, Ensimmäistäkään, edellisestäkään, huonokaan, kummoistakaan, surkeinkaan, syksyisillekään, tämänkertainenkaan, uudetkaan</li>
          <li>ADP: lähelläkään</li>
          <li>ADV: vieläkään, olemassakaan, ennenkään, muutenkaan, paljonkaan, puoliakaan, puoliksikaan, päinkään, silloinkaan, tänäänkään</li>
          <li>AUX-Fin: olekaan, olikaan, ollutkaan, pitikään, lieneekään, mahtaakaan, oletkaan, olisikaan, onkaan, ovatkaan</li>
          <li>AUX-Part: olleetkaan, ollukkaan, ollutkaan</li>
          <li>DET: Tämäkään, Tänäkään, muidenkaan, sittään, tämänkään, tätäkä, yhtäkään</li>
          <li>NOUN: kertaakaan, hetkeäkään, sanaakaan, arkisuudellekaan, elettäkään, kuukkautteenkaa, merkkiäkään, metriäkään, rahaakaan, tippaakaan</li>
          <li>NUM: yksikään, viittäkään, yhtenäkään</li>
          <li>PART: myöskään, kovinkaan, varmaankaan, todellakaan, kylläkään, tietystikään, tosiaankaan</li>
          <li>PRON: muukaan, sekään, siitäkään, minäkään, muutkaan, sitäkään, Yhtäkään, itsekään, itsestänikään, minäkä</li>
          <li>PROPN: Kaisukaan, Leenastakaan, Paavokaa, Petsamonkaan, Telelläkään</li>
          <li>VERB-Fin: olekaan, ollutkaan, pääsekään, huomaatkaan, ilmestynytkään, menikään, nauratakaan, tulekaan, valmistakaan, ajattelisikaan</li>
          <li>VERB-Inf: puhuakaan, puhumattakaan, yrittääkään, ajatellakhaa, etsiäkään, haaveillakaan, hievahtaakaan, juodakaan, jäkättääkään, katsahtaakaan</li>
          <li>VERB-Part: luullutkaan, huomattukaan, katottukaa, kattonukkaa, kirjoitettukaan, kokeneetkaan, käynytkään, käytettykään, lukenutkaan, lähtenytkään</li>
        </ul>
      </li>
      <li>Kaan,Ko
        <ul>
          <li>NOUN: kesälläkäänkö</li>
          <li>PRON: sitäkäänkö</li>
          <li>VERB-Fin: luenkokaan</li>
        </ul>
      </li>
      <li>Kin
        <ul>
          <li>ADJ: eriäviäkin, hienompikin, lyhytkin, pienetkin, isokin, isompikin, kansallisiakin, nykyistenkin, yrityskohtaisiakin, Hyvälläkin</li>
          <li>ADP: sisälläkin, alussakin, jälkeenkin, keskelläkin</li>
          <li>ADV: hyvinkin, ennenkin, muutenkin, nytkin, pikemminkin, edelleenkin, paljonkin, enemmänkin, nykyisinkin, sittenkin</li>
          <li>AUX-Fin: onkin, olikin, ovatkin, olisikin, Taidatkin, olekin, olenkin, olinkin, Haluankin, Oltiinkin</li>
          <li>DET: muitakin, minunkin, muutakin, muutkin, tänäkin, niidenkin, senkin, tämänkin, tässäkin, Muissakin</li>
          <li>NOUN: jatkossakin, loputkin, ajatuskin, housutkin, lapsetkin, lapsikin, olosuhteetkin, tottakin, yölläkin, äidillekin</li>
          <li>NUM: yksikin, kaksikin, yhdenkin, kolmenkin, puolikin, tuhansienkin, viisikin</li>
          <li>PART: vieläkin, varmaankin, vihdoinkin, myöskin, todellakin, vähintäänkin, kylläkin, niinkin, näinkin</li>
          <li>PRON: itsekin, minäkin, sekin, sinäkin, muutakin, meilläkin, hänkin, minullekin, hekin, itselleenkin</li>
          <li>PROPN: Englannissakin, Kirsikin, Liisakin, Soiliki, Suomenkin, Suomessakin, Suomikin, Brysselissäkin, Emuunkin, Englanninkin</li>
          <li>VERB-Fin: Menenkin, onkin, olikin, tulekin, löytyikin, olekin, olisikin, saikin, tekikin, tulikin</li>
          <li>VERB-Inf: maksaakin, arvatenkin, kammatakkim, kierteekkiis, kuolemaisillaankin, reissatakin, sanookki, tehdäkin, tullakin, tullessaankin</li>
          <li>VERB-Part: ajatelluki, ajatellutkin, mennytkin, näkevilläkin, olleetkin, ollukki, palautettukin, puhunutkin, pyrittykin, päästyäänkin</li>
        </ul>
      </li>
      <li>Kin,Ko
        <ul>
          <li>NOUN: kesälläkinkö, ongellakinko</li>
        </ul>
      </li>
      <li>Ko
        <ul>
          <li>ADJ: Kuusivuotiaanako, L​u​o​n​n​o​n​s​u​o​j​e​l​u​l​l​i​s​i​s​t​a​k​o, Pitkäkö, Suuriko, Vanhako, metalliseltako, tällaistako</li>
          <li>ADV: paljonko, kauanko, Eilenkö, Taasko, Miksikö, Noinko, Näinkö, paljoko, sielläkö</li>
          <li>AUX-Fin: onko, eikö, oliko, onks, oletko, olisiko, pitäisikö, voiko, olenko, pitääkö</li>
          <li>DET: montako, Tämäkö, kumpaanko, tuonko</li>
          <li>NOUN: Veturillako, Vittuako, piruako, tavallako, Hittoako, Kampanjointiako, Kateusko, Kotivideotko, Mediako, Sairaaloitako</li>
          <li>PART: vieläkö, Joko, Ihanko, Ettäkö, Liekö, Näinkö, yhäkö, Ihanks</li>
          <li>PRON: tekö, sekö, Minäkö, Sitäkö, Tuoko, Tämäkö, sinäkö, Heistäkö, Kaikkiko, Kukako</li>
          <li>PROPN: Ansallako, Hakalaltako, Museokadullako, Porvoostako, Ristoko, Suomessako</li>
          <li>VERB-Fin: onko, oliko, onks, tuleeko, Muistatko, ootko, tuletko, Näyttääkö, Tunnetko, mennäänkö</li>
          <li>VERB-Inf: Lähteäkö, Ollako, Erotako, Etsiäkö, Investoidako, Juomaanko, Mennäkö, Seuratako, Uskoako, Valitako</li>
          <li>VERB-Part: ollukko</li>
        </ul>
      </li>
      <li>Ko,S
        <ul>
          <li>ADV: Vähänkös, Äkkiäkös, harvoinkos</li>
          <li>AUX-Fin: Eikös, Oletkos, enkös, Meinaakos, Olikos, Onkos, Tartteekos, pitääkös</li>
          <li>DET: mones</li>
          <li>NOUN: Kerrankos, Ukkoskos, väliäkös</li>
          <li>PART: Jokos</li>
          <li>PRON: Moneltakos, Sinäkös, minäkös</li>
          <li>VERB-Fin: onkos, menetkös, Kuulitkos, Käytitkös, Luvattiinkos, Muistatkos, Nukkuukos, Olitkos, Painatkos, Perutkos</li>
          <li>VERB-Inf: Tiskaamallakos</li>
        </ul>
      </li>
      <li>Pa
        <ul>
          <li>ADJ: Omapa</li>
          <li>ADV: korkeallepa, miksipä, Siinäpä, tässäpä</li>
          <li>AUX-Fin: eipä, onpa, oletpa, olipa, Enpä, Olinpa, Olisitpa, Pitipä, Taidanpa, Tartteepa</li>
          <li>AUX-Inf: ollapa</li>
          <li>NOUN: Insinöörinpä</li>
          <li>PART: vaikkapa, koskapa, Tuskinpa, ehkäpä, Kylläpä, melkeinpä</li>
          <li>PRON: kukapa, siinäpä, Mitäpä, minäpä, sinäpä, Sepä, Siitäpä, Tästäpä</li>
          <li>VERB-Fin: arvatkaapa, Eipä, Tekipä, lukekaapa, menepä, menkääpä, tulepa, Ajatelkaapa, Ajatellaanpa, Annetaanpa</li>
          <li>VERB-Inf: Ollapa, Päästäpä</li>
        </ul>
      </li>
      <li>Pa,S
        <ul>
          <li>AUX-Fin: ollaanpas, Olipas, eipäs, Enpäs, Onpas, Saapas, tulipas</li>
          <li>PART: Jopas, kylläpäs</li>
          <li>PRON: Hänpäs, Minäpäs, Sepäs, miäpäs</li>
          <li>VERB-Fin: Eipäs, kuulkaapas, meeppäs, otapas, Arvaappas, Autapas, Katsopas, Kysypäs, Käydäänpäs, Muistappas</li>
        </ul>
      </li>
      <li>S
        <ul>
          <li>ADJ: minkäslaista</li>
          <li>ADV: kuinkas, Koskas, missäs, mitäs</li>
          <li>AUX-Fin: Alas, Älkääs, Äläs</li>
          <li>DET: mitäs, Mikäs, kukas, milläs</li>
          <li>PART: entäs, kuules, Ettäs, Katos, katsos</li>
          <li>PRON: mitäs, mikäs, kukas</li>
          <li>VERB-Fin: Annas, Katotaas, Kuulkaas, Odotas, Sanos, ootas, tules, Katsokaas, Katsotaas, Lopettakaas</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Connegative</a>
    <ul>
      <li>Yes
        <ul>
          <li>AUX-Fin: ole, voi, ollut, olisi, saa, oo, pitäisi, tarvitse, voinut, kannata</li>
          <li>VERB-Fin: ole, tiedä, ollut, tule, halua, pysty, saa, tiennyt, lähde, tullut</li>
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
          <li>X: in, the, Lilla, Pretty, Royal, Super, Woman, aquis, beat, boken</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>InfForm</a>
    <ul>
      <li>1
        <ul>
          <li>AUX-Inf: olla, saada, jättää, ruveta, voida, ryhtyä, ollakseen, ollapa, täytyä, Ollaksesi</li>
          <li>VERB-Inf: olla, tehdä, mennä, tulla, lähteä, ottaa, sanoa, saada, käydä, käyttää</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX-Inf: ollen, ollessa, ollessani, ollessaan</li>
          <li>VERB-Inf: ollen, ottaen, lukien, tullen, tullessaan, katsoen, sanoen, ollessa, yllättäen, käyttäen</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX-Inf: olemaan, olemasta, oleen</li>
          <li>VERB-Inf: tulemaan, tekemään, katsomaan, nukkumaan, puhumaan, tekemättä, maksamaan, olemaan, ottamaan, toimimaan</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartForm</a>
    <ul>
      <li>Agt
        <ul>
          <li>VERB-Part: aiheuttama, aiheuttamaa, aiheuttamasta, aiheuttamia, edellyttämällä, jalostama, johtama, järjestämiämme, järjestämä, ostamani</li>
        </ul>
      </li>
      <li>Neg
        <ul>
          <li>VERB-Part: sietämätön, uskomaton, kouluttamattomat, pätemätöntä, sietämättömiä, tavoittamattomissa, tietämätön, uskomattomalta, Käsittämättömän, Sietämätöntä</li>
        </ul>
      </li>
      <li>Past
        <ul>
          <li>AUX-Part: ollut, voinut, olleet, pitänyt, ollu, saanut, voitu, tullut, täytynyt, ehtinyt</li>
          <li>VERB-Part: ollut, saanut, tullut, tehty, käynyt, sanonut, tehnyt, nähnyt, ollu, verrattuna</li>
        </ul>
      </li>
      <li>Pres
        <ul>
          <li>AUX-Part: olevan, oltava, olevansa, voitavan, voivan, alettava, oleva, olevani, olevinaan, olevinasi</li>
          <li>VERB-Part: olevan, oleva, olevansa, olevat, tehtävä, olevia, tulevan, kuluvan, lähdettävä, olevaa</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>ADJ: parhaani, omani, omiani, Kahdeksanvuotiaani, ainoani, ikäisemme, ikäiseni, ikäseim, kaltaiseni, kokoiseni</li>
          <li>ADP: puolestani, avullamme, aikanamme, ansiostani, joukostamme, luoksemme, luonamme, luonani, mielestäni, nähteni</li>
          <li>ADV: mielestäni, pahoillani, hämilläni, kanssani, mielelläni, epätoivoissani, huolissani, itsekseni, keskuudessamme, polvilleni</li>
          <li>AUX-Inf: ollessani, saadakseni</li>
          <li>AUX-Part: olevani, voivani</li>
          <li>NOUN: ystäväni, sateenvarjoni, elämäni, maamme, autoni, lapseni, Mieleeni, aikamme, elämässäni, kissani</li>
          <li>NUM: miljoonani</li>
          <li>PRON: itseni, itseäni, itselleni, toisemme, toisiamme, itseemme, itsestämme, itsestäni, itsestänikään, itseämme</li>
          <li>PROPN: Petterimme, Roopeseni</li>
          <li>VERB-Inf: luullakseni, muistaakseni, käsittääkseni, kirjoittaessani, kuollakseni, käyttääkseni, lainatakseni, nähdäkseni, Herätessäni, Palatakseni</li>
          <li>VERB-Part: olevani, saavani, järjestämiämme, ostamani, Itkettyämme, Kuvattavakseni, Luettuani, Tekemämme, aistivinani, aloittamani</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADJ: ikäistänne, kaltaiseksesi, nuorenne, nuorimmaisenne, näköisesi, omaksesi, parastasi</li>
          <li>ADP: kanssas, kanssasi, luoksenne, lähelläsi, mielestäsi, takias, tähtenne</li>
          <li>ADV: mukaasi, eteesi, haltuusi, huviksenne, johtoosi, kannoillesi, kanssanne, kanssasi, kotonanne, mahallesi</li>
          <li>AUX-Inf: Ollaksesi</li>
          <li>AUX-Part: olevinasi</li>
          <li>NOUN: äitisi, isäsi, asiasi, hermosi, huoneistoonne, lapsenne, lapsillenne, lippusi, ohjelmaasi, rahasi</li>
          <li>PRON: itseäsi, itsesi, itsestäsi, itseänne, toisianne, toisistanne, itselläsikin, itsenne, ittees, ittelläs</li>
          <li>PROPN: Lassesi, Alfas</li>
          <li>VERB-Inf: mennessäsi, Saadessanne, ajaessasi, kiusataksesi, käsittääksenne, käynnistääksesi, saadaksesi, tullesas</li>
          <li>VERB-Part: tekemäsi, käyttäväsi, lainaamasi, löytäväsi, näkeväsi, omistamanne, onnistuneenne, pärjääväsi, päätettävissänne, tuntevasi</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: omiaan, hänenkaltaisiaan, ikäistensä, arvoiseensa, arvoisensa, ikäisekseen, ikäisensä, kaltaisensa, läheisimpiinsä, mieleisensä</li>
          <li>ADP: mielestään, mukaansa, takanaan, vieressään, johdollaan, kanssaan, kohdaltaan, luotaan, ohitseen, sisällään</li>
          <li>ADV: aikanaan, keskenään, mielellään, tahallaan, kallellaan, mukanaan, tosissaan, huolissaan, parhaillaan, ylipäätään</li>
          <li>AUX-Inf: ollakseen, ollessaan, saadakseen, voidakseen</li>
          <li>AUX-Part: olevansa, olevinaan, oltuaan, voivansa</li>
          <li>DET: itsensä, toistensa, toisensa, itseensä</li>
          <li>NOUN: kätensä, ikänsä, lapsensa, nimekseen, päätään, äitinsä, elämänsä, isänsä, paikkaansa, poikansa</li>
          <li>PRON: itsensä, itseään, toisiaan, itselleen, toisensa, itsestään, toistaan, itseensä, toisiinsa, toistensa</li>
          <li>PROPN: Decameronensa, Matchinsa, McLarenistaan, Mersuaan, Saimansa</li>
          <li>VERB-Inf: päästäkseen, tullessaan, nähdäkseen, halutessaan, kuolemaisillaan, ollessaan, saadakseen, syödessään, ajaessaan, asuessaan</li>
          <li>VERB-Part: olevansa, tulevansa, levättyään, kuultuaan, saaneensa, tulleensa, tultuaan, antavansa, asuttuaan, asuvansa</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctSide</a>
    <ul>
      <li>Fin
        <ul>
          <li>PUNCT: ", )</li>
        </ul>
      </li>
      <li>Ini
        <ul>
          <li>PUNCT: ", (</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Arch
        <ul>
          <li>NOUN: puolustusvoimain, nukkein, seurain</li>
          <li>PROPN: Yrittäjäin, Brittein</li>
        </ul>
      </li>
      <li>Coll
        <ul>
          <li>ADJ: hirvee, hirveen, ens, kauheeta, semmonen, upeeta, ikänen, kauheen, semmosia, tommonen</li>
          <li>ADP: kans, kaa, jälkee, lähtie, mennssä, mielest, vuoks, aikaa, alapuolel, enne</li>
          <li>ADV: sit, sitte, vähä, oikeen, miks, siel, sillon, ny, just, siin</li>
          <li>AUX-Fin: oo, oon, oot, o, olis, onks, ois, vois, pitäs, em</li>
          <li>AUX-Inf: oleen</li>
          <li>AUX-Part: ollu, pitäny, olluh, ollukkaan, olluv, soanneet, tarvinnu, voinu</li>
          <li>CCONJ: mut, mutt, ja/vai, vaikk</li>
          <li>DET: tää, mun, semmonen, toi, noi, sun, nää, yks, tän, semmoseen</li>
          <li>INTJ: viis</li>
          <li>NOUN: viikkoo, aikkaav, daideilijaa, ihmisist, juttuu, kotio, kuukkautteenkaa, lauantaiks, liftii, lähössä</li>
          <li>NUM: yks, kaks, yhen, puol, kuus, kuutee, satayheksänkymmentä, seitsemä, viis, yheksän</li>
          <li>PART: ni, niinku, nii, tota, sitte, just, vaa, iha, kyl, nin</li>
          <li>PRON: mä, sä, tää, mun, sulle, mulla, sulla, mie, mua, mul</li>
          <li>PROPN: Soiliki, iiässäs, Ailii, Alfas, Annillakkii, Dödö, Hesaris, Hiakal, Jokine, Juttutupaa</li>
          <li>SCONJ: ett, et, ku, vaikk, ko, kun, jott, Vaik, ette, joss</li>
          <li>VERB-Fin: sano, oo, onks, ollu, aattelin, o, olis, ois, katotaan, oon</li>
          <li>VERB-Inf: tehä, lähtee, rassaa, kattoo, kattoon, laittaan, saadas, sanoo, tekee, ajatellakhaa</li>
          <li>VERB-Part: ollu, tullu, käyny, menny, ottanu, saanu, tehny, nähny, heränny, jättäny</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: olla.</li>
</ul>

<ul>
<li>This corpus uses 52 lemmas as auxiliaries (<a>aux</a>). Examples: ei, olla, voida, pitää, saada, täytyä, tulla, alkaa, saattaa, kannattaa, taitaa, tarvita, ehtiä, näyttää, ruveta, jäädä, mahtaa, tuntua, kuulua, jättää, ryhtyä, sattua, sopia, uhata, joutaa, ottaa, tahtoa, keretä, keritä, pyrkiä, ennättää, haluta, käydä, meinata, osata, vaikuttaa, huolia, joutua, kelvata, lakata, osoittautua, parata, passata, yrittää, auttaa, kärsiä, näkyä, pakata, pystyä, tavata.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-All (1)</li>
      <li>VERB-Fin--NOUN-Ela (94)</li>
      <li>VERB-Fin--NOUN-Gen (7)</li>
      <li>VERB-Fin--NOUN-Nom (4223)</li>
      <li>VERB-Fin--NOUN-Par (1054)</li>
      <li>VERB-Fin--PRON-Acc (7)</li>
      <li>VERB-Fin--PRON-All (1)</li>
      <li>VERB-Fin--PRON-Ela (43)</li>
      <li>VERB-Fin--PRON-Gen (22)</li>
      <li>VERB-Fin--PRON-Gen-ADP(jälkeen) (1)</li>
      <li>VERB-Fin--PRON-Gen-ADP(kanssa) (1)</li>
      <li>VERB-Fin--PRON-Nom (3042)</li>
      <li>VERB-Fin--PRON-Par (120)</li>
      <li>VERB-Inf--NOUN-Ela (13)</li>
      <li>VERB-Inf--NOUN-Gen (172)</li>
      <li>VERB-Inf--NOUN-Nom (387)</li>
      <li>VERB-Inf--NOUN-Par (54)</li>
      <li>VERB-Inf--PRON-All (1)</li>
      <li>VERB-Inf--PRON-Ela (3)</li>
      <li>VERB-Inf--PRON-Gen (181)</li>
      <li>VERB-Inf--PRON-Nom (223)</li>
      <li>VERB-Inf--PRON-Par (11)</li>
      <li>VERB-Part--NOUN-Ela (18)</li>
      <li>VERB-Part--NOUN-Gen (226)</li>
      <li>VERB-Part--NOUN-Nom (517)</li>
      <li>VERB-Part--NOUN-Par (112)</li>
      <li>VERB-Part--PRON-All (1)</li>
      <li>VERB-Part--PRON-Ela (13)</li>
      <li>VERB-Part--PRON-Gen (124)</li>
      <li>VERB-Part--PRON-Nom (490)</li>
      <li>VERB-Part--PRON-Par (18)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Ela (18)</li>
      <li>VERB-Fin--NOUN-Gen (889)</li>
      <li>VERB-Fin--NOUN-Ill (2)</li>
      <li>VERB-Fin--NOUN-Nom (727)</li>
      <li>VERB-Fin--NOUN-Par (1989)</li>
      <li>VERB-Fin--NOUN-Par-ADP(paitsi) (3)</li>
      <li>VERB-Fin--NOUN-Par-ADP(vaille) (1)</li>
      <li>VERB-Fin--NOUN-Tra (1)</li>
      <li>VERB-Fin--PRON-Acc (96)</li>
      <li>VERB-Fin--PRON-All (1)</li>
      <li>VERB-Fin--PRON-Ela (2)</li>
      <li>VERB-Fin--PRON-Gen (199)</li>
      <li>VERB-Fin--PRON-Gen-ADP(puolesta) (1)</li>
      <li>VERB-Fin--PRON-Gen-ADP(verran) (1)</li>
      <li>VERB-Fin--PRON-Nom (105)</li>
      <li>VERB-Fin--PRON-Par (681)</li>
      <li>VERB-Inf--NOUN-Ade (1)</li>
      <li>VERB-Inf--NOUN-Ela (4)</li>
      <li>VERB-Inf--NOUN-Gen (245)</li>
      <li>VERB-Inf--NOUN-Ill (3)</li>
      <li>VERB-Inf--NOUN-Nom (377)</li>
      <li>VERB-Inf--NOUN-Par (1021)</li>
      <li>VERB-Inf--NOUN-Tra (1)</li>
      <li>VERB-Inf--PRON-Acc (18)</li>
      <li>VERB-Inf--PRON-Ela (2)</li>
      <li>VERB-Inf--PRON-Gen (47)</li>
      <li>VERB-Inf--PRON-Nom (50)</li>
      <li>VERB-Inf--PRON-Par (265)</li>
      <li>VERB-Part--NOUN-Ela (5)</li>
      <li>VERB-Part--NOUN-Gen (242)</li>
      <li>VERB-Part--NOUN-Nom (283)</li>
      <li>VERB-Part--NOUN-Par (524)</li>
      <li>VERB-Part--PRON-Acc (23)</li>
      <li>VERB-Part--PRON-Gen (66)</li>
      <li>VERB-Part--PRON-Nom (46)</li>
      <li>VERB-Part--PRON-Par (141)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 103 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: lyödä itsensä, tuntea itseni, ajatella itseäni, ajatella itseään, ampua itsensä, kunnioittaa itseään, piristää itseään, pitää itsensä, saattaa itsensä, tanssia itsensä, toteuttaa itseään, t​o​t​e​u​t​t​a​m​i​n​e​n​ ​i​t​s​e​n​s​ä, ahmia itsensä, ampua itseä, arvostaa itseäsi, asua itsensä, auttaa itseämme, elättää itsensä, e​s​i​i​n​t​u​n​k​e​m​i​n​e​n​ ​i​t​s​e​n​s​ä, esittäminen itsensä, filmata itseään, helliminen itsensä, hemmotella itseään, hillitä itsensä, hillitä itseäni, huvittaa itseä, hyväksyä itsensä, hyväksyä itsesi, häpäistä itseni, häpäistä itsenne, höynäyttää itseään, ilmaista itseään, juoda ihtiisäj, juoda itsensä, kasvattaa itseään, katsoa itseään, kehittäminen itsensä, kehittää itseäni, kehittää itseään, kiinnostaa itseäni, kirjoituttaa itsensä, kiusata itseänne, kokea itsensä, kokea itseään, koota itsensä, kuivatella itsensä, kuivatella itseään, kuvaaminen itsensä, kuvitella itseni, kuvitella itsensä</li>
    <ul>
      <li>Out of those, 3 lemmas occurred more than once, but never without a reflexive dependent. Examples: hillitä, häpäistä, piristää</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>compound:nn</a>, <a>compound:prt</a>, <a>csubj:cop</a>, <a>nmod:gobj</a>, <a>nmod:gsubj</a>, <a>nsubj:cop</a>, <a>xcomp:ds</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>iobj</a>, <a>obl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>parataxis</a></li>
</ul>
