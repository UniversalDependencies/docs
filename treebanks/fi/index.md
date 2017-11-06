---
layout: base
title:  'UD_Finnish'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Finnish

Language: [Finnish](../fi/overview/fi-hub.html) (code: `fi`)<br/>
Family: Uralic, Finno-Ugric

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Filip Ginter, Jenna Kanerva, Veronika Laippala, Niko Miekka, Anna Missilä, Stina Ojala, Sampo Pyysalo.

Repository: [UD_Finnish](https://github.com/UniversalDependencies/UD_Finnish)

License: CC BY-SA 4.0

Genre: news, wiki, blog, legal, fiction, grammar-examples

Questions, comments?
General annotation questions (either Finnish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Finnish/issues).
If you want to collaborate, please contact [figint&nbsp;(æt)&nbsp;utu&nbsp;•&nbsp;fi, jmnybl&nbsp;(æt)&nbsp;utu&nbsp;•&nbsp;fi].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually, natively in UD style |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually in non-UD style, automatically converted to UD |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

UD_Finnish is based on the Turku Dependency Treebank (TDT), a broad-coverage dependency treebank of general Finnish covering numerous genres. The conversion to UD was followed by extensive manual checks and corrections, and the treebank closely adheres to the UD guidelines.



The treebank contains texts from Wikipedia articles, Wikinews articles, University online news, Blog entries, Student magazine articles, Grammar examples, Europarl speeches, JRC-Acquis legislation, Financial news, and Fiction sourced from 674 individual documents. The original annotation of the treebank was in Stanford Dependencies, including secondary dependencies, and fully manually checked morphological annotation. The treebank is also accompanied by a PropBank annotation (http://turkunlp.github.io/Finnish_PropBank/) and a dependency parser pipeline substantially outperforming the baseline UDPipe model (http://turkunlp.github.io/Finnish-dep-parser/).


## Acknowledgments

The team behind the Turku Dependency Treebank: Katri Haverinen, Jenna Kanerva (Nyblom), Timo Viljanen, Veronika Laippala, Samuel Kohonen, Anna Missilä, Stina Ojala, Filip Ginter.

We are grateful for the funding received from:

* University of Turku
* Turku Centre for Computer Science
* Finnish Academy
* Turku University Foundation

We thank all the authors who kindly allowed us to include their texts into the treebank, either by explicit permission, or by releasing their text under an open license in the first place.

# Statistics of UD Finnish

## POS Tags

[ADJ](fi-pos-ADJ.html) – [ADP](fi-pos-ADP.html) – [ADV](fi-pos-ADV.html) – [AUX](fi-pos-AUX.html) – [CCONJ](fi-pos-CCONJ.html) – [INTJ](fi-pos-INTJ.html) – [NOUN](fi-pos-NOUN.html) – [NUM](fi-pos-NUM.html) – [PRON](fi-pos-PRON.html) – [PROPN](fi-pos-PROPN.html) – [PUNCT](fi-pos-PUNCT.html) – [SCONJ](fi-pos-SCONJ.html) – [SYM](fi-pos-SYM.html) – [VERB](fi-pos-VERB.html) – [X](fi-pos-X.html)

## Features

[Abbr](fi-feat-Abbr.html) – [AdpType](fi-feat-AdpType.html) – [Case](fi-feat-Case.html) – [Clitic](fi-feat-Clitic.html) – [Connegative](fi-feat-Connegative.html) – [Degree](fi-feat-Degree.html) – [Derivation](fi-feat-Derivation.html) – [Foreign](fi-feat-Foreign.html) – [InfForm](fi-feat-InfForm.html) – [Mood](fi-feat-Mood.html) – [Number](fi-feat-Number.html) – [Number[psor]](fi-feat-Number-psor.html) – [NumType](fi-feat-NumType.html) – [PartForm](fi-feat-PartForm.html) – [Person](fi-feat-Person.html) – [Person[psor]](fi-feat-Person-psor.html) – [Polarity](fi-feat-Polarity.html) – [PronType](fi-feat-PronType.html) – [Reflex](fi-feat-Reflex.html) – [Style](fi-feat-Style.html) – [Tense](fi-feat-Tense.html) – [Typo](fi-feat-Typo.html) – [VerbForm](fi-feat-VerbForm.html) – [Voice](fi-feat-Voice.html)

## Relations

[_](fi-dep-_.html) – [acl](fi-dep-acl.html) – [acl:relcl](fi-dep-acl-relcl.html) – [advcl](fi-dep-advcl.html) – [advmod](fi-dep-advmod.html) – [amod](fi-dep-amod.html) – [appos](fi-dep-appos.html) – [aux](fi-dep-aux.html) – [aux:pass](fi-dep-aux-pass.html) – [case](fi-dep-case.html) – [cc](fi-dep-cc.html) – [cc:preconj](fi-dep-cc-preconj.html) – [ccomp](fi-dep-ccomp.html) – [compound](fi-dep-compound.html) – [compound:nn](fi-dep-compound-nn.html) – [compound:prt](fi-dep-compound-prt.html) – [conj](fi-dep-conj.html) – [cop](fi-dep-cop.html) – [cop:own](fi-dep-cop-own.html) – [csubj](fi-dep-csubj.html) – [csubj:cop](fi-dep-csubj-cop.html) – [dep](fi-dep-dep.html) – [det](fi-dep-det.html) – [discourse](fi-dep-discourse.html) – [fixed](fi-dep-fixed.html) – [flat](fi-dep-flat.html) – [flat:foreign](fi-dep-flat-foreign.html) – [flat:name](fi-dep-flat-name.html) – [goeswith](fi-dep-goeswith.html) – [mark](fi-dep-mark.html) – [nmod](fi-dep-nmod.html) – [nmod:gobj](fi-dep-nmod-gobj.html) – [nmod:gsubj](fi-dep-nmod-gsubj.html) – [nmod:poss](fi-dep-nmod-poss.html) – [nsubj](fi-dep-nsubj.html) – [nsubj:cop](fi-dep-nsubj-cop.html) – [nummod](fi-dep-nummod.html) – [obj](fi-dep-obj.html) – [obl](fi-dep-obl.html) – [orphan](fi-dep-orphan.html) – [parataxis](fi-dep-parataxis.html) – [punct](fi-dep-punct.html) – [root](fi-dep-root.html) – [vocative](fi-dep-vocative.html) – [xcomp](fi-dep-xcomp.html) – [xcomp:ds](fi-dep-xcomp-ds.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 15136 sentences and 202208 tokens.</li>
<li>This corpus contains 28668 tokens (14%) that are not followed by a space.</li>
<li>This corpus contains 106 types of words with spaces. Examples: 100 000, : ), 10 000, 200 000, 50 000, 70 000, 80 000, 800 000, 1 000, 2 800, 20 000, 5 000, 170 000, 21 000, 22 000, 3 000, 30 000, 300 000, 330 000, 400 000, 413 000, 82 000, 90 000, 900 000, 1 022 806, 1 200, 1 377, 1 564, 1 671,82, 1 700, 1 800, 101 389, 102 000, 11 125, 110 000, 118 000, 12 400, 130 000, 130 005, 135 000, 14 634, 14 900, 140 000, 144 900, 154 502, 158 100, 166 000, 175 000, 180 000, 198 058</li>
<li>This corpus contains 2276 types of words that contain both letters and punctuation. Examples: EU:n, N:o, s., mm., eaa., :D, 5(n), EKP:n, talous-, A., esim., sdp:n, EMN:n, YK:n, ns., n., A:n, -yhtye, oy:n, 2003/634/EY, II:n, huhti-kesäkuussa, ja/tai, EU:, UPM:n, Varsinais-Suomen, var., -yhtyeen, 19/65/ETY, 1980-luvun, 3.Rf3, ETA:n, I:n, kuorma-auto, pinta-ala, 1800-luvun, 1999/730/YUTP, 2.f4, 90/642/ETY, Isossa-Britanniassa, J., SDP:tä, Valko-Venäjä, koulutus-, maahanmuutto-, tutkimus-, ven., 1900-luvun, 1970-luvulla, 1990-luvun</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: DET, PART</li>
</ul>

<ul>
<li>This corpus contains 48 lemmas tagged as pronouns (PRON): ainoa, ainut, eräs, harva, hän, itse, joka, jokainen, jokin, joku, jokunen, jompikumpi, jonne, kaikkensa, kaikki, ken, kuka, kukaan, kukakin, kukin, kumpi, kumpikaan, kumpikin, ma, mikin, mikä, mikä#lienee#jokin, mikään, minä, molemmat, mones, moni, monta, muu, muuan, muutama, nuo, sama, se, sinä, sää, toinen, tuo, tämä, usea, useampi, yksi, yksikään</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as auxiliaries (AUX): aikoa, ei, että#ei, jos#ei, joutua, mahtaa, olla, olla#minä, pitää, saattaa, taitaa, tarvita, täytyä, voida</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as AUX and sometimes as VERB: aikoa, ei, että#ei, jos#ei, joutua, mahtaa, olla, pitää, saattaa, taitaa, tarvita, voida</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Fin
  <ul>
    <li>AUX: on, ei, oli, ovat, ole, voi, olisi, en, eivät, olivat</li>
    <li>VERB: eikä, tulee, saa, sai, tuli, on, ettei, sanoi, ottaa, kertoo</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: olla, olemaan, pitää, ollessa, olemalla, ollen, ollessaan, voidakseen, joutua, olemassa</li>
    <li>VERB: tehdä, saada, ottaa, käyttää, antaa, mennä, olemassa, pitää, sanoa, olla</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>AUX: ollut, olevan, olleet, voinut, oltava, ollu, olleen, pitänyt, olevansa, oltu</li>
    <li>VERB: tehty, saanut, olevan, tullut, s., tehnyt, koskevan, annettu, koskevat, annetun</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>



<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: useita, uusia, hyvät, kolmansien, uudet, erilaisia, uusien, hyviä, kansalliset, ensimmäiset</li>
        <li>AUX-Fin: ovat, eivät, olivat, voivat, olemme, emme, on, voimme, olisivat, ei</li>
        <li>AUX-Part: ollut, olleet, voineet, olevansa, olleita, oltu, saattaneet, tainneet, olevani, olevanne</li>
        <li>NOUN: jäsenvaltioiden, eläinten, ihmiset, tietojen, maiden, vuosina, ihmisiä, lapset, ihmisten, naisten</li>
        <li>NUM: tuhansia, kymmeniä, satoja, satojen, kymmenien, miljoonia, kahdet, miljoonien, tuhansien, yhdet</li>
        <li>PRON: ne, jotka, niiden, he, meidän, niitä, joita, me, heidän, joiden</li>
        <li>PROPN: Yhdysvaltain, Yhdysvalloissa, Yhdysvallat, Yhdysvaltojen, Mikkelinsaarilla, Mikkelinsaarten, Yhdysvalloista, Yhdysvaltoja, kokkidiostaattien, Alankomaat</li>
        <li>VERB-Fin: saavat, saivat, tulevat, koskevat, kuuluvat, liittyvät, etteivät, eivätkä, antavat, tekevät</li>
        <li>VERB-Part: koskevat, olevat, koskevien, olevien, liittyviä, olevia, koskevia, koskevista, saaneet, tarkoitettujen</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: hyvä, arvoisa, ensimmäinen, uusi, uuden, hyvää, ensimmäisen, oman, uutta, pieni</li>
        <li>AUX-Fin: on, ei, oli, olisi, voi, en, olen, olin, pitäisi, voisi</li>
        <li>AUX-Inf: olla, olemaan, pitää, ollessa, olemalla, ollen, ollessaan, voidakseen, joutua, olemassa</li>
        <li>AUX-Part: ollut, olevan, voinut, oltava, ollu, olleen, pitänyt, olevansa, oltu, joutunut</li>
        <li>NOUN: vuonna, vuoden, yhteisön, komission, päivänä, huomioon, mies, yliopiston, prosenttia, aikana</li>
        <li>NUM: kaksi, kolme, yksi, yhden, viisi, kolmen, neljä, kahden, miljoonaa, kymmenen</li>
        <li>PRON: se, hän, sen, joka, sitä, siitä, tämän, tämä, hänen, mitä</li>
        <li>PROPN: euroopan, Turun, suomen, EU:n, Suomessa, the, Helsingin, Mithridates, Venäjän, Kiinan</li>
        <li>VERB-Fin: eikä, tulee, sai, tuli, ettei, on, sanoi, saa, ottaa, kertoo</li>
        <li>VERB-Inf: tehdä, saada, ottaa, käyttää, antaa, mennä, olemassa, pitää, sanoa, olla</li>
        <li>VERB-Part: tehty, olevan, saanut, tullut, s., tehnyt, koskevan, annettu, annetun, oleva</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Abe
      <ul>
        <li>AUX-Inf: olematta</li>
        <li>NOUN: huomiotta, poikkeuksetta, varauksetta, Työttä, alkoholitta, armotta, ehdoitta, esteettä, huoletta, kiistatta</li>
        <li>VERB-Inf: puhumattakaan, ajamatta, huomaamatta, ottamatta, rajoittamatta, tekemättä, viipymättä, ajattelematta, mainitsematta, hymyilemättä</li>
        <li>VERB-Part: kutsumatta, haluamatta, huomaamatta, lunastamatta, puhumattakaan, puuttumatta, rajoittamatta, saapumatta</li>
      </ul>
    </li>
    <li>Abl
      <ul>
        <li>ADJ: omalta, hyvältä, suurelta, pahalta, pidemmältä, uusilta, erilaiselta, hassulta, oikeudelliselta, paremmalta</li>
        <li>NOUN: osalta, kannalta, vuodelta, pohjalta, nimeltään, osaltaan, osiltaan, tieltä, arviolta, laitokselta</li>
        <li>NUM: kahdeksalta, kuudelta, 581:ltä, neljältä, 955:ltä, aamuviideltä, kahdelta, kolmelta, kymmeneltä, miljoonalta</li>
        <li>PRON: siltä, kaikilta, minulta, tältä, joltain, häneltä, itseltään, meiltä, niiltä, samalta</li>
        <li>PROPN: Tampereelta, Accenturelta, Arnazilta, Atrialta, Bahamalta, Bikbokilta, Danskelta, Granfeltilta, H&M:lta, Harrilta</li>
        <li>VERB-Part: tapahtuvalta, aiheuttamilta, ei-hyväksytyiltä, johtavalta, julkaistulta, kuolaavalta, käyvältä, loukkaantuneelta, mainitulta, myönnetyiltä</li>
      </ul>
    </li>
    <li>Acc
      <ul>
        <li>PRON: hänet, minut, meidät, sinut, heidät, mut, sut, kenet, teidät, ketkä</li>
      </ul>
    </li>
    <li>Ade
      <ul>
        <li>ADJ: toisella, ensimmäisellä, hyvällä, suurella, uudella, vasemmalla, kyseisellä, omalla, omilla, pitkällä</li>
        <li>AUX-Inf: olemalla</li>
        <li>AUX-Part: olevalla</li>
        <li>NOUN: perusteella, tavalla, avulla, alueella, hetkellä, puolella, matkalla, tasolla, kaudella, markkinoilla</li>
        <li>NUM: yhdellä, kahdella, kolmella, miljoonalla, neljällä, sadalla, viidellä, kuudella, tuhannella, kahdeksalla</li>
        <li>PRON: tällä, sillä, jolla, joilla, meillä, minulla, hänellä, samalla, niillä, näillä</li>
        <li>PROPN: venäjällä, Mikkelinsaarilla, Accenturella, Tampereella, Arduinolla, Balilla, Balkanilla, Boskärillä, Islandilla, Jalmarillakin</li>
        <li>VERB-Inf: tekemällä, ottamalla, painamalla, analysoimalla, auttamalla, keräämällä, lisäämällä, muuttamalla, pelaamalla, poistamalla</li>
        <li>VERB-Part: saatavilla, olevalla, nähtävillä, olevilla, tehdyllä, ei-hyväksytyllä, haluamallasi, johtamalla, järjestämällä, koskevalla</li>
      </ul>
    </li>
    <li>All
      <ul>
        <li>ADJ: asianomaisille, uusille, omille, vapaalle, hyvälle, nuorelle, toiselle, uudelle, asianomaiselle, julkiselle</li>
        <li>NOUN: komissiolle, jäsenvaltioille, puolelle, paikalle, markkinoille, alueelle, lattialle, pihalle, sijalle, ihmisille</li>
        <li>NUM: yhdelle, Seitsemälle, kahdeksalle, kahdelle, kuudelle, neljälle, viidelle, yhdeksälle</li>
        <li>PRON: minulle, hänelle, kaikille, meille, sille, niille, itselleen, toiselle, heille, muille</li>
        <li>PROPN: Clintonille, Eurostatille, Balille, Hypatialle, Japanille, Kalymnokselle, Reutersille, SDP:lle, Saksalle, Simonideelle</li>
        <li>VERB-Part: oleville, kuuluville, olevalle, saataville, kuuluvalle, käytettäville, saapuville, tarkoitetuille, tehtäville, toimineelle</li>
      </ul>
    </li>
    <li>Com
      <ul>
        <li>ADJ: kansanomaisine, liehuvine, ruumiillisine, tuttuine, uusine</li>
        <li>NOUN: poikineen, postikuluineen, ajatuksineni, allekirjoittajineen, asenteineen, eduskuntakäsittelyineenkin, herkkuineen, hihoineen, iloineen, jalanjälkineen</li>
        <li>PRON: kaikkine, Näine, muineen</li>
        <li>PROPN: bajamajoineen</li>
      </ul>
    </li>
    <li>Ela
      <ul>
        <li>ADJ: omasta, uudesta, suuresta, pienestä, uusista, välisestä, kolmansista, omista, tyhjästä, hyvästä</li>
        <li>AUX-Inf: olemasta</li>
        <li>NOUN: vuodesta, mielestäni, asiasta, syystä, mielestä, suhteista, maasta, alusta, asioista, muuttamisesta</li>
        <li>NUM: kahdesta, yhdestä, neljästä, kolmesta, kymmenestä, miljoonasta, seitsemästä, 101:sta, 14:sta, 31:stä</li>
        <li>PRON: siitä, tästä, niistä, josta, joista, mistä, hänestä, kaikista, minusta, näistä</li>
        <li>PROPN: Helsingistä, Romaniasta, Yhdysvalloista, Porvoosta, Suomesta, Euroopasta, Kiinasta, Chargerista, GitHubista, Jyväskylästä</li>
        <li>VERB-Inf: näkemästä, äänestämästä, käyttämästä, linnoittamasta, osallistumasta, paljastamasta, toistelemasta, aiheuttamasta, ajattelemasta, alistumasta</li>
        <li>VERB-Part: koskevista, koskevasta, liittyvistä, olevasta, olevista, käytetystä, sijaitsevasta, sovellettavasta, sovellettavista, tehdystä</li>
      </ul>
    </li>
    <li>Ess
      <ul>
        <li>ADJ: sellaisena, ensimmäisenä, seuraavana, viimeisenä, sellaisenaan, valmiina, kolmantena, sellaisina, toisena, tyytyväisenä</li>
        <li>AUX-Part: olevinaan, olevinani</li>
        <li>NOUN: vuonna, päivänä, aikana, vuosina, tarkoituksena, osana, tiistaina, perjantaina, keskiviikkona, lauantaina</li>
        <li>NUM: yhtenä, kahtena, neljänä, viitenä, yhtenäkin</li>
        <li>PRON: tänä, samana, eräänä, jona, sinä, jonakin, yhtenä, jokaisena, muuna, niinä</li>
        <li>PROPN: DJ:nä, Aatuna, Ellinä, Kuningasmarssina, Levina, Pinnaclesaarina, Professorina, Vauxhallina</li>
        <li>VERB-Part: verrattuna, muutettuna, katsottuna, sanottuna, hienonnettuna, käsiteltävänä, luettuina, uhattuna, edeltävänä, edustettuina</li>
      </ul>
    </li>
    <li>Gen
      <ul>
        <li>ADJ: uuden, ensimmäisen, oman, toisen, kyseisen, kansainvälisen, kolmansien, erityisen, suomalaisen, hyvän</li>
        <li>AUX-Part: olevan, olleen, olevansa, voivan, aikovansa, olevaan, olevani, voivansa, voivasi</li>
        <li>NOUN: vuoden, yhteisön, komission, yliopiston, artiklan, asetuksen, neuvoston, ajan, jäsenvaltioiden, maan</li>
        <li>NUM: yhden, kolmen, kahden, viiden, neljän, miljoonan, kuuden, parin, kymmenen, kahdeksan</li>
        <li>PRON: sen, tämän, hänen, jonka, niiden, meidän, heidän, minun, joiden, muiden</li>
        <li>PROPN: euroopan, Turun, suomen, EU:n, Helsingin, Yhdysvaltain, Venäjän, Kiinan, Nokian, Espanjan</li>
        <li>VERB-Part: olevan, koskevan, annetun, koskevien, olevien, tehdyn, tarkoitettujen, tapahtuvan, mainitun, käsittelevän</li>
      </ul>
    </li>
    <li>Ill
      <ul>
        <li>ADJ: uuteen, omaan, sellaiseen, uusiin, toiseen, vastaavaan, kolmanteen, oikeaan, omiin, sellaisiin</li>
        <li>AUX-Inf: olemaan</li>
        <li>AUX-Part: olemaan</li>
        <li>NOUN: huomioon, aikaan, käyttöön, vuoteen, kotiin, suuntaan, loppuun, maahan, asiaan, joukkoon</li>
        <li>NUM: miljoonaan, kahteen, viiteen, yhteen, kolmeen, neljään, 6:een, kahdeksaan, kuuteen, kymmeneen</li>
        <li>PRON: siihen, tähän, johon, samaan, mihin, joihin, niihin, toiseen, muihin, näihin</li>
        <li>PROPN: Suomeen, Helsinkiin, Turkuun, Roomaan, Arduinoon, Brysseliin, Eurooppaan, Japaniin, Kuivajärveen, Kuopioon</li>
        <li>VERB-Inf: tekemään, katsomaan, käyttämään, etsimään, hoitamaan, istumaan, opiskelemaan, ottamaan, puhumaan, antamaan</li>
        <li>VERB-Part: olevaan, koskevaan, koskeviin, liittyviin, säädettyyn, tuleviin, Luvattuun, esitettyihin, esittämiin, haluamaansa</li>
      </ul>
    </li>
    <li>Ine
      <ul>
        <li>ADJ: ensimmäisessä, parlamentaarisessa, virallisessa, omassa, toisessa, uudessa, pienessä, suuressa, tavanomaisessa, hyvässä</li>
        <li>AUX-Inf: ollessa, ollessaan, olemassa, ollessani, olleessa, ollessamme</li>
        <li>NOUN: yhteydessä, artiklassa, liitteessä, vaiheessa, kyseessä, maassa, tapauksessa, käytännössä, alussa, asetuksessa</li>
        <li>NUM: yhdessä, kahdessa, 1:ssä, kolmessa, puolessa, kahdeksassa, 30:ssä, 37:ssä, 3:ssakin, kolmessatoista</li>
        <li>PRON: jossa, tässä, siinä, joissa, missä, kaikissa, jossain, niissä, näissä, jossakin</li>
        <li>PROPN: Suomessa, Helsingissä, Euroopassa, Brysselissä, Yhdysvalloissa, Ruotsissa, Turussa, Irakissa, Kiinassa, Italiassa</li>
        <li>SYM: SRT-8:ssa</li>
        <li>VERB-Inf: olemassa, kuluessa, tarvittaessa, voittamassa, halutessaan, lähestyessä, tekemässä, alkaessa, miettiessään, saapuessaan</li>
        <li>VERB-Part: olevassa, annetussa, käytettävissä, koskevissa, koskevassa, pidetyssä, järjestämässä, nähtävissä, olemassa, sijaitsevassa</li>
      </ul>
    </li>
    <li>Ins
      <ul>
        <li>ADJ: omin, paljain, selvin, suurin, tietyin, tärkein, vähin, Avoimin, Raskain, aistinvaraisin</li>
        <li>AUX-Inf: ollen, aikoen</li>
        <li>NOUN: tavoin, osin, käsin, välein, keinoin, mielin, silmin, voimin, turvin, lain</li>
        <li>NUM: kaksin</li>
        <li>PRON: monin, samoin, kaikin, molemmin, minkä, useammin</li>
        <li>PROPN: Helmin</li>
        <li>VERB-Inf: ottaen, lukien, johtuen, noudattaen, liittyen, käyttäen, pitäen, riippuen, katsoen, poiketen</li>
        <li>VERB-Part: edellytetyin, soveltuvin, säädetyin</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>ADJ: hyvä, arvoisa, ensimmäinen, uusi, pieni, oma, suuri, suurin, tärkeä, paras</li>
        <li>AUX-Part: ollut, olleet, voinut, oltava, ollu, pitänyt, oltu, joutunut, saattanut, voinu</li>
        <li>NOUN: mies, komissio, artikla, N:o, osa, asia, EY, puhemies, professori, ihmiset</li>
        <li>NUM: kaksi, kolme, yksi, viisi, neljä, pari, yhdeksän, kuusi, kymmenen, puoli</li>
        <li>PRON: se, hän, joka, tämä, ne, jotka, kaikki, minä, he, mikä</li>
        <li>PROPN: the, Mithridates, Pekka, New, of, Mårten, Suomi, Eurooppa, Kaijasilta, Simonides</li>
        <li>VERB-Part: tehty, saanut, tullut, s., tehnyt, annettu, koskevat, oleva, olevat, antanut</li>
      </ul>
    </li>
    <li>Par
      <ul>
        <li>ADJ: hyvää, uutta, useita, tärkeää, uusia, mahdollista, omaa, ensimmäistä, seuraavaa, erilaisia</li>
        <li>AUX-Part: olleita, ollutta</li>
        <li>NOUN: prosenttia, vuotta, aikaa, euroa, kertaa, kesäkuuta, mieltä, jäsentä, tietoa, joulukuuta</li>
        <li>NUM: miljoonaa, yhtä, tuhansia, kahta, miljardia, kymmeniä, kymmentä, satoja, kaksikymmentä, miljoonia</li>
        <li>PRON: sitä, mitä, tätä, niitä, mitään, joita, jota, jotain, muita, minua</li>
        <li>PROPN: Eurooppaa, suomea, SDP:tä, risperidonia, Mollaa, Yhdysvaltoja, Bysanttia, Hypatiaa, Jarzembowskia, Nokiaa</li>
        <li>SYM: °C:ta</li>
        <li>VERB-Part: liittyviä, olevia, koskevia, olevaa, kuluttua, koskevaa, tarkoitettua, tehtyä, liittyvää, säädettyä</li>
      </ul>
    </li>
    <li>Tra
      <ul>
        <li>ADJ: toiseksi, hyväksi, kolmanneksi, uudeksi, valmiiksi, neljänneksi, parhaaksi, tutuksi, ensimmäiseksi, ilmaiseksi</li>
        <li>AUX-Inf: voidakseen, ollakseen, Ollaksesi, voidaksemme</li>
        <li>NOUN: hetkeksi, osaksi, kohteeksi, varmistamiseksi, ajaksi, jäseneksi, avuksi, päätteeksi, ven., parantamiseksi</li>
        <li>NUM: yhdeksi, kuudeksi, kolmeksi, kymmeneksi, pariksi, viideksitoista, yhdeksäksi</li>
        <li>PRON: ainoaksi, täksi, jokaiseksi, miksi, moneksi, muutamaksi, samaksi, siksi, toiseksi, yhdeksi</li>
        <li>PROPN: COO:ksi, Cunninghamiksi, Hopeeksi, Jaakoksi, Monteverdiksi, Pyroksi, Radioheadiksi, Runkuks, Stiletiks, Stilsuks</li>
        <li>VERB-Inf: saadakseen, varmistaakseen, käsittääkseni, saadakseni, loppuakseen, päästäkseen, todetakseni, tullakseen, täyttääkseen, vakuuttaakseen</li>
        <li>VERB-Part: käsiteltäväksi, alkavaksi, hyväksytyksi, kuultavaksi, käytettäväksi, luettavaksi, teurastettaviksi, vakuuttuneeksi, avatuksi, hylätyksi</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Cmp
      <ul>
        <li>ADJ: parempi, parempaa, suurempi, pienempi, useamman, alhaisempi, nuorempi, pienempiä, vanhempi, helpompaa</li>
        <li>ADV: paremmin, useammin, nopeammin, laajemmin, enemmän, pidemmälle, pidempään, huonommin, alempana, etäämmällä</li>
        <li>VERB-Part: hyväksytympi</li>
      </ul>
    </li>
    <li>Pos
      <ul>
        <li>ADJ: hyvä, arvoisa, uusi, uuden, hyvää, oman, uutta, pieni, oma, tärkeää</li>
        <li>AUX-Part: ollut, olevan, olleet, voinut, oltava, ollu, olleen, pitänyt, olevansa, oltu</li>
        <li>NOUN: alaisena, hyvähän, rakkaille, tuntemattomille, tuttujen, tutuille</li>
        <li>PRON: muita, muiden, muidenkin, muittenkin</li>
        <li>PROPN: Yhtenäinen</li>
        <li>VERB-Part: tehty, saanut, olevan, tullut, s., tehnyt, koskevan, annettu, koskevat, annetun</li>
      </ul>
    </li>
    <li>Sup
      <ul>
        <li>ADJ: suurin, paras, suurimmat, korkein, suurimman, parasta, vanhin, tärkein, useimmat, parhaan</li>
        <li>ADV: helpoimmin, nopeimmin, yleisimmin, ahkerimmin, ilmeisimmin, keskeisimmin, taitavimmin, todennäköisimmin, vaikeimmin, vilkkaimmin</li>
        <li>VERB-Part: menestynein, myydyin, saastuneimpia</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>AUX-Fin: ei, en, eivät, emme, et, älä, eikä, eikö, eihän, enkä</li>
        <li>VERB-Fin: eikä, ettei, ei, enkä, etten, etteivät, muttei, eivätkä, en, ellei</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Verbal Features</h3>


<li><a>Mood</a>
  <ul>
    <li>Cnd
      <ul>
        <li>AUX-Fin: olisi, pitäisi, voisi, olisin, olisivat, voitaisiin, voisivat, voisin, olisiko, olisimme</li>
        <li>VERB-Fin: tulisi, haluaisin, saisi, haluaisi, olisi, saisin, saisivat, tekisi, vaikuttaisi, kuuluisi</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX-Fin: älä, älkää, ole, olkaa, älkäämme, älköön</li>
        <li>VERB-Fin: lisää, ota, keitä, leikkaa, paista, lue, sekoita, tee, Kypsennä, anna</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX-Fin: on, oli, ovat, ole, voi, olivat, voidaan, olen, olin, voivat</li>
        <li>VERB-Fin: tulee, saa, sai, tuli, on, sanoi, ottaa, kertoo, sanoo, kertoi</li>
      </ul>
    </li>
    <li>Pot
      <ul>
        <li>AUX-Fin: lienee, liene, lie, lienevät, Voinen, joutunee, lien, lieneekään, voinee</li>
        <li>VERB-Fin: hypänne, kertone, luvanne, saanen, Palauttanet, Suonet, alkanevat, jatkunee, johtunee, käytäneen</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Past
      <ul>
        <li>AUX-Fin: oli, olivat, olin, piti, saattoi, olikin, joutui, oliko, oltiin, taisi</li>
        <li>VERB-Fin: sai, tuli, sanoi, kertoi, alkoi, voitti, teki, oli, toimi, nousi</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX-Fin: on, ovat, ole, voi, voidaan, olen, onko, voivat, olemme, täytyy</li>
        <li>VERB-Fin: tulee, saa, on, ottaa, kertoo, sanoo, kuuluu, tekee, tarkoitetaan, pitää</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Voice</a>
  <ul>
    <li>Act
      <ul>
        <li>AUX-Fin: on, ei, oli, ovat, olisi, voi, en, eivät, olivat, olen</li>
        <li>AUX-Inf: olla, olemaan, pitää, ollessa, olemalla, ollen, ollessaan, voidakseen, joutua, olemassa</li>
        <li>AUX-Part: ollut, olevan, olleet, voinut, ollu, olleen, pitänyt, olevansa, joutunut, saattanut</li>
        <li>VERB-Fin: eikä, tulee, sai, tuli, on, ettei, sanoi, saa, ottaa, kertoo</li>
        <li>VERB-Inf: tehdä, saada, ottaa, käyttää, antaa, mennä, olemassa, pitää, sanoa, olla</li>
        <li>VERB-Part: saanut, olevan, tullut, s., tehnyt, koskevan, koskevat, oleva, olevat, antanut</li>
      </ul>
    </li>
    <li>Pass
      <ul>
        <li>AUX-Fin: voidaan, voida, voitaisiin, ollaan, oltiin, olla, aiotaan, saatetaan, voitiin, Aiotaanko</li>
        <li>AUX-Part: ollut, oltava, oltu, voitu, voitava, jouduttu, saatettu</li>
        <li>VERB-Fin: tarkoitetaan, tehdään, julkaistiin, sovelletaan, käytetään, otetaan, annetaan, pidetään, tarvitaan, valittiin</li>
        <li>VERB-Inf: tarvittaessa, laadittaessa, Kuumennettaessa, käytettäessä, määriteltäessä, päätettäessä, tehtäessä, valittaessa, Löydettäessä, Tiedusteltaessa</li>
        <li>VERB-Part: tehty, annettu, annetun, verrattuna, saatu, muutettuna, julkaistu, tehdyn, kuluttua, tehtävä</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Dem
      <ul>
        <li>PRON: se, sen, sitä, siitä, tämän, tämä, ne, tässä, niiden, siihen</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>PRON: kaikki, mitään, jotain, joku, muita, muiden, muut, muuta, kaiken, kukaan</li>
      </ul>
    </li>
    <li>Int
      <ul>
        <li>PRON: mitä, mikä, kuka, mistä, missä, mihin, minkä, mitkä, millä, mitähän</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>PRON: hän, hänen, minä, he, meidän, mä, me, heidän, minun, minua</li>
      </ul>
    </li>
    <li>Rcp
      <ul>
        <li>PRON: toinen, toisen, toiselle, toiseen, toisella, toisiinsa, toisten, toiset, toisiaan, toisessa</li>
      </ul>
    </li>
    <li>Rel
      <ul>
        <li>PRON: joka, jotka, jonka, jossa, mitä, joita, jota, joiden, mikä, joissa</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>NumType</a>
  <ul>
    <li>Card
      <ul>
        <li>NUM: 1, 2, 2009, 3, 5, 4, kaksi, 10, 2006, 6</li>
      </ul>
    </li>
    <li>Ord
      <ul>
        <li>ADJ: 1., 2., 3., II, ensimmäinen, I, ensimmäisen, 7., 4., toisen</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Reflex</a>
  <ul>
    <li>Yes
      <ul>
        <li>PRON: itsensä, itse, itselleen, itseään, itseni, itseäni, itselleni, itsestään, itseensä, itseltään</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Person</a>
  <ul>
    <li>0
      <ul>
        <li>AUX-Fin: on, voi, pitäisi, pitää, olisi, oli, voisi, täytyy, piti, onkin</li>
        <li>VERB-Fin: on, saa, tulee, ei, tuli, tuntuu, sai, kannattaa, oli, tulisi</li>
      </ul>
    </li>
    <li>1
      <ul>
        <li>AUX-Fin: en, olen, olin, olemme, emme, olisin, voimme, voin, enkä, voisin</li>
        <li>PRON: minä, meidän, mä, me, minun, minua, meillä, minulla, minut, minulle</li>
        <li>VERB-Fin: haluaisin, haluan, sain, enkä, huomasin, etten, toivon, ajattelin, näin, ostin</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>AUX-Fin: et, olet, älä, voit, olisit, voitte, älkää, ole, olette, ette</li>
        <li>PRON: sinä, sä, sinun, teitä, te, sinua, sinulle, teille, sinulla, sinut</li>
        <li>VERB-Fin: lisää, ota, et, haluat, keitä, leikkaa, paista, saat, lue, sekoita</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX-Fin: on, ei, oli, ovat, olisi, voi, eivät, olivat, voivat, onko</li>
        <li>PRON: hän, hänen, he, heidän, hänet, häntä, hänelle, hänellä, hänestä, heitä</li>
        <li>VERB-Fin: eikä, sai, tulee, tuli, ettei, sanoi, ottaa, on, kertoo, sanoo</li>
      </ul>
    </li>
  </ul>
</li>



<li><a>Number[psor]</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: parhaamme, tosissamme, vakavissamme</li>
        <li>ADP: kanssa, viereemme, vierellänne</li>
        <li>ADV: edessämme, keskuudessamme, kanssanne, eteemme, kanssamme, mielellämme, mukaamme, mukanamme, varuillamme, yläpuolellamme</li>
        <li>AUX-Inf: ollessamme, voidaksemme</li>
        <li>AUX-Part: olevanne</li>
        <li>NOUN: joukkueemme, mielestämme, elämässämme, lapsemme, elämämme, elämästämme, esittelijäämme, kansalaisillemme, kodistamme, kulttuurissamme</li>
        <li>PRON: itsellemme, itseämme, toisiamme, itsemme, itseemme, itsestämme, kaikkemme, toisianne, toisistanne, toistemme</li>
        <li>PROPN: Eurooppamme</li>
        <li>VERB-Inf: antaaksemme, edistääksemme, estääksemme, huomaamattamme, kieriessämme, kuvatessamme, käsittääksemme, lisätäksemme, lähtiessämme, löytääksemme</li>
        <li>VERB-Part: esittämistämme, laatimamme, Jätettyämme, Otettuamme, Saamiemme, asuttamastamme, haluamamme, huomaavinamme, keskusteltuamme, kuunneltuamme</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: kaltaiseni, ikäiseni, omiasi, Minunlaiseni, omani, omiani, omieni, omistani, parhaani</li>
        <li>ADP: puolestani, kanssas, kanssasi, luokses, taakse, takiani, vierelleni</li>
        <li>ADV: mukanani, pahoillani, onnekseni, ympärilleni, edessäni, sisälläni, vieressäsi, Kanssasi, Vastaani, Ylleni</li>
        <li>AUX-Inf: ollessani, Ollaksesi</li>
        <li>AUX-Part: olevani, olevinani, voivani, voivasi</li>
        <li>NOUN: mielestäni, silmäni, käteni, mieheni, ystäväni, pääni, elämäni, lapseni, puolisoni, kollegani</li>
        <li>PRON: itseni, itseäni, itselleni, itsesi, itsestäni, Itselläni, itseltäni, itseltänikin, itsenikin, itsestäsi</li>
        <li>PROPN: Fantani, Lassesi, Saintillani, iPodistasi</li>
        <li>VERB-Inf: käsittääkseni, saadakseni, Lähtiessäni, halutessasi, todetakseni, Kertoessani, Nähdäkseni, Painaessani, Puhuessani, Selatessani</li>
        <li>VERB-Part: päästyäni, haluamallasi, ostamaani, saamani, saavani, tekeväni, tuntemani, Kerrottuani, Kuljettuani, asustavani</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Other Features</h3>

<li><a>Abbr</a>
  <ul>
    <li>Yes
      <ul>
        <li>ADJ: ns., nk., ookoo, ev.-lut.</li>
        <li>ADV: mm., esim., jne, n., oik., ns., esim, jne., ym</li>
        <li>INTJ: Huom</li>
        <li>NOUN: N:o, EY, a, eaa., b, ETY, kpl, oy, cm, g</li>
        <li>NUM: milj., u18</li>
        <li>PROPN: EU:n, EKP:n, A., YK:n, EKP, SDP:n, MTV3, EU, EU:, SDP</li>
        <li>VERB-Fin: huom</li>
        <li>VERB-Part: s., Em., k.</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>AdpType</a>
  <ul>
    <li>Post
      <ul>
        <li>ADP: mukaan, kanssa, jälkeen, vuoksi, lisäksi, kautta, vastaan, puolesta, sijaan, sitten</li>
      </ul>
    </li>
    <li>Prep
      <ul>
        <li>ADP: ennen, ilman, kohti, ympäri, pitkin, keskellä, kesken, paitsi, mukana, ottamatta</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Clitic</a>
  <ul>
    <li>Han
      <ul>
        <li>ADJ: mukavahan, näköistähän</li>
        <li>ADV: kyllähän, niinhän, ainahan, johan, silloinhan, Hyvinhän, Miksihän, Samallahan, Yleensähän, sinnehän</li>
        <li>AUX-Fin: eihän, onhan, olihan, pitihän, ovathan, pitäähän, täytyyhän, Eiväthän, Enhän, Ethän</li>
        <li>NOUN: Pakkohan, työllähän, Kyseessähän, Käytännössähän, Ongelmahan, Pojallehan, helpotushan, herkkuahan, herkkuhan, hinnathan</li>
        <li>PRON: sehän, mitähän, Mehän, minähän, sitähän, Hehän, Kaikkihan, Mikähän, Minkähän, Senhän</li>
        <li>PROPN: Jupiterhan</li>
        <li>VERB-Fin: tiedäthän, tiedättehän, Antakaahan, Esitimmehän, Kuulkaahan, Menehän, Menkäähän, Muistathan, Otathan, Pitäkäähän</li>
      </ul>
    </li>
    <li>Han,Kin
      <ul>
        <li>PRON: nekinhän</li>
      </ul>
    </li>
    <li>Han,Ko
      <ul>
        <li>ADV: kuinkakohan, miksiköhän, noinkohan</li>
        <li>AUX-Fin: Eiköhän</li>
        <li>PRON: Kukakohan</li>
        <li>VERB-Fin: Olisikohan, Tietävätköhän, Tietääköhän, Uskaltaisikohan</li>
      </ul>
    </li>
    <li>Han,Pa
      <ul>
        <li>AUX-Fin: Eipähän</li>
        <li>VERB-Fin: ajattelevatpahan</li>
      </ul>
    </li>
    <li>Ka
      <ul>
        <li>AUX-Fin: eikä, enkä, Eivätkä</li>
        <li>VERB-Fin: eikä, enkä, eivätkä, emmekä, etkä, äläkä</li>
      </ul>
    </li>
    <li>Kaan
      <ul>
        <li>ADJ: edellisestäkään, nykyisissäkään, parempaakaan, parempiakaan, pienelläkään, pienintäkään, ruskeakaan, seuraavallakaan, suurtakaan, valmiskaan</li>
        <li>ADP: lähelläkään, jälkeenkään, lähellekään</li>
        <li>ADV: juurikaan, kovinkaan, todellakaan, vieläkään, kylläkään, myöskään, varmaankaan, muutenkaan, niinkään, siltikään</li>
        <li>AUX-Fin: olekaan, olikaan, olisikaan, onkaan, voisikaan, lieneekään, olekkaan, olenkaan, ovatkaan, pidäkään</li>
        <li>AUX-Part: ollutkaan</li>
        <li>NOUN: epäilystäkään, hetkeksikään, kertaakaan, Internet-myyntikään, Kilpailijoillekaan, Päivääkään, aavistustakaan, aikaakaan, alentamiseenkaan, askeleenkaan</li>
        <li>NUM: yhtäkään, yhdeltäkään</li>
        <li>PRON: muutakaan, muukaan, sekään, senkään, minäkään, tänäkään, Monetkaan, ainoatakaan, muustakaan, mäkään</li>
        <li>PROPN: Paavokaa, Suomenkaan, Teltsustakaan</li>
        <li>VERB-Fin: Emmäkään, hakeudukaan, haluaisikaan, haluakaan, huomaatkaan, huomasikaan, kartukaan, keksitäkään, kuolekaan, kävikään</li>
        <li>VERB-Inf: puhumattakaan, estääkään, huomatakaan, juodakaan, jäkättääkään, laittamassakaan, puhuakaan, saamaankaan, sanookaan, säikähtääkkä</li>
        <li>VERB-Part: tullutkaan, ostanutkaan, ilmestynytkään, kokeneetkaan, liiennytkään, lukenutkaan, löytänytkään, nähnytkään, ollutkaan, osallistunutkaan</li>
      </ul>
    </li>
    <li>Kin
      <ul>
        <li>ADJ: entistäkin, viimeisetkin, Nerokkainkin, Normaalimmankin, Pelottavakin, Pienenkin, Seuraavallakin, Tällaistakin, aikaisempaakin, alakohtaisiakin</li>
        <li>ADP: jälkeenkin, päällekin, ulkopuolellakin</li>
        <li>ADV: ensinnäkin, muutenkin, itsekin, todellakin, ennenkin, hyvinkin, vieläkin, joskin, nytkin, sielläkin</li>
        <li>AUX-Fin: onkin, olikin, olisikin, ovatkin, olenkin, Taidatkin, olekin, olivatkin, pitikin, jouduinkin</li>
        <li>AUX-Inf: pitääkin</li>
        <li>NOUN: jatkossakin, roskiksetki, tekstikin, vuosienkin, -nauhakin, 1970-luvullakin, Ajatuskin, CD-soitinkin, Jussikin, Juustokin</li>
        <li>NUM: yksikin, 3:ssakin, Yhdeksänkin, kymmenenkin, tuhanteenkin, yhtenäkin</li>
        <li>PRON: muitakin, minäkin, sekin, sitäkin, muidenkin, muukin, muutakin, muutkin, senkin, tämäkin</li>
        <li>PROPN: Aasiassakin, Jalmarillakin, Balillakin, Helsingissäkin, Jaakollakin, Jankin, Justuskin, Karriki, Klubillekin, Kopareidenkin</li>
        <li>SCONJ: vaikkakin, joskin</li>
        <li>VERB-Fin: tuleekin, haluaisinkin, jäikin, kuuluukin, menikin, menivätkin, tehtiinkin, teinkin, tekikin, Ihmettelenkin</li>
        <li>VERB-Inf: ajaakin, ajatellakin, kirotakin, lukeakin, nauraakin, ottaenkin, vaivautuakin</li>
        <li>VERB-Part: tehnytkin, ajatellutkin, halunnutkin, onnistunutkin, osallistuneillekin, tullutkin</li>
      </ul>
    </li>
    <li>Ko
      <ul>
        <li>ADJ: Vanhako, paperisenko</li>
        <li>ADV: paljonko, Näinkö, kauanko, Vieläkö, paljon, oikeastiko</li>
        <li>AUX-Fin: onko, eikö, oliko, olisiko, pitäisikö, olenko, voiko, oletko, voitko, Ovatko</li>
        <li>CCONJ: vaiko</li>
        <li>NOUN: Taruako, pulujako, talkkunapäätäkö</li>
        <li>PRON: montako, sinäkö, Monesko, Tässäkö</li>
        <li>PROPN: Porvoostako</li>
        <li>SCONJ: Ettäkö, josko</li>
        <li>VERB-Fin: onko, eikö, pystyykö, saadaanko, Muistatko, Osaako, Tuleeko, haluaisitko, haluanko, haluisit</li>
        <li>VERB-Inf: kannattaako, tunteako</li>
      </ul>
    </li>
    <li>Ko,S
      <ul>
        <li>ADV: Paljonks</li>
        <li>AUX-Fin: Olikos, Voiskos, eiks, eikös, onkos, onks</li>
        <li>VERB-Fin: onks</li>
      </ul>
    </li>
    <li>Pa
      <ul>
        <li>ADJ: korkeallepa</li>
        <li>ADV: vaikkapa, Entäpä, Niinpä, Siinäpä, Siispä, Tuskinpa, melkeinpä, siksipä</li>
        <li>AUX-Fin: olipa, eipä, onpa, Olisipa, Voisinpa, enpä, oletpa, olivatpa, taisipa</li>
        <li>AUX-Inf: saattaapa</li>
        <li>PRON: kukapa, Miltäpä, Sepä, Siinäpä, Sinäpä, mikäpä, minäpä</li>
        <li>VERB-Fin: Kysyipä, Kävivätpä, Lukekaapa, Luulenpa, Muistappas, Onpa, Osaanpa, Pelkäänpä, Pääsisimmepä, Selviänpä</li>
      </ul>
    </li>
    <li>Pa,S
      <ul>
        <li>ADV: kylläpäs</li>
        <li>AUX-Fin: Ollaas, onpas</li>
        <li>VERB-Fin: Arvaappas, Eipäs, Käydäänpäs, Onpas, alapas, kuulkaapas, näyttääpäs, olipas</li>
      </ul>
    </li>
    <li>S
      <ul>
        <li>ADV: kuinkas</li>
        <li>PRON: Kukas, Milläs, Mitäs, mikäs, siitäs</li>
        <li>VERB-Fin: kokeilkaas, Syös, kuules, pistäs</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Connegative</a>
  <ul>
    <li>Yes
      <ul>
        <li>AUX-Fin: ole, voi, olisi, voida, tarvitse, voisi, oo, olekaan, pitäisi, tarvitsisi</li>
        <li>VERB-Fin: saa, tiedä, ole, osaa, tule, halua, pidä, pysty, ymmärrä, kuulu</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Derivation</a>
  <ul>
    <li>Inen
      <ul>
        <li>ADJ: ensimmäinen, ensimmäisen, toisen, toinen, ensimmäistä, kyseisen, kansainvälisen, erityisen, entinen, entistä</li>
        <li>NOUN: Vihreähaalaristen</li>
      </ul>
    </li>
    <li>Inen,Vs
      <ul>
        <li>NOUN: tulevaisuudessa, ominaisuuksia, kokonaisuudessaan, ominaisuudet, tilaisuudessa, tilaisuuden, tilaisuus, tulevaisuuden, julkisuuteen, suvaitsevaisuuden</li>
      </ul>
    </li>
    <li>Ja
      <ul>
        <li>ADJ: aiemmilta</li>
        <li>NOUN: puheenjohtaja, opiskelijoiden, johtaja, toimitusjohtaja, tutkijat, puheenjohtajana, matkustajien, harjoittajan, harjoittajien, isännöitsijä</li>
      </ul>
    </li>
    <li>Ja,Tar
      <ul>
        <li>NOUN: kuulantyöntäjätär, rakastajatar, tanssijatar</li>
      </ul>
    </li>
    <li>Lainen
      <ul>
        <li>ADJ: suomalainen, sellainen, suomalaisen, erilaisia, sellaista, tällainen, sellaisena, sellaisen, sellaisten, yhdysvaltalainen</li>
        <li>NOUN: kansalaisten, suomalaiset, suomalaisten, kansalaiset, suomalaisista, kansalaisen, lukiolaiset, kansalaisille, ammattilaisten, kansalaisia</li>
        <li>PROPN: Karjalainen, Pohjalaiseen, Urpilainen</li>
      </ul>
    </li>
    <li>Lainen,Vs
      <ul>
        <li>NOUN: Oikeistolaisuuteen, alaisuuteen, erilaisuuden, francolaisuus, kansalaisuuden, kansalaisuudet, kansalaisuus, laaja-alaisuutta, siirtolaisuuden, tolstoilaisuudesta</li>
      </ul>
    </li>
    <li>Llinen
      <ul>
        <li>ADJ: mahdollista, kansalliset, kansallisten, alueellisen, kansallisia, suhteellisen, kansallisen, mahdollisia, virallisessa, kansallinen</li>
        <li>NOUN: pahvilaatikollista, paikallisia</li>
      </ul>
    </li>
    <li>Llinen,Vs
      <ul>
        <li>NOUN: mahdollisuus, mahdollisuuden, mahdollisuutta, mahdollisuuksia, mahdollisuudet, todellisuudessa, todellisuus, turvallisuuden, teollisuuden, mahdollisuuksien</li>
      </ul>
    </li>
    <li>Minen
      <ul>
        <li>ADJ: keraamiselle</li>
        <li>NOUN: muuttamisesta, soveltamista, tekemistä, liittymistä, soveltamisesta, kotouttamiseen, varmistamiseksi, perustamisen, soveltaminen, saaminen</li>
      </ul>
    </li>
    <li>Sti
      <ul>
        <li>ADV: erityisesti, mukaisesti, varmasti, nopeasti, helposti, selvästi, oikeasti, seuraavasti, huomattavasti, tietysti</li>
      </ul>
    </li>
    <li>Tar
      <ul>
        <li>NOUN: kuningatar, kaunotar, kuningattaren, herttuatar, kaunotarta, kaunottaria, kuningatarta, kuningattarien, paronitar, vapaaherratar</li>
      </ul>
    </li>
    <li>Ton
      <ul>
        <li>ADJ: välttämätöntä, mahdotonta, tavattoman, uskomatonta, vaivatonta, ehdottomaan, erottamaton, laittoman, maksuton, riippumaton</li>
        <li>NOUN: pitkäaikaistyöttömien, syyttömiä, tuntemattomille, työttömien, työttömät</li>
        <li>VERB-Part: asettelematonta, palamaton</li>
      </ul>
    </li>
    <li>Ton,Vs
      <ul>
        <li>NOUN: onnettomuus, onnettomuuden, koskemattomuutensa, lento-onnettomuus, onnettomuudessa, onnettomuudesta, onnettomuuksien, riippumattomuus, Levottomuudet, Levottomuuksien</li>
      </ul>
    </li>
    <li>Ttain
      <ul>
        <li>ADV: erittäin, nimittäin, vuosittain, osittain, päivittäin, hiljattain, äskettäin, ajoittain, asteittain, kuukausittain</li>
      </ul>
    </li>
    <li>U
      <ul>
        <li>NOUN: avulla, alussa, loppuun, keskustelua, alusta, apua, lopussa, kasvu, kasvua, lopulla</li>
      </ul>
    </li>
    <li>Vs
      <ul>
        <li>NOUN: yhteydessä, oikeus, oikeuden, osuus, yhteyttä, ihmisoikeuksien, terveyttä, ihmisoikeuksia, liikkuvuuden, oikeutta</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Foreign</a>
  <ul>
    <li>Yes
      <ul>
        <li>X: metal, common, death, a, and, be, fun, it, pic, DIY</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>InfForm</a>
  <ul>
    <li>1
      <ul>
        <li>AUX-Inf: olla, pitää, voidakseen, joutua, ollakseen, Ollaksesi, mahtaa, pitääkin, saattaapa, täytyä</li>
        <li>VERB-Inf: tehdä, saada, ottaa, käyttää, antaa, mennä, pitää, sanoa, olla, tulla</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>AUX-Inf: ollessa, ollen, ollessaan, ollessani, aikoen, olleessa, ollessamme</li>
        <li>VERB-Inf: kuluessa, tarvittaessa, ottaen, lukien, johtuen, noudattaen, liittyen, käyttäen, pitäen, riippuen</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX-Inf: olemaan, olemalla, olemassa, olemasta, olematta</li>
        <li>VERB-Inf: olemassa, tekemään, katsomaan, käyttämään, etsimään, hoitamaan, istumaan, opiskelemaan, ottamaan, puhumaan</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>PartForm</a>
  <ul>
    <li>Agt
      <ul>
        <li>AUX-Part: olemaan</li>
        <li>VERB-Part: johtama, edellyttämät, esittämä, tekemä, järjestämän, järjestämässä, olemassa, aiheuttamasta, antama, antamaa</li>
      </ul>
    </li>
    <li>Neg
      <ul>
        <li>VERB-Part: asettelematonta, hallitsemattomissa, kunnioittamattomasta, mainitsemattoman, maksamattomia, palamaton, pesimättömiä, tavoittamattomissa, ulottumattomissa</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX-Part: ollut, olleet, voinut, ollu, olleen, pitänyt, oltu, joutunut, saattanut, voinu</li>
        <li>VERB-Part: tehty, saanut, tullut, s., tehnyt, annettu, annetun, antanut, verrattuna, saatu</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX-Part: olevan, oltava, olevansa, olevani, voitava, voivan, voivansa, aikovansa, olevaan, olevalla</li>
        <li>VERB-Part: olevan, koskevan, koskevat, oleva, olevat, vastaava, koskevien, olevien, liittyviä, olevia</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Person[psor]</a>
  <ul>
    <li>1
      <ul>
        <li>ADJ: kaltaiseni, ikäiseni, Minunlaiseni, omani, omiani, omieni, omistani, parhaamme, parhaani, tosissamme</li>
        <li>ADP: puolestani, kanssa, taakse, takiani, viereemme, vierelleni</li>
        <li>ADV: mukanani, pahoillani, edessämme, keskuudessamme, onnekseni, ympärilleni, edessäni, sisälläni, Vastaani, Ylleni</li>
        <li>AUX-Inf: ollessani, ollessamme, voidaksemme</li>
        <li>AUX-Part: olevani, olevinani, voivani</li>
        <li>NOUN: mielestäni, silmäni, joukkueemme, käteni, mieheni, mielestämme, ystäväni, pääni, elämäni, lapseni</li>
        <li>PRON: itseni, itseäni, itselleni, itsellemme, itseämme, toisiamme, itsemme, itsestäni, Itselläni, itseemme</li>
        <li>PROPN: Eurooppamme, Fantani, Saintillani</li>
        <li>VERB-Inf: käsittääkseni, saadakseni, Lähtiessäni, todetakseni, Kertoessani, Nähdäkseni, Painaessani, Puhuessani, Selatessani, Tavatessani</li>
        <li>VERB-Part: päästyäni, esittämistämme, laatimamme, ostamaani, saamani, saavani, tekeväni, tuntemani, Jätettyämme, Kerrottuani</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>ADJ: omiasi</li>
        <li>ADP: kanssas, kanssasi, luokses, vierellänne</li>
        <li>ADV: kanssanne, vieressäsi, Kanssasi, tosissasi, vierestäsi, yllesi, ympärillesi</li>
        <li>AUX-Inf: Ollaksesi</li>
        <li>AUX-Part: olevanne, voivasi</li>
        <li>NOUN: sydämesi, autosi, isäsi, mielestänne, rahasi, Hihasi, Kulutustottumuksesi, Kuvatekstinne, Patjasi, Reitesi</li>
        <li>PRON: itsesi, itsestäsi, itseäsi, toisianne, toisistanne, toistenne</li>
        <li>PROPN: Lassesi, iPodistasi</li>
        <li>VERB-Inf: halutessasi, kadotaksesi, kysyessäsi, saadaksesi, suorittaessasi, tarkistaaksesi</li>
        <li>VERB-Part: haluamallasi, etsiväsi, kuvaamallasi, käsiteltäväksenne, lainaamasi, mainitsemanne, olevasi, paloittelemasi, saamienne, tuntevasi</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>ADJ: sellaisenaan, omakseen, alimmillaan, omansa, alimmilleen, edustavimmillaan, enimmillään, entisensä, ihanimmillaan, mieleisensä</li>
        <li>ADP: mukaansa, kanssaan, viereensä, mukanaan, luokseen, tilalleen, ympärilleen, edessään, eteensä, hallussaan</li>
        <li>ADV: mukanaan, ympärilleen, alleen, hallussaan, mukaansa, taakseen, edessään, puoleensa, yllään, yltään</li>
        <li>AUX-Inf: ollessaan, voidakseen, ollakseen</li>
        <li>AUX-Part: olevansa, voivansa, aikovansa, olevinaan</li>
        <li>NOUN: silmänsä, alkunsa, isänsä, uransa, elämänsä, kokonaisuudessaan, maansa, mielestään, aikanaan, nimeltään</li>
        <li>PRON: itsensä, itselleen, itseään, toisiaan, toisiinsa, toistensa, toisistaan, itsestään, toisensa, itseensä</li>
        <li>PROPN: Citroeninsa, Jumalaansa, bajamajoineen</li>
        <li>VERB-Inf: saadakseen, halutessaan, miettiessään, saapuessaan, varmistaakseen, hoitaessaan, kuullessaan, sopiessaan, avatessaan, esitellessään</li>
        <li>VERB-Part: saatuaan, kuultuaan, päästyään, haluamansa, nähneensä, saamansa, Valmistuttuaan, antamassaan, haluamaansa, haluavansa</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Style</a>
  <ul>
    <li>Arch
      <ul>
        <li>ADJ: Wanhan</li>
        <li>NOUN: pääskysein</li>
        <li>VERB-Inf: tuta</li>
      </ul>
    </li>
    <li>Coll
      <ul>
        <li>ADJ: sellanen, oikee, ekasta, sellasia, sellasii, sellasta, semmosia, Mimmonen, Punanen, Törkeet</li>
        <li>ADP: kans, kaa, kanssas, jälkee, kanssa, luokses, luom, taakse</li>
        <li>ADV: sit, ni, just, niinku, nii, sitte, sillon, ku, siks, paljo</li>
        <li>AUX-Fin: on, ei, oli, oo, oon, olis, vois, ois, oisin, ollaan</li>
        <li>AUX-Part: ollu, voinu, oltu, ollut, olluj, pitäny, voitu</li>
        <li>CCONJ: mut, ku, niinku</li>
        <li>INTJ: tota, Kamooon, vittuu</li>
        <li>NOUN: ajas, alakerras, daideilijaa, kauppaa, kelloo, nurtsi, roskiksetki, stevarin, tilan, veres</li>
        <li>NUM: yks, kaks, kahteenkyt, kakssattoo, kolmee, viis</li>
        <li>PRON: mä, mun, sä, tää, mua, mulla, sun, mulle, jotku, musta</li>
        <li>PROPN: Ailii, Eve, Hiakal, Improssa, Karriki, Mollaa, Paavokaa, Runkuks, Stiletiks, Stilsuks</li>
        <li>SCONJ: et, ku, ett, nii, kun, niinku, vaikk, Mut, Vaik, enneku</li>
        <li>VERB-Fin: emmä, sano, tajuu, tuu, alko, eikä, nähtiin, alkoi, lähdettiin, mee</li>
        <li>VERB-Inf: lukee, riehuu, sanoo, alottaa, ettii, haiseen, hakkaa, hakkaan, hengaan, hoitaa</li>
        <li>VERB-Part: saanu, tienny, halunnu, kerenny, löytyny, ollu, pyrkiny, päässy, aidannu, alkanu</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Typo</a>
  <ul>
    <li>Yes
      <ul>
        <li>ADJ: ei, musta, Kolmanenta, Suositeltaava, Uusseelantilaisen, asiaankuluvaa, brasílialaisessa, englantilaisella, erilaista, erillaisia</li>
        <li>ADP: kesken., sekaan.</li>
        <li>ADV: Tällöinen, Vai, Yht’, eihan, ellä, enmmän, ensi, imi, kiinnit, kokonaan.</li>
        <li>AUX-Fin: ai, eivat, eivät, lie, olisi, ovat, voisivat</li>
        <li>AUX-Inf: olleessa</li>
        <li>AUX-Part: olevaan, olut</li>
        <li>CCONJ: jokö, van</li>
        <li>INTJ: joo.</li>
        <li>NOUN: version, 1dl, 200mm, MUUTTOLIIKEIDEN, lypsy-ja, n.1, -näppäimesta, -sossupummit, 11.krenatöörirykmentin, 1kpl</li>
        <li>NUM: kahden, miljoona</li>
        <li>PRON: minun, sen, Hedän, Kumpikin, Saman, Tosilla, Tämä, erääseen, johon, jonka</li>
        <li>PROPN: Pekkka, -Maks, Begia, Carnegiein, EMN, Guinnesiin, Guinnesin, Hohenstaufen, Isoa-Britanniaan, Japani</li>
        <li>PUNCT: ..</li>
        <li>VERB-Fin: vaikkeivat, Lisä, Leikkkaa, Tidän, ajautuu, asun, eroittui, halun, häiritsevän, irroittaa</li>
        <li>VERB-Inf: arvoimaan, epälläkseni, irroittautumaan, kaahamaan, kulkeman, kuumenemaaan, kuunnellessa, laittamalle, läsnäollessa, nousteessa</li>
        <li>VERB-Part: Itsetehdyt, Paistetu, Viimeksimainittu, ajatunut, hallinoiman, hallisemalle, haluamallasi, herättäva, hyökkäävään, järjestämään</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: olla, olla#minä.</li>
<li>This corpus uses 13 lemmas as auxiliaries (<a>aux</a>). Examples: ei, olla, voida, pitää, saattaa, täytyä, joutua, aikoa, taitaa, tarvita, mahtaa, että#ei, jos#ei.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: olla, voida.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Ela (1)</li>
      <li>VERB-Fin--NOUN-Gen (27)</li>
      <li>VERB-Fin--NOUN-Ill (1)</li>
      <li>VERB-Fin--NOUN-Ins (1)</li>
      <li>VERB-Fin--NOUN-Nom (4126)</li>
      <li>VERB-Fin--NOUN-Par (388)</li>
      <li>VERB-Fin--PRON-Gen (5)</li>
      <li>VERB-Fin--PRON-Nom (2128)</li>
      <li>VERB-Fin--PRON-Par (52)</li>
      <li>VERB-Inf--NOUN-Gen (230)</li>
      <li>VERB-Inf--NOUN-Ins (1)</li>
      <li>VERB-Inf--NOUN-Nom (338)</li>
      <li>VERB-Inf--NOUN-Par (104)</li>
      <li>VERB-Inf--PRON-Acc (29)</li>
      <li>VERB-Inf--PRON-Gen (136)</li>
      <li>VERB-Inf--PRON-Nom (154)</li>
      <li>VERB-Inf--PRON-Par (32)</li>
      <li>VERB-Part--NOUN-Gen (446)</li>
      <li>VERB-Part--NOUN-Ins (1)</li>
      <li>VERB-Part--NOUN-Nom (651)</li>
      <li>VERB-Part--NOUN-Par (99)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Gen (152)</li>
      <li>VERB-Part--PRON-Nom (329)</li>
      <li>VERB-Part--PRON-Par (15)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Ela (2)</li>
      <li>VERB-Fin--NOUN-Gen (1200)</li>
      <li>VERB-Fin--NOUN-Ill (3)</li>
      <li>VERB-Fin--NOUN-Ins (1)</li>
      <li>VERB-Fin--NOUN-Nom (1075)</li>
      <li>VERB-Fin--NOUN-Par (2450)</li>
      <li>VERB-Fin--PRON-Acc (91)</li>
      <li>VERB-Fin--PRON-All (1)</li>
      <li>VERB-Fin--PRON-Gen (200)</li>
      <li>VERB-Fin--PRON-Nom (145)</li>
      <li>VERB-Fin--PRON-Par (563)</li>
      <li>VERB-Inf--NOUN-Ela (1)</li>
      <li>VERB-Inf--NOUN-Gen (329)</li>
      <li>VERB-Inf--NOUN-Ill (1)</li>
      <li>VERB-Inf--NOUN-Nom (504)</li>
      <li>VERB-Inf--NOUN-Par (1461)</li>
      <li>VERB-Inf--PRON-Acc (12)</li>
      <li>VERB-Inf--PRON-Gen (63)</li>
      <li>VERB-Inf--PRON-Nom (65)</li>
      <li>VERB-Inf--PRON-Par (285)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Ela (1)</li>
      <li>VERB-Part--NOUN-Gen (336)</li>
      <li>VERB-Part--NOUN-Nom (498)</li>
      <li>VERB-Part--NOUN-Par (1112)</li>
      <li>VERB-Part--PRON-Acc (17)</li>
      <li>VERB-Part--PRON-Gen (45)</li>
      <li>VERB-Part--PRON-Nom (79)</li>
      <li>VERB-Part--PRON-Par (164)</li>
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
  <li>This corpus contains 69 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: kokea itsensä, tuntea itseni, tuntea itsensä, esitellä itsensä, katsoa itseäni, kuivata itseni, , itseni, ajaa itsensä, altistaa itsensä, ampua itsensä, auttaa itseämme, elättää itsensä, etsiminen itseni, etsiä itseään, hillitä itseäni, hoitaa itseään, huiputtaa itsensä, huolitella itsemme, hyväksyä itsesi, hävetä itseäni, ilmaista itseään, juoda itsensä, kadottaa itseni, kammeta itsensä, kaupata itseään, kehittää itseään, kirjoituttaa itsensä, kirota itseään, kohdella itseään, kuivata itseään, kuivatella itsensä, kunnioittaa itseään, kuunnella itseäni, laukata itsensä, lohduttaa itseäni, lyödä itsensä, löytäminen itseni, löytää itseni, myyminen itsensäkin, määritellä itsenikin, nipistää itseään, nähdä itseni, odottaa itseään, orjuuttaa itseämme, osoittaa itseään, paikallistaa itsensä, piristää itseään, pitää itseäni, pitää itseään, psyykata itseni</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 14 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:nn</a>, <a>compound:prt</a>, <a>cop:own</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:gobj</a>, <a>nmod:gsubj</a>, <a>nmod:poss</a>, <a>nsubj:cop</a>, <a>xcomp:ds</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
