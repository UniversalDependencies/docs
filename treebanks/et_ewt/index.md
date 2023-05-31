---
layout: base
title:  'UD_Estonian-EWT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Estonian EWT

Language: [Estonian](/et/index.html) (code: `et`)<br/>
Family: Uralic, Finnic

This treebank has been part of Universal Dependencies since the UD v2.4 release.

The following people have contributed to making this treebank part of UD: Kadri Muischnek, Kaili Müürisep, Tiina Puolakainen, Dage Särg, Sandra Eiche, Andriela Rääbis.

Repository: [UD_Estonian-EWT](https://github.com/UniversalDependencies/UD_Estonian-EWT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udet_ewt212)<br />
Download all treebanks: [UD 2.12](/#download)

License: CC BY-NC-SA 4.0

Genre: blog, web, social

Questions, comments?
General annotation questions (either Estonian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Estonian-EWT/issues).
If you want to collaborate, please contact [kadri&nbsp;•&nbsp;muischnek&nbsp;(æt)&nbsp;ut&nbsp;•&nbsp;ee, kaili&nbsp;•&nbsp;muurisep&nbsp;(æt)&nbsp;ut&nbsp;•&nbsp;ee].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually in non-UD style, automatically converted to UD |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

UD EWT treebank consists of different genres of new media. The treebank contains 7,190 trees, 90,608 tokens.




Estonian Web Treebank UD v2.12 consists of four parts. Its older part (1,662 trees, v2.4) is a converted version of the Estonian Web Treebank (EWT), originally annotated in the Constraint Grammar (CG) annotation scheme, and consisting of different genres of new media.
The second part (1,495 trees, v2.6) consists of internet forum texts and has been annotated using [Stanza parser](https://stanfordnlp.github.io/stanza/), followed by manual post-editing.
The third part (v2.8) has been annnotated in the same way. It consists of users' feedbacks to news about Covid19 pandemic in 2020-2021 (~12,725 tokens).
The fourth part consists of different forum texts (reddit, military, gardening, cars). In addition to standard ud annotation, annotation of named entiites has been added to MISC-field (NE=B-Type or NE=I-Type, there TYPE stands for PER (person), ORG (organisation), LOC (location), GEP (geopolitical name), EVENT (events), PROD (product), MUU (other) or UNK (unknown)).

The treebank consists of 6,190 trees, 90,608 tokens. As for enhanced dependencies, the empty nodes for missing predicates have been added, and the relative pronoun is attached to its antecedent with the relation 'ref' but there are no other types of enhanced dependencies in this version.

The treebank has been divided to train, test and dev parts as 67,431; 13,153 and 10,002 tokens respectively.

The treebank covers unedited new media texts.


## Acknowledgments

We wish to thank developers of [Udapi](http://udapi.github.io/), [UD Annotatrix](https://github.com/jonorthwash/ud-annotatrix), and [ConlluEditor](https://github.com/Orange-OpenSource/conllueditor) tools.

This work was financed by the [National Programme for Estonian Language Technology](https://www.keeletehnoloogia.ee/en?set_language=en) and Estonian Ministery of Education and Research (grant 20-56 IUT20-56 "Computational models for Estonian").


# Statistics of UD Estonian EWT

## POS Tags

[ADJ](et_ewt-pos-ADJ.html) – [ADP](et_ewt-pos-ADP.html) – [ADV](et_ewt-pos-ADV.html) – [AUX](et_ewt-pos-AUX.html) – [CCONJ](et_ewt-pos-CCONJ.html) – [DET](et_ewt-pos-DET.html) – [INTJ](et_ewt-pos-INTJ.html) – [NOUN](et_ewt-pos-NOUN.html) – [NUM](et_ewt-pos-NUM.html) – [PRON](et_ewt-pos-PRON.html) – [PROPN](et_ewt-pos-PROPN.html) – [PUNCT](et_ewt-pos-PUNCT.html) – [SCONJ](et_ewt-pos-SCONJ.html) – [SYM](et_ewt-pos-SYM.html) – [VERB](et_ewt-pos-VERB.html) – [X](et_ewt-pos-X.html)

## Features

[Abbr](et_ewt-feat-Abbr.html) – [AdpType](et_ewt-feat-AdpType.html) – [Case](et_ewt-feat-Case.html) – [Connegative](et_ewt-feat-Connegative.html) – [Degree](et_ewt-feat-Degree.html) – [Foreign](et_ewt-feat-Foreign.html) – [Hyph](et_ewt-feat-Hyph.html) – [Mood](et_ewt-feat-Mood.html) – [Number](et_ewt-feat-Number.html) – [NumForm](et_ewt-feat-NumForm.html) – [NumType](et_ewt-feat-NumType.html) – [Person](et_ewt-feat-Person.html) – [Polarity](et_ewt-feat-Polarity.html) – [Poss](et_ewt-feat-Poss.html) – [PronType](et_ewt-feat-PronType.html) – [Reflex](et_ewt-feat-Reflex.html) – [Style](et_ewt-feat-Style.html) – [Tense](et_ewt-feat-Tense.html) – [Typo](et_ewt-feat-Typo.html) – [VerbForm](et_ewt-feat-VerbForm.html) – [Voice](et_ewt-feat-Voice.html)

## Relations

[acl](et_ewt-dep-acl.html) – [acl:relcl](et_ewt-dep-acl-relcl.html) – [advcl](et_ewt-dep-advcl.html) – [advmod](et_ewt-dep-advmod.html) – [amod](et_ewt-dep-amod.html) – [appos](et_ewt-dep-appos.html) – [aux](et_ewt-dep-aux.html) – [case](et_ewt-dep-case.html) – [cc](et_ewt-dep-cc.html) – [cc:preconj](et_ewt-dep-cc-preconj.html) – [ccomp](et_ewt-dep-ccomp.html) – [compound](et_ewt-dep-compound.html) – [compound:prt](et_ewt-dep-compound-prt.html) – [conj](et_ewt-dep-conj.html) – [cop](et_ewt-dep-cop.html) – [csubj](et_ewt-dep-csubj.html) – [csubj:cop](et_ewt-dep-csubj-cop.html) – [dep](et_ewt-dep-dep.html) – [det](et_ewt-dep-det.html) – [discourse](et_ewt-dep-discourse.html) – [fixed](et_ewt-dep-fixed.html) – [flat](et_ewt-dep-flat.html) – [flat:foreign](et_ewt-dep-flat-foreign.html) – [goeswith](et_ewt-dep-goeswith.html) – [list](et_ewt-dep-list.html) – [mark](et_ewt-dep-mark.html) – [nmod](et_ewt-dep-nmod.html) – [nsubj](et_ewt-dep-nsubj.html) – [nsubj:cop](et_ewt-dep-nsubj-cop.html) – [nummod](et_ewt-dep-nummod.html) – [obj](et_ewt-dep-obj.html) – [obl](et_ewt-dep-obl.html) – [orphan](et_ewt-dep-orphan.html) – [parataxis](et_ewt-dep-parataxis.html) – [punct](et_ewt-dep-punct.html) – [reparandum](et_ewt-dep-reparandum.html) – [root](et_ewt-dep-root.html) – [vocative](et_ewt-dep-vocative.html) – [xcomp](et_ewt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 7190 sentences and 90586 tokens.</li>
</ul>

<ul>
<li>This corpus contains 14463 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 2 types of words with spaces. Examples: 14 000, 20 000</li>
</ul>

<ul>
<li>This corpus contains 627 types of words that contain both letters and punctuation. Examples: :d, a., võib-olla, :s, paha-paha, Coq'i, e., nn., l/ha, nt., |-X-|, :lol:, covid-19, E-330, sape.ru, PC_man, T-72, e-teenindusse, ja-le, km/h, :P, :o, @ausalt, A.Le, B., BMW-d, F.a.Q, R-mees, eelmine-q-le, inc., jms., jne., kl., m-parkimine, n., tie-break’i, /me, 2-ga, 2009-suvel, 7-seeria, 9-nda, ;D, @arvan, @eleonore, Coq-i, Dr.x, EKV-le, Google’i, I-M13, ITF-i</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 56 lemmas tagged as pronouns (PRON): enda, iga, iga_sugune, iga_üks, igaüks, ise, ise_enese, ise_sugune, ja_veel_üks, kedagi-midagi, keegi, kes, kes_se, kolmas, kumb, kumbki, kõige, kõigest, kõik, ma_i, mina, mingi, mingi_sugune, mis, miski, mitme_sugune, mitte_keegi, mitte_miski, mitu, muu, mõlema, mõni, need, nii_palju, nii_sugune, oma, palju, sama, see, see_sama, selline, sest, sina, tegelt, teine, teine_teise, teist_sugune, tema, temake, too, vot, üht-teist, üks, üks_teise, üksi, ükski</li>
</ul>

<ul>
<li>This corpus contains 46 lemmas tagged as determiners (DET): 1, iga, iga_sugu, iga_sugune, iga_üks, igast, keegi, kogu, kõik, kõik_sugu, milline, mingi, mingi_sugune, mingine, minu_sugune, mis, mis_sugune, miske, miski, mitmes, mitu, mitu-mitu, muu, mõlema, mõni, mõningas, nii_sugune, palju, sama, sama_sugune, see, see_sama, see_sinane, selline, sihuke, sinu_sugune, siuke, säherdune, säärane, teine, teist_sugune, tema, terve, too, üks, ükski</li>
</ul>

<ul>
<li>Out of the above, 25 lemmas occurred sometimes as PRON and sometimes as DET: iga, iga_sugune, iga_üks, keegi, kõik, mingi, mingi_sugune, mis, miski, mitu, muu, mõlema, mõni, nii_sugune, palju, sama, see, see_sama, selline, teine, teist_sugune, tema, too, üks, ükski</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): ei, näima, olema, pidama, saama, tohtima, tunduma, võima, ära</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: näima, olema, pidama, saama, tohtima, tunduma, võima</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: olles</li>
    <li>VERB: võrreldes, arvates, vaadates, minnes, võttes, arvestades, kasutades, lugedes, ostes, pannes</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: on, pole, oli, oleks, ole, olen, võib, peaks, saab, võiks</li>
    <li>VERB: on, tuleb, saab, tea, läheb, pole, saa, tuli, läks, sain</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: olla, tunduda</li>
    <li>VERB: teha, saada, minna, teada, öelda, panna, osta, näha, võtta, kirjutada</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: huvitav, antud, teatud, erinevaid, ülejäänud, kasutatud, erinevate, tehtud, asetatud, karastatud</li>
    <li>AUX: olnud, võinud, pidanud, saanud, pinanud, v6inud</li>
    <li>NOUN: nakatunuid, surnuid, nakatunutest, nakatunut, nakatunu, nakatunust, nakatunute, surnu, surnut, Kirjapandu</li>
    <li>VERB: saanud, kuulnud, läinud, tulnud, pandud, tehtud, teinud, näinud, jäänud, antud</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>ADJ: Tegemata, harmoniseerimata, katmata, lahendamata, niitmata, ostmata, poolitamata, tasumata, tasustamata, treenimata</li>
    <li>AUX: olema, olemagi, olemaks, saama</li>
    <li>VERB: olemas, tegema, minema, hakkama, maksma, saama, rääkimata, mõtlema, ostma, tulema</li>
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
      <li>ADJ: head, vanad, erinevaid, suured, häid, uusi, erinevate, suurte, uued, mustad</li>
      <li>ADJ-Part: erinevaid, erinevate, erinevad, erinevatel, erinevatest, huvitavad, olevate, huvitavaid, langevad, arenevad</li>
      <li>AUX-Fin: on, olid, oleme, võivad, peavad, peaksid, võiksid, olete, oleksid, olime</li>
      <li>DET: need, kõik, neid, mingid, nende, mingeid, mõned, sellised, selliste, teised</li>
      <li>NOUN: inimesed, inimesi, asju, asjad, inimeste, autosid, teemad, naised, mehed, tulemused</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunutest, nakatunute, Tänud, haigestunuid, haigestunute, haigestunutest, hukkunute, lõpetanud</li>
      <li>NUM: tuhandeid, sadu, kümneid, pooled, miljarditest, 2-de, 3'si, 5'si, 5-si, kümnetes</li>
      <li>PRON: nad, kes, neid, meie, need, me, meil, mis, nende, kõik</li>
      <li>PROPN: pasid, Paside, Pasidega, sepapoisid, vasurite, Abramseid, Alekukke, Arstiteadusüliõpilaste, BTR-d, BTR-ide</li>
      <li>SYM: S3'med</li>
      <li>VERB-Fin: lähevad, on, saavad, tulevad, teevad, jäävad, teeme, elame, käivad, olid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: hea, suur, võimalik, õige, huvitav, parem, vana, uus, esimene, lihtne</li>
      <li>ADJ-Part: huvitav, leviv, mõeldav, olevast, vastav, vastava, elavana, erinev, hirmutav, huvitavaks</li>
      <li>AUX: on, oli, olen, võib, saab, peab, oled, ongi, sai, olin</li>
      <li>AUX-Fin: on, oli, olen, võib, saab, peab, oled, ongi, sai, olin</li>
      <li>DET: see, mingi, selle, seda, iga, üks, selline, sama, mingit, sellest</li>
      <li>NOUN: asi, aasta, teema, aru, auto, inimene, aastat, raha, aega, osa</li>
      <li>NOUN-Part: nakatunut, nakatunu, nakatunust, surnu, surnut, Kirjapandu, eeltoodu, haigestunut, kirjutatut, lahtiharutatuna</li>
      <li>NUM: kaks, paar, ühe, üks, kahe, kolm, miljonit, paari, miljoni, poole</li>
      <li>PRON: ma, see, mis, seda, oma, ta, sa, midagi, mida, kes</li>
      <li>PROPN: eesti, saku, eestis, Jumal, ViinaMuri, Neeme, tartu, d2xz, tallinna, vasur</li>
      <li>SYM: @, S3-el</li>
      <li>VERB-Fin: on, tuleb, saab, läheb, tuli, läks, sain, arvan, teeb, oli</li>
      <li>X: South</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abe
    <ul>
      <li>ADJ-Sup: Tegemata, harmoniseerimata, katmata, lahendamata, niitmata, ostmata, poolitamata, tasumata, tasustamata, treenimata</li>
      <li>NOUN: tasuta, põhjuseta, ERANDITA, Tulemusteta, abita, autota, graafikata, helita, internetita, kannatusteta</li>
      <li>PRON: selleta</li>
      <li>PROPN: Terviseametita</li>
      <li>VERB-Sup: rääkimata, teadmata, tegemata, olenemata, edutamata, lugemata, müümata, panemata, saamata, sõltumata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: haigetelt, kallimalt, lollidelt, milliselt, odavamalt, suuliselt, suurelt, tagumistelt, tähtajaliselt</li>
      <li>DET: k6igelt, mõnelt, nendelt, sellelt</li>
      <li>NOUN: maalt, tugevuselt, emalt, kohalt, puusalt, seisukohalt, suuruselt, taimedelt, teelt, Avamaalt</li>
      <li>NUM: 500ltgi, 700lt</li>
      <li>PRON: nendelt, endalt, mult, neilt, teilt, temalt, igalt, kellelt, minult, muult</li>
      <li>PROPN: Venemaalt, Saksamaalt, Sakult, Airilt, Allisonilt, Krossilt, Lasnamäelt, Maalt, Taanilt, harjumaalt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Add
    <ul>
      <li>ADJ: Tehnilisse, ametlikku, järgmisse, karmi, kirjalikku, rohelisse, uude</li>
      <li>DET: teise</li>
      <li>NOUN: kooli, koju, kätte, meelde, aeda, pähe, korda, ellu, kirja, paika</li>
      <li>PRON: teise</li>
      <li>PROPN: Bin`i, Hast"`i, Kaagverre, Kuressaarde, Lätti, Virru, corvette'i, reaali, soccerneti, westholmi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ade
    <ul>
      <li>ADJ: viimasel, eelmisel, järgmisel, erinevatel, esimesel, heal, praegusel, õigel, parimal, headel</li>
      <li>ADJ-Part: erinevatel, saadaval, Tuleval, huvitaval, käesoleval, piisaval, seisval, t2navatel, toitval, tungival</li>
      <li>DET: igal, sel, sellel, mingil, samal, sellisel, ühel, kõigil, mõnel, mitmel</li>
      <li>NOUN: hetkel, ajal, juhul, aastal, teemal, kevadel, suvel, hommikul, inimestel, päeval</li>
      <li>NUM: kahel, 2-l, kolmel, neljal, paaril</li>
      <li>PRON: mul, meil, sul, tal, neil, endal, millel, kellel, minul, kel</li>
      <li>PROPN: saaremaal, Saksamaal, Eestil, Larkol, Maal, Openil, Venemaal, Zoppil, coq'il, sakul</li>
      <li>SYM: S3-el</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>ADJ: teisele, eelnevale, heale, sügavamale, uutele, vanusele, õigele, 10, 5-ndale, 700</li>
      <li>ADJ-Part: eelnevale, hoolitsevale, liikuvale, mõtlevale, mööduvatele, rünnatavatele, tegevatele, toimuvale, vajavale</li>
      <li>DET: sellele, mingile, igale, nendele, sellisele, kõigile, mingitele, muule, sellistele, ühele</li>
      <li>NOUN: tööle, inimestele, lehele, teele, kohale, inimesele, peole, asjale, hobusele, koolile</li>
      <li>NUM: 1-le, 2-3le, 3-le, 40'le, 700'le, kahele</li>
      <li>PRON: mulle, endale, talle, neile, sellele, sulle, meile, kõigile, kellele, omale</li>
      <li>PROPN: eestile, ja-le, Maale, Suvatüübile, eelmine-q-le, saaremaale, EKV-le, Ivanovile, Leelotajale, Marsile</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: eelnevatega, enesekindlatega, koroonapositiivsega, rohkemaga, seitsmesajasega, sõjalisega, täiega, vanaga, viiestega</li>
      <li>ADJ-Part: eelnevatega</li>
      <li>NOUN: teemaga, lamelliga, auhinnafondiga, autoga, hinnaga, kiirusega, mullaga, aastaga, koroonaga, lamellidega</li>
      <li>NUM: 100ga, 2-ga, kümnega, 1-ga, 10k, 11-4ga, 2k, 50ga, 60.000-ga, 700ga</li>
      <li>PRON: sellega, millega, nendega, temaga, kellega, sinuga, meiega, minuga, teistega, omadega</li>
      <li>PROPN: Venemaaga, Jumalaga, Lugejaga, Malouliga, Pasidega, cobraga, porschega, roundupiga, Ajaga, Andersoniga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ela
    <ul>
      <li>ADJ: erinevatest, olevast, heast, keskmisest, millisest, viimasest, 300, konkreetsest, lahtisest, millistest</li>
      <li>ADJ-Part: erinevatest, olevast, Eelnevast, algavast, arvestatavatest, juhtivast, jõudvast, kavandatavast, kohutavast, pakkuvast</li>
      <li>DET: sellest, ühest, neist, igast, nendest, kõigist, mingist, mingitest, samast, kõigest</li>
      <li>NOUN: ajast, algusest, asjast, valgusest, koolist, teemast, aastast, klassist, koroonaviirusest, autodest</li>
      <li>NOUN-Part: nakatunutest, nakatunust, haigestunutest</li>
      <li>NUM: miljonist, kümnest, miljarditest, ühest, 100st, 110-st, 38-st, 400st, Sajast, kahest</li>
      <li>PRON: sellest, millest, neist, minust, meist, nendest, teistest, temast, teineteisest, endast</li>
      <li>PROPN: Hiinast, saksast, saxast, Eestist, Juryost, Scoutspataljonist, itaaliast, Ambassador'ist, Boccellist, Boltist</li>
      <li>VERB-Sup: olemast, elamast, jagamast, mõtlemast, ütlemast</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: esimesena, elavana, kolmandana, surnuna, teisena, jõuetuna, jõulisena, kõikvõimsana, looduslikena, lõigatuna</li>
      <li>ADJ-Part: elavana, surnuna, lõigatuna, pruugituna, sõnastatuna, vaadatuna, väsinuna</li>
      <li>NOUN: reeglina, Näitena, asjana, haigena, keelena, kiirmaksena, tervikuna, (laste)arstina, Kõrvalepõikena, Püsikasutajana</li>
      <li>NOUN-Part: lahtiharutatuna, saanuna, sõitnuna, väljalülitatuna</li>
      <li>PRON: sellisena, minuna, sellistena</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: suure, uue, hea, esimese, vana, viimase, eelmise, erinevate, korraliku, suurte</li>
      <li>ADJ-Part: erinevate, olevate, vastava, eelneva, erineva, huvitava, valitseva, Lälisevate, arvestatava, asetseva</li>
      <li>DET: selle, mingi, iga, sellise, ühe, mõne, nende, sama, selliste, teise</li>
      <li>NOUN: aasta, inimese, auto, teema, elu, inimeste, nime, viiruse, koha, päeva</li>
      <li>NOUN-Part: nakatunu, nakatunute, eeltoodu, haigestunute, hukkunute, nakatanute, sisserännanute, surnu, surnute, tarbitu</li>
      <li>NUM: ühe, kahe, paari, miljoni, poole, nelja, viie, kolmandiku, kolme, 11</li>
      <li>PRON: oma, minu, selle, meie, enda, nende, tema, mu, sinu, mille</li>
      <li>PROPN: eesti, saku, tallinna, tartu, Jumala, riigikogu, saaremaa, Coq'i, Hiina, Itaalia</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ill
    <ul>
      <li>ADJ: põlevasse, 10-ndasse, 10.ndasse, ebasoodsasse, hispaaniakeelsesse, järjekordsesse, kaesolevasse, kaugetesse, kostuvasse, kuumadesse</li>
      <li>ADJ-Part: põlevasse, kaesolevasse, kostuvasse, käsilolevasse, lugupidavasse, voolavasse, vähekäidavasse</li>
      <li>AUX-Sup: olema, olemagi, saama</li>
      <li>DET: samasse, sellesse, mõnda, neisse, Sellistesse, mingitesse, muudesse, sellisesse, teise, ühte</li>
      <li>NOUN: teemasse, sanyakusse, arvesse, kasvuhoonesse, arvutisse, koroonasse, peenrasse, kohtadesse, koondus-folderitesse, kuklasse</li>
      <li>NUM: 10ndasse</li>
      <li>PRON: endasse, millesse, sellesse, temasse, kellessegi, meisse, minusse, teise</li>
      <li>PROPN: eestisse, Torisse, C-sse, EMEX-sse, ERMi, Fabiasse, Google'isse, Gümnaasiumisse, Indiasse, Jaapanisse</li>
      <li>VERB-Sup: tegema, minema, hakkama, maksma, saama, mõtlema, ostma, tulema, kirjutama, kasvama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ine
    <ul>
      <li>ADJ: teises, esimeses, otseses, suures, heas, kasvavas, praeguses, uues, 9ndas, avalikes</li>
      <li>ADJ-Part: kasvavas, erinevates, esindavates, jõudvas, kandvas, liikuvas, nähtavas, olevates, sallivas, teatavas</li>
      <li>DET: selles, igas, teises, mingis, mõnes, ühes, mõlemas, samas, sellises, millises</li>
      <li>NOUN: koolis, ajas, kodus, maailmas, mõttes, elus, alguses, korras, käes, linnas</li>
      <li>NUM: 2's, kolmes, kümnetes, poole</li>
      <li>PRON: selles, milles, sinus, paljuski, omas, paljudes, endas, iseendas, meis, milleski</li>
      <li>PROPN: eestis, hiinas, tallinnas, euroopas, msnis, itaalias, tartus, msnnis, soomes, Indias</li>
      <li>VERB-Sup: olemas, kihutamas, tegemas, tulemas, lendamas, olema, aitamas, avastamas, hängimas, kasvamas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: hea, suur, võimalik, huvitav, õige, parem, uus, esimene, lihtne, tore</li>
      <li>ADJ-Part: huvitav, erinevad, huvitavad, leviv, mõeldav, vastav, erinev, hirmutav, langevad, nakkav</li>
      <li>DET: see, mingi, kõik, need, üks, selline, iga, teine, mis, sama</li>
      <li>NOUN: asi, inimesed, inimene, teema, mees, päev, auto, aeg, osa, aasta</li>
      <li>NOUN-Part: Kirjapandu, Tänud, läbipõdenu, lõpetanud, põdenud, surnu</li>
      <li>NUM: kaks, paar, üks, kolm, pool, viis, paarkümmend, pooled, 3, kaheksa</li>
      <li>PRON: ma, see, mis, kes, ta, sa, keegi, mina, nad, kõik</li>
      <li>PROPN: Jumal, ViinaMuri, Neeme, d2xz, vasur, Ennist, Pärtel, nomad, gasoline, saku</li>
      <li>SYM: @, S3'med</li>
      <li>X: South</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Par
    <ul>
      <li>ADJ: head, suurt, erinevaid, esimest, sellist, häid, uut, uusi, erilist, teist</li>
      <li>ADJ-Part: erinevaid, huvitavaid, huvitavat, õitsvat, olevaid, söödavaid, Püsivat, asuvaid, edasiliikuvat, edutatavaid</li>
      <li>DET: seda, mingit, neid, sellist, mingeid, mõnda, selliseid, kõiki, teisi, sama</li>
      <li>NOUN: aru, aastat, aega, inimesi, raha, korda, asju, asja, autot, inimest</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunut, surnut, haigestunuid, haigestunut, kirjutatut, solvunuid, tervenenuid</li>
      <li>NUM: miljardit, miljonit, tuhandeid, sadu, ühtegi, tuhat, ühte, kahte, kümneid, 3'si</li>
      <li>PRON: seda, midagi, mida, neid, mind, ennast, muud, sind, end, kõike</li>
      <li>PROPN: sakut, BMW-d, premiumit, Dimmut, Kalevipoega, Kulda, Vasurit, fordi, iisraeli, põmmi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ter
    <ul>
      <li>ADJ: 700, praeguseni</li>
      <li>DET: selleni</li>
      <li>NOUN: lõpuni, alguseni, kraadini, ajurakkudeni, eesmärgini, hetkeni, hommikuni, karantiini, keeluni, klaasini</li>
      <li>NUM: 160-ni, 5ni</li>
      <li>PRON: selleni, meieni, milleni, minuni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tra
    <ul>
      <li>ADJ: selgeks, järgmiseks, lolliks, suuremaks, terveks, huvitavaks, mustaks, niiskeks, pikemaks, puhtaks</li>
      <li>ADJ-Part: huvitavaks, huvipakkuvateks, iseseisvaks, kuuluvaks, kättesaadavaks, leitavaks, mitte-veateadet-väljastavaks, otsustavaks, poolkrõmpsuvaks, saadavaks</li>
      <li>AUX-Sup: olemaks</li>
      <li>DET: selleks, igaks, mingiks, igaksu, mingiteks, mõneks, samaks, yheks, üheks</li>
      <li>NOUN: lisaks, abiks, ajaks, õnneks, lõpuks, juhuks, tõrjeks, aastaks, hetkeks, kaitseks</li>
      <li>NUM: üheks, 2-ks, kolmeks, pooleks</li>
      <li>PRON: selleks, omaks, millekski, samaks, Mõlemaks, tolleks, üheks</li>
      <li>PROPN: Kaitseks</li>
      <li>VERB-Sup: vältimaks, Parandamaks, näitamaks, nõustamakas, pakkumaks, varustamaks, väljendamaks</li>
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
      <li>ADJ: parem, suurem, lihtsam, raskem, paremad, hullem, kergem, parema, suurema, suuremaks</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: hea, suur, võimalik, õige, huvitav, head, vana, uus, valmis, lihtne</li>
      <li>ADJ-Part: huvitav, antud, teatud, erinevaid, ülejäänud, kasutatud, erinevate, tehtud, asetatud, karastatud</li>
      <li>ADJ-Sup: Tegemata, harmoniseerimata, katmata, lahendamata, niitmata, ostmata, poolitamata, tasumata, tasustamata, treenimata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: parim, parima, suurim, parimad, parimaid, parimate, Suurimad, enim, huvitavaim, ilusaima</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: mitte, ega</li>
      <li>AUX: ei, pole, ära, polnud, poleks, polegi, ple, mai, ärge, ärgu</li>
      <li>AUX-Fin: pole, ära, polnud, poleks, polegi, ple, ärge, ärgu, pold, poleksi</li>
      <li>CCONJ: ega</li>
      <li>PRON: mai</li>
      <li>VERB-Fin: pole, polegi, polnud, Pold, mõtle, plee, poleks, polnd, tea, teinud</li>
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
      <li>AUX-Fin: oleks, peaks, võiks, saaks, poleks, oleksin, peaksid, võiksid, tohiks, oleksid</li>
      <li>VERB-Fin: tahaks, tuleks, oleks, saaks, läheks, hakkaks, jääks, ütleks, annaks, teeks</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: ära, olgu, ole, ärge, olge, olgem, ärgu, 0le, Ärgem</li>
      <li>VERB-Fin: vaata, mine, mõtle, minge, tee, võta, proovi, kirjuta, ütle, kuule</li>
      <li>VERB-Inf: osta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: on, pole, oli, ole, olen, võib, saab, peab, saa, oled</li>
      <li>VERB-Fin: on, tuleb, saab, tea, läheb, pole, saa, tuli, läks, sain</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Qot
    <ul>
      <li>AUX-Fin: olevat, pidavat</li>
      <li>VERB-Fin: Räägitavat, andvat, hoidvat, mainivat, meeldivat, minevat, säilivat, tahetavat, tegevat</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: antud, teatud, ülejäänud, kasutatud, tehtud, asetatud, karastatud, mainitud, peidetud, seotud</li>
      <li>AUX-Fin: oli, olid, sai, olin, olnud, polnud, pidi, tundus, pidin, olime</li>
      <li>AUX-Part: olnud, võinud, pidanud, saanud, pinanud, v6inud</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunutest, nakatunut, nakatunu, nakatunust, nakatunute, surnu, surnut, Kirjapandu</li>
      <li>VERB-Fin: tuli, läks, sain, oli, ütles, sai, kirjutasin, jäi, panin, hakkas</li>
      <li>VERB-Part: saanud, kuulnud, läinud, tulnud, pandud, tehtud, teinud, näinud, jäänud, antud</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: huvitav, erinevaid, erinevate, erinevad, erinevatel, erinevatest, huvitavad, leviv, mõeldav, olevast</li>
      <li>AUX-Fin: on, pole, oleks, ole, olen, võib, peaks, saab, võiks, peab</li>
      <li>VERB-Fin: on, tuleb, saab, tea, läheb, pole, saa, arvan, ole, tahaks</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: huvitav, erinevaid, ülejäänud, erinevate, erinevad, tulnud, erinevatel, erinevatest, huvitavad, leviv</li>
      <li>ADJ-Sup: Tegemata, harmoniseerimata, katmata, lahendamata, niitmata, ostmata, poolitamata, tasumata, tasustamata, treenimata</li>
      <li>AUX: on, pole, oli, oleks, ole, olen, võib, peaks, saab, olema</li>
      <li>AUX-Fin: on, pole, oli, oleks, ole, olen, võib, peaks, saab, võiks</li>
      <li>AUX-Part: olnud, võinud, pidanud, saanud, pinanud, v6inud</li>
      <li>AUX-Sup: olema, olemagi, olemaks, saama</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunut, nakatunu, nakatunust, surnut, Tänud, haigestunuid, haigestunut, haigestunute</li>
      <li>VERB-Fin: on, tuleb, saab, tea, läheb, pole, saa, tuli, läks, sain</li>
      <li>VERB-Part: saanud, kuulnud, läinud, tulnud, teinud, näinud, jäänud, käinud, võtnud, jõudnud</li>
      <li>VERB-Sup: olemas, tegema, minema, hakkama, maksma, saama, rääkimata, mõtlema, ostma, tulema</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: antud, teatud, huvitav, kasutatud, tehtud, asetatud, karastatud, mainitud, peidetud, seotud</li>
      <li>NOUN-Part: nakatunutest, Kirjapandu, Nakatunuid, eeltoodu, haigestunutest, lahtiharutatuna, nakatunute, surnu, sõitnuna, tarbitu</li>
      <li>VERB-Fin: tehakse, hakatakse, tahetakse, öeldi, pandi, pannakse, saadakse, võeta, öeldakse, arvatakse</li>
      <li>VERB-Part: pandud, tehtud, antud, kirjutatud, lisatud, loodud, öeldud, mõeldud, keelatud, planeeritud</li>
      <li>VERB-Sup: kõrvaldatama, pandama</li>
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
      <li>ADJ: selline, sama, sellist, sellised, samad, samasugune, esimesele, niisugune, samasugused, samasugust</li>
      <li>DET: see, selle, seda, need, selline, sama, neid, sellest, sellist, teine</li>
      <li>PRON: see, seda, selle, neid, need, sellest, selles, sellega, nende, selleks</li>
      <li>PROPN: Sama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: mingisugust, millistes, mingisuguseid, mõnda, mõndagi, mõned, mõni, mõnigi</li>
      <li>DET: mingi, üks, mingit, ühe, mingid, mõne, mõni, mingeid, mõned, mitu</li>
      <li>PRON: midagi, keegi, muud, paljud, kellegi, kedagi, millegi, mõned, miski, üks</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADJ: milline, missugune, millise, millist, millistest</li>
      <li>DET: mis, millaised, millised, millises, missugune</li>
      <li>PRON: mis, kes, mida, mille, millest, kelle, milles, keda, millega, kellele</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADJ: omas</li>
      <li>PRON: ma, oma, ta, sa, mul, minu, mina, nad, meie, ise</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: teineteise, teineteisest, üksteise, üksteist, uksteisele, üksteisel, üksteisele</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADJ: milline, millise, milliseid, millisest, kumb, millised, millist, milliselt, millistele, millistest</li>
      <li>DET: millises, millist</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: kogu, kõik, iga, igal, igas, kõiki, igast, kõigil, kõigi, igale</li>
      <li>PRON: kõik, kõike, kõigile, kõigil, igal, kõige, mõlemad, kõigi, mõlemal, k6ik</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: 300, 700</li>
      <li>NUM: 2, 10, 3, 1, 100, kaks, paar, 4, ühe, üks</li>
      <li>PROPN: saku0007</li>
      <li>SYM: 011100110101010</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: poole, kolmandiku, pool, pooled, 3/4, kolmveerand, neljandik, pooleks</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: esimene, esimese, 3., esimest, 27., teine, teises, 1., 2., 29.</li>
      <li>NUM: 4., 9nda, 1., 10, 10ndasse, 11, 15., 18., 1998., 2.</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Range
    <ul>
      <li>NUM: 3-4, 15-20, 2-3, 4-6, 1-1,5, 13-15, 2-3le, 3-5, 5-6, 50-80</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: omas</li>
      <li>PRON: oma, omal, omale, omadega, omad, omaks, omast, omade, omadele, omaga</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: ise, enda, endale, ennast, end, endal, omale, endasse, enese, teineteise</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: olen, oleme, olin, pean, oleksin, pidin, võin, saan, olime, peame</li>
      <li>PRON: ma, mul, minu, mina, meie, me, meil, mulle, mu, mind</li>
      <li>VERB-Fin: sain, arvan, tean, lähen, kirjutasin, saan, panin, loodan, palun, usun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: oled, võid, ära, pead, olete, ole, saad, saate, ärge, oledki</li>
      <li>PRON: sa, sinu, sul, te, sina, sind, su, sulle, teie, teile</li>
      <li>VERB-Fin: saad, tead, teed, vaata, mine, tahad, mõtle, arvad, hakkad, minge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: on, oli, võib, saab, peab, olid, ongi, sai, pidi, võivad</li>
      <li>PRON: ta, nad, tema, talle, neile, nende, tal, teda, neil, nemad</li>
      <li>VERB-Fin: on, tuleb, saab, läheb, tuli, läks, teeb, oli, teab, jääb</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: nn, nn., prof., h., lp., orig.</li>
          <li>ADV: jne, vms, nt, jms, st, ca, jm, ntx, mh, imo</li>
          <li>CCONJ: e., a, e, vs</li>
          <li>INTJ: OK, PS, mdx, lol, wtf.</li>
          <li>NOUN: a, ATP, p, z, b, k, cm, km, l/ha, TT</li>
          <li>PROPN: le, a., YOU, |=X=|, BMW, rs1, usa, NATO, T-72, ekre</li>
          <li>SYM: %, &, CO2, TR-23, €, S3-el, i-</li>
          <li>VERB-Fin: Vt</li>
          <li>X: of, NB, ^, in, to, imo</li>
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
          <li>ADP: eest, kohta, jaoks, peale, pärast, puhul, all, järgi, vastu, juurde</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: üle, peale, enne, ilma, koos, pärast, läbi, kuni, tänu, mööda</li>
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
          <li>AUX: ole, saa, ei, olnud, pea, tohi, oleks, peaks, olegi, tohiks</li>
          <li>AUX-Fin: ole, saa, olnud, pea, tohi, oleks, peaks, olegi, tohiks, peagi</li>
          <li>VERB-Fin: tea, saa, ole, taha, usu, oska, tee, hakka, suuda, tule</li>
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
          <li>ADJ: brå, budget, high-end, chill, ultimagte</li>
          <li>ADV: ala, anyway, a'la, imo, ok, Logisch, a, bolshe, circa, h.ui</li>
          <li>INTJ: sorry, no, omg, HUI, Sry, Yep, bljääd, nolife, wtf, lol</li>
          <li>NOUN: offtopic, Covid, basho, ratio, sanyakusse, death, komusubi, point, COVID-19, Dear</li>
          <li>PROPN: on, My, music, ice, A, Energy, Enthusiasistic, Free, le, sape.ru</li>
          <li>X: to, my, the, from, opinion, or, smth, Suchen, You, about</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Hyph</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: ees-, keeramis-, raputamis-, PR-, ajakirjak-, e-, hobi-, karantiini, kirja-, kirjandus-</li>
          <li>PUNCT: ---, --</li>
          <li>SYM: i-</li>
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
          <li>ADJ: 3., 27., 1., 2., 29., 5., 8., 9., 15., 18.</li>
          <li>NUM: 2, 10, 3, 1, 100, 4, 20, 5, 15, 90</li>
          <li>PROPN: saku0007</li>
          <li>SYM: 011100110101010</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>ADJ: I, II, I-ne, II-st</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: esimene, esimese, esimest, teine, teises, teist, esimeses, esimesel, teisele, esimesed</li>
          <li>NUM: kaks, paar, ühe, üks, kahe, kolm, miljonit, paari, poole, miljardit</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Slng
        <ul>
          <li>ADV: aint, pohh, põmst, Pmst, Sitaks, nati, veits, imo</li>
          <li>NOUN: matat, Venkude, bemii, bena, dolbajoob, eequ, füssa, inime, jalkas, jopa-kollaga</li>
          <li>PROPN: bemmi, põmmi, sapikale, senale, Alekukke, Yugo, alekokki, bemari, bemm, bemme</li>
          <li>VERB-Fin: Ruulime, plekkab</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: 700, 300, k6va, lol, lyhike, vanat, 10, 1939, 3-se, 30</li>
          <li>ADJ-Part: jooduav, järgevad, kaesolevasse, katastatud, korrtaldatud, krõvisevaid, kõkuvaid, liikuvad, meristeermpaljundatud, pandu</li>
          <li>ADP: yle, est, jaosk, juure, kuures, mõõda, prst, pärast´, seos, ymber</li>
          <li>ADV: nyyd, yldse, yhes6naga, kyll, 2kki, Sellepräast, akki, j2rgi, k2tte, kindalsti</li>
          <li>AUX: ple, olex, vöib, 0le, 2ra, SAAKASI, e, olek, olrnudki, pinanud</li>
          <li>AUX-Fin: ple, olex, vöib, 0le, SAAKASI, olek, olrnudki, pn, pold, poleksi</li>
          <li>AUX-Part: pinanud, v6inud</li>
          <li>CCONJ: vòi, J, ag, jja, voi, vöi</li>
          <li>DET: yks, üksi, igaksu, k6igelt, k6iki, kogi, m6nes, m6ni, migni, millaised</li>
          <li>INTJ: aitähh, Aitah, Ooot, tralllaaaa, v2</li>
          <li>NOUN: miis, ühsikonna, Minupuhl, autut, bio, dushi, henerasvad, kvant, masinaehitus, medistsiinigeenius</li>
          <li>NUM: 10, 100, 1, 10k, 11, 2, 2k, 5, 81, 92</li>
          <li>PRON: k6ik, KÕIIK, Mede, asee, iga, igauks, kelle, kellelgil, koigega, kôik</li>
          <li>PROPN: eestis, saku, eleonore, ice, msnnis, tartus, Tsehhi, ale, delfi, pasid</li>
          <li>PUNCT: !!11, 8, ???+</li>
          <li>SCONJ: ehki, ku, magu, nigu, seszt, sis</li>
          <li>VERB-Conv: v6rreldes, l2htudes, oller, pääste</li>
          <li>VERB-Fin: kkeelas, n2itab, olex, saax, teind, yritas, Karanteerin, Pidivad, Pold, Täitan</li>
          <li>VERB-Inf: näitata, 6ppida, aidat, avaldadda, hakkata, heitada, k6ristada, komenteerida, kysida, n2ha</li>
          <li>VERB-Part: näind, arvand, eletatud, hakkanud, keritu, kuulnd, läind, m6elnd, mainiutd, mõenud</li>
          <li>VERB-Sup: olema, haippima, m6tlema, müüa, nõustamakas, panematta, paneme, põleema, sätima, tegutsema</li>
          <li>X: n6u</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: olema.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: ei, olema, pidama, võima, saama, ära, tunduma, tohtima, näima.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (11)</li>
      <li>VERB-Fin--NOUN-Nom (1509)</li>
      <li>VERB-Fin--NOUN-Par (243)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Nom (1715)</li>
      <li>VERB-Fin--PRON-Par (51)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Nom (75)</li>
      <li>VERB-Inf--NOUN-Par (6)</li>
      <li>VERB-Inf--PRON-Nom (86)</li>
      <li>VERB-Inf--PRON-Par (3)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Nom (123)</li>
      <li>VERB-Part--NOUN-Par (19)</li>
      <li>VERB-Part--PRON-Nom (183)</li>
      <li>VERB-Part--PRON-Par (5)</li>
      <li>VERB-Sup--NOUN (1)</li>
      <li>VERB-Sup--NOUN-Nom (60)</li>
      <li>VERB-Sup--NOUN-Par (2)</li>
      <li>VERB-Sup--PRON-Nom (60)</li>
      <li>VERB-Sup--PRON-Par (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Gen (6)</li>
      <li>VERB-Conv--NOUN-Nom (4)</li>
      <li>VERB-Conv--NOUN-Par (48)</li>
      <li>VERB-Conv--PRON-Nom (2)</li>
      <li>VERB-Conv--PRON-Par (7)</li>
      <li>VERB-Fin--NOUN (12)</li>
      <li>VERB-Fin--NOUN-Gen (354)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(üle) (1)</li>
      <li>VERB-Fin--NOUN-Nom (217)</li>
      <li>VERB-Fin--NOUN-Par (1045)</li>
      <li>VERB-Fin--NOUN-Par-ADP(mööda) (1)</li>
      <li>VERB-Fin--PRON-Gen (43)</li>
      <li>VERB-Fin--PRON-Nom (71)</li>
      <li>VERB-Fin--PRON-Par (476)</li>
      <li>VERB-Inf--NOUN (3)</li>
      <li>VERB-Inf--NOUN-Gen (69)</li>
      <li>VERB-Inf--NOUN-Nom (162)</li>
      <li>VERB-Inf--NOUN-Par (519)</li>
      <li>VERB-Inf--PRON-Gen (4)</li>
      <li>VERB-Inf--PRON-Nom (25)</li>
      <li>VERB-Inf--PRON-Par (237)</li>
      <li>VERB-Part--NOUN (4)</li>
      <li>VERB-Part--NOUN-Gen (51)</li>
      <li>VERB-Part--NOUN-Nom (122)</li>
      <li>VERB-Part--NOUN-Par (138)</li>
      <li>VERB-Part--PRON-Gen (7)</li>
      <li>VERB-Part--PRON-Nom (51)</li>
      <li>VERB-Part--PRON-Par (55)</li>
      <li>VERB-Sup--NOUN-Gen (27)</li>
      <li>VERB-Sup--NOUN-Nom (8)</li>
      <li>VERB-Sup--NOUN-Par (169)</li>
      <li>VERB-Sup--PRON-Gen (5)</li>
      <li>VERB-Sup--PRON-Nom (5)</li>
      <li>VERB-Sup--PRON-Par (52)</li>
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
  <li>This corpus contains 42 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: tundma ennast, tundma end, pidama ennast, tapma end, tegema end, hindama ennast, hõõruma ennast, ilmutama ennast, kahjustama iseennast, kaitsma ennast, koguma ennast, külima ennast, külvama ennast, laskma end, leidma ennast, liigitama ennast, logima ennast, lohutama end, lülitama ennast, nimetama end, nimetav end, närima ennast, panema ennast, parandama ennast, pidama end, pidav end, pistma ennast, puhastama end, päästma end, registreerima end, rivistama ennast, siduma end, sundima end, süüdistama ennast, tegema iseend, tervendama end, tutvustama ennast, vedama end, vedama ennast, väitma end, väljendama end, ärritama ennast</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>nsubj:cop</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>dislocated</a>, <a>clf</a></li>
</ul>
