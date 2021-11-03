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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udet_ewt29)<br />
Download all treebanks: [UD 2.9](/#download)

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




Estonian Web Treebank UD v2.8 consists of three parts. Its older part (1,662 trees, v2.4) is a converted version of the Estonian Web Treebank (EWT), originally annotated in the Constraint Grammar (CG) annotation scheme, and consisting of different genres of new media.
The second part (1,495 trees, v2.6) consists of internet forum texts and has been annotated using [Stanza parser](https://stanfordnlp.github.io/stanza/), followed by manual post-editing.
The third part (v2.8) has been annnotated in the same way. It consists of users' feedbacks to news about Covid19 pandemic in 2020-2021 (~12,725 tokens).

The treebank consists of 5,863 trees, 72,778 tokens. As for enhanced dependencies, the empty nodes for missing predicates have been added, and the relative pronoun is attached to its antecedent with the relation 'ref' but there are no other types of enhanced dependencies in this version.

The treebank has been divided to train, test and dev parts as 49,601; 13,156 and 10,021 tokens respectively.

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
<li>This corpus contains 5863 sentences and 72780 tokens.</li>
</ul>

<ul>
<li>This corpus contains 11670 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 2 types of words with spaces. Examples: 14 000, 20 000</li>
</ul>

<ul>
<li>This corpus contains 489 types of words that contain both letters and punctuation. Examples: a., :d, võib-olla, :s, paha-paha, Coq'i, nn., |-X-|, covid-19, e., E-330, sape.ru, PC_man, e-teenindusse, ja-le, nt., :P, @ausalt, A.Le, B., BMW-d, F.a.Q, R-mees, eelmine-q-le, inc., jms., jne., kl., m-parkimine, tie-break’i, /me, 2-ga, 2009-suvel, 7-seeria, 9-nda, :O, ;D, @arvan, @eleonore, Coq-i, Dr.x, Google’i, I-M13, ITF-i, L-K2, L-S, Petange’is, Põhja-Tallinna, Shadow_angel, Taavi[esT]</li>
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
<li>This corpus contains 49 lemmas tagged as pronouns (PRON): enda, iga, iga_sugune, iga_üks, igaüks, ise, ise_enese, ise_sugune, ja_veel_üks, keegi, kes, kes_se, kolmas, kumbki, kõige, kõigest, kõik, ma_i, mina, mingi, mingi_sugune, mis, miski, mitme_sugune, mitte_keegi, mitte_miski, mitu, muu, mõlema, mõni, need, oma, palju, sama, see, selline, sest, sina, tegelt, teine, teine_teise, teist_sugune, tema, temake, too, vot, üks, üks_teise, ükski</li>
</ul>

<ul>
<li>This corpus contains 40 lemmas tagged as determiners (DET): 1, iga, iga_sugu, iga_sugune, iga_üks, igast, keegi, kogu, kõik, kõik_sugu, milline, mingi, mingi_sugune, mingine, minu_sugune, mis, miski, mitmes, mitu, mitu-mitu, muu, mõlema, mõni, mõningas, nii_sugune, palju, sama, sama_sugune, see, see_sama, selline, sihuke, siuke, säherdune, teine, tema, terve, too, üks, ükski</li>
</ul>

<ul>
<li>Out of the above, 22 lemmas occurred sometimes as PRON and sometimes as DET: iga, iga_sugune, iga_üks, keegi, kõik, mingi, mingi_sugune, mis, miski, mitu, muu, mõlema, mõni, palju, sama, see, selline, teine, tema, too, üks, ükski</li>
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
    <li>VERB: minnes, võrreldes, võttes, arvates, arvestades, kasutades, lugedes, vaadates, kartes, pannes</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: on, oli, pole, oleks, ole, olen, võib, peaks, peab, oled</li>
    <li>VERB: on, tuleb, saab, tea, läheb, tuli, läks, saa, arvan, pole</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: olla</li>
    <li>VERB: teha, saada, minna, teada, öelda, panna, võtta, näha, kirjutada, osta</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: huvitav, antud, teatud, ülejäänud, erinevaid, tehtud, asetatud, karastatud, erinevad, erinevate</li>
    <li>AUX: olnud, võinud, pidanud, saanud, pinanud, v6inud</li>
    <li>NOUN: nakatunuid, surnuid, nakatunutest, nakatunut, nakatunu, nakatunust, nakatunute, surnu, surnut, tänud</li>
    <li>VERB: saanud, kuulnud, tulnud, antud, käinud, läinud, tehtud, teinud, pandud, lisatud</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>ADJ: Tegemata, harmoniseerimata, lahendamata, niitmata, poolitamata, tasumata, tasustamata, treenimata, täpsustamata</li>
    <li>AUX: olema, olemagi, saama</li>
    <li>VERB: olemas, tegema, minema, hakkama, saama, maksma, kirjutama, mõtlema, rääkimata, tulema</li>
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
      <li>ADJ: head, erinevaid, häid, vanad, suurte, uusi, suured, usklikud, erinevad, erinevate</li>
      <li>ADJ-Part: erinevaid, erinevad, erinevate, huvitavad, erinevatest, huvitavaid, langevad, arenevad, liikuvad, odavad</li>
      <li>AUX-Fin: on, olid, oleme, peavad, võivad, peaksid, oleksid, olete, võiksid, olime</li>
      <li>DET: kõik, need, neid, nende, mingid, mõned, sellised, teised, mingeid, selliste</li>
      <li>NOUN: inimesed, asju, inimesi, asjad, inimeste, teemad, naised, tulemused, tulemusi, nakatunuid</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunutest, nakatunute, tänud, haigestunuid, haigestunute, haigestunutest, hukkunute, lõpetanud</li>
      <li>NUM: tuhandeid, sadu, kümneid, miljarditest, pooled, 2-de, 3'si, 5'si, 5-si, kümnetes</li>
      <li>PRON: nad, kes, meie, me, need, neid, meil, mis, nende, kõik</li>
      <li>PROPN: sepapoisid, vasurite, Alekukke, Arstiteadusüliõpilaste, Dedicated, Eestimaalased, Fordidega, Gin-ide, Hondad, Inglikesi</li>
      <li>SYM: S3'med</li>
      <li>VERB-Fin: saavad, lähevad, on, teevad, tulevad, teeme, elame, jäävad, näeme, olid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: hea, huvitav, võimalik, õige, suur, vana, parem, esimene, tore, lihtne</li>
      <li>ADJ-Part: huvitav, leviv, odav, elavana, erinev, hirmutav, kasvavas, nakkav, vastava, veenev</li>
      <li>ADV: imo, normilt, v2hem, Õkva</li>
      <li>AUX: on, oli, olen, võib, peab, oled, saab, ongi, sai, olin</li>
      <li>AUX-Fin: on, oli, olen, võib, peab, oled, saab, ongi, sai, olin</li>
      <li>CCONJ: aka</li>
      <li>DET: see, mingi, selle, seda, iga, selline, üks, mingit, sama, sellest</li>
      <li>INTJ: Oeh, buuu, hmm, nohjah</li>
      <li>NOUN: asi, aasta, teema, aru, inimene, aega, osa, elu, auto, kooli</li>
      <li>NOUN-Part: nakatunut, nakatunu, nakatunust, surnu, surnut, Kirjapandu, eeltoodu, haigestunut, kirjutatut, lahtiharutatuna</li>
      <li>NUM: 2, kaks, 3, 10, ühe, paar, 100, üks, 1, kahe</li>
      <li>PRON: ma, see, mis, seda, oma, ta, sa, midagi, mida, kes</li>
      <li>PROPN: saku, eesti, eestis, Jumal, d2xz, tartu, vasur, Ennist, Pärtel, Tallinna</li>
      <li>SYM: .-., M-st, S3-el</li>
      <li>VERB-Fin: on, tuleb, saab, läheb, tuli, läks, arvan, teeb, sain, ütles</li>
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
      <li>NOUN: põhjuseta, tasuta, ERANDITA, Tulemusteta, abita, autota, graafikata, helita, internetita, kannatusteta</li>
      <li>PRON: selleta</li>
      <li>PROPN: Terviseametita</li>
      <li>VERB-Sup: rääkimata, tegemata, edutamata, lugemata, sõltumata, teadmata, õppimata, alustamata, juhtimata, minemata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: lollidelt, milliselt, suuliselt, suurelt, tagumistelt, tähtajaliselt</li>
      <li>ADV: normilt</li>
      <li>DET: k6igelt, mõnelt, nendelt, sellelt</li>
      <li>NOUN: maalt, tugevuselt, emalt, kohalt, seisukohalt, suuruselt, Daamilt, Motorexilt, allveekabeturniirilt, arstidelt</li>
      <li>NUM: 500ltgi, 700lt</li>
      <li>PRON: nendelt, endalt, mult, neilt, kellelt, minult, muult, teilt, teistlet, temalt</li>
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
      <li>PROPN: Bin`i, Hast"`i, Kaagverre, Kuressaarde, Virru, corvette'i, reaali, westholmi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ade
    <ul>
      <li>ADJ: viimasel, eelmisel, 29., esimesel, järgmisel, praegusel, õigel, 26., 3., headel</li>
      <li>ADJ-Part: saadaval, Tuleval, erinevatel, käesoleval, piisaval, seisval, t2navatel, toitval, tungival, äraootaval</li>
      <li>DET: igal, sellel, sel, sellisel, samal, mingil, ühel, kõigil, mõlemal, mõnel</li>
      <li>NOUN: hetkel, ajal, juhul, teemal, aastal, sõnul, päeval, hommikul, tasemel, tööl</li>
      <li>NUM: kahel, 1, 100, 2-l, 2004, 28, kolmel, neljal, paaril</li>
      <li>PRON: mul, meil, sul, tal, neil, endal, kel, kellel, kellelgi, minul</li>
      <li>PROPN: saaremaal, Saksamaal, Larkol, Maal, Openil, Venemaal, Zoppil, coq'il, sakul, BMW'l</li>
      <li>SYM: S3-el</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>ADJ: teisele, eelnevale, uutele, vanusele, õigele, 5-ndale, 700, MoPa-nimelisele, Tulevastele, aastasele</li>
      <li>ADJ-Part: eelnevale, hoolitsevale, liikuvale, mõtlevale, mööduvatele, tegevatele, vajavale</li>
      <li>DET: mingile, sellele, nendele, igale, kõigile, mingitele, sellisele, sellistele, Neile, mingisugusele</li>
      <li>NOUN: tööle, inimestele, lehele, kohale, peole, teele, eelmine-q-le, hobusele, inimesele, koolile</li>
      <li>NUM: 1-le, 3-le, 700'le, kahele</li>
      <li>PRON: mulle, endale, talle, sulle, sellele, meile, neile, kõigile, kellele, omale</li>
      <li>PROPN: ja-le, Maale, Suvatüübile, Ivanovile, Leelotajale, Marsile, eestile, saaremaale, senale, 350D-le</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: eelnevatega, enesekindlatega, koroonapositiivsega, rohkemaga, seitsmesajasega, sõjalisega, täiega, vanaga, viiestega</li>
      <li>ADJ-Part: eelnevatega</li>
      <li>NOUN: teemaga, auhinnafondiga, autoga, kiirusega, koroonaga, võiduga, aastaga, meelega, nimega, seisuga</li>
      <li>NUM: 2-ga, kümnega, 1-ga, 10k, 11-4ga, 2k, 60.000-ga, 700ga, 700sega, 96-ga</li>
      <li>PRON: sellega, millega, temaga, nendega, kellega, sinuga, meiega, minuga, teistega, omadega</li>
      <li>PROPN: Jumalaga, Lugejaga, Malouliga, Venemaaga, cobraga, porschega, Ajaga, Andersoniga, BMW'ga, EL'ga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ela
    <ul>
      <li>ADJ: erinevatest, millisest, 300, heast, konkreetsest, lahtisest, millistest, olevast, suulisest, tavalisest</li>
      <li>ADJ-Part: erinevatest, olevast, algavast, arvestatavatest, juhtivast, jõudvast, kavandatavast, kohutavast, pakkuvast, planeeritavast</li>
      <li>DET: sellest, ühest, igast, nendest, neist, mingist, mingitest, kõigest, kõigist, samast</li>
      <li>NOUN: ajast, valgusest, algusest, asjast, koolist, teemast, aastast, klassist, koroonaviirusest, poest</li>
      <li>NOUN-Part: nakatunutest, nakatunust, haigestunutest</li>
      <li>NUM: miljonist, 99, miljarditest, ühest, 100st, 110-st, 38-st, 4, 400st, 50</li>
      <li>PRON: sellest, millest, neist, minust, meist, nendest, teineteisest, teistest, endast, muust</li>
      <li>PROPN: Hiinast, saxast, Eestist, Juryost, itaaliast, saksast, Ambassador'ist, Boccellist, Coq-ist, Dionist</li>
      <li>SYM: M-st</li>
      <li>VERB-Sup: olemast, elamast, jagamast, mõtlemast, ütlemast</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: elavana, esimesena, kolmandana, surnuna, teisena, jõuetuna, jõulisena, kõikvõimsana, lõigatuna, neljandana</li>
      <li>ADJ-Part: elavana, surnuna, lõigatuna, sõnastatuna, vaadatuna, väsinuna</li>
      <li>NOUN: Näitena, asjana, haigena, keelena, kiirmaksena, reeglina, (laste)arstina, Kõrvalepõikena, Püsikasutajana, armulaualeivana</li>
      <li>NOUN-Part: lahtiharutatuna, saanuna, väljalülitatuna</li>
      <li>PRON: minuna, sellisena, sellistena</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: suure, uue, vana, viimase, hea, esimese, eelmise, suurte, suuruse, korraliku</li>
      <li>ADJ-Part: erinevate, vastava, eelneva, huvitava, olevate, valitseva, Lälisevate, arvestatava, asetseva, ebameeldiva</li>
      <li>DET: selle, mingi, iga, ühe, sellise, nende, mõne, sama, selliste, teise</li>
      <li>NOUN: aasta, inimese, teema, elu, inimeste, viiruse, auto, maailma, toidu, koha</li>
      <li>NOUN-Part: nakatunu, nakatunute, eeltoodu, haigestunute, hukkunute, nakatanute, sisserännanute, surnu, surnute, tarbitu</li>
      <li>NUM: ühe, kahe, 10, miljoni, paari, poole, 1, nelja, viie, 2</li>
      <li>PRON: oma, minu, selle, meie, enda, nende, mu, tema, sinu, mille</li>
      <li>PROPN: eesti, saku, tartu, Tallinna, Jumala, saaremaa, Coq'i, Itaalia, Ülikooli, Hiina</li>
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
      <li>NOUN: arvesse, sanyakusse, arvutisse, teemasse, koroonasse, koondus-folderitesse, lennukisse, loengusse, maegashirasse, piirkondadesse</li>
      <li>NUM: 10ndasse</li>
      <li>PRON: endasse, millesse, temasse, kellessegi, meisse, minusse, sellesse, teise</li>
      <li>PROPN: eestisse, Torisse, C-sse, ERMi, Google'isse, Gümnaasiumisse, Indiasse, Jaapanisse, KUMUsse, Lõuna-Koreasse</li>
      <li>VERB-Sup: tegema, minema, hakkama, saama, maksma, kirjutama, mõtlema, tulema, käima, uurima</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ine
    <ul>
      <li>ADJ: teises, esimeses, kasvavas, otseses, praeguses, suures, uues, 9ndas, avalikes, avalikus</li>
      <li>ADJ-Part: kasvavas, erinevates, esindavates, jõudvas, kandvas, liikuvas, nähtavas, olevates, sallivas, teatavas</li>
      <li>DET: selles, igas, mingis, teises, ühes, mõlemas, mõnes, millises, muus, paljudes</li>
      <li>NOUN: koolis, ajas, kodus, mõttes, elus, maailmas, alguses, käes, tulevikus, korras</li>
      <li>NUM: 2019, kolmes, kümnetes, poole</li>
      <li>PRON: selles, milles, sinus, omas, paljudes, endas, iseendas, meis, milleski, minus</li>
      <li>PROPN: eestis, hiinas, tallinnas, euroopas, msnis, itaalias, tartus, msnnis, Indias, Juryos</li>
      <li>VERB-Sup: olemas, kihutamas, tulemas, tegemas, lendamas, olema, aitamas, hängimas, kasvamas, kommenteerimas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: hea, huvitav, võimalik, suur, õige, parem, esimene, tore, lihtne, uus</li>
      <li>ADJ-Part: huvitav, erinevad, huvitavad, leviv, odav, erinev, hirmutav, langevad, nakkav, veenev</li>
      <li>ADV: imo, v2hem, Õkva</li>
      <li>CCONJ: aka</li>
      <li>DET: see, mingi, kõik, need, selline, üks, iga, mis, teine, mingid</li>
      <li>INTJ: Oeh, buuu, hmm, nohjah</li>
      <li>NOUN: asi, inimesed, inimene, teema, mees, päev, aeg, jumal, osa, aasta</li>
      <li>NOUN-Part: tänud, Kirjapandu, läbipõdenu, lõpetanud, põdenud, surnu</li>
      <li>NUM: 2, kaks, 3, paar, 10, üks, 100, kolm, 5, 1</li>
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
      <li>ADJ: head, suurt, sellist, esimest, uut, erinevaid, häid, uusi, erilist, korralikke</li>
      <li>ADJ-Part: erinevaid, huvitavaid, huvitavat, odavaid, edasiliikuvat, edutatavaid, ennetavaid, hindumuutvaid, järgnevaid, järgnevat</li>
      <li>DET: seda, mingit, neid, sellist, mingeid, selliseid, kõiki, mõnda, teisi, ühtki</li>
      <li>NOUN: aru, aega, aastat, asju, inimesi, korda, raha, punkti, asja, inimest</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunut, surnut, haigestunuid, haigestunut, kirjutatut, solvunuid, tervenenuid</li>
      <li>NUM: miljardit, miljonit, tuhandeid, sadu, tuhat, ühte, ühtegi, kahte, kümneid, 3'si</li>
      <li>PRON: seda, midagi, mida, neid, mind, ennast, end, sind, muud, kõike</li>
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
      <li>ADJ: selgeks, järgmiseks, lolliks, suuremaks, terveks, pikemaks, haigeks, hulluks, huvitavaks, kallimaks</li>
      <li>ADJ-Part: huvitavaks, iseseisvaks, kuuluvaks, kättesaadavaks, leitavaks, mitte-veateadet-väljastavaks, otsustavaks, poolkrõmpsuvaks, surnuks, tasakaalustavaks</li>
      <li>DET: selleks, igaks, mingiks, igaksu, mingiteks, mõneks, samaks, yheks, üheks</li>
      <li>NOUN: lisaks, abiks, ajaks, õnneks, lõpuks, juhuks, hetkeks, muretsemiseks, nädalaks, põhjuseks</li>
      <li>NUM: üheks, 2-ks, 21, 23, 8, kolmeks, pooleks</li>
      <li>PRON: selleks, omaks, samaks, Mõlemaks, millekski, tolleks, üheks</li>
      <li>VERB-Sup: vältimaks, näitamaks, nõustamakas, pakkumaks, varustamaks</li>
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
      <li>ADJ: parem, suurem, raskem, lihtsam, parema, suuremaks, kergem, paremad, suurema, ohtlikum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: hea, huvitav, võimalik, õige, head, suur, vana, valmis, tore, lihtne</li>
      <li>ADJ-Part: huvitav, antud, teatud, ülejäänud, erinevaid, tehtud, asetatud, karastatud, erinevad, erinevate</li>
      <li>ADJ-Sup: Tegemata, harmoniseerimata, lahendamata, niitmata, poolitamata, tasumata, tasustamata, treenimata, täpsustamata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: parim, suurim, parima, parimate, enim, huvitavaim, kõrgeim, lollikindlaima, lähima, nõrgim</li>
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
      <li>AUX: ei, pole, ära, poleks, polnud, ple, polegi, mai, ärge, ärgu</li>
      <li>AUX-Fin: pole, ära, poleks, polnud, ple, polegi, ärge, ärgu, pold, poleksi</li>
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
      <li>VERB-Fin: tahaks, tuleks, oleks, saaks, ütleks, hakkaks, annaks, läheks, teeks, jääks</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: ära, olgu, ole, ärge, olge, olgem, ärgu, 0le, Ärgem</li>
      <li>VERB-Fin: vaata, mine, tee, mõtle, minge, võta, kirjuta, proovi, kuule, osta</li>
      <li>VERB-Inf: osta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: on, oli, pole, ole, olen, võib, peab, oled, saa, saab</li>
      <li>VERB-Fin: on, tuleb, saab, tea, läheb, tuli, läks, saa, arvan, pole</li>
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
      <li>AUX-Fin: oli, olid, sai, olin, olnud, polnud, pidi, tundus, võis, pidin</li>
      <li>AUX-Part: olnud, võinud, pidanud, saanud, pinanud, v6inud</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunutest, nakatunut, nakatunu, nakatunust, nakatunute, surnu, surnut, tänud</li>
      <li>VERB-Fin: tuli, läks, sain, ütles, sai, oli, kirjutasin, jäi, hakkas, tegin</li>
      <li>VERB-Part: saanud, kuulnud, tulnud, antud, käinud, läinud, tehtud, teinud, pandud, lisatud</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: huvitav, erinevaid, erinevad, erinevate, huvitavad, leviv, odav, elavana, erinev, erinevatest</li>
      <li>AUX-Fin: on, pole, oleks, ole, olen, võib, peaks, peab, oled, võiks</li>
      <li>VERB-Fin: on, tuleb, saab, tea, läheb, saa, arvan, pole, teeb, tahaks</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: huvitav, ülejäänud, erinevaid, erinevad, erinevate, huvitavad, leviv, odav, surnud, tulnud</li>
      <li>ADJ-Sup: Tegemata, harmoniseerimata, lahendamata, niitmata, poolitamata, tasumata, tasustamata, treenimata, täpsustamata</li>
      <li>AUX: on, oli, pole, oleks, ole, olen, võib, peaks, olnud, olema</li>
      <li>AUX-Fin: on, oli, pole, oleks, ole, olen, võib, peaks, peab, oled</li>
      <li>AUX-Part: olnud, võinud, pidanud, saanud, pinanud, v6inud</li>
      <li>AUX-Sup: olema, olemagi, saama</li>
      <li>NOUN-Part: nakatunuid, surnuid, nakatunut, nakatunu, nakatunust, surnut, tänud, haigestunuid, haigestunut, haigestunute</li>
      <li>VERB-Fin: on, tuleb, saab, tea, läheb, tuli, läks, saa, arvan, pole</li>
      <li>VERB-Part: saanud, kuulnud, tulnud, käinud, läinud, teinud, jäänud, võtnud, näinud, kirjutanud</li>
      <li>VERB-Sup: olemas, tegema, minema, hakkama, saama, maksma, kirjutama, mõtlema, rääkimata, tulema</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: antud, teatud, huvitav, tehtud, asetatud, karastatud, mainitud, peidetud, seotud, tuntud</li>
      <li>NOUN-Part: nakatunutest, Kirjapandu, Nakatunuid, eeltoodu, haigestunutest, lahtiharutatuna, nakatunute, surnu, tarbitu, väljalülitatuna</li>
      <li>VERB-Fin: tehakse, hakatakse, tahetakse, pandi, võeta, öeldakse, hakati, hirmutatakse, küsitakse, lubata</li>
      <li>VERB-Part: antud, tehtud, pandud, lisatud, kirjutatud, loodud, öeldud, mõeldud, planeeritud, täidetud</li>
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
      <li>ADJ: selline, sama, sellist, samasugune, sellised, niisugune, samad, samasugused, samasugust, sedasama</li>
      <li>DET: see, selle, seda, need, selline, sama, neid, sellest, sellist, teine</li>
      <li>PRON: see, seda, selle, sellest, need, neid, selles, sellega, nende, selleks</li>
      <li>PROPN: Sama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: mingisugust, mingisuguseid, mõnda, mõndagi, mõned, mõni, mõnigi</li>
      <li>DET: mingi, üks, mingit, ühe, mingid, mõni, mõne, mõned, mitu, mingeid</li>
      <li>PRON: midagi, keegi, muud, paljud, kedagi, kellegi, miski, millegi, mõned, üks</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADJ: milline, millise, millist, millistest</li>
      <li>DET: mis, millaised, millises</li>
      <li>PRON: mis, kes, mida, mille, millest, kelle, milles, keda, kellele, kel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADJ: omas</li>
      <li>DET: nende</li>
      <li>PRON: ma, oma, ta, sa, minu, mina, mul, nad, meie, me</li>
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
      <li>DET: kogu, kõik, iga, igal, igas, kõiki, igast, kõigi, kõigil, mõlemas</li>
      <li>PRON: kõik, kõike, kõigile, kõigil, kõige, mõlemad, igal, kõigi, k6ik, kõigest</li>
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
      <li>NUM: 2, 10, 3, 1, kaks, 100, 4, 20, ühe, paar</li>
      <li>PROPN: saku0007</li>
      <li>SYM: %, -.-</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: esimene, 27., 3., esimese, esimest, teises, 29., teine, 1., esimeses</li>
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
      <li>PRON: oma, omal, omale, omadega, omaks, omad, omade, omaga, omasid, omast</li>
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
      <li>AUX-Fin: olen, oleme, olin, pean, oleksin, saan, võin, pidin, olime, peame</li>
      <li>PRON: ma, minu, mina, mul, meie, me, mulle, meil, mu, mind</li>
      <li>VERB-Fin: arvan, sain, lähen, loodan, kirjutasin, tean, saan, palun, usun, mõtlen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: oled, võid, ära, pead, olete, ole, saate, ärge, oledki, olge</li>
      <li>PRON: sa, sinu, te, sul, sina, sind, sulle, su, teie, teile</li>
      <li>VERB-Fin: saad, tead, teed, vaata, mine, arvad, tee, mõtle, tahad, lähed</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: on, oli, võib, peab, saab, olid, ongi, sai, peavad, pidi</li>
      <li>DET: nende</li>
      <li>PRON: ta, nad, tema, talle, tal, teda, nende, neile, neil, nemad</li>
      <li>VERB-Fin: on, tuleb, saab, läheb, tuli, läks, teeb, ütles, jääb, sai</li>
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
          <li>ADV: jne, vms, jms, nt, st, mh, a, imo, jm, PS</li>
          <li>CCONJ: a, e., e</li>
          <li>INTJ: PS, mdx, lol, wtf.</li>
          <li>NOUN: a, ATP, p, z, b, a., NI, k, s, %</li>
          <li>PROPN: le, a., YOU, |=X=|, rs1, BMW, USA, A.Le, B., Macu1</li>
          <li>SYM: %, &, CO2, TR-23, €, M-st, S3-el, i-</li>
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
          <li>ADP: eest, jaoks, kohta, peale, puhul, pärast, järgi, all, vastu, alla</li>
          <li>ADV: ette, peale, üle</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: peale, üle, ilma, enne, pärast, koos, läbi, tänu, mööda, kuni</li>
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
          <li>AUX: ole, saa, olnud, ei, pea, tohi, oleks, olegi, peaks, tohiks</li>
          <li>AUX-Fin: ole, saa, olnud, pea, tohi, oleks, olegi, peaks, tohiks, tundu</li>
          <li>VERB-Fin: tea, saa, ole, usu, taha, lähe, hakka, suuda, oska, näe</li>
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
          <li>ADJ: chill, ultimagte</li>
          <li>ADV: anyway, Logisch, OK, ala, h.ui, imo, maybe, one-by-one, sure, btw</li>
          <li>INTJ: no, omg, HUI, Sorry, Sry, bljääd, nolife, wtf, lol, wtf.</li>
          <li>NOUN: offtopic, ratio, death, E, I, Light, Monolog, Pop, So, Un</li>
          <li>PROPN: on, ice, A, COVID-19, Enthusiasistic, le, youtube'i, Beami****, Beef, Du</li>
          <li>X: to, My, Suchen, You, da, expert, from, leading, listen, need</li>
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
          <li>NOUN: keeramis-, raputamis-, PR-, ajakirjak-, karantiini, kirja-, kirjandus-, lõuna-, müügi-, piima-</li>
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
          <li>ADJ: 27., 3., 29., 1., 5., 8., 9., 15., 18., 2.</li>
          <li>NUM: 2, 10, 3, 1, 100, 4, 20, 5, 11, 000</li>
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
          <li>ADJ: esimene, esimese, esimest, teine, teises, esimeses, teisele, esimesel, teist, esimesed</li>
          <li>NUM: kaks, ühe, paar, üks, kahe, kolm, miljonit, paari, poole, miljardit</li>
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
          <li>ADV: aint, Pmst, Sitaks, pohh, põmst, imo</li>
          <li>NOUN: bemmi, põmmi, sapikale, alekokki, bemari, bemii, bemm, bemme, bemmist, bena</li>
          <li>PROPN: senale, Alekukke, jeepudele</li>
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
          <li>ADJ: k6va, lol, lyhike, vanat, 3-se, Eestiline, S|tt, Tegelikul, VAFFA, eequse</li>
          <li>ADJ-Part: jooduav, järgevad, kaesolevasse, katastatud, korrtaldatud, krõvisevaid, kõkuvaid, liikuvad, risitava, t2navatel</li>
          <li>ADP: yle, est, jaosk, juure, kuures, pärast´, seos, ymber</li>
          <li>ADV: nyyd, yldse, yhes6naga, kyll, 2kki, Sellepräast, akki, j2rgi, k2tte, kindalsti</li>
          <li>AUX: ple, olex, vöib, 0le, 2ra, e, olek, olrnudki, pinanud, pn</li>
          <li>AUX-Fin: ple, olex, vöib, 0le, olek, olrnudki, pn, pold, poleksi, v6ib</li>
          <li>AUX-Part: pinanud, v6inud</li>
          <li>CCONJ: vòi, ag, jja, voi, vöi</li>
          <li>DET: yks, igaksu, k6igelt, k6iki, m6nes, m6ni, migni, millaised, mingel, mingid</li>
          <li>INTJ: aitähh, Aitah, Ooot, tralllaaaa, v2</li>
          <li>NOUN: miis, ühsikonna, Minupuhl, autut, dushi, henerasvad, medistsiinigeenius, v2limus, /me, 6hku</li>
          <li>NUM: 10, seitseme, yks, ùks</li>
          <li>PRON: k6ik, KÕIIK, Mede, asee, igauks, kelle, koigega, kôik, köik, küik</li>
          <li>PROPN: saku, eestis, eleonore, ice, msnnis, ale, delfi, porche, saaremaa, saxast</li>
          <li>PUNCT: !!11, 8, ???+</li>
          <li>SCONJ: ehki, ku, magu, nigu, sis</li>
          <li>VERB-Conv: v6rreldes, l2htudes, oller, pääste</li>
          <li>VERB-Fin: kkeelas, n2itab, olex, saax, teind, yritas, Karanteerin, Pold, Täitan, ajetakse</li>
          <li>VERB-Inf: näitata, 6ppida, aidat, avaldadda, hakkata, heitada, k6ristada, komenteerida, kysida, n2ha</li>
          <li>VERB-Part: näind, arvand, eletatud, hakkanud, kuulnd, läind, m6elnd, mainiutd, n2htud, n2inud</li>
          <li>VERB-Sup: olema, haippima, m6tlema, nõustamakas, panematta, paneme, põleema, sätima, tegutsema, varama</li>
          <li>X: aegaset, n6u</li>
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
      <li>VERB-Fin--NOUN (14)</li>
      <li>VERB-Fin--NOUN-Gen (8)</li>
      <li>VERB-Fin--NOUN-Ine (1)</li>
      <li>VERB-Fin--NOUN-Nom (1212)</li>
      <li>VERB-Fin--NOUN-Par (180)</li>
      <li>VERB-Fin--NOUN-Par-ADP(alla) (1)</li>
      <li>VERB-Fin--PRON-Nom (1474)</li>
      <li>VERB-Fin--PRON-Par (35)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Nom (60)</li>
      <li>VERB-Inf--NOUN-Par (3)</li>
      <li>VERB-Inf--PRON-Nom (74)</li>
      <li>VERB-Inf--PRON-Par (3)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Nom (93)</li>
      <li>VERB-Part--NOUN-Par (13)</li>
      <li>VERB-Part--PRON-Nom (147)</li>
      <li>VERB-Part--PRON-Par (5)</li>
      <li>VERB-Sup--NOUN-Nom (47)</li>
      <li>VERB-Sup--NOUN-Par (1)</li>
      <li>VERB-Sup--PRON-Nom (53)</li>
      <li>VERB-Sup--PRON-Par (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Gen (5)</li>
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Conv--NOUN-Par (37)</li>
      <li>VERB-Conv--PRON-Nom (2)</li>
      <li>VERB-Conv--PRON-Par (5)</li>
      <li>VERB-Fin--NOUN (9)</li>
      <li>VERB-Fin--NOUN-Add (2)</li>
      <li>VERB-Fin--NOUN-Gen (287)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(üle) (1)</li>
      <li>VERB-Fin--NOUN-Nom (158)</li>
      <li>VERB-Fin--NOUN-Par (842)</li>
      <li>VERB-Fin--NOUN-Par-ADP(mööda) (1)</li>
      <li>VERB-Fin--PRON-Gen (39)</li>
      <li>VERB-Fin--PRON-Nom (54)</li>
      <li>VERB-Fin--PRON-Par (412)</li>
      <li>VERB-Inf--NOUN (3)</li>
      <li>VERB-Inf--NOUN-Gen (59)</li>
      <li>VERB-Inf--NOUN-Nom (127)</li>
      <li>VERB-Inf--NOUN-Par (373)</li>
      <li>VERB-Inf--PRON-Gen (4)</li>
      <li>VERB-Inf--PRON-Nom (18)</li>
      <li>VERB-Inf--PRON-Par (177)</li>
      <li>VERB-Part--NOUN (4)</li>
      <li>VERB-Part--NOUN-Abl (1)</li>
      <li>VERB-Part--NOUN-Gen (37)</li>
      <li>VERB-Part--NOUN-Nom (98)</li>
      <li>VERB-Part--NOUN-Par (110)</li>
      <li>VERB-Part--PRON-Gen (7)</li>
      <li>VERB-Part--PRON-Nom (44)</li>
      <li>VERB-Part--PRON-Par (46)</li>
      <li>VERB-Sup--NOUN-Gen (22)</li>
      <li>VERB-Sup--NOUN-Nom (5)</li>
      <li>VERB-Sup--NOUN-Par (118)</li>
      <li>VERB-Sup--PRON-Gen (4)</li>
      <li>VERB-Sup--PRON-Nom (4)</li>
      <li>VERB-Sup--PRON-Par (44)</li>
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
  <li>This corpus contains 38 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: tundma end, tundma ennast, pidama ennast, tapma end, tegema end, hindama ennast, hõõruma ennast, ilmutama ennast, kahjustama iseennast, kaitsma ennast, koguma ennast, laskma end, leidma ennast, liigitama ennast, logima ennast, lohutama end, lülitama ennast, nimetama end, nimetav end, närima ennast, panema ennast, parandama ennast, pidama end, pidav end, pistma ennast, puhastama end, päästma end, registreerima end, siduma end, sundima end, süüdistama ennast, tegema iseend, tervendama end, tutvustama ennast, vedama end, vedama ennast, väitma end, ärritama ennast</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>nsubj:cop</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>dislocated</a>, <a>clf</a></li>
</ul>
