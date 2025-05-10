---
layout: base
title:  'UD_Khoekhoe-KDT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Khoekhoe KDT

Language: [Khoekhoe](/naq/index.html) (code: `naq`)<br/>
Family: Khoe-Kwadi

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Kira Tulchynska, Alena Witzlack-Makarevich, Sylvanus Job, Michael Hahn.

Repository: [UD_Khoekhoe-KDT](https://github.com/UniversalDependencies/UD_Khoekhoe-KDT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udnaq_kdt216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-SA 4.0

Genre: fiction, grammar-examples, spoken

Questions, comments?
General annotation questions (either Khoekhoe-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Khoekhoe-KDT/issues).
If you want to collaborate, please contact [kira&nbsp;•&nbsp;tulchynska&nbsp;(æt)&nbsp;mail&nbsp;•&nbsp;huji&nbsp;•&nbsp;ac&nbsp;•&nbsp;il, witzlack&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD\_Khoekhoe-KDT is a Universal Dependencies (UD) treebank for the Khoekhoe language. The annotation was performed manually based on glosses. This treebank includes texts from various sources: fiction, grammar, and spoken conversation. The treebank contains **27k tokens**, distributed as follows:

- **Training set**: 15k tokens
- **Development set**: 2k tokens
- **Test set**: 10k tokens



The UD\_Khoekhoe-KDT treebank consists of various texts translated into Khoekhoe by native speakers, then glossed and annotated. The included texts are:

- **grammar\_Cairo**: 20 examples from the [Cairo Cicling Corpus](https://github.com/UniversalDependencies/cairo/blob/master/translations.txt))
- **grammar\_BivalTyp**: [BivalTyp](https\://www\.bivaltyp.info/languages/descriptions/Khoekhoe.html) dataset.
- **film\_Bridge**: Subtitles from *Bridge of Spies* (2015).
- **film\_Titanic**: A section of subtitles from *Titanic* (1997).
- **book\_Khomai**: Chapters from the school book *Khomai* (1971), with shuffled sentences.
- **conversation\_Windhoek5**: A recorded conversation between two friends, anonymized by shuffling sentences.

## Genre Classification

- **Fiction**: Sentence IDs start with *film/book*.
- **Grammar**: Sentence IDs start with *grammar*.
- **Spoken**: Sentence IDs start with *conversation*.

## Data Splits

- **Training set**: Full **grammar\_Cairo**, sections of **grammar\_BivalTyp**, **film\_Bridge**, **book\_Khomai**, **conversation\_Windhoek5**
- **Development set**: Sections of **grammar\_BivalTyp**, **film\_Bridge**, **conversation\_Windhoek5**
- **Test set**: Full **film\_Titanic**, sections of **grammar\_BivalTyp**, **book\_Khomai**, **conversation\_Windhoek5**

## Acknowledgments

Roswitha Gases, Mauricius Gariseb, Mildred Howoses, Petronella Nauises, Dorothea Tases, Zarina Molochieva, Meidad Ovadia, Adam Rapoport, Naama Tiroshi, Anna Veselovsky, Margaret Zellers


# Statistics of UD Khoekhoe KDT

## POS Tags

[ADJ](naq_kdt-pos-ADJ.html) – [ADP](naq_kdt-pos-ADP.html) – [ADV](naq_kdt-pos-ADV.html) – [AUX](naq_kdt-pos-AUX.html) – [CCONJ](naq_kdt-pos-CCONJ.html) – [DET](naq_kdt-pos-DET.html) – [INTJ](naq_kdt-pos-INTJ.html) – [NOUN](naq_kdt-pos-NOUN.html) – [NUM](naq_kdt-pos-NUM.html) – [PART](naq_kdt-pos-PART.html) – [PRON](naq_kdt-pos-PRON.html) – [PROPN](naq_kdt-pos-PROPN.html) – [PUNCT](naq_kdt-pos-PUNCT.html) – [SCONJ](naq_kdt-pos-SCONJ.html) – [VERB](naq_kdt-pos-VERB.html) – [X](naq_kdt-pos-X.html)

## Features

[Abbr](naq_kdt-feat-Abbr.html) – [Aspect](naq_kdt-feat-Aspect.html) – [Assoc](naq_kdt-feat-Assoc.html) – [Case](naq_kdt-feat-Case.html) – [Clusivity](naq_kdt-feat-Clusivity.html) – [Degree](naq_kdt-feat-Degree.html) – [Deixis](naq_kdt-feat-Deixis.html) – [Evident](naq_kdt-feat-Evident.html) – [ExtPos](naq_kdt-feat-ExtPos.html) – [Foreign](naq_kdt-feat-Foreign.html) – [Gender](naq_kdt-feat-Gender.html) – [Mood](naq_kdt-feat-Mood.html) – [Number](naq_kdt-feat-Number.html) – [NumType](naq_kdt-feat-NumType.html) – [Person](naq_kdt-feat-Person.html) – [Polarity](naq_kdt-feat-Polarity.html) – [Poss](naq_kdt-feat-Poss.html) – [PronType](naq_kdt-feat-PronType.html) – [Subcat](naq_kdt-feat-Subcat.html) – [Tense](naq_kdt-feat-Tense.html) – [Typo](naq_kdt-feat-Typo.html) – [VerbForm](naq_kdt-feat-VerbForm.html) – [Voice](naq_kdt-feat-Voice.html)

## Relations

[acl](naq_kdt-dep-acl.html) – [acl:relcl](naq_kdt-dep-acl-relcl.html) – [advcl](naq_kdt-dep-advcl.html) – [advmod](naq_kdt-dep-advmod.html) – [advmod:emph](naq_kdt-dep-advmod-emph.html) – [amod](naq_kdt-dep-amod.html) – [appos](naq_kdt-dep-appos.html) – [aux](naq_kdt-dep-aux.html) – [case](naq_kdt-dep-case.html) – [cc](naq_kdt-dep-cc.html) – [ccomp](naq_kdt-dep-ccomp.html) – [compound:svc](naq_kdt-dep-compound-svc.html) – [conj](naq_kdt-dep-conj.html) – [cop](naq_kdt-dep-cop.html) – [csubj](naq_kdt-dep-csubj.html) – [csubj:outer](naq_kdt-dep-csubj-outer.html) – [csubj:pass](naq_kdt-dep-csubj-pass.html) – [det](naq_kdt-dep-det.html) – [discourse](naq_kdt-dep-discourse.html) – [dislocated](naq_kdt-dep-dislocated.html) – [expl](naq_kdt-dep-expl.html) – [expl:impers](naq_kdt-dep-expl-impers.html) – [fixed](naq_kdt-dep-fixed.html) – [flat:foreign](naq_kdt-dep-flat-foreign.html) – [flat:name](naq_kdt-dep-flat-name.html) – [flat:num](naq_kdt-dep-flat-num.html) – [flat:reparandum](naq_kdt-dep-flat-reparandum.html) – [flat:title](naq_kdt-dep-flat-title.html) – [goeswith](naq_kdt-dep-goeswith.html) – [iobj](naq_kdt-dep-iobj.html) – [iobj:appl](naq_kdt-dep-iobj-appl.html) – [list](naq_kdt-dep-list.html) – [mark](naq_kdt-dep-mark.html) – [nmod](naq_kdt-dep-nmod.html) – [nmod:poss](naq_kdt-dep-nmod-poss.html) – [nsubj](naq_kdt-dep-nsubj.html) – [nsubj:outer](naq_kdt-dep-nsubj-outer.html) – [nsubj:pass](naq_kdt-dep-nsubj-pass.html) – [nummod](naq_kdt-dep-nummod.html) – [obj](naq_kdt-dep-obj.html) – [obj:appl](naq_kdt-dep-obj-appl.html) – [obl](naq_kdt-dep-obl.html) – [obl:agent](naq_kdt-dep-obl-agent.html) – [orphan](naq_kdt-dep-orphan.html) – [parataxis](naq_kdt-dep-parataxis.html) – [punct](naq_kdt-dep-punct.html) – [reparandum](naq_kdt-dep-reparandum.html) – [root](naq_kdt-dep-root.html) – [vocative](naq_kdt-dep-vocative.html) – [xcomp](naq_kdt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3589 sentences, 27611 tokens and 29007 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 4119 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 432 types of words that contain both letters and punctuation. Examples: hî-î, tare-e, xū-e, xū-i, tare-i, khoe-i, hâ-â, sîsen-e, -e, khoe-e, tari-e, ǁnā-e, -i, ǁnā-i, ǀgui-e, doe-ommi, nē-i, -o, mari-e, tama-e, ǁnā-amaga, ǁî-i, ǂâibasen-e, hoa-e, nē-e, ǀkhī-ū, ǃkhē-ao, ǃkhē-aob, ǃnâ-ū, hoa-i, hō-oa, sîsen-i, ǀgui-i, ǀgôa-e, ǃnā-omsa, U.S, dai-e, klient-i, oa-ū, tari-i, ǀhao-ū, ǁgam-i, ǁgui-aisa, ǃkhō-oms, Mmm-mmm, ama-e, coffee-i, dao-amdāǃharodi, dao-amsa, doe-omma</li>
</ul>

<ul>
<li>This corpus contains 1389 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 588 types of multi-word tokens. Examples: tsîta, tamas, ota, tsîts, its, ob, ots, tsîn, hâs, mâtits, tsîm, xats, xaweb, mîsa, ase, dis, os, tare-ets, îts, aits, hâsa, disa, tamase, xas, xawets, ais, on, tits, tsîra, xawen, xū-ets, îb, ǀkhats, dīs, gas, hâse, mâtisa, mîs, tamasa, tamats, tsîna, tsîs, ǂants, ǃnâts, Mûts, amases, mûs, nîs, îta, ǃnâs.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): nee, s, tama, tama-e, ti</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as pronouns (PRON): Soviet, _, daarso, go, ha, ham, hoa, i, jy, mâ, nau, nē, sa, si, tare, tari, ti, ts, â, ǀnî, ǁnā, ǁî, ǂgui</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as determiners (DET): enige, hoa, hoaraga, kōǃgâ, mâ, mâtikō, mâǃnôa, nau, nē, sa, tare, ti, xare, ǀnî, ǀoasa, ǁnā, ǂgui, ǂû</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as PRON and sometimes as DET: hoa, mâ, nau, nē, sa, tare, ti, ǀnî, ǁnā, ǂgui</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as auxiliaries (AUX): a, ga, gara, ge, gere, go, goro, hâ, hā, i, ka, kha, kom, koma, moet, nî, nîra, o, ra, re, tite, tā, ǀkhī</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: hâ, hā, ǀkhī</li>
</ul>

<ul>
<li>There are 1 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin,Inf
  <ul>
    <li>VERB: klim, soek</li>
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
      <li>ADJ: ǀguis, ǀguisa, ǂansa, ǃnoesa, ǀAsa, ǀgamsa, ǀguide, ǃkhūsa</li>
      <li>DET: hoasa, hoadi, naus</li>
      <li>NOUN: oms, gangans, aiǂoas, ǃkhais, ǃkhaisa, mamas, aumas, khoes, audosa, omsa</li>
      <li>NUM: ǀguis, Hakaǀas, Khoeses, dīsiǀoadīsis, hakas, hûdīsiǀoadīsis, khoeseǀab, ǀgams, ǀgamǀoadīsis, ǃnanide</li>
      <li>PRON: s, ǁîs, ǁnās, si, nēs, sa, ǁnāsa, ǁîsa, nēsa, ra</li>
      <li>PROPN: Mariasa, Saras, Marias, Soviets, States, Maras, Fransfonteins, Marys, Roses, Coronas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Neut
    <ul>
      <li>ADJ: ǀgara, ǁkhara</li>
      <li>NOUN: mara, ǁgûra, khoera, ǀgôarora, ǀhōsara, ǁnāǂamra</li>
      <li>PRON: m, ǁîra, sim, mi, hoama, ro, am, hoaro, ra, sam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: ǀguiba, ǀguib, ǁkhāba</li>
      <li>DET: hoab, hoaba, hoago, hoagu, enige, sago, taregu, ǂûb</li>
      <li>NOUN: khoeb, ǃgôahesatse, khoeba, ǁaeb, ǀgaub, ǃgôahesab, ǃgôasatse, ǃhūb, ǀkhāb, ǂhanub</li>
      <li>NUM: dīsiǃnaniǀab, ǀguiba, ǀGamǀagu, ǀgamkhoma, ǁkhaisab</li>
      <li>PRON: ts, b, ǁîb, sats, tsi, satsa, ǁîba, khom, ba, bi</li>
      <li>PROPN: Petrub, Abela, Abeli, Amob, Titanici, Powersi, Pryori, Powersa, Elob, Vogeli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: ǀgui-e, ǀgui-i, ǀguina, born, hoaragana, karin, tari-e, ǀguin, ǁnâuǂûna</li>
      <li>DET: hoana, hoa-e, hoan, hoa-i, hoada, ǁnān, naun, xare-i, ǁnā-e, ǁnāhâna</li>
      <li>NOUN: xū-e, xūn, khoen, xūna, xū-i, khoe-i, khoena, sîsen-e, khoe-e, kaikhoen</li>
      <li>NUM: ǀgui-e, ǀgamna, ǀgui-i, ama-e, haka-e, haka-i</li>
      <li>PRON: da, i, n, sida, tare-e, sada, ǁîn, du, tare-i, -e</li>
      <li>PROPN: Dani-i, Donovanhâra, Empire-i, GermanǁÎna, Germanǁîn, Hererona, Rosenbergan, Sovietǁîna</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: ǀgara, ǁkhara</li>
      <li>NOUN: khoekha, ǁgûra, kaikhoera, mara, ǀkhākha, arikha, ǀGammekha, ǀgâukha, ǀhōsara, ǁkhûikha</li>
      <li>NUM: ǀgamkhoma</li>
      <li>PRON: m, khom, ra, ǁîra, sakhom, kha, sim, kho, mi, ro</li>
      <li>PROPN: Donovanhâra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: ǀguina, born, hoaragana, karin, ǀguide, ǀguin, ǁnâuǂûna</li>
      <li>DET: hoana, hoan, hoada, ǁnān, hoadi, hoago, hoagu, naun, enige, sago</li>
      <li>NOUN: xūn, khoen, xūna, khoena, kaikhoen, ǂhôana, ǀgôan, ǀgoan, Russianǁîn, khoegu</li>
      <li>NUM: ǀgamna, ǀGamǀagu, ǃnanide</li>
      <li>PRON: da, n, sida, sada, ǁîn, du, na, sadu, hoan, go</li>
      <li>PROPN: Washingtoni, GermanǁÎna, Germanǁîn, Hererona, Panadodi, Rosenbergan, Sovietǁîna</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ǀguiba, ǀguis, ǀguisa, ǀguib, ǀgui-e, ǀgui-i, ǂansa, ǃnoesa, tari-e, ǀAsa</li>
      <li>DET: ti, sa, hoa-e, hoa-i, hoasa, hoab, hoaba, naus, xare-i, ǁnā-e</li>
      <li>NOUN: khoeb, xū-e, ǃgôahesatse, khoeba, xū-i, khoe-i, oms, ǁaeb, ǀgaub, ǃgôahesab</li>
      <li>NUM: ǀguis, ǀgui-e, dīsiǃnaniǀab, ǀgui-i, ǀguiba, Hakaǀas, Khoeses, ama-e, dīsiǀoadīsis, haka-e</li>
      <li>PRON: ta, ts, tita, i, b, s, te, ǁîb, sats, tare-e</li>
      <li>PROPN: Petrub, Mariasa, Abela, Abeli, Saras, Marias, Amob, Titanici, Soviets, Powersa</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: ǀguiba, ǀguisa, ǀguina, ǀgara, ǀgui-e, ǂansa, ǃnoesa, hoaragana, ǀAsa, ǀgamsa</li>
      <li>ADV: tsîna, ǀguisa, ona, ǁgona</li>
      <li>DET: hoana, hoa-e, hoasa, hoaba, ǁnā-e, ǁnāhâna</li>
      <li>NOUN: xū-e, khoeba, xūna, khoena, sîsen-e, ǃkhaisa, khoe-e, ǂhôana, ǁaeba, axaba</li>
      <li>NUM: ǀgui-e, ǀgamna, ǀguiba, ama-e, haka-e, haka-i, khoeseǀab, ǀgamkhoma, ǀgui-i, ǃnanide</li>
      <li>PRON: te, tare-e, tsi, satsa, ǁîba, si, ba, bi, sa, -e</li>
      <li>PROPN: Mariasa, Abela, Powersa, Amoba, Dawsonna, Pryora, skola, Germanyba, Petera, Rogerba</li>
      <li>SCONJ: sa, ǃkhaisa, ǃkhaesa, s</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: ǀguis, ǀguib, ǀgui-i, born, karin, tari-e, ǀgui-e, ǀguin</li>
      <li>ADV: tsîn, on, Germanǁîn</li>
      <li>DET: hoan, hoa-i, ǁnān, hoab, hoadi, hoago, hoagu, naun, enige, naus</li>
      <li>NOUN: khoeb, xūn, khoen, xū-i, khoe-i, oms, ǁaeb, ǀgaub, ǃgôahesab, gangans</li>
      <li>NUM: ǀguis, dīsiǃnaniǀab, Hakaǀas, Khoeses, dīsiǀoadīsis, hakas, hûdīsiǀoadīsis, ǀGamǀagu, ǀgams, ǀgamǀoadīsis</li>
      <li>PART: s</li>
      <li>PRON: ta, ts, i, b, s, ǁîb, sats, n, ǁîn, ǁîs</li>
      <li>PROPN: Petrub, Abeli, Saras, Marias, Amob, Titanici, Soviets, Powersi, Pryori, States</li>
      <li>SCONJ: s, ǃkhais, sa, ǃkhaes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: ǃgôahesatse, ǃgôasatse, ǀgawiǃgôahesatse, ǀgôatse, Dadatse, khoetse, oome, ǀawaǃnamtse, ǁGauǃnâ-aotse, ǂNûǁkhae-aotse</li>
      <li>PRON: tse, ts</li>
      <li>PROPN: ǃKhūtse, Awotse</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Dim
    <ul>
      <li>ADJ: ǂkhariro, Oraro, kairaro, kairo, sîsenoro, toro, ǃgomro</li>
      <li>NOUN: kharob, xūro-e, ǃāros, axaro, dairo-e, kharoba, pereroba, plaassîsenro-e, xūro, ôaro</li>
      <li>PRON: nēro, nēro-e</li>
      <li>VERB: dîǃgâro, khoero, xūro, ǀao-amǃnâro, ǀkhararo, ǁgâiro, ǂOaro, ǃgûro</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADV: nee</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: tite, tide</li>
      <li>INTJ: hî-î, nee, hâ-â, hî, Hîî</li>
      <li>PART: tama, tama-e, nee</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>INTJ: î, ā, ja, io</li>
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
      <li>AUX: ra, ta, gere, gara, goro, ge, a, go, ru, nîra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: hâ, i</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Punct
    <ul>
      <li>AUX: a</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>App
    <ul>
      <li>AUX: tā</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ass
    <ul>
      <li>AUX: o, kom, komo, -o</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: re, ǀkhī, a, hā, ra, o, ta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: ge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX: i, kha</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>AUX: ga, ka, gara</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prh
    <ul>
      <li>AUX: tā</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: nî, tite, tide, ni, nîra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fut,Past,RecPast
    <ul>
      <li>AUX: i, ī</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: ge, gere, go</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: a, i</li>
      <li>VERB-Fin,Inf: klim, soek</li>
    </ul>
  </li>
</ul>

<ul>
  <li>RecPast
    <ul>
      <li>AUX: go, goro</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB: hâ, ūhâ, ī, dī, mî, sī, ǁkhā, ǂan, mû, kō</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Appl
    <ul>
      <li>VERB: mîba, sîsenba, ǃoaba, ūhâba, ǁGuiǃāba, ǁamaba, ǃgâiba, ǃkhoeba, Dâba, Murphyba</li>
    </ul>
  </li>
</ul>

<ul>
  <li>ApplPass
    <ul>
      <li>VERB: ǃgâibahe, mîbahe, tsūbahe, ībahe, ǁGaibahe, ǂābahe, ǃgaubahe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>ApplRfl
    <ul>
      <li>VERB: ǁnâubasen, dībasen, kaikaibasen, ūǂuibasen, ǁamabasen, ǃgîbasen, ǃkhōbasen, ǃâubasen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: mîhe, māhe, ǂnauhe, ǃkhōhe, ǂnoabahe, hōhe, kaihe, ūhe, ǂgaihe, ǂanhe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB: ǀgoragu, ǂangu, ǁnâugu, Saogu, dāǃangu, mâǃoagu, mûǃāgu, saurugu, ǀhuru-ūgu, ǁkhonagu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rfl
    <ul>
      <li>VERB: dīsen, huisen, mûsen, ǁkhāǁkhāsen, amiǁguisen, draaisen, spuitsen, sâusen, tanisen, ǂhomisen</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>AUX: koma, kama</li>
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
      <li>ADV: nēpa, ǁnāpa, ǁnāti, nē, nēti, ǁnā, nau, naupa, nē-ao, nēsisa</li>
      <li>DET: nē, ǁnā, nau, ǁnān, naun, naus, ǁnā-e, ǁnāhâna</li>
      <li>PRON: ǁnās, nēs, ǁnāsa, nēb, nēsa, nēn, ǁnā-e, ǁnā-i, nē-i, ǁnāb</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: ǂûb</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: ǀnî, ǂgui, enige</li>
      <li>PRON: ǀnîba, ǂGuina</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: mâti, mâpa, mati, mâtikō, mâǁae, Mâtikōse, mapa</li>
      <li>DET: mâ, tare, mâǃnôa, Mâtikō, taregu</li>
      <li>PRON: tare-e, tare-i, tare, tari, tari-e, tarena, tari-i, tareba, Tariba, ham-i</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: xare-i</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: ti, sa, enige</li>
      <li>PRON: ta, ts, tita, da, i, b, s, te, ǁîb, sats</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: ba, -e, i, n, na, sa, b, s, -i, e</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: hoaǁae</li>
      <li>DET: hoa, hoaraga, mâ, hoana, hoa-e, hoan, hoa-i, hoasa, hoada, hoab</li>
      <li>PRON: hoan, hoana, Hoado, hoa, hoakhom, hoama, hoasa, hakhom, hoakhoma, hoaro</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: ǀgui, ǀgam, koro, ǀguis, ǃnona, dīsi, haka, korodīsi, ǃnanidīsi, hakadīsi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: ǂguro, ǀgamǁî, ǃnonaǁî, koroǁî, hakaǁî, ǀgamǀaǁî, ǀguiǀaǁî, ǁkhaisadīsiǀgamǀâǁî, ǂkhî, ǃNaniǁî</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: ti, sa</li>
      <li>PRON: âba, âga, âsa</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>DET: ti, hoada, enige</li>
      <li>NOUN: Bridge, aota, xoa-aota, ôage, ǁgarage, ǂnoaba-aota, ǃhūǁîta</li>
      <li>NUM: ǀgamkhoma</li>
      <li>PRON: ta, tita, da, te, sida, sada, m, khom, ge, sim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>DET: sa, hoago, sago</li>
      <li>NOUN: ǃgôahesatse, ǃgôasatse, ǀgawiǃgôahesatse, ǃGôahesas, ǃgôasas, ǀgôatse, ǃnari-aogo, Dadatse, khoetsa, khoetse</li>
      <li>PRON: ts, sats, tsi, du, satsa, sadu, sa, sago, s, go</li>
      <li>PROPN: ǃKhūtse, Awotse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2,3
    <ul>
      <li>PRON: s, si, sa, tsi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: ǀguiba, ǀguis, ǀguisa, ǀguib, ǀgui-e, ǀgui-i, ǀguina, born, ǀgara, ǂansa</li>
      <li>DET: hoana, hoa-e, hoan, hoa-i, hoasa, hoab, hoaba, hoadi, hoagu, naun</li>
      <li>NOUN: khoeb, xū-e, xūn, khoen, khoeba, xūna, xū-i, khoe-i, oms, ǁaeb</li>
      <li>NUM: ǀguis, ǀgui-e, ǀgamna, dīsiǃnaniǀab, ǀgui-i, ǀguiba, Hakaǀas, Khoeses, ama-e, dīsiǀoadīsis</li>
      <li>PRON: i, b, ǁîb, n, tare-e, ǁîn, ǁîs, tare-i, ǁnās, ǁîba</li>
      <li>PROPN: Petrub, Mariasa, Abela, Abeli, Saras, Marias, Amob, Titanici, Soviets, Powersa</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: CV, CV-e, CVb, CVba, CVhân</li>
          <li>PROPN: U.S, C.Q.D., CIA, E.J., GDRs, J.J., CIAsa, GDRsa, KGBs, USAba</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Assoc</a>
    <ul>
      <li>Yes
        <ul>
          <li>DET: ǁnāhâna</li>
          <li>NOUN: xūhâna, CVhân, gomaǂgarihân, gūhâna, kaartjiehân, kanhâna, perehân, sabibihân, skolǂgâhâna, sorehâna</li>
          <li>PRON: ǁnāhân</li>
          <li>PROPN: Donovanhâra</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Clusivity</a>
    <ul>
      <li>Ex
        <ul>
          <li>PRON: sida, sim, sage, da, sige, sima</li>
        </ul>
      </li>
      <li>In
        <ul>
          <li>PRON: sada, da, sakhom, Sikhom, khom, sam</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Deixis</a>
    <ul>
      <li>Contr
        <ul>
          <li>ADV: nau</li>
          <li>DET: nau, naun, naus</li>
          <li>PRON: naun, Nausa, nau, nau-i, nauts</li>
        </ul>
      </li>
      <li>Prox
        <ul>
          <li>ADV: nēpa, nē, nēti, naupa, nē-ao, nēsisa, pa</li>
          <li>DET: nē</li>
          <li>PRON: nēs, nēb, nēsa, nēn, nē-i, nē-e, nēba, nē, nēde, nēga</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: ǁnāpa, ǁnāti, ǁnā, naupa, ǁNati, ǁnâti, ǁnāba</li>
          <li>DET: ǁnā, ǁnān, ǁnā-e, ǁnāhâna</li>
          <li>PRON: ǁnās, ǁnāsa, ǁnā-e, ǁnā-i, ǁnāb, ǁnān, ǁnāgu, ǁnas, ǁnā, ǁnāba</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: di</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>PART: s</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>PART: tama</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>DET: ǀnî</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>NOUN: ǃnūb</li>
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
          <li>ADJ: young</li>
          <li>ADP: ten</li>
          <li>ADV: daar, hier, oor, skierlik, nee</li>
          <li>CCONJ: en</li>
          <li>INTJ: ja</li>
          <li>NOUN: minste, aupa, ones, dankie, werk</li>
          <li>PRON: daarso, jy</li>
          <li>PUNCT: ,, ?</li>
          <li>VERB-Fin,Inf: klim, soek</li>
          <li>X: uerbehaupt, Potassium, cyanide</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Subcat</a>
    <ul>
      <li>Intr
        <ul>
          <li>VERB-Fin,Inf: klim</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB-Fin,Inf: soek</li>
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
          <li>ADJ: ǀHôagao, ǃkharaga</li>
          <li>ADP: ǃnaga, ǃna, gam, xoǀkha</li>
          <li>ADV: nē, hukaǀgui, ǀgui, ǁkhadi, ǂganaga, ǃgombē, ǁnāba</li>
          <li>AUX: ge, ī, go, kama, ni, ta</li>
          <li>DET: ǁNā</li>
          <li>INTJ: Hîî</li>
          <li>NOUN: ǂhau, khauǀaene, kikina, kilona, magazine, sukuru-aob, sîsena, telefona, ǀAe, ǁkhabu-e</li>
          <li>NUM: ǀgamdisi</li>
          <li>PRON: i, n, în, ǁnas, ǁî</li>
          <li>SCONJ: ǃkhaesa, amaga, ǂganaga, ǃkhaes</li>
          <li>VERB: tî, hîgaga, mi, miba, mî-e, sâi, ǁKhâ, ǁkha</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: a, i.</li>
</ul>

<ul>
<li>This corpus uses 22 lemmas as auxiliaries (<a>aux</a>). Examples: ge, ra, hâ, nî, go, re, a, ga, i, gere, tite, gara, tā, ǀkhī, goro, kom, o, koma, moet, hā, kha, nîra.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (5)</li>
      <li>VERB--NOUN-Acc (138)</li>
      <li>VERB--NOUN-Nom (353)</li>
      <li>VERB--PRON (329)</li>
      <li>VERB--PRON-Acc (89)</li>
      <li>VERB--PRON-Acc-ADP(ǃnâ) (1)</li>
      <li>VERB--PRON-Nom (1288)</li>
      <li>VERB--PRON-Nom-ADP(ǀkha) (1)</li>
      <li>VERB--PRON-Voc (1)</li>
      <li>VERB-Fin,Inf--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (7)</li>
      <li>VERB--NOUN-ADP(xa) (1)</li>
      <li>VERB--NOUN-Acc (767)</li>
      <li>VERB--NOUN-Acc-ADP(di) (1)</li>
      <li>VERB--NOUN-Nom (95)</li>
      <li>VERB--NOUN-Nom-ADP(ti) (1)</li>
      <li>VERB--NOUN-Nom-ADP(xa) (1)</li>
      <li>VERB--PRON (25)</li>
      <li>VERB--PRON-Acc (241)</li>
      <li>VERB--PRON-Acc-ADP(ǃgom) (1)</li>
      <li>VERB--PRON-Nom (21)</li>
      <li>VERB-Fin,Inf--NOUN (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (11)</li>
      <li>VERB--NOUN-Nom (1)</li>
      <li>VERB--PRON (5)</li>
      <li>VERB--PRON-Acc (41)</li>
      <li>VERB--PRON-Nom (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 17 relation subtypes: <a>acl:relcl</a>, <a>advmod:emph</a>, <a>compound:svc</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>expl:impers</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>flat:num</a>, <a>flat:reparandum</a>, <a>flat:title</a>, <a>iobj:appl</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obj:appl</a>, <a>obl:agent</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>compound</a>, <a>flat</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>dep</a></li>
</ul>
