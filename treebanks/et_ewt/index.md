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

The following people have contributed to making this treebank part of UD: Kadri Muischnek, Kaili Müürisep, Tiina Puolakainen, Dage Särg, Sandra Eiche.

Repository: [UD_Estonian-EWT](https://github.com/UniversalDependencies/UD_Estonian-EWT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udet_ewt210)<br />
Download all treebanks: [UD 2.10](/#download)

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

UD EWT treebank consists of different genres of new media. The treebank contains 5,863 trees, 72,778 tokens.




Estonian Web Treebank UD v2.10 consists of three parts. Its older part (1,662 trees, v2.4) is a converted version of the Estonian Web Treebank (EWT), originally annotated in the Constraint Grammar (CG) annotation scheme, and consisting of different genres of new media.
The second part (1,495 trees, v2.6) consists of internet forum texts and has been annotated using [Stanza parser](https://stanfordnlp.github.io/stanza/), followed by manual post-editing.
The third part (v2.8) has been annnotated in the same way. It consists of users' feedbacks to news about Covid19 pandemic in 2020-2021 (~12,725 tokens).

The treebank consists of 6,325 trees, 78,228 tokens. As for enhanced dependencies, the empty nodes for missing predicates have been added, and the relative pronoun is attached to its antecedent with the relation 'ref' but there are no other types of enhanced dependencies in this version.

The treebank has been divided to train, test and dev parts as 55,073; 13,153 and 10,002 tokens respectively.

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
<li>This corpus contains 6325 sentences and 78228 tokens.</li>
</ul>

<ul>
<li>This corpus contains 12435 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 2 types of words with spaces. Examples: 14 000, 20 000</li>
</ul>

<ul>
<li>This corpus contains 522 types of words that contain both letters and punctuation. Examples: :d, a., võib-olla, :s, paha-paha, Coq'i, nn., |-X-|, covid-19, e., E-330, nt., sape.ru, PC_man, e-teenindusse, ja-le, km/h, :P, :o, @ausalt, A.Le, B., BMW-d, F.a.Q, R-mees, eelmine-q-le, inc., jms., jne., kl., m-parkimine, tie-break’i, /me, 2-ga, 2009-suvel, 7-seeria, 9-nda, ;D, @arvan, @eleonore, Coq-i, Dr.x, Google’i, I-M13, ITF-i, L-K2, L-S, Petange’is, Põhja-Tallinna, Shadow_angel</li>
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
<li>This corpus contains 52 lemmas tagged as pronouns (PRON): enda, iga, iga_sugune, iga_üks, igaüks, ise, ise_enese, ise_sugune, ja_veel_üks, keegi, kes, kes_se, kolmas, kumb, kumbki, kõige, kõigest, kõik, ma_i, mina, mingi, mingi_sugune, mis, miski, mitme_sugune, mitte_keegi, mitte_miski, mitu, muu, mõlema, mõni, need, oma, palju, sama, see, see_sama, selline, sest, sina, tegelt, teine, teine_teise, teist_sugune, tema, temake, too, vot, üks, üks_teise, üksi, ükski</li>
</ul>

<ul>
<li>This corpus contains 42 lemmas tagged as determiners (DET): 1, iga, iga_sugu, iga_sugune, iga_üks, igast, keegi, kogu, kõik, kõik_sugu, milline, mingi, mingi_sugune, mingine, minu_sugune, mis, miski, mitmes, mitu, mitu-mitu, muu, mõlema, mõni, mõningas, nii_sugune, palju, sama, sama_sugune, see, see_sama, see_sinane, selline, sihuke, sinu_sugune, siuke, säherdune, teine, tema, terve, too, üks, ükski</li>
</ul>

<ul>
<li>Out of the above, 23 lemmas occurred sometimes as PRON and sometimes as DET: iga, iga_sugune, iga_üks, keegi, kõik, mingi, mingi_sugune, mis, miski, mitu, muu, mõlema, mõni, palju, sama, see, see_sama, selline, teine, tema, too, üks, ükski</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): ei, näima, olema, pidama, saama, tohtima, tunduma, võima, ära</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as AUX and sometimes as VERB: näima, olema, pidama, saama, tunduma, võima</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: olles</li>
    <li>VERB: võrreldes, arvates, minnes, võttes, vaadates, arvestades, kasutades, lugedes, pannes, öeldes</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: on, oli, pole, oleks, ole, olen, võib, peaks, peab, oled</li>
    <li>VERB: on, tuleb, saab, tea, läheb, tuli, saa, pole, läks, arvan</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: olla, tunduda</li>
    <li>VERB: teha, saada, minna, teada, öelda, näha, võtta, panna, kirjutada, hakata</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: huvitav, antud, teatud, erinevaid, ülejäänud, erinevate, tehtud, asetatud, karastatud, erinevad</li>
    <li>AUX: olnud, võinud, pidanud, saanud, pinanud, v6inud</li>
    <li>NOUN: nakatunuid, surnuid, nakatunutest, nakatunut, nakatunu, nakatunust, nakatunute, surnu, surnut, tänud</li>
    <li>VERB: saanud, kuulnud, tulnud, antud, teinud, käinud, läinud, pandud, tehtud, jäänud</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>ADJ: Tegemata, harmoniseerimata, lahendamata, niitmata, poolitamata, tasumata, tasustamata, treenimata, täpsustamata</li>
    <li>AUX: olema, olemagi, olemaks, saama</li>
    <li>VERB: olemas, tegema, hakkama, minema, saama, maksma, kirjutama, mõtlema, rääkimata, tulema</li>
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
      <li>ADJ: head, erinevaid, vanad, erinevate, häid, suurte, uusi, paremad, suured, usklikud</li>
      <li>ADJ-Part: erinevaid, erinevate, erinevad, erinevatest, huvitavad, huvitavaid, langevad, odavad, arenevad, liikuvad</li>
      <li>AUX-Fin: on, olid, oleme, peavad, võivad, peaksid, olete, võiksid, oleksid, peame</li>
      <li>DET: kõik, need, neid, mingid, nende, mõned, sellised, mingeid, teised, selliste</li>
      <li>NOUN: inimesed, inimesi, asju, asjad, inimeste, teemad, naised, tulemused, tulemusi, silmad</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunutest, nakatunute, tänud, haigestunuid, haigestunute, haigestunutest, hukkunute, lõpetanud</li>
      <li>NUM: tuhandeid, sadu, pooled, kümneid, miljarditest, 2-de, 3'si, 5'si, 5-si, kümnetes</li>
      <li>PRON: kes, nad, meie, need, me, neid, meil, mis, nende, te</li>
      <li>PROPN: sepapoisid, vasurite, Alekukke, Arstiteadusüliõpilaste, Dedicated, Eestimaalased, Fordidega, Gin-ide, Helmed, Hondad</li>
      <li>SYM: S3'med</li>
      <li>VERB-Fin: saavad, lähevad, on, teevad, tulevad, elame, jäävad, teeme, käivad, olid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: hea, huvitav, suur, õige, võimalik, parem, vana, esimene, tore, lihtne</li>
      <li>ADJ-Part: huvitav, odav, leviv, elavana, erinev, hirmutav, huvitavaks, kasvavas, nakkav, vastav</li>
      <li>AUX: on, oli, olen, võib, peab, oled, saab, ongi, sai, olin</li>
      <li>AUX-Fin: on, oli, olen, võib, peab, oled, saab, ongi, sai, olin</li>
      <li>CCONJ: aka</li>
      <li>DET: see, mingi, selle, seda, iga, selline, üks, mingit, sama, sellest</li>
      <li>INTJ: Oeh, buuu, hmm, nohjah</li>
      <li>NOUN: asi, aasta, aru, teema, inimene, aega, aastat, auto, raha, elu</li>
      <li>NOUN-Part: nakatunut, nakatunu, nakatunust, surnu, surnut, Kirjapandu, eeltoodu, haigestunut, kirjutatut, lahtiharutatuna</li>
      <li>NUM: 2, kaks, 3, 10, paar, ühe, üks, 100, kahe, 1</li>
      <li>PRON: ma, see, mis, seda, oma, ta, sa, midagi, mida, kes</li>
      <li>PROPN: eesti, saku, eestis, Jumal, d2xz, tartu, vasur, Tallinna, Ennist, Pärtel</li>
      <li>SYM: .-., M-st, S3-el</li>
      <li>VERB-Fin: on, tuleb, saab, läheb, tuli, läks, arvan, sain, teeb, ütles</li>
      <li>X: My, NOOOT, in</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abe
    <ul>
      <li>ADJ-Sup: Tegemata, harmoniseerimata, lahendamata, niitmata, poolitamata, tasumata, tasustamata, treenimata, täpsustamata</li>
      <li>NOUN: tasuta, põhjuseta, ERANDITA, Tulemusteta, abita, autota, graafikata, helita, internetita, kannatusteta</li>
      <li>PRON: selleta</li>
      <li>PROPN: Terviseametita</li>
      <li>VERB-Sup: rääkimata, tegemata, teadmata, edutamata, lugemata, olenemata, panemata, sõltumata, õppimata, alustamata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: lollidelt, milliselt, suuliselt, suurelt, tagumistelt, tähtajaliselt</li>
      <li>DET: k6igelt, mõnelt, nendelt, sellelt</li>
      <li>NOUN: maalt, tugevuselt, emalt, kohalt, puusalt, seisukohalt, suuruselt, teelt, Daamilt, Motorexilt</li>
      <li>NUM: 500ltgi, 700lt</li>
      <li>PRON: nendelt, endalt, mult, neilt, temalt, igalt, kellelt, minult, muult, sinult</li>
      <li>PROPN: Sakult, Airilt, Krossilt, Maalt, W9-lt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Add
    <ul>
      <li>ADJ: Tehnilisse, ametlikku, karmi, kirjalikku, rohelisse</li>
      <li>NOUN: kooli, koju, kätte, meelde, pähe, ellu, korda, kirja, paika, silma</li>
      <li>PRON: teise</li>
      <li>PROPN: Bin`i, Hast"`i, Kaagverre, Kuressaarde, Lätti, Virru, corvette'i, reaali, westholmi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ade
    <ul>
      <li>ADJ: viimasel, eelmisel, esimesel, praegusel, õigel, 29., järgmisel, 26., 3., headel</li>
      <li>ADJ-Part: saadaval, Tuleval, erinevatel, käesoleval, piisaval, seisval, t2navatel, toitval, tungival, äraootaval</li>
      <li>DET: igal, sellel, sel, samal, sellisel, mingil, ühel, kõigil, mitmel, mõlemal</li>
      <li>NOUN: hetkel, ajal, juhul, teemal, aastal, hommikul, sõnul, päeval, inimestel, tasemel</li>
      <li>NUM: kahel, 1, 100, 2-l, 2004, 28, kolmel, neljal, paaril</li>
      <li>PRON: mul, meil, sul, tal, neil, endal, kel, kellel, teil, minul</li>
      <li>PROPN: saaremaal, Saksamaal, Larkol, Maal, Openil, Venemaal, Zoppil, coq'il, sakul, vabakal</li>
      <li>SYM: S3-el</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>ADJ: teisele, eelnevale, heale, uutele, vanusele, õigele, 10, 5-ndale, 700, MoPa-nimelisele</li>
      <li>ADJ-Part: eelnevale, hoolitsevale, liikuvale, mõtlevale, mööduvatele, tegevatele, toimuvale, vajavale</li>
      <li>DET: sellele, mingile, nendele, igale, sellisele, kõigile, mingitele, sellistele, Neile, mingisugusele</li>
      <li>NOUN: tööle, inimestele, lehele, teele, kohale, peole, eelmine-q-le, hobusele, inimesele, koolile</li>
      <li>NUM: 1-le, 3-le, 40'le, 700'le, kahele</li>
      <li>PRON: mulle, endale, talle, sellele, sulle, meile, neile, kõigile, kellele, omale</li>
      <li>PROPN: ja-le, Maale, Suvatüübile, Ivanovile, Leelotajale, Marsile, eestile, saaremaale, senale, 350D-le</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: eelnevatega, enesekindlatega, koroonapositiivsega, rohkemaga, seitsmesajasega, sõjalisega, täiega, vanaga, viiestega</li>
      <li>ADJ-Part: eelnevatega</li>
      <li>NOUN: teemaga, lamelliga, auhinnafondiga, autoga, kiirusega, aastaga, hinnaga, koroonaga, lamellidega, mõttega</li>
      <li>NUM: 100ga, 2-ga, kümnega, 1-ga, 10k, 11-4ga, 2k, 50ga, 60.000-ga, 700ga</li>
      <li>PRON: sellega, millega, temaga, nendega, kellega, sinuga, meiega, minuga, teistega, omadega</li>
      <li>PROPN: Jumalaga, Lugejaga, Malouliga, Venemaaga, cobraga, porschega, Ajaga, Andersoniga, BMW'ga, BMW-ga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ela
    <ul>
      <li>ADJ: erinevatest, millisest, 300, heast, konkreetsest, lahtisest, millistest, olevast, suulisest, tavalisest</li>
      <li>ADJ-Part: erinevatest, olevast, algavast, arvestatavatest, juhtivast, jõudvast, kavandatavast, kohutavast, pakkuvast, planeeritavast</li>
      <li>DET: sellest, ühest, igast, nendest, neist, kõigist, mingist, mingitest, kõigest, samast</li>
      <li>NOUN: ajast, algusest, valgusest, asjast, koolist, teemast, aastast, klassist, koroonaviirusest, poest</li>
      <li>NOUN-Part: nakatunutest, nakatunust, haigestunutest</li>
      <li>NUM: miljonist, 99, miljarditest, ühest, 100st, 110-st, 38-st, 4, 400st, 50</li>
      <li>PRON: sellest, millest, neist, minust, meist, nendest, teineteisest, teistest, endast, muust</li>
      <li>PROPN: Hiinast, saxast, Eestist, Juryost, itaaliast, saksast, Ambassador'ist, Boccellist, Boltist, Coq-ist</li>
      <li>SYM: M-st</li>
      <li>VERB-Sup: olemast, elamast, jagamast, mõtlemast, ütlemast</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: esimesena, elavana, kolmandana, surnuna, teisena, jõuetuna, jõulisena, kõikvõimsana, lõigatuna, neljandana</li>
      <li>ADJ-Part: elavana, surnuna, lõigatuna, sõnastatuna, vaadatuna, väsinuna</li>
      <li>NOUN: Näitena, asjana, haigena, keelena, kiirmaksena, reeglina, (laste)arstina, Kõrvalepõikena, Püsikasutajana, armulaualeivana</li>
      <li>NOUN-Part: lahtiharutatuna, saanuna, sõitnuna, väljalülitatuna</li>
      <li>PRON: minuna, sellisena, sellistena</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: suure, uue, vana, viimase, esimese, hea, erinevate, eelmise, korraliku, suurte</li>
      <li>ADJ-Part: erinevate, vastava, eelneva, erineva, huvitava, olevate, valitseva, Lälisevate, arvestatava, asetseva</li>
      <li>DET: selle, mingi, iga, sellise, ühe, nende, sama, mõne, selliste, teise</li>
      <li>NOUN: aasta, inimese, teema, elu, inimeste, viiruse, auto, töö, maailma, toidu</li>
      <li>NOUN-Part: nakatunu, nakatunute, eeltoodu, haigestunute, hukkunute, nakatanute, sisserännanute, surnu, surnute, tarbitu</li>
      <li>NUM: ühe, kahe, 10, miljoni, paari, poole, 1, nelja, viie, 2</li>
      <li>PRON: oma, minu, selle, meie, enda, nende, mu, tema, sinu, mille</li>
      <li>PROPN: eesti, saku, Tallinna, tartu, Jumala, riigikogu, saaremaa, Coq'i, Hiina, Itaalia</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ill
    <ul>
      <li>ADJ: põlevasse, 10-ndasse, 10.ndasse, hispaaniakeelsesse, kaesolevasse, kostuvasse, käsilolevasse, lugupidavasse, parmeasse, praedusesse</li>
      <li>ADJ-Part: põlevasse, kaesolevasse, kostuvasse, käsilolevasse, lugupidavasse, voolavasse, vähekäidavasse</li>
      <li>AUX-Sup: olema, olemagi, saama</li>
      <li>DET: samasse, sellesse, mõnda, Sellistesse, mingitesse, muudesse, neisse, sellisesse, teise, ühte</li>
      <li>NOUN: arvesse, sanyakusse, arvutisse, teemasse, koroonasse, koondus-folderitesse, kuklasse, lennukisse, loengusse, maegashirasse</li>
      <li>NUM: 10ndasse</li>
      <li>PRON: endasse, millesse, temasse, kellessegi, meisse, minusse, sellesse, teise</li>
      <li>PROPN: eestisse, Torisse, C-sse, ERMi, Google'isse, Gümnaasiumisse, Indiasse, Jaapanisse, KUMUsse, Lõuna-Koreasse</li>
      <li>VERB-Sup: tegema, hakkama, minema, saama, maksma, kirjutama, mõtlema, tulema, käima, ostma</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ine
    <ul>
      <li>ADJ: teises, esimeses, kasvavas, otseses, praeguses, suures, uues, 9ndas, avalikes, avalikus</li>
      <li>ADJ-Part: kasvavas, erinevates, esindavates, jõudvas, kandvas, liikuvas, nähtavas, olevates, sallivas, teatavas</li>
      <li>DET: selles, igas, mingis, teises, ühes, mõlemas, mõnes, millises, muus, paljudes</li>
      <li>NOUN: koolis, ajas, kodus, elus, mõttes, maailmas, käes, alguses, linnas, tulevikus</li>
      <li>NUM: 2019, kolmes, kümnetes, poole</li>
      <li>PRON: selles, milles, sinus, omas, paljudes, paljuski, endas, iseendas, meis, milleski</li>
      <li>PROPN: eestis, hiinas, tallinnas, euroopas, msnis, itaalias, tartus, msnnis, soomes, Indias</li>
      <li>VERB-Sup: olemas, kihutamas, tegemas, tulemas, lendamas, olema, aitamas, hängimas, kasvamas, kommenteerimas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: hea, huvitav, suur, võimalik, õige, parem, esimene, tore, lihtne, selline</li>
      <li>ADJ-Part: huvitav, erinevad, odav, huvitavad, leviv, erinev, hirmutav, langevad, nakkav, odavad</li>
      <li>CCONJ: aka</li>
      <li>DET: see, mingi, kõik, need, selline, üks, iga, mis, teine, mingid</li>
      <li>INTJ: Oeh, buuu, hmm, nohjah</li>
      <li>NOUN: asi, inimesed, inimene, teema, mees, päev, aeg, aasta, auto, jumal</li>
      <li>NOUN-Part: tänud, Kirjapandu, läbipõdenu, lõpetanud, põdenud, surnu</li>
      <li>NUM: 2, kaks, paar, 3, üks, 10, 100, kolm, 5, 1</li>
      <li>PRON: ma, see, mis, kes, sa, ta, mina, keegi, kõik, nad</li>
      <li>PROPN: Jumal, d2xz, vasur, Ennist, Pärtel, nomad, gasoline, tussu, Zopp, dmx</li>
      <li>SYM: S3'med</li>
      <li>X: My, NOOOT, in</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Par
    <ul>
      <li>ADJ: suurt, esimest, head, erinevaid, sellist, uut, häid, erilist, uusi, keskmist</li>
      <li>ADJ-Part: erinevaid, huvitavaid, huvitavat, odavaid, edasiliikuvat, edutatavaid, ennetavaid, hindumuutvaid, järgnevaid, järgnevat</li>
      <li>DET: seda, mingit, neid, sellist, mingeid, mõnda, selliseid, kõiki, teisi, mitmeid</li>
      <li>NOUN: aru, aega, aastat, inimesi, asju, korda, raha, asja, inimest, punkti</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunut, surnut, haigestunuid, haigestunut, kirjutatut, solvunuid, tervenenuid</li>
      <li>NUM: miljardit, miljonit, tuhandeid, sadu, tuhat, ühte, ühtegi, kahte, kümneid, 3'si</li>
      <li>PRON: seda, midagi, mida, neid, mind, ennast, sind, end, muud, kõike</li>
      <li>PROPN: sakut, premiumit, BMW-d, Dimmut, Kalevipoega, Kulda, Vasurit, fordi, iisraeli, Alekukke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ter
    <ul>
      <li>ADJ: 700, praeguseni</li>
      <li>DET: selleni</li>
      <li>NOUN: lõpuni, kraadini, ajurakkudeni, eesmärgini, hetkeni, hommikuni, karantiini, keeluni, klaasini, kurvini</li>
      <li>NUM: 5ni</li>
      <li>PRON: selleni, meieni, milleni, minuni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tra
    <ul>
      <li>ADJ: selgeks, järgmiseks, lolliks, suuremaks, terveks, huvitavaks, pikemaks, haigeks, hulluks, kallimaks</li>
      <li>ADJ-Part: huvitavaks, iseseisvaks, kuuluvaks, kättesaadavaks, leitavaks, mitte-veateadet-väljastavaks, otsustavaks, poolkrõmpsuvaks, surnuks, tasakaalustavaks</li>
      <li>AUX-Sup: olemaks</li>
      <li>DET: selleks, igaks, mingiks, igaksu, mingiteks, mõneks, samaks, yheks, üheks</li>
      <li>NOUN: lisaks, abiks, ajaks, õnneks, lõpuks, juhuks, aastaks, hetkeks, muretsemiseks, nädalaks</li>
      <li>NUM: pooleks, üheks, 2-ks, 21, 23, 8, kolmeks</li>
      <li>PRON: selleks, omaks, millekski, samaks, Mõlemaks, tolleks, üheks</li>
      <li>PROPN: Kaitseks</li>
      <li>VERB-Sup: vältimaks, näitamaks, nõustamakas, pakkumaks, varustamaks, väljendamaks</li>
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
      <li>ADJ: parem, suurem, raskem, lihtsam, hullem, parema, paremad, suuremaks, kergem, suurema</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: hea, huvitav, suur, õige, võimalik, head, vana, tore, valmis, lihtne</li>
      <li>ADJ-Part: huvitav, antud, teatud, erinevaid, ülejäänud, erinevate, tehtud, asetatud, karastatud, erinevad</li>
      <li>ADJ-Sup: Tegemata, harmoniseerimata, lahendamata, niitmata, poolitamata, tasumata, tasustamata, treenimata, täpsustamata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: parim, parima, suurim, parimad, parimate, Suurimad, enim, huvitavaim, kõrgeim, lollikindlaima</li>
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
      <li>AUX-Fin: oleks, peaks, võiks, saaks, poleks, oleksin, peaksid, võiksid, oleksid, tohiks</li>
      <li>VERB-Fin: tahaks, tuleks, oleks, saaks, hakkaks, ütleks, läheks, annaks, teeks, jääks</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: ära, olgu, ole, ärge, olge, olgem, ärgu, 0le, Ärgem</li>
      <li>VERB-Fin: vaata, mine, minge, mõtle, tee, võta, kirjuta, proovi, kuule, osta</li>
      <li>VERB-Inf: osta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: on, oli, pole, ole, olen, võib, peab, oled, saa, saab</li>
      <li>VERB-Fin: on, tuleb, saab, tea, läheb, tuli, pole, saa, läks, arvan</li>
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
      <li>ADJ-Part: antud, teatud, ülejäänud, tehtud, asetatud, karastatud, mainitud, peidetud, seotud, surnud</li>
      <li>AUX-Fin: oli, olid, sai, olin, olnud, polnud, pidi, tundus, pidin, võis</li>
      <li>AUX-Part: olnud, võinud, pidanud, saanud, pinanud, v6inud</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunutest, nakatunut, nakatunu, nakatunust, nakatunute, surnu, surnut, tänud</li>
      <li>VERB-Fin: tuli, läks, sain, ütles, sai, oli, kirjutasin, jäi, hakkas, panin</li>
      <li>VERB-Part: saanud, kuulnud, tulnud, antud, teinud, käinud, läinud, pandud, tehtud, jäänud</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: huvitav, erinevaid, erinevate, erinevad, odav, erinevatest, huvitavad, leviv, elavana, erinev</li>
      <li>AUX-Fin: on, pole, oleks, ole, olen, võib, peaks, peab, oled, võiks</li>
      <li>VERB-Fin: on, tuleb, saab, tea, läheb, saa, pole, arvan, tahaks, teeb</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: huvitav, erinevaid, ülejäänud, erinevate, erinevad, odav, erinevatest, huvitavad, leviv, surnud</li>
      <li>ADJ-Sup: Tegemata, harmoniseerimata, lahendamata, niitmata, poolitamata, tasumata, tasustamata, treenimata, täpsustamata</li>
      <li>AUX: on, oli, pole, oleks, ole, olen, võib, peaks, olnud, olema</li>
      <li>AUX-Fin: on, oli, pole, oleks, ole, olen, võib, peaks, peab, oled</li>
      <li>AUX-Part: olnud, võinud, pidanud, saanud, pinanud, v6inud</li>
      <li>AUX-Sup: olema, olemagi, olemaks, saama</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunut, nakatunu, nakatunust, surnut, tänud, haigestunuid, haigestunut, haigestunute</li>
      <li>VERB-Fin: on, tuleb, saab, tea, läheb, tuli, saa, pole, läks, arvan</li>
      <li>VERB-Part: saanud, kuulnud, tulnud, teinud, käinud, läinud, jäänud, näinud, võtnud, jõudnud</li>
      <li>VERB-Sup: olemas, tegema, hakkama, minema, saama, maksma, kirjutama, mõtlema, rääkimata, tulema</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: antud, teatud, huvitav, tehtud, asetatud, karastatud, mainitud, peidetud, seotud, tuntud</li>
      <li>NOUN-Part: nakatunutest, Kirjapandu, Nakatunuid, eeltoodu, haigestunutest, lahtiharutatuna, nakatunute, surnu, sõitnuna, tarbitu</li>
      <li>VERB-Fin: tehakse, hakatakse, tahetakse, pandi, võeta, öeldakse, pannakse, saadakse, öeldi, antakse</li>
      <li>VERB-Part: antud, pandud, tehtud, lisatud, kirjutatud, loodud, öeldud, mõeldud, planeeritud, sõidetud</li>
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
      <li>ADJ: selline, sama, sellist, sellised, samasugune, niisugune, samad, samasugused, samasugust, sedasama</li>
      <li>DET: see, selle, seda, need, selline, sama, neid, sellest, sellist, teine</li>
      <li>PRON: see, seda, selle, need, sellest, neid, selles, sellega, nende, selleks</li>
      <li>PROPN: Sama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: mingisugust, mingisuguseid, mõnda, mõndagi, mõned, mõni, mõnigi</li>
      <li>DET: mingi, üks, mingit, mingid, ühe, mõni, mõne, mõned, mingeid, mitu</li>
      <li>PRON: midagi, keegi, muud, paljud, kedagi, kellegi, millegi, miski, mõned, üks</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADJ: milline, millise, millist, millistest, missugune</li>
      <li>DET: mis, millaised, millises</li>
      <li>PRON: mis, kes, mida, mille, millest, kelle, milles, keda, kellele, millega</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADJ: omas</li>
      <li>DET: nende</li>
      <li>PRON: ma, oma, ta, sa, mul, minu, mina, nad, meie, me</li>
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
      <li>ADJ: milline, millise, millisest, kumb, millised, milliseid, milliselt, millist, millistele, millistest</li>
      <li>DET: millises</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: kõik, kogu, iga, igal, igas, kõiki, igast, kõigi, kõigil, mõlemas</li>
      <li>PRON: kõik, kõike, kõigile, kõigil, kõige, mõlemad, igal, kõigi, mõlemal, k6ik</li>
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
      <li>NUM: 2, 10, 3, 1, 100, kaks, 4, paar, 20, ühe</li>
      <li>PROPN: saku0007</li>
      <li>SYM: %, -.-</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: esimene, esimest, 3., 27., esimese, teises, teine, 1., 2., 29.</li>
      <li>NUM: 4., 9nda, 1., 10, 10ndasse, 11, 15., 18., 1998., 2.</li>
      <li>PROPN: II-st</li>
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
      <li>AUX-Fin: olen, oleme, olin, pean, oleksin, pidin, võin, saan, peame, olime</li>
      <li>PRON: ma, mul, minu, mina, meie, me, mulle, meil, mu, mind</li>
      <li>VERB-Fin: arvan, sain, lähen, kirjutasin, loodan, saan, tean, palun, usun, panin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: oled, ära, võid, pead, olete, ole, saate, ärge, saad, oledki</li>
      <li>PRON: sa, sinu, te, sul, sina, sind, su, sulle, teie, teile</li>
      <li>VERB-Fin: saad, tead, teed, vaata, mine, arvad, minge, mõtle, tee, võta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: on, oli, võib, peab, saab, olid, ongi, sai, pidi, peavad</li>
      <li>DET: nende</li>
      <li>PRON: ta, nad, tema, talle, tal, nende, teda, neile, neil, nemad</li>
      <li>VERB-Fin: on, tuleb, saab, läheb, tuli, läks, teeb, ütles, jääb, teab</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: nn., nn, brå, h., lp., orig.</li>
          <li>ADV: jne, vms, jms, nt, st, mh, imo, jm, a, vb</li>
          <li>CCONJ: a, e., e, vs</li>
          <li>INTJ: PS, mdx, lol, wtf.</li>
          <li>NOUN: a, ATP, p, z, b, k, a., NI, km, x</li>
          <li>PROPN: le, a., YOU, |=X=|, rs1, BMW, USA, ekre, A.Le, B.</li>
          <li>SYM: %, &, CO2, TR-23, €, M-st, S3-el, i-</li>
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
          <li>ADP: eest, kohta, jaoks, peale, puhul, pärast, vastu, all, järgi, tagasi</li>
          <li>ADV: ette, peale, üle</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: üle, peale, ilma, enne, pärast, koos, läbi, tänu, mööda, kuni</li>
          <li>ADV: enne, mööda, pärast</li>
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
          <li>AUX: ole, saa, olnud, ei, pea, oleks, tohi, olegi, peaks, tohiks</li>
          <li>AUX-Fin: ole, saa, olnud, pea, oleks, tohi, olegi, peaks, tohiks, tundu</li>
          <li>VERB-Fin: tea, saa, ole, usu, taha, oska, lähe, suuda, hakka, tee</li>
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
          <li>ADJ: budget, high-end, chill, ultimagte</li>
          <li>ADV: anyway, imo, ok, Logisch, a, ala, circa, h.ui, la, maybe</li>
          <li>INTJ: sorry, no, omg, HUI, Sry, Yep, bljääd, nolife, wtf, lol</li>
          <li>NOUN: offtopic, ratio, death, E, I, Light, Monolog, Pop, So, Un</li>
          <li>PROPN: on, ice, A, COVID-19, Enthusiasistic, le, music, youtube'i, Beami****, Beef</li>
          <li>X: to, opinion, My, Suchen, You, da, expert, from, leading, listen</li>
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
          <li>NOUN: keeramis-, raputamis-, PR-, ajakirjak-, karantiini, kirja-, kirjandus-, müügi-, piima-, rühma-</li>
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
          <li>NUM: 2, 10, 3, 1, 100, 4, 20, 5, 15, 11</li>
          <li>PROPN: saku0007</li>
          <li>SYM: %, -.-</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>ADJ: I, II, I-ne</li>
          <li>PROPN: II-st</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: esimene, esimest, esimese, teine, teises, esimeses, esimesel, teisele, esimesena, teist</li>
          <li>NUM: kaks, paar, ühe, üks, kahe, kolm, miljonit, poole, paari, miljardit</li>
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
          <li>ADV: aint, pohh, põmst, Pmst, Sitaks, veits, imo</li>
          <li>NOUN: bemmi, põmmi, sapikale, bemari, bemii, bemm, bemme, bemmist, bena, bõmari</li>
          <li>PROPN: senale, Alekukke, alekokki, jeepudele</li>
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
          <li>ADJ: 700, 300, k6va, lol, lyhike, vanat, 10, 3-se, 30, Auto</li>
          <li>ADJ-Part: jooduav, järgevad, kaesolevasse, katastatud, korrtaldatud, krõvisevaid, kõkuvaid, liikuvad, risitava, t2navatel</li>
          <li>ADP: yle, est, jaosk, juure, kuures, prst, pärast´, seos, ymber</li>
          <li>ADV: nyyd, yldse, yhes6naga, kyll, 2kki, Sellepräast, akki, j2rgi, k2tte, kindalsti</li>
          <li>AUX: ple, olex, vöib, 0le, 2ra, e, olek, olrnudki, pinanud, pn</li>
          <li>AUX-Fin: ple, olex, vöib, 0le, olek, olrnudki, pn, pold, poleksi, v6ib</li>
          <li>AUX-Part: pinanud, v6inud</li>
          <li>CCONJ: vòi, J, ag, jja, voi, vöi</li>
          <li>DET: yks, igaksu, k6igelt, k6iki, m6nes, m6ni, migni, millaised, mingel, mingid</li>
          <li>INTJ: aitähh, Aitah, Ooot, tralllaaaa, v2</li>
          <li>NOUN: miis, ühsikonna, Minupuhl, autut, bio, dushi, henerasvad, kvant, medistsiinigeenius, v2limus</li>
          <li>NUM: 10, 100, 1, 10k, 11, 2k, 5, 81, 92, poole</li>
          <li>PRON: k6ik, KÕIIK, Mede, asee, iga, igauks, kelle, koigega, kôik, köik</li>
          <li>PROPN: saku, eestis, eleonore, ice, msnnis, ale, delfi, porche, riigikogu, saaremaa</li>
          <li>PUNCT: !!11, 8, ???+</li>
          <li>SCONJ: ehki, ku, magu, nigu, sis</li>
          <li>VERB-Conv: v6rreldes, l2htudes, oller, pääste</li>
          <li>VERB-Fin: kkeelas, n2itab, olex, saax, teind, yritas, Karanteerin, Pold, Täitan, ajetakse</li>
          <li>VERB-Inf: näitata, 6ppida, aidat, avaldadda, hakkata, heitada, k6ristada, komenteerida, kysida, n2ha</li>
          <li>VERB-Part: näind, arvand, eletatud, hakkanud, kuulnd, läind, m6elnd, mainiutd, n2htud, n2inud</li>
          <li>VERB-Sup: olema, haippima, m6tlema, nõustamakas, panematta, paneme, põleema, sätima, tegutsema, varama</li>
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
      <li>VERB-Fin--NOUN (13)</li>
      <li>VERB-Fin--NOUN-Gen (8)</li>
      <li>VERB-Fin--NOUN-Ine (1)</li>
      <li>VERB-Fin--NOUN-Nom (1312)</li>
      <li>VERB-Fin--NOUN-Par (207)</li>
      <li>VERB-Fin--NOUN-Par-ADP(alla) (1)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Nom (1567)</li>
      <li>VERB-Fin--PRON-Par (38)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Nom (66)</li>
      <li>VERB-Inf--NOUN-Par (5)</li>
      <li>VERB-Inf--PRON-Nom (77)</li>
      <li>VERB-Inf--PRON-Par (3)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Nom (98)</li>
      <li>VERB-Part--NOUN-Par (13)</li>
      <li>VERB-Part--PRON-Nom (154)</li>
      <li>VERB-Part--PRON-Par (5)</li>
      <li>VERB-Sup--NOUN (1)</li>
      <li>VERB-Sup--NOUN-Nom (52)</li>
      <li>VERB-Sup--NOUN-Par (2)</li>
      <li>VERB-Sup--PRON-Nom (55)</li>
      <li>VERB-Sup--PRON-Par (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Gen (5)</li>
      <li>VERB-Conv--NOUN-Nom (2)</li>
      <li>VERB-Conv--NOUN-Par (39)</li>
      <li>VERB-Conv--PRON-Nom (2)</li>
      <li>VERB-Conv--PRON-Par (5)</li>
      <li>VERB-Fin--NOUN (10)</li>
      <li>VERB-Fin--NOUN-Add (2)</li>
      <li>VERB-Fin--NOUN-Gen (307)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(üle) (1)</li>
      <li>VERB-Fin--NOUN-Nom (180)</li>
      <li>VERB-Fin--NOUN-Par (903)</li>
      <li>VERB-Fin--NOUN-Par-ADP(mööda) (1)</li>
      <li>VERB-Fin--PRON-Gen (41)</li>
      <li>VERB-Fin--PRON-Nom (60)</li>
      <li>VERB-Fin--PRON-Par (425)</li>
      <li>VERB-Inf--NOUN (3)</li>
      <li>VERB-Inf--NOUN-Gen (60)</li>
      <li>VERB-Inf--NOUN-Nom (138)</li>
      <li>VERB-Inf--NOUN-Par (408)</li>
      <li>VERB-Inf--PRON-Gen (4)</li>
      <li>VERB-Inf--PRON-Nom (20)</li>
      <li>VERB-Inf--PRON-Par (180)</li>
      <li>VERB-Part--NOUN (4)</li>
      <li>VERB-Part--NOUN-Abl (1)</li>
      <li>VERB-Part--NOUN-Gen (41)</li>
      <li>VERB-Part--NOUN-Nom (100)</li>
      <li>VERB-Part--NOUN-Par (111)</li>
      <li>VERB-Part--PRON-Gen (7)</li>
      <li>VERB-Part--PRON-Nom (47)</li>
      <li>VERB-Part--PRON-Par (47)</li>
      <li>VERB-Sup--NOUN-Gen (24)</li>
      <li>VERB-Sup--NOUN-Nom (6)</li>
      <li>VERB-Sup--NOUN-Par (135)</li>
      <li>VERB-Sup--PRON-Gen (5)</li>
      <li>VERB-Sup--PRON-Nom (4)</li>
      <li>VERB-Sup--PRON-Par (46)</li>
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
  <li>This corpus contains 38 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: tundma ennast, tundma end, pidama ennast, tapma end, tegema end, hindama ennast, hõõruma ennast, ilmutama ennast, kahjustama iseennast, kaitsma ennast, koguma ennast, laskma end, leidma ennast, liigitama ennast, logima ennast, lohutama end, lülitama ennast, nimetama end, nimetav end, närima ennast, panema ennast, parandama ennast, pidama end, pidav end, pistma ennast, puhastama end, päästma end, registreerima end, siduma end, sundima end, süüdistama ennast, tegema iseend, tervendama end, tutvustama ennast, vedama end, vedama ennast, väitma end, ärritama ennast</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>nsubj:cop</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>dislocated</a>, <a>clf</a></li>
</ul>
