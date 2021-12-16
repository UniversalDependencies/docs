---
layout: base
title:  'UD_Faroese-FarPaHC'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Faroese FarPaHC

Language: [Faroese](/fo/index.html) (code: `fo`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.7 release.

The following people have contributed to making this treebank part of UD: Þórunn Arnardóttir, Hinrik Hafsteinsson, Einar Freyr Sigurðsson, Anton Karl Ingason, Eiríkur Rögnvaldsson, Joel C. Wallenberg.

Repository: [UD_Faroese-FarPaHC](https://github.com/UniversalDependencies/UD_Faroese-FarPaHC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfo_farpahc29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: fiction, bible, nonfiction

Questions, comments?
General annotation questions (either Faroese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Faroese-FarPaHC/issues).
If you want to collaborate, please contact [thar&nbsp;(æt)&nbsp;hi&nbsp;•&nbsp;is, hinrik&nbsp;•&nbsp;hafst&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com, einar&nbsp;•&nbsp;freyr&nbsp;•&nbsp;sigurdsson&nbsp;(æt)&nbsp;arnastofnun&nbsp;•&nbsp;is].
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

UD_Icelandic-FarPaHC is a conversion of the [Faroese Parsed Historical Corpus (FarPaHC)](https://github.com/einarfs/farpahc) to the Universal Dependencies scheme.

The conversion was done using [UDConverter](https://github.com/thorunna/UDConverter).



The Faroese Parsed Historical Corpus (FarPaHC) is a 53,000 word corpus which includes three texts from the 19th and 20th centuries. These texts were originally manually parsed according to the Penn Parsed Corpora of Historical English (PPCHE) annotation scheme. Two of these parsed texts where then automatically converted to the Universal Dependencies scheme to create UD_Faroese-FarPaHC.

## Contents

### Files

UD_Faroese-FarPaHC consists of two Faroese texts:

- `NTACTS` - Acts of the Apostles. Edition: 1937.

Author: Jákup Dahl
Birthdate: 1878, died 1944 on his birthday, 5 June
TextId: ntacts
Textname: Ápostlasögan (Acts of the Apostles)[Originally published in Varðin 8, 1928,
as Ápostlasögan og hini almennu brævini (Acts of the Apostles and the Letters)]
Edition: "1937. Nýggja Testamenti. [The New Testament]
Givið út hevur Det danske Bibelselskab. [Published by the Danish Bible Society]
P. Haase og söns boghandel, Keypmannahavn. [Copenhagen]"
Text online: http://old.bibelselskabet.dk/farbib/web/bibelen.htm
Translation: From Greek
Date: 1928
Text genre: Bible translation
Wordcount: 17758
Sample: Sample is from Acts 1:1-17:34, pp. 251-295

- `NTJOHN` - Gospel of St. John. Edition: 1937.

Author: Jákup Dahl
Birthdate: 1878, died 1944 on his birthday, 5 June
TextId: ntjohn
Textname: Evangeliið eftir Jóhannes, (Gospel of St. John) [Originally published in Varðin 16, 1936.]
Edition: "1937. Nýggja Testamenti. [The New Testament]
Givið út hevur Det danske Bibelselskab. [Published by the Danish Bible Society]
P. Haase og söns boghandel, Keypmannahavn. [Copenhagen]"
Text online: http://old.bibelselskabet.dk/farbib/web/bibelen.htm
Translation: From Greek
Date: 1936
Text genre: Bible translation
Wordcount: 23873
Sample: Exhaustive sample of John, pp. 196-250

### Sentences

Each sentence ID in UD_Faroese-FarPaHC carries the following information:

Example ID: `1928.NTACTS.REL-BIB,1.1`

- Publication year of the text (`1928`)
- Name of the text (`NTACTS`)
- Text genre (`REL-BIB`)
- Index within text (`1`)
- Index within file (`1`)

As all the texts in the corpus are excerpts from the Bible, the only text genre present in the sentence IDs is `REL-BIB`, i.e., _religious text, biblical_.

### Additional notes: Morphological Features

The UD morphological features in the corpus were converted from the FarPaHC PoS tags, which do not encode all possible grammatical categories for the language as described by the [UD language documentation for Faroese](https://universaldependencies.org/is/index.html). The features that do appear in UD_Faroese-FarPaHC are shown below, organised by grammatical category.

- Nouns: `Case`, `Definite`, `Number`
- Verbs: `Tense`, `Mood`, `Verbform`, `Case`
- Pronouns: `Case`, `Gender`, `Number`
- Numerals: `Case`
- Adjectives: `Case`, `Degree`
- Adverbs: `Case`, `Degree`, (`Definite`, `Number`)
- Determiners: `Case`
- Other: `Foreign`

## Data split

**TRAIN:**
- `1936.NTJOHN.REL-BIB`

**DEV:**
- First 300 sentences from `1928.NTACTS.REL-BIB`

**TEST:**
- Last 300 sentences from `1928.NTACTS.REL-BIB`

## Acknowledgments

This project is funded by The Icelandic Student Innovation Fund, grant no. 206457-0091. Thanks are due to Örvar Kárason, whose previous work was used as a basis for the conversion.

## References

* (citation)



# Statistics of UD Faroese FarPaHC

## POS Tags

[ADJ](fo_farpahc-pos-ADJ.html) – [ADP](fo_farpahc-pos-ADP.html) – [ADV](fo_farpahc-pos-ADV.html) – [AUX](fo_farpahc-pos-AUX.html) – [CCONJ](fo_farpahc-pos-CCONJ.html) – [DET](fo_farpahc-pos-DET.html) – [INTJ](fo_farpahc-pos-INTJ.html) – [NOUN](fo_farpahc-pos-NOUN.html) – [NUM](fo_farpahc-pos-NUM.html) – [PART](fo_farpahc-pos-PART.html) – [PRON](fo_farpahc-pos-PRON.html) – [PROPN](fo_farpahc-pos-PROPN.html) – [PUNCT](fo_farpahc-pos-PUNCT.html) – [SCONJ](fo_farpahc-pos-SCONJ.html) – [VERB](fo_farpahc-pos-VERB.html) – [X](fo_farpahc-pos-X.html)

## Features

[Case](fo_farpahc-feat-Case.html) – [Definite](fo_farpahc-feat-Definite.html) – [Degree](fo_farpahc-feat-Degree.html) – [Foreign](fo_farpahc-feat-Foreign.html) – [Gender](fo_farpahc-feat-Gender.html) – [Mood](fo_farpahc-feat-Mood.html) – [Number](fo_farpahc-feat-Number.html) – [Tense](fo_farpahc-feat-Tense.html) – [VerbForm](fo_farpahc-feat-VerbForm.html)

## Relations

[acl](fo_farpahc-dep-acl.html) – [acl:relcl](fo_farpahc-dep-acl-relcl.html) – [advcl](fo_farpahc-dep-advcl.html) – [advmod](fo_farpahc-dep-advmod.html) – [amod](fo_farpahc-dep-amod.html) – [appos](fo_farpahc-dep-appos.html) – [aux](fo_farpahc-dep-aux.html) – [case](fo_farpahc-dep-case.html) – [cc](fo_farpahc-dep-cc.html) – [ccomp](fo_farpahc-dep-ccomp.html) – [compound:prt](fo_farpahc-dep-compound-prt.html) – [conj](fo_farpahc-dep-conj.html) – [cop](fo_farpahc-dep-cop.html) – [dep](fo_farpahc-dep-dep.html) – [det](fo_farpahc-dep-det.html) – [discourse](fo_farpahc-dep-discourse.html) – [expl](fo_farpahc-dep-expl.html) – [fixed](fo_farpahc-dep-fixed.html) – [flat:foreign](fo_farpahc-dep-flat-foreign.html) – [flat:name](fo_farpahc-dep-flat-name.html) – [iobj](fo_farpahc-dep-iobj.html) – [mark](fo_farpahc-dep-mark.html) – [nmod](fo_farpahc-dep-nmod.html) – [nmod:poss](fo_farpahc-dep-nmod-poss.html) – [nsubj](fo_farpahc-dep-nsubj.html) – [nummod](fo_farpahc-dep-nummod.html) – [obj](fo_farpahc-dep-obj.html) – [obl](fo_farpahc-dep-obl.html) – [parataxis](fo_farpahc-dep-parataxis.html) – [punct](fo_farpahc-dep-punct.html) – [root](fo_farpahc-dep-root.html) – [vocative](fo_farpahc-dep-vocative.html) – [xcomp](fo_farpahc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1621 sentences, 40471 tokens and 40484 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 6539 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 2 types of words that contain both letters and punctuation. Examples: Bar-Jesus, Vitnisburðar-</li>
</ul>

<ul>
<li>This corpus contains 13 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 6 types of multi-word tokens. Examples: frammanundan, yvirum, útum, burturúr, uppum, útúr.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): at</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as pronouns (PRON): _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: verða, vera, hava, kunna, fáa</li>
    <li>VERB: koma, fara, taka, fáa, siga, síggja, tala, halda, ganga, trúgva</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: verandi, verið, havt</li>
    <li>VERB: komin, sagt, givið, talað, sæð, skrivað, fingið, sent, hoyrt, komnir</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: tað</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADV: frímóðiga</li>
      <li>NOUN: menn, lærusveinar, orð, bröður, dagar, tekin, gerningar, lærusveinarnir, lærusveinum, fedrar</li>
      <li>PROPN: Jödarnir, Jödum, Jödunum, Fariseararnir, Jödanna, Jödar, Jödarnar, páskir, Farisearunum, Farisearanna</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: faðirin, móti, faðir, navni, stað, anda, lív, maður, orð, fólkið</li>
      <li>PRON: tað</li>
      <li>PROPN: Jesus, Guð, Pætur, Guðs, Jerúsalem, Guði, Harrans, harri, Símun, Paulus</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: ævigt, sama, gott, högru, frískan, heilagan, egna, elstu, heilaga, langa</li>
      <li>ADV: hvörja, mong</li>
      <li>DET: hetta, ein, tann, eina, alt, einki, eitt, allar, henda, nakað</li>
      <li>NOUN: orð, lív, dagin, faðirin, tekin, fólkið, heimin, boð, mann, dagar</li>
      <li>NUM: tveir, tríggjar, fjöruti, hundrað, fýra, tólv, fimm, seks, tríati, tvey</li>
      <li>PRON: hann, tað, teir, meg, seg, teg, tykkum, hvat, hana, tey</li>
      <li>PROPN: Jesus, Guð, Pætur, Harran, Paulus, Jödarnar, Símun, Filippus, Barnabas, Krist</li>
      <li>VERB-Part: dýrmettan, dýrmett, bundin, bundnan, falnu, komnar, samanballaðan, settan, stongt, sundurspjaddu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: heilagum, longu, deyðum, sonnum, egna, evsta, leysum, fyrstuni, harðari, hebráiskum</li>
      <li>ADV: hvörjum</li>
      <li>DET: hesum, öllum, einum, hinum, tí, teimum, teirri, eini, nökrum, hvörjum</li>
      <li>NOUN: móti, navni, stað, anda, heiminum, halgidóminum, himni, lærusveinum, bygdini, trúgv</li>
      <li>NUM: fýra, trimum, ellivu, fimm, hundrað, tveimum, fimmti, sjey, sjúti, tólv</li>
      <li>PRON: tí, honum, teimum, tykkum, mær, sær, tær, okkum, sínum, mínum</li>
      <li>PROPN: Guði, Jerúsalem, Jesusi, Galileu, Jödum, Jödunum, Júdeu, Paulusi, Egyptalandi, Nasaret</li>
      <li>VERB: gjördari, gjördum, fyriskipaða, kvaldum, rættum, salvaða, steinsettum</li>
      <li>VERB-Part: fyriskipaða, kvaldum, rættum, salvaða, steinsettum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: heilaga, deyða, djevuls, einborna, hægsta, rættvísa, vándra, æviga, ósúrgaðu</li>
      <li>ADV: frímóðiga</li>
      <li>DET: als, hins, einkis, alra, hinna, tess</li>
      <li>NOUN: faðirs, manna, orða, lívsins, navns, faðirsins, heimsins, jarðar, himmals, hövdinga</li>
      <li>NUM: fimmti, fjöruti, tveggja</li>
      <li>PRON: hansara, tykkara, teirra, tess, okkara, sín, mín, míns, hennara, tín</li>
      <li>PROPN: Guðs, Harrans, Jesu, Jerúsalem, Ísraels, Jödanna, Krists, Antiokíu, Jóhannesar, Ábrahams</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: sannur, blindur, stór, störri, góðu, heilagi, deyður, elstu, góður, sjúkur</li>
      <li>ADV: hvör, ein, hann</li>
      <li>DET: tann, ein, hetta, allir, hvör, eingin, hesin, alt, nakar, nakrir</li>
      <li>NOUN: faðirin, maður, menn, faðir, lærusveinar, heimurin, sonur, lærusveinarnir, bröður, andi</li>
      <li>NUM: tveir, túsund, fimm, fýra, seks, tríggir, tólv, fjöruti, trý, átta</li>
      <li>PRON: hann, eg, teir, tit, tú, tað, vit, tey, hon, mín</li>
      <li>PROPN: Jesus, Guð, Pætur, harri, Jödarnir, Símun, Jóhannes, Kristus, Paulus, Harrin</li>
      <li>VERB-Part: lestan</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: frímóðiga</li>
      <li>NOUN: faðirin, orð, móti, faðir, menn, navni, stað, anda, lív, maður</li>
      <li>PROPN: Jesus, Guð, Pætur, Guðs, Jerúsalem, Guði, Harrans, harri, Jödarnir, Símun</li>
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
      <li>ADJ: störri, fyrru, fyrra, gagnligari, innara, ringara, verri, yngri</li>
      <li>ADV: eins, heldur, so, soleiðis, longur, áðr, líka, enn, fyrr, seinni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: heilagum, longu, deyðum, ævigt, sama, heilaga, stór, egna, sannur, blindur</li>
      <li>ADV: tá, nú, har, aftur, so, saman, sanniliga, burtur, eftir, soleiðis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: elstu, evsta, næsta, ytstu, elstar, evstu, frelstur, fyrstir, fyrstur, hábornastu</li>
      <li>ADV: fyrst, skjótast</li>
    </ul>
  </li>
</ul>



<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: verðið, Ver, hav, havið</li>
      <li>VERB: sí, far, statt, kom, latum, trúgvið, Takið, gev, latið, sig</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: fari, nærkaðist</li>
      <li>AUX: er, var, hevur, skal, hevði, skulu, vóru, eri, eru, hava</li>
      <li>VERB: segði, sigur, sögdu, fór, kom, svaraði, kemur, fóru, komu, sá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: skuldi, skuldu, veri, mundi, hevði, mundu, verði</li>
      <li>VERB: kenni, komi, legði, bjóði, drekki, fari, fylgi, föri, kasti, lati</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADV: nærkaðist</li>
      <li>AUX: var, hevði, hövdu, vóru, varð, skuldi, verið, vórðu, skuldu, kundi</li>
      <li>AUX-Part: verið, havt</li>
      <li>VERB: segði, sögdu, fór, kom, svaraði, fóru, komin, sagt, komu, sá</li>
      <li>VERB-Part: komin, sagt, givið, talað, sæð, skrivað, fingið, sent, hoyrt, komnir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADV: fari</li>
      <li>AUX: er, hevur, skal, skulu, eri, eru, hava, havi, vóru, ert</li>
      <li>AUX-Part: verandi</li>
      <li>VERB: sigur, kemur, sigi, vita, fari, veit, trúgva, trýr, siga, kenna</li>
      <li>VERB-Part: livandi, standandi, rennandi, trúgvandi, gangandi, sitandi, skínandi, angandi, brennandi, grátandi</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: Hosianna, Rabbuni, aloe</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB--NOUN-Dat (2)</li>
      <li>VERB--NOUN-Nom (353)</li>
      <li>VERB--PRON-Acc (6)</li>
      <li>VERB--PRON-Dat (8)</li>
      <li>VERB--PRON-Gen (12)</li>
      <li>VERB--PRON-Nom (1484)</li>
      <li>VERB-Inf--NOUN-Acc (23)</li>
      <li>VERB-Inf--NOUN-Nom (54)</li>
      <li>VERB-Inf--PRON-Acc (43)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (2)</li>
      <li>VERB-Inf--PRON-Nom (266)</li>
      <li>VERB-Part--NOUN-Acc (4)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Nom (115)</li>
      <li>VERB-Part--PRON-Acc (8)</li>
      <li>VERB-Part--PRON-Dat (17)</li>
      <li>VERB-Part--PRON-Nom (395)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (519)</li>
      <li>VERB--NOUN-Dat (15)</li>
      <li>VERB--NOUN-Dat-ADP(_) (1)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON-Acc (409)</li>
      <li>VERB--PRON-Dat (66)</li>
      <li>VERB--PRON-Nom (13)</li>
      <li>VERB-Inf--NOUN-Acc (138)</li>
      <li>VERB-Inf--NOUN-Dat (8)</li>
      <li>VERB-Inf--PRON-Acc (135)</li>
      <li>VERB-Inf--PRON-Dat (16)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Inf--PRON-Nom (5)</li>
      <li>VERB-Part--NOUN-Acc (108)</li>
      <li>VERB-Part--NOUN-Dat (5)</li>
      <li>VERB-Part--NOUN-Nom (5)</li>
      <li>VERB-Part--PRON-Acc (98)</li>
      <li>VERB-Part--PRON-Dat (6)</li>
      <li>VERB-Part--PRON-Nom (12)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB--NOUN-Dat (17)</li>
      <li>VERB--PRON-Acc (10)</li>
      <li>VERB--PRON-Dat (180)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (32)</li>
      <li>VERB-Part--NOUN-Dat (5)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Dat (61)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>compound:prt</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:poss</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>compound</a>, <a>flat</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>csubj</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
