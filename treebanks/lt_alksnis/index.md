---
layout: base
title:  'UD_Lithuanian-ALKSNIS'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Lithuanian ALKSNIS

Language: [Lithuanian](/lt/index.html) (code: `lt`)<br/>
Family: Indo-European, Baltic

This treebank has been part of Universal Dependencies since the UD v2.4 release.

The following people have contributed to making this treebank part of UD: Andrius Utka, Erika Rimkutė, Agnė Bielinskienė, Jolanta Kovalevskaitė, Loïc Boizou, Gabrielė Aleksandravičiūtė, Kristina Brokaitė, Daniel Zeman.

Repository: [UD_Lithuanian-ALKSNIS](https://github.com/UniversalDependencies/UD_Lithuanian-ALKSNIS)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udlt_alksnis25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 4.0

Genre: news, nonfiction, legal, fiction

Questions, comments?
General annotation questions (either Lithuanian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Lithuanian-ALKSNIS/issues).
If you want to collaborate, please contact [semantikalt&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com, andrius&nbsp;•&nbsp;utka&nbsp;(æt)&nbsp;vdu&nbsp;•&nbsp;lt, zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The Lithuanian dependency treebank ALKSNIS v3.0 (Vytautas Magnus University).



This is a conversion of the ALKSNIS treebank to Universal Dependencies.
The original treebank was annotated in a style derived from the Prague Dependency Treebank of Czech.
The original treebank is available at
[https://github.com/Semantika2/Alksnis-v.3.0](https://github.com/Semantika2/Alksnis-v.3.0).
ALKSNIS v2.1 is published in the CLARIN LT repository at
[http://hdl.handle.net/20.500.11821/10](http://hdl.handle.net/20.500.11821/10).
(Some users experience DNS errors when trying to access the repository;
configuring the client machine to use 8.8.8.8 as the DNS server may help.
See also [http://clarin-lt.lt/?page_id=86](http://clarin-lt.lt/?page_id=86).)

ALKSNIS v3 consists of 3,643 syntactically annotated sentences.
Each node of a tree corresponds to a word, a punctuation mark or other text
element (symbol, digit etc.) within a sentence. The following information is
presented for each node: 1) a used form; 2) a lemma; 3) a morphology tag,
and 4) a syntactic function (subject, object, etc.). Dependencies are shown
by links between words.

The morphology tag set Jablonskis is used since ALKSNIS v2.2 and in the XPOS
column of the UD conversion. This is a change from ALKSNIS 2 where a version
of the MULTEXT-East tag set was used.
<!--A version of the MULTEXT-East
(http://nl.ijs.si/ME/V4/msd/html/index.html)
tag set is used in ALKSNIS v2 and in the XPOS column of the UD conversion.-->
Syntactically annotated sentences
are corrected according to guidelines that were created by scientists of
VMU CCL, following rules of Prague Dependency Treebank. All the sentences are
being manually checked and corrected by a group of linguists.

## Acknowledgments

From v2.1 to v3.0 the treebank was developed within the project "Semantika2"
(Nr. 02.3.1-CPVA-V-527-01-0002). The project was funded by European Structural Funds.

## References

* Agnė Bielinskienė, Loïc Boizou, Jolanta Kovalevskaitė, Erika Rimkutė (2016): Lithuanian Dependency Treebank ALKSNIS.
In: I. Skadiņa and R. Rozis (Eds.): Human Language Technologies – The Baltic Perspective, pp. 107–114. Amsterdam: IOS Press.
doi:10.3233/978-1-61499-701-6-107
[http://fcim.vdu.lt/~erika_rimkute/straipsniai/Alksnis_HLT.pdf](http://fcim.vdu.lt/~erika_rimkute/straipsniai/Alksnis_HLT.pdf),
[http://ebooks.iospress.nl/volumearticle/45523](http://ebooks.iospress.nl/volumearticle/45523).



# Statistics of UD Lithuanian ALKSNIS

## POS Tags

[ADJ](lt_alksnis-pos-ADJ.html) – [ADP](lt_alksnis-pos-ADP.html) – [ADV](lt_alksnis-pos-ADV.html) – [AUX](lt_alksnis-pos-AUX.html) – [CCONJ](lt_alksnis-pos-CCONJ.html) – [DET](lt_alksnis-pos-DET.html) – [INTJ](lt_alksnis-pos-INTJ.html) – [NOUN](lt_alksnis-pos-NOUN.html) – [NUM](lt_alksnis-pos-NUM.html) – [PART](lt_alksnis-pos-PART.html) – [PRON](lt_alksnis-pos-PRON.html) – [PROPN](lt_alksnis-pos-PROPN.html) – [PUNCT](lt_alksnis-pos-PUNCT.html) – [SCONJ](lt_alksnis-pos-SCONJ.html) – [SYM](lt_alksnis-pos-SYM.html) – [VERB](lt_alksnis-pos-VERB.html) – [X](lt_alksnis-pos-X.html)

## Features

[Abbr](lt_alksnis-feat-Abbr.html) – [AdpType](lt_alksnis-feat-AdpType.html) – [Aspect](lt_alksnis-feat-Aspect.html) – [Case](lt_alksnis-feat-Case.html) – [Definite](lt_alksnis-feat-Definite.html) – [Degree](lt_alksnis-feat-Degree.html) – [Foreign](lt_alksnis-feat-Foreign.html) – [Gender](lt_alksnis-feat-Gender.html) – [Hyph](lt_alksnis-feat-Hyph.html) – [Mood](lt_alksnis-feat-Mood.html) – [Number](lt_alksnis-feat-Number.html) – [NumForm](lt_alksnis-feat-NumForm.html) – [NumType](lt_alksnis-feat-NumType.html) – [Person](lt_alksnis-feat-Person.html) – [Polarity](lt_alksnis-feat-Polarity.html) – [PronType](lt_alksnis-feat-PronType.html) – [PunctType](lt_alksnis-feat-PunctType.html) – [Reflex](lt_alksnis-feat-Reflex.html) – [Tense](lt_alksnis-feat-Tense.html) – [VerbForm](lt_alksnis-feat-VerbForm.html) – [Voice](lt_alksnis-feat-Voice.html)

## Relations

[acl](lt_alksnis-dep-acl.html) – [advcl](lt_alksnis-dep-advcl.html) – [advmod](lt_alksnis-dep-advmod.html) – [advmod:emph](lt_alksnis-dep-advmod-emph.html) – [amod](lt_alksnis-dep-amod.html) – [appos](lt_alksnis-dep-appos.html) – [case](lt_alksnis-dep-case.html) – [cc](lt_alksnis-dep-cc.html) – [ccomp](lt_alksnis-dep-ccomp.html) – [compound](lt_alksnis-dep-compound.html) – [conj](lt_alksnis-dep-conj.html) – [cop](lt_alksnis-dep-cop.html) – [csubj](lt_alksnis-dep-csubj.html) – [csubj:pass](lt_alksnis-dep-csubj-pass.html) – [dep](lt_alksnis-dep-dep.html) – [det](lt_alksnis-dep-det.html) – [discourse](lt_alksnis-dep-discourse.html) – [flat](lt_alksnis-dep-flat.html) – [flat:foreign](lt_alksnis-dep-flat-foreign.html) – [iobj](lt_alksnis-dep-iobj.html) – [mark](lt_alksnis-dep-mark.html) – [nmod](lt_alksnis-dep-nmod.html) – [nsubj](lt_alksnis-dep-nsubj.html) – [nsubj:pass](lt_alksnis-dep-nsubj-pass.html) – [nummod](lt_alksnis-dep-nummod.html) – [nummod:gov](lt_alksnis-dep-nummod-gov.html) – [obj](lt_alksnis-dep-obj.html) – [obl](lt_alksnis-dep-obl.html) – [obl:arg](lt_alksnis-dep-obl-arg.html) – [orphan](lt_alksnis-dep-orphan.html) – [parataxis](lt_alksnis-dep-parataxis.html) – [punct](lt_alksnis-dep-punct.html) – [root](lt_alksnis-dep-root.html) – [xcomp](lt_alksnis-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3642 sentences and 70047 tokens.</li>
</ul>

<ul>
<li>This corpus contains 11856 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 33 types of words with spaces. Examples: 95 46, - 977, 50 - 1829, 10 . 6, 10 . 7, 144 - 5249, 1993 / 13 / EEB, 2004 07 28, 51 - 1893, 6 - 5661, 70 - 2630, 86 320, 994 98, CFI = 0,87, C​H​I​ ​-​ ​S​Q​U​A​R​E​ ​=​ ​1​4​0​,​8​1, D​A​g​ ​=​ ​D​A​ ​+​ ​∑​ ​k​n​ ​D​P​n​ ​+​ ​∑​ ​D​S​n, GFI = 0,89, N = 317, N = 368, NNFI = 0,84, RMSEA = 0,055, a = 0,624, a = 0,721, a = 0,760, a = 0,832, n = 4186, odd - ball, p < 0,01, p = 0,000, r = 0,36, r = 0,39, rpb = 0,42, t 58 = 4,084</li>
</ul>

<ul>
<li>This corpus contains 28 types of words that contain both letters and punctuation. Examples: 15-oji, n-tosios, 11-osios, Irene'os, t., y., ĮV-459, &amp;, (ne)pasitvirtinimą, 12-ojo, 12-ąjį, 16-ąją, 1K-237/D1-394, 1V-292, 2009-ųjų, 3D-473/D1-427, 77-ąją, 8-ajame, E-valdžios, Jane's, Pierre-Louis, Pjer-Luji, SIN-16/2010, White'u, makro-, mikro-, pa..., ĮV-529</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 71 word types tagged as particles (PART): Kita, Kur, Lai, Nejau, Nejaugi, O, Ogi, Tad, Tarkim, Tuo, antai, ar, argi, be, beje, bene, bent, bet, beveik, būtent, dar, esą, gal, galbūt, gi, ir, irgi, jau, juk, kad, kaip, kas, kažin, ko, kone, kuo, lyg, mat, matyt, na, ne, negi, nei, net, netgi, neva, nors, nė, per, regis, rodos, tai, taigi, taip, tarsi, tau, tegu, tegul, ten, tik, tiktai, turbūt, vargu, vien, vis, visgi, vos, ypač, čia, šit, štai</li>
</ul>

<ul>
<li>This corpus contains 41 lemmas tagged as pronouns (PRON): Maniškis, abu, anoks, aš, bet, daug, ji, jie, jis, kai, kam, kas, kažkas, kažkoks, kažkuris, keleri, keletas, keli, kitas, kitkas, kitoks, kuo, n-tas, nedaug, niekas, nė, pati, savas, savo, savęs, tai, tam, tamsta, tu, vienas, visa, viskas, visoks, Šis, šioks, šitoks</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as determiners (DET): anas, joks, kiekvienas, koks, kuris, pats, tas, toks, visas, šis, šitas</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): būti</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: būti</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>ADV: kniedyte, prašyte</li>
    <li>AUX: būdama</li>
    <li>VERB: įgyvendindama, dirbdamas, siekdama, atsakydamas, remdamasi, žvelgdama, atlikdami, būdami, ieškodamas, laikydamasis</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: yra, buvo, būtų, bus, esu, buvau, būna, esate, esi, būdavo</li>
    <li>VERB: gali, turi, yra, nėra, reikia, nebuvo, rodo, buvo, turėtų, sakė</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: buvus, esant</li>
    <li>VERB: siekiant, taikant, likus, remiantis, nepaisant, naudojant, įgyvendinant, išskyrus, teikiant, norint</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: būti</li>
    <li>VERB: teikti, pateikti, užtikrinti, būti, sukurti, dirbti, kurti, skatinti, įgyvendinti, padaryti</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: esąs, buvusi, buvę, buvęs, esą</li>
    <li>VERB: galima, nustatyta, pateikiama, skirta, siekiama, nurodyto, planuota, aptariami, nustatytas, susiję</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>NOUN: kūdikis, giminės, kiaulė, nauda, pabaisai, valkatos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: socialinės, geros, metinės, viešosios, naujų, teisinės, gretutinių, skirtingų, svarbi, įvairios</li>
      <li>AUX-Conv: būdama</li>
      <li>AUX-Part: buvusi</li>
      <li>DET: kurios, šios, ši, kuri, kurioje, tokia, šią, ta, tokios, tą</li>
      <li>NOUN: kultūros, valstybės, paslaugos, įmonės, apsaugos, politikos, teisės, visuomenės, knygos, šeimos</li>
      <li>NUM: dvi, vieną, pirmoji, antroji, trijų, viena, penkias, 15-oji, antroje, dviejų</li>
      <li>PRON: jos, ji, jų, kitų, ją, viena, jai, tam, kai, kitos</li>
      <li>PROPN: Lietuvos, Europos, Lietuvoje, Lietuva, Lietuvai, Kalėdų, LIETUVOS, EUROPOS, Lietuvą, Marcinkevičienė</li>
      <li>VERB-Conv: įgyvendindama, siekdama, remdamasi, žvelgdama, norėdama, vadovaudamasi, Analizuodamos, Apibendrindama, Apibrėždamos, Deklaruodamos</li>
      <li>VERB-Part: nustatyta, žyminčių, aptariamos, pateikiamos, susijusios, suteiktą, nustatytos, pateikiama, skirta, skirtos</li>
      <li>X: naudos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: vidutinio, smulkiojo, mokslinių, socialinių, naujų, pagrindinis, viešojo, finansiniai, didelis, pagrindiniai</li>
      <li>AUX-Part: esąs, buvęs, esą</li>
      <li>DET: to, kurie, šio, kuris, toks, šį, šiame, visą, kurių, visus</li>
      <li>NOUN: duomenų, pašto, darbo, asmens, verslo, metų, tyrimų, komiteto, metu, litų</li>
      <li>NUM: du, vieną, milijonų, pirmą, tūkstančių, abu, dviejų, trijų, tris, vieno</li>
      <li>PRON: jų, jis, jie, jo, juos, jį, jam, vienas, kitų, kai</li>
      <li>PROPN: Kauno, Vilniaus, Šengeno, Vilnius, Mažuolis, Vilniuje, Glaveckas, Algirdas, Europolo, Haičio</li>
      <li>VERB: nurodyto, aptariami, susiję, pateikti, nagrinėjamas, analizuojami, gauti, skirti, susijęs, tiriamojo</li>
      <li>VERB-Conv: dirbdamas, atsakydamas, atlikdami, būdami, ieškodamas, laikydamasis, norėdamas, norėdami, palikdamas, pateikdamas</li>
      <li>VERB-Part: nurodyto, aptariami, susiję, pateikti, nagrinėjamas, analizuojami, gauti, susijęs, tiriamojo, turinčių</li>
      <li>X: jaunųjų</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: būtina, svarbu, sunku, sveika, nesvarbu, tikėtina, verta, aišku, keista, tikslinga</li>
      <li>AUX-Part: buvę</li>
      <li>DET: tai, visa, tatai, Šitai</li>
      <li>NUM: antra, pirma, Trečia</li>
      <li>PRON: visa, kas, viena, tai</li>
      <li>VERB-Part: galima, siekiama, planuota, žinoma, nustatyta, neįmanoma, pateikiama, skiriama, skirta, rašoma</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>PRON: abi, mudu, mudviejų, Jiedu, abiejų, abiem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: mokslinių, naujų, socialinių, įvairių, skirtingų, politinių, viešųjų, finansiniai, metinės, gretutinių</li>
      <li>AUX-Fin: yra, buvo, bus, būtų, esate, būdavo, būna, esame, Būsime, buvome</li>
      <li>AUX-Part: esą</li>
      <li>DET: kurie, kurių, visų, šių, visus, kurios, visi, tokių, tie, šie</li>
      <li>NOUN: duomenų, metų, tyrimų, litų, inovacijų, autorių, namuose, žmonės, sąlygas, žmonių</li>
      <li>NUM: milijonų, tūkstančių, pirmųjų, tūkstančiai, šimtai, milijardų, milijonai, milijonus, pirmaisiais, pirmieji</li>
      <li>PRON: jų, jie, kitų, juos, mūsų, kai, mes, jos, jiems, kiti</li>
      <li>PROPN: Kalėdų, Kalėdos, Turkevičiai, Balkanų, Maximose, Babtų, Kalvelių, Kalėdas, Karibų, Karoliniškių</li>
      <li>VERB: gali, turi, yra, nėra, galite, aptariami, galime, turite, rodo, susiję</li>
      <li>VERB-Conv: atlikdami, būdami, norėdami, siekdami, skubėdami, žiūrėdami, Analizuodamos, Apibrėždamos, Deklaruodamos, Nekaltindami</li>
      <li>VERB-Fin: gali, turi, yra, nėra, galite, galime, turite, rodo, turime, turėtų</li>
      <li>VERB-Part: aptariami, susiję, žyminčių, aptariamos, pateikiamos, pateikti, susijusių, nustatytų, skirtos, analizuojami</li>
      <li>X: jaunųjų</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: socialinės, vidutinio, smulkiojo, geros, pagrindinis, viešojo, viešosios, didelis, svarbi, teisinės</li>
      <li>AUX-Conv: būdama</li>
      <li>AUX-Fin: yra, buvo, būtų, bus, esu, buvau, esi, būna, būsi, būčiau</li>
      <li>AUX-Part: esąs, buvusi, buvęs</li>
      <li>DET: to, šio, kuris, toks, visą, šios, kurios, šį, ši, šiame</li>
      <li>NOUN: pašto, kultūros, valstybės, apsaugos, paslaugos, darbo, asmens, įmonės, politikos, verslo</li>
      <li>NUM: vieną, pirmoji, pirmą, antroji, viena, vieno, pirmas, 15-oji, Antrame, antroje</li>
      <li>PRON: jis, jos, jo, aš, mano, man, ji, jį, jam, vienas</li>
      <li>PROPN: Lietuvos, Europos, Lietuvoje, Kauno, Vilniaus, Lietuva, Šengeno, Lietuvai, Vilnius, LIETUVOS</li>
      <li>VERB-Conv: įgyvendindama, dirbdamas, siekdama, atsakydamas, remdamasi, žvelgdama, ieškodamas, laikydamasis, norėdama, norėdamas</li>
      <li>VERB-Fin: gali, turi, yra, nėra, sakė, buvo, nebuvo, rodo, privalo, turėtų</li>
      <li>VERB-Part: nustatyta, nurodyto, suteiktą, nagrinėjamas, pateikiama, skirta, analizuojama, nagrinėjama, nustatytą, pateikta</li>
      <li>X: naudos</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: naujas, naujus, kultūrinį, naują, palankias, paskutinę, finansinę, ypatingą, įvairius, bendrą</li>
      <li>ADP: į, apie, per, už, pagal, prieš, po, pro, pas, aplink</li>
      <li>DET: visą, šį, tą, visus, kurį, šią, kurią, tuos, kuriuos, tokius</li>
      <li>NOUN: sąlygas, duomenis, informaciją, metus, veiklą, dieną, paslaugą, sistemą, gyvenimą, paslaugas</li>
      <li>NUM: vieną, pirmą, tris, du, dvi, penkias, trejus, antrąjį, penkerius, pirmąją</li>
      <li>PRON: ką, juos, jį, mane, kitus, ją, kitą, vieną, mus, save</li>
      <li>PROPN: Lietuvą, Europą, Lenkiją, Vycką, Rusiją, Ameriką, Bainajų, Borgesą, Diurčanį, Džuljetą</li>
      <li>VERB-Part: suteiktą, nustatytas, nustatytą, esamą, skirtą, susijusius, padarytą, pagrįstą, pateiktus, taikomas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: moksliniams, mažai, daliniam, naujiems, Valstybinei, mokomajai, naujoms, finansiniams, fiziniams, gražiam</li>
      <li>DET: visiems, tam, kuriems, šiam, kiekvienai, kuriai, pačiam, tiems, kiekvienam, visai</li>
      <li>NOUN: pavyzdžiui, inovacijoms, tarnybai, subjektams, verslui, visuomenei, tyrimams, žmonėms, gavėjui, vaikams</li>
      <li>NUM: dviem, abiem, keturiems, Pirmajai, antram, tretiesiems, trims, vienai, vieneriems</li>
      <li>PRON: man, jam, jiems, mums, jai, jums, sau, kitiems, tau, kitam</li>
      <li>PROPN: Lietuvai, Adamkui, Haičiui, Kaunui, Mažuoliui, Adomui, Anikei, Dolskiui, Eltai, Estijai</li>
      <li>VERB-Part: ketinantiems, neturintiems, nurodytam, teikiantiems, turinčiam, aptariamajai, ateinantiems, atitinkamoms, atitinkantiems, atstovaujamai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: socialinės, vidutinio, smulkiojo, mokslinių, naujų, socialinių, įvairių, geros, skirtingų, politinių</li>
      <li>ADP: iš, dėl, nuo, iki, prie, tarp, ant, po, be, anot</li>
      <li>DET: to, šio, kurių, šios, kurios, visų, šių, kurio, tokių, jokių</li>
      <li>NOUN: duomenų, pašto, kultūros, valstybės, apsaugos, paslaugos, darbo, asmens, įmonės, politikos</li>
      <li>NUM: trijų, milijonų, dviejų, tūkstančių, vieno, antrojo, keturių, milijono, pirmo, pirmųjų</li>
      <li>PRON: savo, jų, jos, jo, kitų, mano, mūsų, nieko, jūsų, tavo</li>
      <li>PROPN: Lietuvos, Europos, Kauno, Vilniaus, Šengeno, Kalėdų, LIETUVOS, EUROPOS, Marcinkevičienės, Rusijos</li>
      <li>VERB-Part: nurodyto, žyminčių, susijusių, nustatytų, skirtų, tiriamojo, turinčių, gautų, grįžtamosios, modifikuotų</li>
      <li>X: jaunųjų, naudos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ill
    <ul>
      <li>NOUN: Ganyklon, akiratin, ežeran, kieman, kirpyklon, klasėn, nuosavybėn, supirktuvėn, žemėn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: pastaraisiais, pasauliniu, finansiniais, aiškiais, pastaruoju, aktualiais, ankstesniais, atvira, dabartine, dideliu</li>
      <li>ADP: su, po, ties</li>
      <li>DET: šiuo, tuo, kuria, kuriuo, tokia, tokiu, šia, tais, šiais, šiomis</li>
      <li>NOUN: metu, metais, tvarka, duomenimis, atžvilgiu, atveju, būdu, klausimais, požiūriu, sąlygomis</li>
      <li>NUM: dviem, penkiais, pirmaisiais, trimis, Antraisiais, dešimčia, penkiomis, septintąja, trečiosiomis</li>
      <li>PRON: juo, kitais, tam, kitomis, kitu, kuo, jomis, jais, vienu, ja</li>
      <li>PROPN: Maskva, Rusija, Ana, Atlantu, Glasseriu, Glavecku, Jamesu, Kurnikova, Landsbergiu, Lietuva</li>
      <li>VERB-Part: nustatyta, nurodytais, nurodytu, pateikta, praėjusiais, esančiomis, nustatytais, ataugusiais, atliekančiu, atliktais</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: viešojoje, finansinėje, strateginiame, finansiniuose, metinėje, viešajame, įvairiose, bendrame, informacinėje, kokybiniuose</li>
      <li>DET: šiame, kurioje, visoje, šioje, kuriose, kuriame, kokiame, kuriuose, toje, tokiose</li>
      <li>NOUN: straipsnyje, namuose, srityje, knygoje, dalyje, užsienyje, pasaulyje, gyvenime, punkte, balanse</li>
      <li>NUM: Antrame, antroje, pirmame, pirmojoje, Trečiame, pirmajame, trečioje, 8-ajame, Pirmuose, antrajame</li>
      <li>PRON: kituose, jame, juose, viename, joje, manyje, kitose, kitoje, kai, jose</li>
      <li>PROPN: Lietuvoje, Vilniuje, Europoje, Kaune, Londone, LIETUVOJE, Vašingtone, Klaipėdoje, Kremliuje, Maximose</li>
      <li>VERB-Part: skirtoje, atnaujintoje, esančioje, konsoliduotoje, reglamentuojančiuose, vykusiame, Pradedančiame, Priimtame, Remontuojamame, aptarnaujamoje</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: pagrindinis, finansiniai, metinės, didelis, pagrindiniai, svarbi, įvairios, būtina, svarbus, bloga</li>
      <li>AUX-Part: esąs, buvusi, buvęs, esą</li>
      <li>DET: kurie, kuris, toks, ši, kuri, kurios, pats, šis, visi, tas</li>
      <li>NOUN: dalis, žmonės, inspekcija, duomenys, tėvas, knyga, įmonė, vaikai, darbas, sistema</li>
      <li>NUM: du, pirmoji, antroji, abu, dvi, viena, pirmas, trys, 15-oji, tūkstančiai</li>
      <li>PRON: jis, jie, kas, aš, ji, vienas, mes, jos, tu, kai</li>
      <li>PROPN: Lietuva, Vilnius, Mažuolis, Glaveckas, Marcinkevičienė, Algirdas, Juozeliūnienė, Andrius, Estija, Juozaitis</li>
      <li>VERB: aptariami, susiję, aptariamos, pateikiamos, pateikti, nagrinėjamas, pateikiama, skirta, skirtos, analizuojama</li>
      <li>VERB-Part: aptariami, susiję, aptariamos, pateikiamos, pateikti, nagrinėjamas, pateikiama, skirta, skirtos, analizuojama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: miels</li>
      <li>NOUN: ponia, Viešpatie, Tėvyne, broli, broliuk, nekentėjai, pašaipūnai, rūkštele, seserys, skaitytojau</li>
      <li>PRON: tu</li>
      <li>VERB-Part: godotinas</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: smulkiojo, viešosios, viešojo, viešųjų, pastaraisiais, viešojoje, aukštojo, aukštųjų, bendrąją, didžioji</li>
      <li>DET: tatai, toji, Tasai, patsai, toksai</li>
      <li>NUM: pirmoji, antroji, 15-oji, antrojo, antrąjį, pirmojoje, pirmąją, 11-osios, Trečioji, antrasis</li>
      <li>PRON: jinai, n-tosios</li>
      <li>VERB-Part: tiriamojo, grįžtamosios, aptariamosios, išvykusiųjų, tiriamųjų, grįžusieji, gyvenamosios, vadinamoji, aptariamoji, baudžiamosios</li>
      <li>X: jaunųjų</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: socialinės, būtina, vidutinio, mokslinių, naujų, socialinių, svarbu, įvairių, geros, metinės</li>
      <li>AUX-Part: esąs, buvusi, buvę, buvęs, esą</li>
      <li>DET: tai, to, kurie, kurios, šio, šios, kuris, kurių, toks, visą</li>
      <li>NUM: 1, 2, 3, 2006, 4, 5, 6, 25, 7, 10</li>
      <li>PRON: savo, jų, jis, jos, jie, jo, kas, ką, aš, kitų</li>
      <li>VERB-Part: galima, nustatyta, pateikiama, skirta, siekiama, nurodyto, planuota, aptariami, nustatytas, susiję</li>
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
      <li>ADJ: ankstesnių, geresnių, didesnio, didesnė, ankstesniais, didesnę, mažesnis, Ankstesnėse, aukštesniais, didesni</li>
      <li>ADV: daugiau, toliau, geriau, mažiau, labiau, dažniau, vėliau, anksčiau, lengviau, tiksliau</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: socialinės, būtina, vidutinio, smulkiojo, mokslinių, naujų, socialinių, svarbu, įvairių, geros</li>
      <li>ADV: labai, taip, todėl, jau, dabar, tiek, daug, kur, kiek, tikrai</li>
      <li>X: jaunųjų</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: svarbiausias, svarbiausia, svarbiausių, svarbiausius, svarbiausi, geriausios, svarbiausios, artimiausiu, būdingiausi, didžiausia</li>
      <li>ADV: dažniausiai, labiausiai, daugiausia, pirmiausia, greičiausiai, Tikriausiai, daugiausiai, geriausiai, mažiausiai, veikiausiai</li>
      <li>VERB-Part: geidžiamiausiu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>VERB-Conv: Nekaltindami, Nepakibdami, neatidėliodama, nebausdami, nekeisdamas, nepaisydami, neprivalėdamos, nesivaržydamas, nesuvokdama, nevaržydami</li>
      <li>VERB-Fin: nėra, nebuvo, negali, nebus, neturi, nereikia, nebūtų, neviršija, nežinau, nereikėtų</li>
      <li>VERB-Ger: nepaisant, NEŽINANT, Nepretenduojant, neatsiklausus, neatvykus, negavus, nekalbant, nelaikant, nelinksniuojant, nenorint</li>
      <li>VERB-Inf: neiti, neakcentuoti, neapkęsti, neapsiriboti, nebūti, nedirbti, negailėti, negerti, neleisti, nelikti</li>
      <li>VERB-Part: neįmanoma, negalima, neatskiriama, neišreikštų, negalintis, negavęs, neišvengta, nematoma, nesusijęs, nesuvokiama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADV-Conv: kniedyte, prašyte</li>
      <li>AUX-Conv: būdama</li>
      <li>AUX-Fin: yra, buvo, būtų, bus, esu, buvau, būna, esate, esi, būdavo</li>
      <li>AUX-Ger: buvus, esant</li>
      <li>AUX-Inf: būti</li>
      <li>AUX-Part: esąs, buvusi, buvę, buvęs, esą</li>
      <li>VERB: gali, turi, yra, galima, reikia, nustatyta, pateikti, siekiant, rodo, buvo</li>
      <li>VERB-Conv: įgyvendindama, dirbdamas, siekdama, atsakydamas, remdamasi, žvelgdama, atlikdami, būdami, ieškodamas, laikydamasis</li>
      <li>VERB-Fin: gali, turi, yra, reikia, rodo, buvo, turėtų, sakė, privalo, tampa</li>
      <li>VERB-Ger: siekiant, taikant, likus, remiantis, naudojant, įgyvendinant, išskyrus, teikiant, norint, įskaitant</li>
      <li>VERB-Inf: teikti, pateikti, užtikrinti, būti, sukurti, dirbti, kurti, skatinti, įgyvendinti, padaryti</li>
      <li>VERB-Part: galima, nustatyta, pateikiama, skirta, siekiama, nurodyto, planuota, aptariami, nustatytas, susiję</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>AUX-Fin: būdavo</li>
      <li>VERB-Fin: sakydavo, girdavo, kirpdavo, klausdavo, Nematydavau, apnerdavo, atrodydavo, atsitikdavo, būdavo, dirbdavo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: buvo, buvau, buvome</li>
      <li>AUX-Ger: buvus</li>
      <li>AUX-Part: buvusi, buvę, buvęs</li>
      <li>VERB-Fin: nebuvo, buvo, sakė, liko, turėjo, teigė, atsirado, vyko, galėjo, kalbėjo</li>
      <li>VERB-Ger: likus, išskyrus, atlikus, atėjus, nustačius, pasibaigus, prireikus, įvertinus, atsižvelgus, kilus</li>
      <li>VERB-Part: susiję, susijusios, susijusių, susijusi, susijęs, įsitikinęs, išvykusiųjų, susijusius, linkę, buvusių</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: būtų, būčiau, būtum</li>
      <li>VERB-Fin: turėtų, reikėtų, galėtų, būtų, nebūtų, nereikėtų, atrodytų, manytume, norėtų, padėtų</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: būkite, būtų</li>
      <li>VERB-Fin: atminkite, pasistenkite, stenkitės, pagalvokite, nesistenkite, paprašykite, raskite, užsirašykite, Duokit, būkite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: yra, buvo, bus, esu, buvau, būna, esate, esi, būdavo, būsi</li>
      <li>VERB-Fin: gali, turi, yra, nėra, reikia, nebuvo, rodo, buvo, sakė, privalo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>VERB-Part: DARYTINOS, Pabrėžtina, Paminėtina, būtina, ginčytinas, ginčytini, godotinas, laikytinas, lankytinų, neatleistinas</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: bus, būsi, Būsime, būsim, būsiu</li>
      <li>VERB-Fin: nebus, reikės, bus, turės, liks, nereikės, padės, teks, tiks, beliks</li>
      <li>VERB-Part: padėsiantis, būsimam, būsimą, iškilsiančiame, nenusileisianti, prireiksią, surasiąs, įsigaliosiančios</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: buvo, buvau, būdavo, buvome</li>
      <li>AUX-Ger: buvus</li>
      <li>AUX-Part: buvusi, buvę, buvęs</li>
      <li>VERB: nustatyta, nebuvo, buvo, sakė, skirta, liko, likus, nurodyto, planuota, nustatytas</li>
      <li>VERB-Fin: nebuvo, buvo, sakė, liko, turėjo, teigė, atsirado, vyko, galėjo, kalbėjo</li>
      <li>VERB-Ger: likus, išskyrus, atlikus, atėjus, nustačius, pasibaigus, prireikus, įvertinus, atsižvelgus, kilus</li>
      <li>VERB-Part: nustatyta, skirta, nurodyto, planuota, nustatytas, susiję, pateikti, susijusios, susijusių, suteiktą</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: yra, esu, būna, esate, esi, esame, Esmi</li>
      <li>AUX-Ger: esant</li>
      <li>AUX-Part: esąs, esą</li>
      <li>VERB: gali, turi, yra, galima, nėra, reikia, siekiant, rodo, privalo, tampa</li>
      <li>VERB-Fin: gali, turi, yra, nėra, reikia, rodo, privalo, tampa, galite, sudaro</li>
      <li>VERB-Ger: siekiant, taikant, remiantis, nepaisant, naudojant, įgyvendinant, teikiant, norint, įskaitant, atsižvelgiant</li>
      <li>VERB-Part: galima, pateikiama, siekiama, aptariami, žinoma, žyminčių, aptariamos, pateikiamos, skiriamas, analizuojama</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Part: esąs, buvusi, buvę, buvęs, esą</li>
      <li>VERB-Part: susiję, žyminčių, susijusios, susijusių, susijusi, susijęs, turinčių, įsitikinęs, dirbančių, išvykusiųjų</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: galima, nustatyta, pateikiama, skirta, siekiama, nurodyto, planuota, aptariami, nustatytas, žinoma</li>
      <li>VERB-Part: galima, nustatyta, pateikiama, skirta, siekiama, nurodyto, planuota, aptariami, nustatytas, žinoma</li>
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
      <li>DET: tai, to, šio, šios, toks, šį, ši, šiame, šių, tą</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: pats, pačių, pati, paties, patys, pačios, pačiam, pačius, patiems, patį</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: kitų, kai, tam, vienas, kiti, kitas, viena, kitus, kitą, vieną</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: kurie, kurios, kuris, kurių, kuri, kurio, kurioje, kurį, kurią, kokie</li>
      <li>PRON: kas, ką, ko, kuo, Kam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: jokių, jokio, jokios, joks, jokiais, jokį</li>
      <li>PRON: nieko, niekas, niekuo, niekieno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: jų, savo, jis, jos, jie, jo, aš, juos, mano, man</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: visą, visų, visus, visi, visoje, visos, visas, visiems, kiekvienas, kiekvieną</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: du, vieną, dvi, trijų, milijonų, dviejų, tūkstančių, tris, abu, dviem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>NUM: trejus, dvejus, penkerius, abejos, aštuonerius, penkeri, trejų, vieneriems</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: pirmoji, pirmą, antra, antroji, pirmas, 15-oji, Antrame, antroje, antrojo, antrąjį</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NUM: trejetą</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: laikymosi, laikymąsi, vystymosi, dalijimosi, pasitikėjimą, Mokymasis, formavimuisi, mokymuisi, pasikeitimai, pasikeitimus</li>
      <li>PRON: savo, save, sau, savęs, savimi</li>
      <li>VERB: remiantis, vadinasi, atsirado, elgtis, keičiasi, laikytis, atsižvelgiant, elgiasi, rinktis, jaučiasi</li>
      <li>VERB-Conv: remdamasi, laikydamasis, tikėdamasis, vadovaudamasi, vadovaudamasis, Klausydamasis, Lankydamasis, Remdamiesi, Rinkdamasi, Vadovaudamiesi</li>
      <li>VERB-Fin: vadinasi, atsirado, keičiasi, elgiasi, jaučiasi, pasistenkite, stenkitės, atsisako, atsitiko, pasirodo</li>
      <li>VERB-Ger: remiantis, atsižvelgiant, pasibaigus, laikantis, vadovaujantis, atsižvelgus, naudojantis, pasitelkiant, rengiantis, Išsikėlus</li>
      <li>VERB-Inf: elgtis, laikytis, rinktis, naudotis, skolintis, tikėtis, atsirasti, atsisakyti, kreiptis, mokytis</li>
      <li>VERB-Part: įsitikinęs, pasigendama, pasirinktas, prasidėjęs, atsipūtęs, atsisakyta, atsižvelgiama, besiformuojančių, išsivysčiusių, laikomasi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: esu, buvau, būčiau, esame, Būsime, Esmi, buvome, būsim, būsiu</li>
      <li>PRON: aš, mano, man, mūsų, mes, mane, mums, mus, manęs, manyje</li>
      <li>VERB-Fin: galime, manau, turime, nežinau, sakau, galiu, galėjau, girdžiu, noriu, jaučiuosi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: esate, esi, būsi, būkite, būtum</li>
      <li>PRON: tu, jūsų, tavo, jums, tave, jus, jūs, tau, tavęs, jumis</li>
      <li>VERB-Fin: galite, turite, esi, atminkite, gali, pasistenkite, stenkitės, pagalvokite, žinote, manai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: yra, buvo, būtų, bus, būna, būdavo</li>
      <li>PRON: jų, jis, jos, jie, jo, juos, ji, jį, jam, jiems</li>
      <li>VERB-Fin: gali, turi, yra, nėra, reikia, nebuvo, rodo, buvo, turėtų, sakė</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: m</li>
          <li>X: ES, d, proc, Nr, p, a, tūkst, R, mln, pan</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: į, su, iš, apie, dėl, nuo, per, iki, už, prie</li>
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
          <li>X: Levin, Baltic, Via, Cilley, Inter, Baltica, Digital, Europe, Gilgun, Kosmos</li>
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
          <li>ADP: prieš, Iki</li>
          <li>ADV: iš, vis, t, kita, visų, kol, iki, šiek, kitaip, taip</li>
          <li>CCONJ: vis, juo</li>
          <li>DET: tuos, ta, tas, kokia, to, toks, tą, kokios, kokių, kokį</li>
          <li>INTJ: Laba, po</li>
          <li>NUM: 20, dvidešimt, pirmą</li>
          <li>PART: taip, be, ko, vargu, Kita, lyg, tai</li>
          <li>PRON: kai, tam, visa, bet, kas, ką, nė, vienas, daug, kitu</li>
          <li>SCONJ: tuo</li>
          <li>VERB-Ger: turint</li>
          <li>X: pat, nors, to, kas, dėlto, kurie, tai, vertus, tiek, esmės</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Combi
        <ul>
          <li>NUM: 15-oji, 11-osios, 50 - 1829, (36-11.8)-1385, 10 . 6, 10 . 7, 11:49, 12-ojo, 12-ąjį, 1257/1999</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 1, 2, 3, 2006, 4, 5, 6, 25, 7, 10</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: I, XX, II, III, IV, V, XIX, XXI, XVIII, VI</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: du, vieną, trijų, dvi, milijonų, dviejų, pirmą, tūkstančių, pirmoji, tris</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctType</a>
    <ul>
      <li>Peri
        <ul>
          <li>PUNCT: .</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: būti.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Nom (1)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Dat (7)</li>
      <li>VERB-Fin--NOUN-Gen (19)</li>
      <li>VERB-Fin--NOUN-Nom (1564)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(iš) (1)</li>
      <li>VERB-Fin--PRON (6)</li>
      <li>VERB-Fin--PRON-Dat (2)</li>
      <li>VERB-Fin--PRON-Nom (383)</li>
      <li>VERB-Ger--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Nom (3)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (4)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--NOUN-Nom (316)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Nom (43)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Ins (2)</li>
      <li>VERB-Conv--NOUN-Acc (66)</li>
      <li>VERB-Conv--NOUN-Dat (4)</li>
      <li>VERB-Conv--NOUN-Gen (12)</li>
      <li>VERB-Conv--NOUN-Ins (16)</li>
      <li>VERB-Conv--PRON-Acc (4)</li>
      <li>VERB-Conv--PRON-Gen (1)</li>
      <li>VERB-Conv--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-Acc (796)</li>
      <li>VERB-Fin--NOUN-Dat (77)</li>
      <li>VERB-Fin--NOUN-Gen (274)</li>
      <li>VERB-Fin--NOUN-Ins (114)</li>
      <li>VERB-Fin--NOUN-Nom (1)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Acc (139)</li>
      <li>VERB-Fin--PRON-Dat (44)</li>
      <li>VERB-Fin--PRON-Gen (50)</li>
      <li>VERB-Fin--PRON-Ins (13)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Ger--NOUN-Acc (216)</li>
      <li>VERB-Ger--NOUN-Dat (43)</li>
      <li>VERB-Ger--NOUN-Gen (38)</li>
      <li>VERB-Ger--NOUN-Ins (26)</li>
      <li>VERB-Ger--PRON-Acc (4)</li>
      <li>VERB-Ger--PRON-Dat (4)</li>
      <li>VERB-Ger--PRON-Gen (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Acc (768)</li>
      <li>VERB-Inf--NOUN-Dat (136)</li>
      <li>VERB-Inf--NOUN-Gen (134)</li>
      <li>VERB-Inf--NOUN-Ins (70)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (77)</li>
      <li>VERB-Inf--PRON-Dat (23)</li>
      <li>VERB-Inf--PRON-Gen (23)</li>
      <li>VERB-Inf--PRON-Ins (6)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (226)</li>
      <li>VERB-Part--NOUN-Dat (116)</li>
      <li>VERB-Part--NOUN-Gen (256)</li>
      <li>VERB-Part--NOUN-Ins (135)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Acc (16)</li>
      <li>VERB-Part--PRON-Dat (26)</li>
      <li>VERB-Part--PRON-Gen (20)</li>
      <li>VERB-Part--PRON-Ins (8)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Conv--NOUN-Dat (2)</li>
      <li>VERB-Conv--NOUN-Ins (1)</li>
      <li>VERB-Conv--PRON-Dat (1)</li>
      <li>VERB-Fin--NOUN-Acc (8)</li>
      <li>VERB-Fin--NOUN-Dat (40)</li>
      <li>VERB-Fin--NOUN-Gen (3)</li>
      <li>VERB-Fin--NOUN-Ins (19)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Dat (37)</li>
      <li>VERB-Fin--PRON-Gen (2)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Ger--NOUN-Dat (14)</li>
      <li>VERB-Ger--NOUN-Ins (3)</li>
      <li>VERB-Inf--NOUN-Acc (3)</li>
      <li>VERB-Inf--NOUN-Dat (77)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Ins (22)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (2)</li>
      <li>VERB-Part--NOUN-Acc (2)</li>
      <li>VERB-Part--NOUN-Dat (7)</li>
      <li>VERB-Part--NOUN-Ins (13)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Dat (2)</li>
      <li>VERB-Part--PRON-Ins (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 38 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: užtikrinti vystymąsi, atsakyti sau, bausti savęs, būti savimi, būtinas vystymuisi, girdėti save, išaukštinti save, išvysti save, kaltinti save, kontroliuoti save, laikyti save, leisti sau, nekontroliuoti savęs, n​e​p​a​g​a​i​l​ė​t​i​ ​d​o​m​ė​j​i​m​o​s​i, nepamiršti savęs, nepasitikėti savimi, netikėtai sau, n​e​v​y​k​d​y​t​i​ ​į​s​i​p​a​r​e​i​g​o​j​i​m​ų, nuolaidžiauti sau, p​a​g​r​į​s​t​i​ ​į​s​i​p​a​r​e​i​g​o​j​i​m​a​i​s, paklausti savęs, pasičiupinėti save, p​a​t​v​i​r​t​i​n​t​i​ ​į​s​i​s​t​e​i​g​i​m​ą, prisiekti sau, realizuoti save, reikšti kalbėjimąsi, remti mokymąsi, sakyti sau, skatinti kūrimąsi, skatinti įsisavinimą, skirti mokymuisi, statyti save, stebėti save, sukelti domėjimąsi, suslėpti save, ugdyti pasitikėjimą, užauginti savo, įtikinti save</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>advmod:emph</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>nsubj:pass</a>, <a>nummod:gov</a>, <a>obl:arg</a></li>
<li>The following 9 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
