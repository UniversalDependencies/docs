---
layout: base
title:  'UD_Even-GDUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Even GDUD

Language: [Even](/eve/index.html) (code: `eve`)<br/>
Family: Tungusic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Even-GDUD](https://github.com/UniversalDependencies/UD_Even-GDUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udeve_gdud219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Even-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Even-GDUD/issues).
If you want to collaborate, please contact [widelia&nbsp;(æt)&nbsp;zju&nbsp;•&nbsp;edu&nbsp;•&nbsp;cn].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD_Even-GDUD is a treebank of Even (also called Lamut), a Northern Tungusic language spoken in northeastern Siberia, based on grammatical example sentences derived from a reference grammar.



The Even GDUD (Grammar-Derived Universal Dependencies) treebank contains 39 sentences of Even (ISO 639-3: eve), a Northern Tungusic language spoken by the Even people in eastern Siberia (Russia). The data consist of grammatical example sentences drawn from a reference grammar of Even, presented with a phonemic Latin-based transcription and accompanied by English translations and interlinear glosses.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations, following the Universal Dependencies (UD) guidelines. The annotation prioritizes UD core morphological features and dependency relations. Even-specific morphological information that does not correspond to any value in the universal feature inventory (such as certain derivational categories, particle types, and specialized converb, voice, and mood distinctions) is encoded in the MISC column, in accordance with UD conventions.

## Data split

Because the treebank is small (well below the 20K-word threshold), all sentences are provided as test data.

## Morphological annotation

All UD core features used in the treebank take standard universal values. The following Even-specific morphological information is encoded in the MISC column rather than FEATS: `AdvType`, `Attr`, `Aspect=Ant/Purp/Res`, `Case=Priv`, `ConvType`, `Degree=Int/Tot`, `Derivation`, `Discourse`, `Focus`, `PartType=Disc/Foc/Onom/Prt`, `Tense=NonPast`, `VerbForm=Excl`, and `Voice=Detrans/Mult/Res`.

The copula `bi` (existential 'to be') is analyzed as an auxiliary (AUX).

## Dependency annotation

UD core relations are used throughout the treebank. The `nsubj:outer` subtype is used where a clause acts as the predicate of another clause.

## Acknowledgments

The Even GDUD treebank was created by Wenchao Li and Haitao Liu, based on grammatical example sentences from a reference grammar of Even. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually following the Universal Dependencies guidelines.

We thank Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow, and the Universal Dependencies community for their support.


# Statistics of UD Even GDUD

## POS Tags

[ADJ](eve_gdud-pos-ADJ.html) – [ADP](eve_gdud-pos-ADP.html) – [ADV](eve_gdud-pos-ADV.html) – [AUX](eve_gdud-pos-AUX.html) – [DET](eve_gdud-pos-DET.html) – [INTJ](eve_gdud-pos-INTJ.html) – [NOUN](eve_gdud-pos-NOUN.html) – [NUM](eve_gdud-pos-NUM.html) – [PART](eve_gdud-pos-PART.html) – [PRON](eve_gdud-pos-PRON.html) – [PROPN](eve_gdud-pos-PROPN.html) – [PUNCT](eve_gdud-pos-PUNCT.html) – [VERB](eve_gdud-pos-VERB.html)

## Features

[Aspect](eve_gdud-feat-Aspect.html) – [Case](eve_gdud-feat-Case.html) – [Definite](eve_gdud-feat-Definite.html) – [Degree](eve_gdud-feat-Degree.html) – [Deixis](eve_gdud-feat-Deixis.html) – [Mood](eve_gdud-feat-Mood.html) – [Number](eve_gdud-feat-Number.html) – [Number[psor]](eve_gdud-feat-Number-psor.html) – [NumType](eve_gdud-feat-NumType.html) – [Person](eve_gdud-feat-Person.html) – [Person[psor]](eve_gdud-feat-Person-psor.html) – [Polarity](eve_gdud-feat-Polarity.html) – [Poss](eve_gdud-feat-Poss.html) – [PronType](eve_gdud-feat-PronType.html) – [Reflex](eve_gdud-feat-Reflex.html) – [Tense](eve_gdud-feat-Tense.html) – [VerbForm](eve_gdud-feat-VerbForm.html) – [Voice](eve_gdud-feat-Voice.html)

## Relations

[acl](eve_gdud-dep-acl.html) – [advcl](eve_gdud-dep-advcl.html) – [advmod](eve_gdud-dep-advmod.html) – [amod](eve_gdud-dep-amod.html) – [appos](eve_gdud-dep-appos.html) – [case](eve_gdud-dep-case.html) – [compound](eve_gdud-dep-compound.html) – [cop](eve_gdud-dep-cop.html) – [det](eve_gdud-dep-det.html) – [discourse](eve_gdud-dep-discourse.html) – [iobj](eve_gdud-dep-iobj.html) – [nmod](eve_gdud-dep-nmod.html) – [nsubj](eve_gdud-dep-nsubj.html) – [nsubj:outer](eve_gdud-dep-nsubj-outer.html) – [nummod](eve_gdud-dep-nummod.html) – [obj](eve_gdud-dep-obj.html) – [obl](eve_gdud-dep-obl.html) – [parataxis](eve_gdud-dep-parataxis.html) – [punct](eve_gdud-dep-punct.html) – [root](eve_gdud-dep-root.html) – [xcomp](eve_gdud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 39 sentences and 282 tokens.</li>
</ul>

<ul>
<li>This corpus contains 17 tokens (6%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 173 types of words that contain both letters and punctuation. Examples: no., amm-u, o., bi-hi-n, bi:, do.:-la-n, egÃe-meje, ejm-u, go:-je:Ãi, i-je, kolle-kken, o.lo.k, ulde-we-n, :n, Dima-cˇam, Dima-cˇan, Nan:, Ni:-cˇem, Ni:-gol, Pasko.-cˇane, Vladimira-ńÃa, abaga-ń, abaga-ńÃa, abaga-ńÃa-wu, ahikan-du, aka-lkan-maja, amar-da-duku-n, ampa:r-kakam, awna-da:r, awna-lda, bak-alda-ra-p, bak-cˇa, bari-cˇ-cˇa-l, beje-t, bekecˇ-cˇen-du-tne, bi-d-de-n, bi-h-ni, bi-he-m, bi-he-nni, bi-wre-cˇe-l, bi-wre-r, bi-Ãi-n, biet-ti, bo:-d-ni, buluhi-kie, burduk-kaka-l-bu, busa-mdas, bütünnü:, cˇa:w-du, cˇulbańa-maja</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SCONJ, CCONJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 10 word types tagged as particles (PART): :n, No., at, ere, es, mo:, prt, tar, ńo:-Ãi-m, “ehni!”</li>
</ul>

<ul>
<li>This corpus contains 15 lemmas tagged as pronouns (PRON): .o., Ni:-gol, bak-cˇa, beje-t, bi:, hu:, i, i-ken, ia-kakan, ia-w, ia-wa-n, me:n-Ãur, nan, no., tarako.:n</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as determiners (DET): buolla, o., tacˇ, tar, tar-cˇa-l, tar-cˇam, tara-w, tarak, Ãa</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): bi</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: go:-je:Ãi, Ni:-cˇem, ha:mak-ku:nÃi, ha:mat-ja:Ãi, ho.r-riÃi, ia-ja:Ãi, ila-ja:Ãi, it-tiÃi, o.:-nikan, tewte</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>VERB: bi-Ãi-n, ga-riÃur, go.l, i:-Ã-e:n-ne-n, ńo:-je:t-te-n</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: awna-da:r, bari-cˇ-cˇa-l, biet-ti, eje:-hen-cˇe-kken, em-u-cˇe, eńen-ni, go:-niken, hebehri-kken, hokolo-n, irka-cˇa-la-n</li>
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
      <li>ADJ: guÃeje-kie-kke-l</li>
      <li>DET: tar-cˇa-l</li>
      <li>NOUN: kuNa-l, burduk-kaka-l-bu, cˇurita-Na-l-bu, ieke-wur, kahna-cˇam-ur, kiliep-meje-l, kuNa-kka-l, to.bar-ur, ulde-kke-l-bu</li>
      <li>PRON: bak-cˇa, beje-t, hu:, i-ken, me:n-Ãur</li>
      <li>VERB: bak-alda-ra-p, bari-cˇ-cˇa-l, bi-wre-cˇe-l, bi-wre-r, ga-riÃur, go:-je:Ãi-l, go:-niken, hebehri-kken, hobgi-k-ko:nÃur, huj-u-t-je:Ãi-l</li>
      <li>VERB-Conv: go:-je:Ãi-l, hobgi-k-ko:nÃur, huj-u-t-je:Ãi-l, Ãeb-kenÃur</li>
      <li>VERB-Fin: ga-riÃur</li>
      <li>VERB-Part: bari-cˇ-cˇa-l, go:-niken, hebehri-kken, k-cˇa-l</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX: bi-hi-n</li>
      <li>NOUN: amm-u, ejm-u, ulde-we-n, Nmutnan, amar-da-duku-n, bokke, Ãanisa-N-u, ülǖ</li>
      <li>PRON: no., bi:, i-je, ia-w, ia-wa-n</li>
      <li>VERB: do.:-la-n, 12, awna-lda, bi-d-de-n, bi-h-ni, bi-he-m, bi-he-nni, bi-hi-n, bi-Ãi-n, bo:-d-ni</li>
      <li>VERB-Fin: bi-Ãi-n, go.l, i:-Ã-e:n-ne-n, ńo:-je:t-te-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>NOUN: iNa-duk, o.ka:t-tuk, urekcˇ, amar-da-duku-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>DET: tar-cˇam, tara-w</li>
      <li>NOUN: gruša-w, iNa-w, kiliep-u, kniga-w, palak-u, ulde-we-n, ampa:r-kakam, burduk-kaka-l-bu, cˇurita-Na-l-bu, suvenir-kakam</li>
      <li>PRON: bak-cˇa, ia-wa-n</li>
      <li>PROPN: Dima-cˇam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: ahikan-du, bekecˇ-cˇen-du-tne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>PRON: me:n-Ãur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: domNe-le, bokke, hat-la-n, ülǖ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: cˇulbańa-ń, kotle-cˇen</li>
      <li>DET: tar-cˇa-l, tar-cˇam</li>
      <li>NOUN: Dima-cˇan, Vladimira-ńÃa, abaga-ńÃa, gerbe, upe:-ńÃe, abaga-ńÃa-wu, bekecˇ-cˇen-du-tne, ia-cˇan-ti, kahna-cˇam-ur, tu:-cˇan-ti</li>
      <li>PRON: nan</li>
      <li>PROPN: Pasko.-cˇane, Dima-cˇam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: egÃe-meje, buolla, cˇulbańa-maja, dahli-kkan, egÃo:-meje, hulańa-maja, ialdańa-kkan, kira-lkan, kolle-kken, kotlu:-kken</li>
      <li>NOUN: No., aka-lkan-maja, busa-mdas, etiken, go.l-maja, ia-maja, kotle-kken, koza-lka-kkan, tarbacˇan, tünnük-keken</li>
      <li>PRON: ia-kakan</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Aug
    <ul>
      <li>ADJ: baraxsan, irbo:k-keken</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: at, “ehni!”</li>
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
      <li>VERB: bi-wre-cˇe-l, bi-wre-r</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Part: biet-ti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Part: bari-cˇ-cˇa-l, eje:-hen-cˇe-kken, em-u-cˇe, eńen-ni, hokolo-n, irka-cˇa-la-n, k-cˇa-l, ne:-kecˇ-cˇe, o.:-cˇa, patuk-cˇa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB: bi-d-de-n, go:-niken, haNana-ssi-d-da-m, i:-Ã-e:n-ne-n, neke-Ã-e:n-neke-tnen, tegecˇe-d-cˇe</li>
      <li>VERB-Conv: neke-Ã-e:n-neke-tnen</li>
      <li>VERB-Fin: i:-Ã-e:n-ne-n</li>
      <li>VERB-Part: go:-niken, tegecˇe-d-cˇe</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB: nek-mi, neke-Ã-e:n-neke-tnen</li>
      <li>VERB-Conv: neke-Ã-e:n-neke-tnen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: ga-riÃur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: bi-hi-n</li>
      <li>VERB: do.:-la-n, 12, awna-lda, bak-alda-ra-p, bi-d-de-n, bi-h-ni, bi-he-m, bi-he-nni, bi-hi-n, bi-wre-cˇe-l</li>
      <li>VERB-Fin: bi-Ãi-n, go.l, i:-Ã-e:n-ne-n, ńo:-je:t-te-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: bi-Ãi-n, go.l, nek-e:n-Ãi-m, ta-li, Ãeb-Ãi-p=tu</li>
      <li>VERB-Fin: bi-Ãi-n, go.l</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: bi-hi-n</li>
      <li>VERB: do.:-la-n, 12, bi-hi-n, go:n-i-n, ia-ri-n, ielten-i-dnen, ielten-i-n, ihu-je:t-ti-t, ne:-ri-w, o.:-cˇa-l</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Part: tegecˇe-d-cˇe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Part: awna-da:r</li>
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
      <li>DET: buolla, tacˇ, tar, tarak, Ãa, o., tar-cˇa-l, tar-cˇam, tara-w</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: ha:n</li>
      <li>PRON: Ni:-gol</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: o., tarako.:n, ia-kakan, nan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: no., bi:, i-je, bak-cˇa, beje-t, hu:, i-ken, ia-w, ia-wa-n, me:n-Ãur</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: omen, Nan:, alta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: o.</li>
      <li>NOUN: amm-u, ejm-u, ulde-we-n, Nmutnan, abaga-ńÃa-wu, amar-da-duku-n, bekecˇ-cˇen-du-tne, bokke, etike-Ne-n, hat-la-n</li>
      <li>PRON: beje-t, ia-wa-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: ieke-wur, kahna-cˇam-ur, to.bar-ur</li>
      <li>PRON: me:n-Ãur</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>NOUN: amm-u, ejm-u</li>
      <li>PRON: bi:, beje-t, ia-w</li>
      <li>VERB: awna-lda, bak-alda-ra-p, bi-he-m, go:n-e-m, haNana-ssi-d-da-m, ihu-je:t-ti-t, ne:-ri-w, nek-e:n-Ãi-m, ta-li, Ãeb-Ãi-p=tu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: hu:</li>
      <li>VERB: bi-he-nni, ga-riÃur</li>
      <li>VERB-Fin: ga-riÃur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: bi-hi-n</li>
      <li>NOUN: ulde-we-n, Nmutnan, amar-da-duku-n, bokke, ülǖ</li>
      <li>PRON: no., i-je, bak-cˇa, i-ken, ia-wa-n</li>
      <li>VERB: do.:-la-n, 12, bi-d-de-n, bi-h-ni, bi-hi-n, bi-wre-cˇe-l, bi-wre-r, bi-Ãi-n, bo:-d-ni, em-e:n-ne-n</li>
      <li>VERB-Fin: bi-Ãi-n, go.l, i:-Ã-e:n-ne-n, ńo:-je:t-te-n</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: o.</li>
      <li>NOUN: bekecˇ-cˇen-du-tne, ia-cˇan-ti, tu:-cˇan-ti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: hat-la-n</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Deixis</a>
    <ul>
      <li>Prox
        <ul>
          <li>ADV: ecˇ, ecˇin, ele:r, er, tara-Naka:n</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>DET: tacˇ, tar, tarak, tar-cˇa-l, tar-cˇam, tara-w</li>
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
          <li>DET: o.</li>
          <li>NOUN: abaga-ńÃa-wu, ia-cˇan-ti, tu:-cˇan-ti, Ãanisa-N-u</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>NOUN: bekecˇ-cˇen-du-tne, etike-Ne-n, hat-la-n</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: bi.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (9)</li>
      <li>VERB--NOUN-ADP(in) (1)</li>
      <li>VERB--PRON (9)</li>
      <li>VERB-Conv--NOUN (3)</li>
      <li>VERB-Conv--PRON (1)</li>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Part--NOUN (2)</li>
      <li>VERB-Part--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--NOUN-Acc (4)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB-Conv--NOUN (1)</li>
      <li>VERB-Conv--NOUN-Acc-ADP(in) (1)</li>
      <li>VERB-Part--NOUN (2)</li>
      <li>VERB-Part--NOUN-Acc (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 1 relation subtypes: <a>nsubj:outer</a></li>
<li>The following 17 relation types are not used in this corpus at all: <a>csubj</a>, <a>ccomp</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>mark</a>, <a>clf</a>, <a>conj</a>, <a>cc</a>, <a>fixed</a>, <a>flat</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
