---
layout: base
title:  'UD_Finnish-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Finnish PUD

Language: [Finnish](/fi/index.html) (code: `fi`)<br/>
Family: Uralic, Finnic

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Jenna Kanerva, Filip Ginter, Stina Ojala, Anna Missilä.

Repository: [UD_Finnish-PUD](https://github.com/UniversalDependencies/UD_Finnish-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfi_pud27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-SA 4.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Finnish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Finnish-PUD/issues).
If you want to collaborate, please contact [jmnybl&nbsp;(æt)&nbsp;utu&nbsp;•&nbsp;fi, figint&nbsp;(æt)&nbsp;utu&nbsp;•&nbsp;fi].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the [CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies](http://universaldependencies.org/conll17/).




There are
1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.

## Acknowledgments

# Statistics of UD Finnish PUD

## POS Tags

[ADJ](fi_pud-pos-ADJ.html) – [ADP](fi_pud-pos-ADP.html) – [ADV](fi_pud-pos-ADV.html) – [AUX](fi_pud-pos-AUX.html) – [CCONJ](fi_pud-pos-CCONJ.html) – [INTJ](fi_pud-pos-INTJ.html) – [NOUN](fi_pud-pos-NOUN.html) – [NUM](fi_pud-pos-NUM.html) – [PRON](fi_pud-pos-PRON.html) – [PROPN](fi_pud-pos-PROPN.html) – [PUNCT](fi_pud-pos-PUNCT.html) – [SCONJ](fi_pud-pos-SCONJ.html) – [SYM](fi_pud-pos-SYM.html) – [VERB](fi_pud-pos-VERB.html) – [X](fi_pud-pos-X.html)

## Features

[Abbr](fi_pud-feat-Abbr.html) – [AdpType](fi_pud-feat-AdpType.html) – [Case](fi_pud-feat-Case.html) – [Clitic](fi_pud-feat-Clitic.html) – [Connegative](fi_pud-feat-Connegative.html) – [Degree](fi_pud-feat-Degree.html) – [Derivation](fi_pud-feat-Derivation.html) – [Foreign](fi_pud-feat-Foreign.html) – [InfForm](fi_pud-feat-InfForm.html) – [Mood](fi_pud-feat-Mood.html) – [Number](fi_pud-feat-Number.html) – [Number[psor]](fi_pud-feat-Number-psor.html) – [NumType](fi_pud-feat-NumType.html) – [PartForm](fi_pud-feat-PartForm.html) – [Person](fi_pud-feat-Person.html) – [Person[psor]](fi_pud-feat-Person-psor.html) – [Polarity](fi_pud-feat-Polarity.html) – [PronType](fi_pud-feat-PronType.html) – [Reflex](fi_pud-feat-Reflex.html) – [Style](fi_pud-feat-Style.html) – [Tense](fi_pud-feat-Tense.html) – [VerbForm](fi_pud-feat-VerbForm.html) – [Voice](fi_pud-feat-Voice.html)

## Relations

[acl](fi_pud-dep-acl.html) – [acl:relcl](fi_pud-dep-acl-relcl.html) – [advcl](fi_pud-dep-advcl.html) – [advmod](fi_pud-dep-advmod.html) – [amod](fi_pud-dep-amod.html) – [appos](fi_pud-dep-appos.html) – [aux](fi_pud-dep-aux.html) – [aux:pass](fi_pud-dep-aux-pass.html) – [case](fi_pud-dep-case.html) – [cc](fi_pud-dep-cc.html) – [cc:preconj](fi_pud-dep-cc-preconj.html) – [ccomp](fi_pud-dep-ccomp.html) – [compound](fi_pud-dep-compound.html) – [compound:nn](fi_pud-dep-compound-nn.html) – [compound:prt](fi_pud-dep-compound-prt.html) – [conj](fi_pud-dep-conj.html) – [cop](fi_pud-dep-cop.html) – [cop:own](fi_pud-dep-cop-own.html) – [csubj](fi_pud-dep-csubj.html) – [csubj:cop](fi_pud-dep-csubj-cop.html) – [det](fi_pud-dep-det.html) – [discourse](fi_pud-dep-discourse.html) – [fixed](fi_pud-dep-fixed.html) – [flat](fi_pud-dep-flat.html) – [flat:foreign](fi_pud-dep-flat-foreign.html) – [flat:name](fi_pud-dep-flat-name.html) – [mark](fi_pud-dep-mark.html) – [nmod](fi_pud-dep-nmod.html) – [nmod:gobj](fi_pud-dep-nmod-gobj.html) – [nmod:gsubj](fi_pud-dep-nmod-gsubj.html) – [nmod:poss](fi_pud-dep-nmod-poss.html) – [nsubj](fi_pud-dep-nsubj.html) – [nsubj:cop](fi_pud-dep-nsubj-cop.html) – [nummod](fi_pud-dep-nummod.html) – [obj](fi_pud-dep-obj.html) – [obl](fi_pud-dep-obl.html) – [orphan](fi_pud-dep-orphan.html) – [parataxis](fi_pud-dep-parataxis.html) – [punct](fi_pud-dep-punct.html) – [root](fi_pud-dep-root.html) – [vocative](fi_pud-dep-vocative.html) – [xcomp](fi_pud-dep-xcomp.html) – [xcomp:ds](fi_pud-dep-xcomp-ds.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 15807 tokens and 15813 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2350 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 12 types of words with spaces. Examples: 10 000, 100 000, 12 000, 15 000, 15 001, 16 500, 168 000, 19 999, 25 000, 330 000, 35 000, 600 000</li>
</ul>

<ul>
<li>This corpus contains 291 types of words that contain both letters and punctuation. Examples: eKr., %:lla, -dynastia, -dynastian, III:n, -järjestöstä, -liittouman, -puisto, -vuotiaista, -yliopiston, 1960-luvulta, 1990-luvulla, 60-luvun, BBC:lle, DNA:n, Etelä-Afrikka, Ison-Britannian, Isossa-Britanniassa, Itä-Afrikan, P​a​p​u​a​-​U​u​d​e​s​s​a​-​G​u​i​n​e​a​s​s​a, Pohjois-Carolina, St., USA:n, YK:n, golf-turnaukseen, jKr., %:n, -akatemiaan, -albumin, -alueen, -alueet, -antologia, -dynastiaan, -elokuvaa, -elokuvassa, -hahmoiksi, -hinnalla, -imitaattori, -instituuttiin, -joella, -joen, -järjestön, -järven, -kadulla, -kanavalla, -keskuksen, -keskustelupalstan, -kirjasta, -kirjeet, -kirjoja</li>
</ul>

<ul>
<li>This corpus contains 6 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 5 types of multi-word tokens. Examples: ettei, ellei, etteivät, etten, miksei.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: DET, PART</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as pronouns (PRON): ainoa, eräs, harva, hän, itse, joka, jokainen, jokin, joku, jokunen, kaikki, koko, kuka, kukaan, kumpi, mikä, mikään, minä, molemmat, moni, monta, muu, muutama, sama, se, sinä, toinen, tuo, tämä, yksi</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as auxiliaries (AUX): aikoa, ei, olla, pitää, saattaa, täytyä, voida</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: ei, olla, pitää</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: on, oli, ei, ovat, ole, voi, olivat, eivät, olisi, voisi</li>
    <li>VERB: sanoi, tulee, tuli, sanoo, kertoi, alkoi, johti, sai, syntyi, auttaa</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: olla, ollessa, Saattaa, Voidakseen, olemaan, ollakin</li>
    <li>VERB: tehdä, liittyen, lukien, olemassa, johtaa, johtuen, käyttämällä, nähdä, palata, saadakseen</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: ollut, olleet, olevan, oltu, olevansa, aikonut, olleen, pitänyt, saattaneet, täytynyt</li>
    <li>VERB: tullut, käytetty, oleva, olevat, saanut, tehty, halunnut, olevaa, ollut, päättänyt</li>
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
      <li>ADJ: uusia, useita, lukuisia, erilaisia, suuret, suuria, uusien, kaltaisten, kreikkalaiset, omat</li>
      <li>AUX-Fin: ovat, olivat, eivät, voivat, olemme, emme, olisivat, olivatkaan, voimme, voisivat</li>
      <li>AUX-Part: olleet, ollut, saattaneet, voineet</li>
      <li>NOUN: ihmiset, ihmisiä, vuosien, arkhaimenidien, ihmisten, joukot, maat, miesten, osin, sijoittajat</li>
      <li>NUM: Kymmenien, kymmeniä, miljardeja, satoja, tuhansia</li>
      <li>PRON: jotka, he, heidän, monet, ne, niiden, nämä, joissa, joita, jotkut</li>
      <li>PROPN: Yhdysvaltain, Yhdysvaltojen, Alankomaiden, Yhdysvallat, Yhdysvalloille, Alankomaissa, Alpit, Alppien, Amarna, Amerikkoihin</li>
      <li>VERB-Fin: alkoivat, kuuluvat, käyttivät, pitävät, antoivat, nousevat, ottivat, päättivät, saivat, seuraavat</li>
      <li>VERB-Part: olevat, kasvaneista, liittyvissä, olleet, saaneet, toteuttaneet, Konsultoidut, altistuneita, aseistettuja, asuttaneet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: suurin, uuden, ensimmäinen, ensimmäisen, suuri, ensimmäistä, pienen, korkean, mahdollista, poliittisen</li>
      <li>AUX-Fin: on, oli, ei, voi, voisi, olisi, täytyy, eikä, en, olen</li>
      <li>AUX-Inf: olla, ollessa, Saattaa, Voidakseen, olemaan, ollakin</li>
      <li>AUX-Part: ollut, olevan, oltu, olevansa, aikonut, olleen, pitänyt, täytynyt, voinut</li>
      <li>NOUN: vuonna, aikana, vuoden, vuoteen, aikaan, kaupungin, alueen, osa, kertaa, sodan</li>
      <li>NUM: kaksi, kolme, kahden, yksi, neljä, miljoonaa, kymmenen, kuusi, kahdeksan, kahdessa</li>
      <li>PRON: hän, sen, joka, hänen, se, tämä, sitä, jossa, tällä, hänet</li>
      <li>PROPN: of, Ranskan, Australian, Kiinan, Hong, Venäjän, de, the, Euroopan, Britannian</li>
      <li>PUNCT: ., ”</li>
      <li>SYM: %:lla, %:n</li>
      <li>VERB-Fin: sanoi, tulee, tuli, sanoo, kertoi, alkoi, johti, sai, syntyi, auttaa</li>
      <li>VERB-Inf: tehdä, liittyen, lukien, olemassa, johtaa, johtuen, käyttämällä, nähdä, palata, saadakseen</li>
      <li>VERB-Part: tullut, käytetty, oleva, saanut, tehty, halunnut, olevaa, päättänyt, tehnyt, alkanut</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abe
    <ul>
      <li>NOUN: aseitta, huomiotta</li>
      <li>VERB-Inf: pysähtymättä, välittämättä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: suurelta, epäasialliselta, erilaiselta, todelliselta, tyyneltä, varhaiselta, yllättävältä</li>
      <li>NOUN: 1960-luvulta, litralta, matkustajilta, nimeltä, 1200-luvulta, 1300-luvulta, 1500-luvulta, 400-luvulta, 70-luvulta, 700-luvulta</li>
      <li>PRON: siltä, häneltä, jolta, minulta, monilta, muilta, niiltä</li>
      <li>PROPN: Balkanilta</li>
      <li>VERB-Part: osallistuneilta, räätälöidyltä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: hänet, meidät</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ade
    <ul>
      <li>ADJ: suurimmalla, kansallisella, Jälkiklassisella, Suuremmilla, Toisella, Tyynellä, Viidennellä, institutionaalisella, kannettavalla, kansainvälisillä</li>
      <li>NOUN: alueella, avulla, hetkellä, kohdalla, tavalla, kesällä, listalla, osalla, viikolla, 1990-luvulla</li>
      <li>NUM: Yhdellä, miljardilla</li>
      <li>PRON: tällä, jolla, heillä, joilla, sillä, hänellä, jokaisella, Meillä, Minullakin, Monilla</li>
      <li>PROPN: Clintonilla, Cupilla, Francella, Giovannilla, Irlanninmerellä, Italialla, Kelttimerellä, Kiplingillä, Kleinilla, Krimillä</li>
      <li>SYM: %:lla</li>
      <li>VERB-Inf: käyttämällä, ampumalla, antamalla, auttamalla, lukemalla, luomalla, lähettämällä, ottamalla, poistamalla, rakentamalla</li>
      <li>VERB-Part: keskittyneillä, kovettamalla, liittoutuneilla, painamalla</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>ADJ: alaville, amerikkalaisille, itäiselle, kansainväliselle, kolmannelle, kuiville, laajemmalle, meksikolaisille, poliittisille, rikkaille</li>
      <li>NOUN: alueelle, armeijalle, ihmisille, kansanedustajille, kaupalle, sijalle, vesille, -lehdelle, -uutistoimistolle, -yhtiölle</li>
      <li>PRON: hänelle, heille, meille, niille, sille, jokaiselle, kenelle, monille</li>
      <li>PROPN: Disneylle, Yhdysvalloille, Angelille, BBC:lle, Britannialle, CNN:lle, Caesarille, Clubille, Companylle, DFB:lle</li>
      <li>VERB-Part: kerääntyneelle, kohdistetuille, käytettäville, sidotuille, sijaitsevalle, valituille</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>NOUN: liittolaisineen, minareetteineen, vaimoineen</li>
      <li>NUM: kaksine</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ela
    <ul>
      <li>ADJ: omasta, tarkasta, Demografisesta, Rutiininomaisesta, aiemmasta, alituisesta, ankarista, avoimesta, espanjalaisista, etnisistä</li>
      <li>NOUN: historiasta, ilmasta, maasta, -järjestöstä, ihmisistä, kasveista, lapsista, näkökulmasta, sodasta, tapaamisesta</li>
      <li>NUM: kahdesta, kymmenestä, yhdestä, seitsemästä</li>
      <li>PRON: siitä, joista, tästä, josta, kaikista, näistä, hänestä, niistä, Heistä, Kaikesta</li>
      <li>PROPN: Trumpista, Amazonista, Averysta, Brexitistä, Clintonista, Coloradosta, Denveristä, Douglasista, EU:sta, Espanjasta</li>
      <li>VERB-Inf: osoittamasta, uskomasta, kilpailemasta, pitämästä</li>
      <li>VERB-Part: kasvaneista, jaetusta, johtavasta, julkaistusta, jääneistä, kestäneestä, kukoistavista, käydystä, liittyvästä, lisääntyvistä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: ensimmäisenä, seuraavana, vaatimattomana, Innokkaana, Kolmantena, Myöhempinä, alaisena, alastomana, alueellisena, avoimena</li>
      <li>NOUN: vuonna, aikana, päivänä, tuloksena, osana, tarkoituksena, tiistaina, vuosina, aamuna, kokonaisuutena</li>
      <li>NUM: seitsemänä</li>
      <li>PRON: tänä, samana, minään, muina, niinä, sinä, yhtenä</li>
      <li>PROPN: Etelä-Kaukasiana, Pohjois-Carolina, Pohjois-Kaukasiana</li>
      <li>VERB-Part: katsottuna, edustettuina, johtamina, kiinnitettynä, lämmittävänä, muotoiltuna, sanottuna, vaikuttavana, verrattuna, vierailevana</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: uuden, ensimmäisen, pienen, korkean, poliittisen, suuren, suurimman, uusien, viimeisen, Yhdistyneen</li>
      <li>AUX-Part: olevan, olevansa, olleen</li>
      <li>NOUN: vuoden, kaupungin, alueen, sodan, hallituksen, maailman, ajan, päivän, sopimuksen, maan</li>
      <li>NUM: kahden, kolmen, kuuden, yhden, Kymmenien, Viiden, miljardin, miljoonan, parin, seitsemän</li>
      <li>PRON: sen, hänen, heidän, jonka, tämän, niiden, joiden, meidän, muiden, näiden</li>
      <li>PROPN: Ranskan, Australian, Kiinan, Venäjän, Yhdysvaltain, Euroopan, Britannian, Kongin, Makedonian, Välimeren</li>
      <li>SYM: %:n</li>
      <li>VERB-Part: olevan, sijaitsevan, tulleen, ympäröivän, Luodun, alkavan, edustavan, epäiltyjen, erottavan, esittämien</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ill
    <ul>
      <li>ADJ: useisiin, kansallisiin, pieniin, Kolmanteen, Thaimaalaisiin, Tämänhetkisiin, aseelliseen, digitaaliseen, epätavallisempiin, epätavanomaisiin</li>
      <li>AUX-Inf: olemaan</li>
      <li>NOUN: vuoteen, aikaan, käyttöön, kouluun, osaan, aikoihin, etelään, golf-turnaukseen, juutalaisuuteen, kapinaan</li>
      <li>NUM: kahteen, 50:een, kolmeen, kuuteen, miljoonaan, mrd., yhteen</li>
      <li>PRON: samaan, siihen, tähän, muihin, joihin, niihin, Kaikkiin, Tuohon, johon, moniin</li>
      <li>PROPN: Aasiaan, Adrianmereen, Agoraan, Albaniaan, Albanyyn, Amerikkoihin, Amurruun, Angelesiin, Belgradiin, Britanniaan</li>
      <li>VERB-Inf: hoitamaan, kilpailemaan, laittamaan, ottamaan, pitämään, tuottamaan, ajattelemaan, ansiojärjestelmään, asumaan, auttamaan</li>
      <li>VERB-Part: havaitsemaan, julkaistuun, kasvavaan, kiemurtelevaan, linnoitettuun, lisääntyneeseen, mainittuun, olevaan, toimimaan, tukeviin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ine
    <ul>
      <li>ADJ: kansainvälisessä, korkeimmassa, parhaassa, suuressa, Alemmassa, Kaukaisimmassa, Monikansallisessa, Ruotsalaisessa, Tammikuullisessa, Toisessa</li>
      <li>AUX-Inf: ollessa</li>
      <li>NOUN: heinäkuussa, huhtikuussa, lokakuussa, tapauksessa, tutkimuksessa, haastattelussa, joukossa, kyseessä, käytössä, puolivälissä</li>
      <li>NUM: kahdessa, yhdessä, kuudessa</li>
      <li>PRON: jossa, joissa, missä, Tässä, missään, näissä, siinä, Eräässä, hänessä, joissain</li>
      <li>PROPN: Isossa-Britanniassa, Saksassa, Ukrainassa, Aasiassa, Abbotsfordissa, Afrikassa, Alankomaissa, Alaskassa, Australiassa, Badarpurissa</li>
      <li>VERB-Inf: olemassa, tulossa, Puhuessaan, Viettäessään, antaessaan, eläessään, etsiessään, juhlimassa, katsomassa, kiirehtiessään</li>
      <li>VERB-Part: allekirjoitetussa, liittyvissä, hallittavissa, käytettävissä, käytettävissään, lisääntyvässä, löydettävissä, pullistavassa, sijaitsevassa, sijaitsevissa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: avoimin, kevyin, selkein</li>
      <li>NOUN: osin, hengin, mielin, määrin, perustein</li>
      <li>VERB-Inf: liittyen, lukien, johtuen, muodostaen, Ohittaen, Poiketen, antaen, ehdottaen, helpottaen, jättäen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: suurin, ensimmäinen, suuri, suuret, viimeinen, Jälkimmäinen, kansallinen, kreikkalaiset, merkittävä, omat</li>
      <li>AUX-Part: ollut, olleet, oltu, aikonut, pitänyt, saattaneet, täytynyt, voineet, voinut</li>
      <li>NOUN: osa, ihmiset, alue, armeija, hallitus, sopimus, kuningas, presidentti, aika, elokuva</li>
      <li>NUM: kaksi, kolme, yksi, neljä, kymmenen, kuusi, kahdeksan, viisi, puoli, puolitoista</li>
      <li>PRON: hän, joka, se, jotka, tämä, he, kaikki, monet, ne, nämä</li>
      <li>PROPN: of, Hong, de, the, Donald, Joseph, Kiina, Qing, North, Trump</li>
      <li>PUNCT: ., ”</li>
      <li>VERB-Part: tullut, käytetty, oleva, olevat, saanut, tehty, halunnut, ollut, päättänyt, tehnyt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Par
    <ul>
      <li>ADJ: uusia, useita, ensimmäistä, lukuisia, erilaisia, mahdollista, suuria, uutta, mahtavaa, aikaista</li>
      <li>NOUN: kertaa, vuotta, ihmisiä, dollaria, puntaa, euroa, maata, mahdollisuutta, henkeä, lokakuuta</li>
      <li>NUM: miljoonaa, kahta, miljardia, kymmeniä, miljardeja, neljää, satoja, tuhansia, tuhatta, yhtäkään</li>
      <li>PRON: sitä, jota, mitä, häntä, joita, monta, niitä, tätä, muuta, näitä</li>
      <li>PROPN: Andya, Italiaa, Mongoliaa, Abakumovia, Antarktista, Brandsia, Chrisiä, Churchillia, Danevirkea, Etelä-Amerikkaa</li>
      <li>VERB-Part: olevaa, Palattuaan, Päätettyään, altistuneita, aseistettuja, asuttuaan, asuvaa, ehdotettuja, estettyä, hermostunutta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tra
    <ul>
      <li>ADJ: selväksi, merkittäväksi, valmiiksi, aktiiviseksi, harmonisemmaksi, hämmentyneiksi, itsenäiseksi, järkevämmäksi, kansalliseksi, lyhyeksi</li>
      <li>AUX-Inf: Voidakseen</li>
      <li>NOUN: lähettilääksi, -hahmoiksi, Tanskaksi, ajaksi, autoksi, avionrikkojaksi, elokuvaksi, fasistiksi, hallitsijaksi, huvitukseksi</li>
      <li>PRON: yhdeksi</li>
      <li>VERB-Inf: saadakseen, keskittyäkseen, Päästäkseen, edistääkseen, hyötyäkseen, keskustellakseen, käyttääkseen, löytääkseni, muuttaakseen, oppiakseen</li>
      <li>VERB-Part: alkavaksi, arvioitavaksi, perustelluiksi, päättyneiksi, tuomittavaksi, yllyttäväksi</li>
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
      <li>ADJ: korkeampi, Afrikkalaisempaa, Myöhempinä, Suuremmilla, epätavallisempiin, harmonisemmaksi, huolestuttavamman, huolestuttavammat, hyödyllisempänä, järkevämmäksi</li>
      <li>ADV: useammin, vahvemmin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: uuden, suuri, uusia, useita, lukuisia, pienen, erilaisia, korkean, mahdollista, poliittisen</li>
      <li>AUX-Part: ollut, olleet, olevan, oltu, olevansa, aikonut, olleen, pitänyt, saattaneet, täytynyt</li>
      <li>PROPN: Antarktista, Pyhän</li>
      <li>VERB-Part: tullut, käytetty, oleva, olevat, saanut, tehty, halunnut, olevaa, ollut, päättänyt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: suurin, suurimman, suurimmalla, tunnetuin, viimeisin, korkeimman, korkeimmassa, korkein, parhaassa, Kaukaisimmassa</li>
      <li>ADV: laajimmin</li>
      <li>VERB-Part: menestynein, myydyimmistään</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: ei, eivät, eikä, en, emme, Eikö</li>
      <li>VERB-Fin: ei, eivät</li>
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
      <li>AUX-Fin: olisi, voisi, pitäisi, olisivat, voisivat</li>
      <li>VERB-Fin: haluaisi, antautuisi, auttaisi, eroaisi, haastateltaisiin, haluaisin, hyökkäisi, juoksisi, kuluisi, kuolisi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: Sano, kiertele, räjähdä, vaikuta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: on, oli, ovat, ole, voi, olivat, täytyy, voivat, olemme, olen</li>
      <li>VERB-Fin: sanoi, tulee, tuli, sanoo, kertoi, alkoi, johti, sai, syntyi, auttaa</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: oli, olivat, oliko, olin, täytyi, olivatkaan, piti, voikin, voitiin</li>
      <li>VERB-Fin: sanoi, tuli, kertoi, alkoi, johti, sai, syntyi, teki, rakennettiin, käytettiin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: on, ovat, ole, voi, täytyy, voivat, olemme, olen, onko, pitää</li>
      <li>VERB-Fin: tulee, sanoo, auttaa, pidetään, kuuluvat, toimii, alkaa, haluaa, kuuluu, liittyy</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: on, oli, ei, ovat, olivat, voi, eivät, voisi, olisi, täytyy</li>
      <li>AUX-Inf: olla, ollessa, Saattaa, Voidakseen, olemaan, ollakin</li>
      <li>AUX-Part: ollut, olleet, olevan, olevansa, aikonut, olleen, pitänyt, saattaneet, täytynyt, voineet</li>
      <li>VERB: sanoi, tulee, tuli, sanoo, kertoi, alkoi, auttaa, johti, sai, syntyi</li>
      <li>VERB-Fin: sanoi, tulee, tuli, sanoo, kertoi, alkoi, johti, sai, syntyi, auttaa</li>
      <li>VERB-Inf: tehdä, liittyen, lukien, olemassa, johtaa, johtuen, käyttämällä, nähdä, palata, saadakseen</li>
      <li>VERB-Part: tullut, oleva, olevat, saanut, halunnut, olevaa, päättänyt, tehnyt, alkanut, havaitsemaan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: voidaan, pidetään, voitiin</li>
      <li>AUX-Part: oltu, ollut</li>
      <li>VERB-Fin: rakennettiin, käytettiin, pidetään, julkaistiin, julistettiin, kerrottiin, perustettiin, sanotaan, tunnetaan, annettiin</li>
      <li>VERB-Inf: matkustettaessa, yritettäessä</li>
      <li>VERB-Part: käytetty, tehty, allekirjoitetussa, havaittu, hyväksytty, ilmoitettu, julkaistu, katsottuna, perustettu, sovittu</li>
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
      <li>PRON: sen, se, tämä, sitä, tällä, siitä, ne, tämän, niiden, nämä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: kaikki, monet, samaan, jotkut, monta, muuta, jokainen, joku, muiden, muut</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: mitä, kuka, Mitkä, missä, Keitä, Mistä, kenelle, kumpi, mikä, millä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: hän, hänen, he, heidän, hänet, häntä, hänelle, heillä, meidän, hänellä</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: toinen, toisiaan, toiseen, toisen, toisensa, toisesta, toiset, toista, toisten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: joka, jotka, jossa, jonka, jota, joissa, joita, jolla, mikä, joiden</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: kaksi, kolme, 10, 3, kahden, yksi, 1492, 2010, 2012, 2014</li>
      <li>PUNCT: -</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: ensimmäinen, ensimmäisen, 1., 30., I, ensimmäistä, 10., 21., 3., 31.</li>
      <li>NUM: 60.</li>
      <li>PROPN: IV:n</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: itse, itsensä, itsestään, itseään</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>AUX-Fin: Voi, täytyy</li>
      <li>VERB-Fin: Vaikutti, haluaa, hämärtää, kävi, pääsee, saa, tulee</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: en, olemme, emme, olen, olin, Voin, voimme</li>
      <li>PRON: meidän, meitä, Meillä, meille, minua, minun, minä, Minullakin, meidät, minulta</li>
      <li>VERB-Fin: Luulen, Arvioimme, Halusin, Huomasin, Joudun, Julistan, Katselin, Kokeilin, Kysyin, Käyn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: sinä, sinua, teidän, teitä</li>
      <li>VERB-Fin: Kiisteletkö, Päädyt, Sano, huomasitteko, kiertele, räjähdä, vaikuta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: on, oli, ei, ovat, olivat, voi, eivät, voisi, olisi, täytyy</li>
      <li>PRON: hän, hänen, he, heidän, hänet, häntä, hänelle, heillä, hänellä, hänestä</li>
      <li>VERB-Fin: sanoi, tulee, tuli, sanoo, kertoi, alkoi, johti, sai, syntyi, auttaa</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: Työmme, dieselimme, elämiemme, erimielisyytemme, hartioillanne, maahamme, matkapuhelimemme, meremme, pakkomielteeseemme</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADV: ympärilläni</li>
      <li>NOUN: aikoinani, elämässäni, herätyskellosi, kaverini, ladolleni, listani, oloni, puhelimeni, pysähdyspaikkani, raivoissani</li>
      <li>VERB-Inf: löytääkseni</li>
      <li>VERB-Part: tuntemani</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: eKr., jKr., DNA:n, eaa., BBC, BBC:lle, USA:han, USA:n, VW:lle, VW:n</li>
          <li>NUM: mrd.</li>
          <li>PROPN: YK:n, BBC:lle, BBC:n, CNN:n, EKP:n, EU:n, EU:sta, GCA, GCA:ssa, Jr.:lle</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADP: jälkeen, kanssa, mukaan, välillä, mennessä, vastaan, asti, kautta, vuoksi, alla</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: ennen, ilman, kohti, ympäri, Huolimatta, lähellä, paitsi, Kautta, halki, keskellä</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Ka
        <ul>
          <li>AUX-Fin: eikä</li>
        </ul>
      </li>
      <li>Kaan
        <ul>
          <li>ADP: lähelläkään</li>
          <li>ADV: juurikaan, vieläkään, selkeästikään</li>
          <li>AUX-Fin: olivatkaan, onkaan</li>
          <li>NUM: yhtäkään</li>
          <li>VERB-Part: ratkaissutkaan</li>
        </ul>
      </li>
      <li>Kin
        <ul>
          <li>ADV: ensinnäkin, yhäkin, aiemminkin, parhaimmillaankin</li>
          <li>AUX-Fin: onkin, voikin</li>
          <li>AUX-Inf: ollakin</li>
          <li>NOUN: puolustuksenkin</li>
          <li>PRON: Minullakin, tämäkin</li>
          <li>VERB-Fin: sisältääkin</li>
        </ul>
      </li>
      <li>Ko
        <ul>
          <li>AUX-Fin: onko, oliko, Eikö</li>
          <li>VERB-Fin: Kiisteletkö, Saavatko, huomasitteko, kaupallistavatko, liittyisikö, olimmeko, onko, siirrymmekö, tunsinko, veloittaako</li>
        </ul>
      </li>
      <li>Pa
        <ul>
          <li>ADV: Siispä</li>
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
          <li>AUX-Fin: ole, voi, olisi, pidä, pitäisi</li>
          <li>VERB-Fin: pysty, odota, ole, tiedä, auta, eroaisi, haittaa, haluaisi, häviä, kaipaa</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Derivation</a>
    <ul>
      <li>Inen
        <ul>
          <li>ADJ: ensimmäinen, ensimmäisen, ensimmäistä, poliittisen, viimeinen, viimeisen, Jälkimmäinen, kaltaisten, nykyisen, poliittiset</li>
          <li>NOUN: aatelisen</li>
        </ul>
      </li>
      <li>Inen,Ttain
        <ul>
          <li>ADJ: Vuosittainen, kausittainen, päivittäisen, sivuttaista, Äskettäisessä</li>
        </ul>
      </li>
      <li>Inen,Vs
        <ul>
          <li>NOUN: kokonaisuutena, avarakatseisuutta, h​e​r​o​i​i​n​i​r​i​i​p​p​u​v​u​u​t​e​n​s​a, julkisuudessa, l​ö​y​h​ä​m​o​r​a​a​l​i​s​u​u​t​e​n​a​a​n, ominaisuus, piioksidipitoisuuden, salaisuutensa, samankaltaisuuksia, suolapitoisuuden</li>
        </ul>
      </li>
      <li>Ja
        <ul>
          <li>NOUN: sijoittajat, Tutkijat, opiskelijat, pääjohtaja, Ohjaajan, hallitsija, historioitsijat, johtaja, johtajat, kansanedustajille</li>
        </ul>
      </li>
      <li>Ja,Tar
        <ul>
          <li>NOUN: näyttelijätär</li>
        </ul>
      </li>
      <li>Lainen
        <ul>
          <li>ADJ: erilaisia, kreikkalaiset, Brittiläisen, amerikkalainen, amerikkalaisen, australialaiset, Afrikkalaisempaa, Eteläkorealainen, Japanilaiset, Kanadalainen</li>
          <li>NOUN: kanaanilaisten, kansalaiset, roomalaiset, Hollantilaiset, Kiinalainen, Thaimaalaiset, ammattilaisten, apulainen, apulaisista, eläkeläinen</li>
          <li>PROPN: Saksalainen</li>
        </ul>
      </li>
      <li>Lainen,Vs
        <ul>
          <li>NOUN: juutalaisuuteen, kansalaisuus</li>
        </ul>
      </li>
      <li>Llinen
        <ul>
          <li>ADJ: mahdollista, kansallinen, Teollinen, historiallinen, kansallisella, kansallisiin, kuninkaallinen, poikkeuksellisen, taloudellisia, todellista</li>
          <li>NOUN: kapinallisia, kourallinen, viholliseksi, vihollisensa, vihollisiaan, vihollistensa</li>
        </ul>
      </li>
      <li>Llinen,Sti
        <ul>
          <li>ADV: Teemallisesti</li>
        </ul>
      </li>
      <li>Llinen,Vs
        <ul>
          <li>NOUN: mahdollisuutta, mahdollisuus, teollisuuden, Elokuvateollisuus, j​u​l​k​a​i​s​u​t​e​o​l​l​i​s​u​u​d​e​s​t​a, kaivosteollisuudesta, kansallisuuksia, kaunokirjallisuuden, k​e​m​i​k​a​a​l​i​t​e​o​l​l​i​s​u​u​d​e​n, kirjallisuudesta</li>
        </ul>
      </li>
      <li>Minen
        <ul>
          <li>NOUN: löytämistä, saavuttamiseen, tapaamisesta, tuhoutuminen, vainoaminen, Irtisanomisensa, Kokoontumista, aiheuttamiseen, aloittamisesta, antaminen</li>
        </ul>
      </li>
      <li>Sti
        <ul>
          <li>ADV: todennäköisesti, erityisesti, julkisesti, välittömästi, luonnollisesti, mahdollisesti, suuresti, huomattavasti, ilmeisesti, jyrkästi</li>
        </ul>
      </li>
      <li>Sti,Ton
        <ul>
          <li>ADV: laittomasti, riippumattomasti</li>
        </ul>
      </li>
      <li>Tar
        <ul>
          <li>NOUN: herttuattaresta</li>
        </ul>
      </li>
      <li>Ton
        <ul>
          <li>ADJ: käsittämättömän, uskomaton, vaatimattomana, alastomana, ennenkuulumatonta, haluton, hillittömän, huoletonta, jäljittelemättömän, kehittymättömiä</li>
        </ul>
      </li>
      <li>Ton,Vs
        <ul>
          <li>NOUN: kuolemattomuuden, piittaamattomuus, yhteensopimattomuus</li>
        </ul>
      </li>
      <li>Ttain
        <ul>
          <li>ADV: erittäin, äskettäin, Tusinoittain, kuukausittain, nimittäin</li>
        </ul>
      </li>
      <li>U
        <ul>
          <li>NOUN: avulla, haastattelussa, taistelussa, kasvua, laulun, loppujen, tappelut, -laulustaan, -tuoksu, F​a​c​e​b​o​o​k​-​j​u​l​k​a​i​s​u​i​s​t​a​a​n</li>
        </ul>
      </li>
      <li>Vs
        <ul>
          <li>NOUN: vanhuuteen, -​p​a​l​k​i​n​t​o​t​i​l​a​i​s​u​u​d​e​s​s​a, Kuuluisuudet, Laajuudeltaan, Osuus, avaruuteen, ehdokkuutensa, ehdokkuutta, epämukavuutta, eroavaisuuksia</li>
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
          <li>NOUN: bjórria</li>
          <li>X: Conseil, a, arms, cena, combined, du, fiction, national, numérique, science</li>
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
          <li>AUX-Inf: olla, Saattaa, Voidakseen, ollakin</li>
          <li>VERB-Inf: tehdä, johtaa, nähdä, palata, saadakseen, tulla, antaa, käyttää, lähteä, pitää</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>AUX-Inf: ollessa</li>
          <li>VERB-Inf: liittyen, lukien, johtuen, muodostaen, Ohittaen, Poiketen, Puhuessaan, Viettäessään, antaen, antaessaan</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>AUX-Inf: olemaan</li>
          <li>VERB-Inf: olemassa, käyttämällä, hoitamaan, kilpailemaan, laittamaan, osoittamasta, ottamaan, pitämään, tulossa, tuottamaan</li>
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
          <li>VERB-Part: havaitsemaan, esittämien, esittämä, hallitsema, hallitseman, ihailemansa, johtama, johtaman, johtamat, johtamien</li>
        </ul>
      </li>
      <li>Past
        <ul>
          <li>AUX-Part: ollut, olleet, oltu, aikonut, olleen, pitänyt, saattaneet, täytynyt, voineet, voinut</li>
          <li>VERB-Part: tullut, käytetty, saanut, tehty, halunnut, ollut, päättänyt, tehnyt, alkanut, allekirjoitetussa</li>
        </ul>
      </li>
      <li>Pres
        <ul>
          <li>AUX-Part: olevan, olevansa</li>
          <li>VERB-Part: oleva, olevat, olevaa, liittyvissä, olevan, sijaitsevan, ympäröivän, alkavaksi, alkavan, arvioitavaksi</li>
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
          <li>ADV: ympärilläni</li>
          <li>NOUN: Työmme, aikoinani, dieselimme, elämiemme, elämässäni, erimielisyytemme, kaverini, ladolleni, listani, maahamme</li>
          <li>VERB-Inf: löytääkseni</li>
          <li>VERB-Part: tuntemani</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NOUN: hartioillanne, herätyskellosi</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: kaltaisensa, omansa, parastaan</li>
          <li>ADP: kanssaan, välilleen</li>
          <li>ADV: sisällään, mukanaan, haltuunsa, jälkeensä, päälleen, ympärillään</li>
          <li>AUX-Inf: Voidakseen</li>
          <li>AUX-Part: olevansa</li>
          <li>NOUN: vaimonsa, elämänsä, kautensa, ikänsä, joukkonsa, paikkansa, terveydestään, tiensä, tyttärensä, veljensä</li>
          <li>PRON: toisiaan, itsensä, itsestään, itseään, toisensa</li>
          <li>VERB: saadakseen, keskittyäkseen, Palattuaan, Puhuessaan, Päästäkseen, Päätettyään, Viettäessään, antaessaan, asuttuaan, edistääkseen</li>
          <li>VERB-Inf: saadakseen, keskittyäkseen, Puhuessaan, Päästäkseen, Viettäessään, antaessaan, edistääkseen, eläessään, etsiessään, hyötyäkseen</li>
          <li>VERB-Part: Palattuaan, Päätettyään, asuttuaan, ihailemansa, kaappaavansa, käytettävissään, myydyimmistään, saavansa, taistelevansa, taistelleensa</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Coll
        <ul>
          <li>NOUN: encorea</li>
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
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: olla, ei, voida, täytyä, pitää, saattaa, aikoa.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: olla, voida.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Gen (6)</li>
      <li>VERB-Fin--NOUN-Nom (357)</li>
      <li>VERB-Fin--NOUN-Par (14)</li>
      <li>VERB-Fin--PRON-Nom (260)</li>
      <li>VERB-Fin--PRON-Par (7)</li>
      <li>VERB-Inf--NOUN-Gen (9)</li>
      <li>VERB-Inf--NOUN-Nom (33)</li>
      <li>VERB-Inf--NOUN-Par (10)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Gen (16)</li>
      <li>VERB-Inf--PRON-Nom (18)</li>
      <li>VERB-Inf--PRON-Par (2)</li>
      <li>VERB-Part--NOUN-Gen (11)</li>
      <li>VERB-Part--NOUN-Nom (53)</li>
      <li>VERB-Part--NOUN-Par (3)</li>
      <li>VERB-Part--PRON-Gen (4)</li>
      <li>VERB-Part--PRON-Nom (34)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Ela (1)</li>
      <li>VERB-Fin--NOUN-Gen (127)</li>
      <li>VERB-Fin--NOUN-Ill (1)</li>
      <li>VERB-Fin--NOUN-Nom (79)</li>
      <li>VERB-Fin--NOUN-Par (219)</li>
      <li>VERB-Fin--PRON-Acc (12)</li>
      <li>VERB-Fin--PRON-Gen (11)</li>
      <li>VERB-Fin--PRON-Nom (16)</li>
      <li>VERB-Fin--PRON-Par (48)</li>
      <li>VERB-Inf--NOUN-Gen (43)</li>
      <li>VERB-Inf--NOUN-Gen-ADP(kanssa) (1)</li>
      <li>VERB-Inf--NOUN-Nom (23)</li>
      <li>VERB-Inf--NOUN-Par (100)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Gen (7)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Inf--PRON-Par (14)</li>
      <li>VERB-Part--NOUN-Gen (22)</li>
      <li>VERB-Part--NOUN-Gen-ADP(kimppuun) (1)</li>
      <li>VERB-Part--NOUN-Nom (16)</li>
      <li>VERB-Part--NOUN-Par (76)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Gen (4)</li>
      <li>VERB-Part--PRON-Nom (5)</li>
      <li>VERB-Part--PRON-Par (6)</li>
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
  <li>This corpus contains 2 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: lyödä itsensä, suojella itseään</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 14 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:nn</a>, <a>compound:prt</a>, <a>cop:own</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:gobj</a>, <a>nmod:gsubj</a>, <a>nmod:poss</a>, <a>nsubj:cop</a>, <a>xcomp:ds</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
