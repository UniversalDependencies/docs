---
layout: base
title:  'UD_Naga-Suansu'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Naga Suansu

Language: [Naga](/nmf/index.html) (code: `nmf`)<br/>
Family: Sino-Tibetan

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Jessica K. Ivani, Kira Tulchynska.

Repository: [UD_Naga-Suansu](https://github.com/UniversalDependencies/UD_Naga-Suansu)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udnmf_suansu216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-SA 4.0

Genre: fiction, grammar-examples

Questions, comments?
General annotation questions (either Naga-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Naga-Suansu/issues).
If you want to collaborate, please contact [jessica&nbsp;•&nbsp;ivani&nbsp;(æt)&nbsp;uzh&nbsp;•&nbsp;ch; kira&nbsp;•&nbsp;tulchynska&nbsp;(æt)&nbsp;mail&nbsp;•&nbsp;huji&nbsp;•&nbsp;ac&nbsp;•&nbsp;il].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD_Naga-Suansu is a Universal Dependencies (UD) treebank for Suansu (Glottocode: suan1234), an endangered Tibeto-Burman language spoken on the Indo-Myanmar border. The annotation was performed manually based on glosses. This treebank includes texts from fiction and grammar. The treebank contains **3.1k** tokens, distributed as follows:

- **Training set**: 2945 tokens
- **Test set**: 157 tokens



The UD\_Naga-Suansu treebank consists of various texts translated into Suansu by native speakers, then glossed and annotated. The included texts are:

- **grammar\_Cairo**: 20 examples from the [Cairo Cicling Corpus]\([https://github.com/UniversalDependencies/cairo/blob/master/translations.txt](https://github.com/UniversalDependencies/cairo/blob/master/translations.txt))
- **grammar\_BivalTyp**: [BivalTyp](https\://www\.bivaltyp.info) dataset translated to Suansu.
- **grammar\_ValPal**: [ValPal](https://valpal.info) dataset dataset translated to Suansu.
- **film\_Bridge**: Begining of the subtitles from *Bridge of Spies* (2015).

## Genre Classification

- **Fiction**: Sentence IDs start with *film*.
- **Grammar**: Sentence IDs start with *grammar*.

## Data Splits

- **Training set**: Full **grammar\_Cairo**
- **Test set**: Full **grammar\_BivalTyp**, **grammar\_ValPal**, and **film\_Bridge**

## Acknowledgments

This work was supported by the University of Zurich Global Strategy and Partnerships Funding Scheme (Project Fund Level 3) (https://www.global.uzh.ch).
We gratefully acknowledge the Suansu-speaking community for their continuous support. We also thank Jason M. Vashum for his generous assistance with translation and annotation.

## References

* Say, Sergey (ed.). 2020-. BivalTyp: Typological database of bivalent verbs and their encoding frames. (Available online at https://www.bivaltyp.info, Accessed on 1 April 2025.)
* Hartmann, Iren & Haspelmath, Martin & Taylor, Bradley (eds.) 2013.
Valency Patterns Leipzig.
Leipzig: Max Planck Institute for Evolutionary Anthropology.
(Available online at https://valpal.info, Accessed on 2025-04-01.)



# Statistics of UD Naga Suansu

## POS Tags

[ADJ](nmf_suansu-pos-ADJ.html) – [ADP](nmf_suansu-pos-ADP.html) – [ADV](nmf_suansu-pos-ADV.html) – [AUX](nmf_suansu-pos-AUX.html) – [CCONJ](nmf_suansu-pos-CCONJ.html) – [DET](nmf_suansu-pos-DET.html) – [INTJ](nmf_suansu-pos-INTJ.html) – [NOUN](nmf_suansu-pos-NOUN.html) – [NUM](nmf_suansu-pos-NUM.html) – [PART](nmf_suansu-pos-PART.html) – [PRON](nmf_suansu-pos-PRON.html) – [PROPN](nmf_suansu-pos-PROPN.html) – [PUNCT](nmf_suansu-pos-PUNCT.html) – [SCONJ](nmf_suansu-pos-SCONJ.html) – [VERB](nmf_suansu-pos-VERB.html) – [X](nmf_suansu-pos-X.html)

## Features

[Abbr](nmf_suansu-feat-Abbr.html) – [Aspect](nmf_suansu-feat-Aspect.html) – [Case](nmf_suansu-feat-Case.html) – [Degree](nmf_suansu-feat-Degree.html) – [Deixis](nmf_suansu-feat-Deixis.html) – [Evident](nmf_suansu-feat-Evident.html) – [ExtPos](nmf_suansu-feat-ExtPos.html) – [Foreign](nmf_suansu-feat-Foreign.html) – [Modal](nmf_suansu-feat-Modal.html) – [Mood](nmf_suansu-feat-Mood.html) – [Number](nmf_suansu-feat-Number.html) – [NumForm](nmf_suansu-feat-NumForm.html) – [NumType](nmf_suansu-feat-NumType.html) – [Person](nmf_suansu-feat-Person.html) – [Polarity](nmf_suansu-feat-Polarity.html) – [PronType](nmf_suansu-feat-PronType.html) – [Reflex](nmf_suansu-feat-Reflex.html) – [Tense](nmf_suansu-feat-Tense.html) – [VerbForm](nmf_suansu-feat-VerbForm.html)

## Relations

[acl](nmf_suansu-dep-acl.html) – [acl:relcl](nmf_suansu-dep-acl-relcl.html) – [advcl](nmf_suansu-dep-advcl.html) – [advmod](nmf_suansu-dep-advmod.html) – [advmod:emph](nmf_suansu-dep-advmod-emph.html) – [amod](nmf_suansu-dep-amod.html) – [appos](nmf_suansu-dep-appos.html) – [aux](nmf_suansu-dep-aux.html) – [case](nmf_suansu-dep-case.html) – [cc](nmf_suansu-dep-cc.html) – [ccomp](nmf_suansu-dep-ccomp.html) – [compound](nmf_suansu-dep-compound.html) – [compound:prt](nmf_suansu-dep-compound-prt.html) – [compound:svc](nmf_suansu-dep-compound-svc.html) – [conj](nmf_suansu-dep-conj.html) – [cop](nmf_suansu-dep-cop.html) – [csubj](nmf_suansu-dep-csubj.html) – [csubj:outer](nmf_suansu-dep-csubj-outer.html) – [det](nmf_suansu-dep-det.html) – [discourse](nmf_suansu-dep-discourse.html) – [fixed](nmf_suansu-dep-fixed.html) – [flat](nmf_suansu-dep-flat.html) – [flat:foreign](nmf_suansu-dep-flat-foreign.html) – [flat:name](nmf_suansu-dep-flat-name.html) – [iobj](nmf_suansu-dep-iobj.html) – [mark](nmf_suansu-dep-mark.html) – [nmod](nmf_suansu-dep-nmod.html) – [nmod:poss](nmf_suansu-dep-nmod-poss.html) – [nsubj](nmf_suansu-dep-nsubj.html) – [nsubj:outer](nmf_suansu-dep-nsubj-outer.html) – [nsubj:pass](nmf_suansu-dep-nsubj-pass.html) – [nummod](nmf_suansu-dep-nummod.html) – [obj](nmf_suansu-dep-obj.html) – [obl](nmf_suansu-dep-obl.html) – [orphan](nmf_suansu-dep-orphan.html) – [parataxis](nmf_suansu-dep-parataxis.html) – [punct](nmf_suansu-dep-punct.html) – [reparandum](nmf_suansu-dep-reparandum.html) – [root](nmf_suansu-dep-root.html) – [vocative](nmf_suansu-dep-vocative.html) – [xcomp](nmf_suansu-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 584 sentences, 3098 tokens and 3123 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 387 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 3 types of words that contain both letters and punctuation. Examples: Mr., Mmm-mmm, a.m.-va</li>
</ul>

<ul>
<li>This corpus contains 25 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 16 types of multi-word tokens. Examples: ladi, redi, ngammedi, lamiszudi, mathammedi, mazohndi, mokrwedi, nuedi, phanungedi, puimadi, redime, runghaphadi, thedi, theszyuiamadi, thungmididi, wienahndi.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 14 word types tagged as particles (PART): dinan, gala, garhe, garhema, khama, la, lagu, re, reganan, reha, rehate, rema, remale, zahai</li>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as pronouns (PRON): a, ba, bu, chatha, didi, hadi, hai, mazohn, mwe, mwethe, na, nahn, thuza, tye</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as determiners (DET): drekhalai, gare, hai, khalailehnda, mazohn, mwe, rigatratrahn, tye, za</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: hai, mazohn, mwe, tye</li>
</ul>

<ul>
<li>This corpus contains 13 lemmas tagged as auxiliaries (AUX): dai, diga, dila, dima, e, ga, geraha, gu, la, ra, raga, rahn, tha</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: la, ra, tha</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>PART: reganan</li>
    <li>VERB: rungganan, theganan, yoanganan, bahnganan, laganan, lwaganan, malungphzganan, nyamganan, phanungganan, ruganan</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>ADP: dhohnte, zwehnne</li>
    <li>ADV: lhia</li>
    <li>AUX: lale, laha, lala, lalate, laia, lalama, late</li>
    <li>PART: remale</li>
    <li>VERB: dhohnte, nue, reha, wile, kanale, manungle, rae, rue, runge, rungha</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>ADP: thohn</li>
    <li>ADV: rai, kai, chaszuma</li>
    <li>AUX: la, lama</li>
    <li>VERB: la, the, rung, yoan, chari, mu, thungmi, dhohn, rike, ru</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: runge, theyikke, phehnne, rungedi, runghapha, Tramahnne, dhohnphala, huppe, kathamme, laithiedi</li>
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
      <li>NOUN: trahnpha, baneopha, neopha, thathokpha, Duhpha, Katrahnpha, Offerpha, Russianla, bikpha, chokeypha</li>
      <li>NOUN-Vnoun: runghapha, dhohnphala</li>
      <li>PRON: hai, bu, Bunan, Na, banan, haidi, hainan, Budi, buva, haibyahn</li>
      <li>PROPN: Rosenbergwidi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: canned</li>
      <li>NOUN: miszu, neo, baneo, insurance, leneo, rhui, puirawi, Szukhyate, bya, sir</li>
      <li>NOUN-Vnoun: runge, theyikke, phehnne, rungedi, Tramahnne, huppe, kathamme, laithiedi, matrahnne, nungae</li>
      <li>PRON: a, nahn, ba, bava, ava, Anan, badi, didi, adi, nahndi</li>
      <li>PROPN: Peter, Mariadi, Jim, Maria, Peternan, Donovan, Mary, Bar, Bob, Doug</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: mayingeda</li>
      <li>NOUN: lehnda, thungda, rhuida, anohnda, kumda, makhwada, Ada, actsda, blanketda, capitalda</li>
      <li>NOUN-Vnoun: rueda, ruweda</li>
      <li>NUM: 1941da</li>
      <li>PRON: haida, Mwetheda</li>
      <li>PROPN: Nurembergda, Parisda</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ben
    <ul>
      <li>ADJ: kaphebyahn</li>
      <li>NOUN: governmentbyahn, lhaibyahn, rungebyahn, yurbyahn</li>
      <li>NOUN-Vnoun: rungebyahn</li>
      <li>PRON: babyahn, haibyahn, nahnbyahn</li>
      <li>PROPN: Abelbyahn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: puidungrela</li>
      <li>NOUN: spyla, baszuela, dhohnphala, neola, neolewila, neophala, puirawila, wizala</li>
      <li>NOUN-Vnoun: dhohnphala</li>
      <li>PRON: Ala, nahnla, Thuzala</li>
      <li>PROPN: Mariala, Alisonla, Unionla</li>
    </ul>
  </li>
</ul>

<ul>
  <li>DatErg
    <ul>
      <li>PRON: Alanan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>NOUN: leneonan, neonan, Nahnnan, baneonan, miszunan, Ainnan, Anan, Huinan, Hwehnnan, Thamoknan</li>
      <li>NUM: skanan</li>
      <li>PRON: Anan, nahnnan, Bunan, banan, mazohnnan, thuzanan, hainan, didinan</li>
      <li>PROPN: Peternan, Associationnan, Committeenan, Jessicanan, Marianan, Natalienan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>ErgTop
    <ul>
      <li>NOUN: baneonandi, neonandi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: miszuva, theva, a.m.-va, atomicva, caseva, companyva, courtva, huiva, neobeva, neova</li>
      <li>NUM: skava</li>
      <li>PRON: bava, ava, nahnva, haiva, nava, Nahnvai, buva, haivai</li>
      <li>PROPN: Donovanva, Franceva, Investigationva, Peterva</li>
    </ul>
  </li>
</ul>

<ul>
  <li>GenAbl
    <ul>
      <li>NOUN: baswevada, clientvada, thaivada</li>
      <li>PRON: nahnvada</li>
      <li>PROPN: Petervada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>GenTop
    <ul>
      <li>NOUN: suivadi</li>
      <li>PRON: Avadi, nahnvadi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: criminalnahn</li>
      <li>ADP: athoongenahn, mathaknahn, rinahn, thrinahn</li>
      <li>NOUN: clientnahn, rhuinahn, gaenahn, maganahn, maramnahn, marketnahn, Airportnahn, Biknahn, CIAnahn, Dukannahn</li>
      <li>NOUN-Vnoun: phethenahn, wienahn</li>
      <li>NUM: phangenahn, 19nahn</li>
      <li>PRON: anahn, Nahnnahn, hainahn, nahn, nahnla, thuzanahn</li>
      <li>PROPN: Earlnahn, CIAnahn, Jasonnahn, Marianahn, Predentialnahn, Unionnahn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>LocTop
    <ul>
      <li>NOUN: desknahndi, rungenahndi</li>
      <li>NOUN-Vnoun: rungenahndi</li>
      <li>NUM: phangenahndi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Top
    <ul>
      <li>ADJ: kathadi, makhadi, mazohndi, yahndi, zazudi</li>
      <li>NOUN: neodi, baneodi, kelasdi, rhuidi, miszudi, rungedi, badi, jehndi, letterdi, lhaidi</li>
      <li>NOUN-Vnoun: rungedi, laithiedi</li>
      <li>NUM: skadi</li>
      <li>PRON: badi, adi, nahndi, thuzadi, haidi, Budi, Chathadi, mazohndi</li>
      <li>PROPN: Mariadi, Abeldi, Browndi, Iguazudi, Lynndi, Peterdi, Rosenbergwidi, Shinndi, Smithdi, Streetdi</li>
      <li>SCONJ: didi</li>
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
      <li>ADV: szumahnnan</li>
      <li>VERB: amahn, szumahn, szumahnle</li>
      <li>VERB-Fin: szumahnle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: Szuate, katha, next, thokke, American, Atra, criminal, drungle, gaswe, gaswwe</li>
      <li>VERB-Conv: nungaikhama</li>
      <li>VERB-Inf: phehnszuma</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: nungaima, rungma</li>
      <li>ADV: prye, rema, chaszuma</li>
      <li>ADV-Inf: chaszuma</li>
      <li>AUX: gama, lama, lalama</li>
      <li>AUX-Fin: lalama</li>
      <li>AUX-Inf: lama</li>
      <li>INTJ: garhe, ma, me</li>
      <li>NOUN: miszuma</li>
      <li>NUM: Phangema</li>
      <li>PART: garhe, rema, khama, garhema</li>
      <li>SCONJ: dime</li>
      <li>VERB: phabtama, thaima, thema, themate, lama, rema, thaithema, muma, nungaima, re</li>
      <li>VERB-Conv: ngammaganan, nungaikhama, rehama, szammaganan, thengammaganan, yinglamaganan</li>
      <li>VERB-Fin: themate, katomszumale, keikapmate, mumate, nungaimate, rumale, theate, thekhamate, thelate, thema</li>
      <li>VERB-Inf: phabtama, thaima, lama, thaithema, thema, muma, rungma, Kajahnma, Thekhamzama, banma</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>INTJ: ame, ay</li>
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
      <li>ADP: thai, zwehnne</li>
      <li>ADP-Fin: zwehnne</li>
      <li>ADV-Fin: lhia</li>
      <li>AUX: lale, rahn, laha, laia</li>
      <li>AUX-Fin: lale, laha, laia</li>
      <li>NOUN: runge, theyikke, rungedi, phehnne, runghapha, Tramahnne, dhohnphala, huppe, kathamme, laithiedi</li>
      <li>NOUN-Vnoun: runge, theyikke, phehnne, rungedi, runghapha, Tramahnne, dhohnphala, huppe, kathamme, laithiedi</li>
      <li>PART-Fin: remale</li>
      <li>VERB-Fin: nue, reha, wile, kanale, manungle, rae, rue, runge, rungha, thaile</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADP-Fin: dhohnte</li>
      <li>AUX: rahnte, lalate, late</li>
      <li>AUX-Fin: lalate, late</li>
      <li>NOUN-Vnoun: szumahnne</li>
      <li>PART: rehate</li>
      <li>VERB-Conv: nungaikhama, rehama</li>
      <li>VERB-Fin: dhohnte, themate, theate, mathilate, mathunglate, myate, puiate, ruate, sahnte, thate</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB-Conv: rungganan, theganan, yoanganan, bahnganan, malungphzganan, nyamganan, phanungganan, ruganan, thyiganan, Nueganan</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Des
    <ul>
      <li>AUX: tha</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Hort
    <ul>
      <li>AUX: ga, diga, raga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: ra</li>
      <li>VERB-Fin: mia, shamma</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADP: dhohnte, thai, zwehnne</li>
      <li>ADP-Fin: dhohnte, zwehnne</li>
      <li>ADV-Fin: lhia</li>
      <li>AUX-Fin: lale, laha, lalate, laia, late</li>
      <li>PART-Fin: remale</li>
      <li>VERB-Fin: dhohnte, nue, reha, wile, kanale, manungle, rae, rue, runge, rungha</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX: la, dila, lala, dima, lalama</li>
      <li>AUX-Fin: lala, lalama</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Irr
    <ul>
      <li>AUX: rahn, rahnte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Jus
    <ul>
      <li>AUX: dai, gama</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADP: dhohnte, thai, zwehnne</li>
      <li>ADP-Fin: dhohnte, zwehnne</li>
      <li>ADV-Fin: lhia</li>
      <li>AUX-Fin: lalate, laia, late</li>
      <li>VERB-Fin: dhohnte, nue, rae, rue, runge, themate, thea, theate, bahnne, makhe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX-Fin: laha</li>
      <li>NOUN-Vnoun: runghapha</li>
      <li>PART: reha, rehate</li>
      <li>VERB-Fin: reha, rungha, choklaha, chaha, jaazakha, kaprahate, khayeaha, khurumha, lahate, lailehnmaha</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: lale</li>
      <li>PART-Fin: remale</li>
      <li>VERB-Fin: wile, kanale, manungle, thaile, chule, matrehnle, phabtale, rele, thele, woanle</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Fh
    <ul>
      <li>AUX: gu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>AUX: ga</li>
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
      <li>ADV: hano, dino</li>
      <li>DET: tye, hai</li>
      <li>PRON: didi, tye, hadi, Avadi, Haida, didinan, nahnvadi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: rigatratrahn, za</li>
      <li>PRON: Chathadi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: gare, mwetheda, Reda, kanahn, kukunahn, zapzare</li>
      <li>DET: Gare, mwe</li>
      <li>PRON: mwe, thuzadi, thuzanan, thuza, Mwetheda, Thuzala, thuzanahn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: a, nahn, ba, bava, ava, Anan, badi, hai, adi, nahndi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: mazohn</li>
      <li>PRON: mazohn, mazohnnan, mazohndi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: ska, phange, phangenahn, $100,000, 19, 1941da, 19nahn, 3, 9:00, Phangema</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: drekhalai, khalailehnda</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: a, ava, Anan, hai, adi, bava, anahn, haidi, Ala, banan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: nahn, nahndi, nahnnan, nahnla, Na, nahnbyahn, nahnva, Nahnnahn, Nahnvai, nahnvada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: ba, bava, badi, bu, Bunan, babyahn, nahnva, Banan, Budi, buva</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: CIAnahn</li>
          <li>PROPN: CIAnahn</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Deixis</a>
    <ul>
      <li>Prox
        <ul>
          <li>ADV: hano</li>
          <li>DET: hai</li>
          <li>PRON: hadi, Haida</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: dino</li>
          <li>DET: tye</li>
          <li>PRON: didi, tye, didinan</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADV
        <ul>
          <li>NUM: ska</li>
        </ul>
      </li>
      <li>VERB
        <ul>
          <li>INTJ: ay</li>
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
          <li>X: ,, Cowan, Donovan, Visitors, Watters, and</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Modal</a>
    <ul>
      <li>Abil
        <ul>
          <li>NOUN-Vnoun: themingame, thengamme</li>
          <li>VERB-Inf: rungamma, woanngam</li>
        </ul>
      </li>
      <li>Obl
        <ul>
          <li>AUX: geraha</li>
        </ul>
      </li>
      <li>Perm
        <ul>
          <li>ADV-Inf: chaszuma</li>
          <li>VERB-Inf: kapralaszuma, phehnszuma</li>
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
          <li>NUM: 19, 1941da, 19nahn</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: ska, phange, phangenahn, $100,000, 3, 9:00, khanika, lhohnphange, phangenahndi, skadi</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: e.</li>
</ul>

<ul>
<li>This corpus uses 12 lemmas as auxiliaries (<a>aux</a>). Examples: la, rahn, dai, ga, geraha, gu, dila, ra, tha, diga, dima, raga.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Conv--NOUN (7)</li>
      <li>VERB-Conv--NOUN-Erg (3)</li>
      <li>VERB-Conv--NOUN-Top (3)</li>
      <li>VERB-Conv--PRON (9)</li>
      <li>VERB-Conv--PRON-Erg (3)</li>
      <li>VERB-Conv--PRON-Top (1)</li>
      <li>VERB-Fin--NOUN (59)</li>
      <li>VERB-Fin--NOUN-Erg (19)</li>
      <li>VERB-Fin--NOUN-ErgTop (2)</li>
      <li>VERB-Fin--NOUN-Top (16)</li>
      <li>VERB-Fin--PRON (36)</li>
      <li>VERB-Fin--PRON-Erg (9)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Top (3)</li>
      <li>VERB-Inf--NOUN (12)</li>
      <li>VERB-Inf--NOUN-Erg (3)</li>
      <li>VERB-Inf--NOUN-Top (1)</li>
      <li>VERB-Inf--PRON (43)</li>
      <li>VERB-Inf--PRON-Erg (8)</li>
      <li>VERB-Inf--PRON-Top (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--PRON-Top (1)</li>
      <li>VERB-Conv--NOUN (14)</li>
      <li>VERB-Conv--NOUN-Top (6)</li>
      <li>VERB-Conv--PRON (2)</li>
      <li>VERB-Conv--PRON-Top (1)</li>
      <li>VERB-Fin--NOUN (76)</li>
      <li>VERB-Fin--NOUN-Abl (1)</li>
      <li>VERB-Fin--NOUN-Top (56)</li>
      <li>VERB-Fin--PRON (6)</li>
      <li>VERB-Fin--PRON-Erg (3)</li>
      <li>VERB-Fin--PRON-Top (2)</li>
      <li>VERB-Inf--NOUN (29)</li>
      <li>VERB-Inf--NOUN-ADP(re) (1)</li>
      <li>VERB-Inf--NOUN-ADP(thri) (1)</li>
      <li>VERB-Inf--NOUN-Abl (1)</li>
      <li>VERB-Inf--NOUN-Top (17)</li>
      <li>VERB-Inf--PRON (7)</li>
      <li>VERB-Inf--PRON-GenTop (2)</li>
      <li>VERB-Inf--PRON-Top (7)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB-Fin--NOUN (3)</li>
      <li>VERB-Fin--NOUN-Dat (5)</li>
      <li>VERB-Fin--NOUN-Loc (1)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Top (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--PRON-Dat (3)</li>
      <li>VERB-Inf--PRON-Loc (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 10 relation subtypes: <a>acl:relcl</a>, <a>advmod:emph</a>, <a>compound:prt</a>, <a>compound:svc</a>, <a>csubj:outer</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>dep</a></li>
</ul>
