---
layout: base
title:  'UD_Turkish_English-BUTR'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Turkish English BUTR

Language: [Turkish English](/qti/index.html) (code: `qti`)<br/>
Family: Code switching

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Furkan Akkurt, Nursena Teker, Helin Binici, Ahmet Demir, Konstantinos Sampanis.

Repository: [UD_Turkish_English-BUTR](https://github.com/UniversalDependencies/UD_Turkish_English-BUTR)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udqti_butr216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either Turkish English-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Turkish_English-BUTR/issues).
If you want to collaborate, please contact [furkanakkurt7242&nbsp;(æt)&nbsp;icloud&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD_Turkish_English-BUTR is a treebank of Turkish-English code-switched sentences collected from Boğaziçi University students, annotated in the Universal Dependencies framework to provide a standardized resource for analyzing syntactic patterns in Turkish-English code-switching.



The UD_Turkish_English-BUTR treebank contains annotated Turkish-English code-switched sentences collected from Boğaziçi University students. The term "Boğaziçi Turkish" refers to the variety of Turkish influenced by English commonly spoken by Boğaziçi University students and characterized by frequent code-switching. This linguistic phenomenon, sometimes referred to as "Boğaziçi Tarzancası" (Boğaziçi Tarzan-speak) in informal settings, represents a distinct sociolinguistic practice that has remained largely unexamined in the linguistic literature.

The treebank was developed using a semi-automated annotation pipeline within the Universal Dependencies framework. The process began with preliminary annotation using the language model Claude 3.5 Sonnet, followed by manual verification and correction by four annotators using ArboratorGrew. The annotation scheme aligns with existing Turkish UD treebanks while incorporating necessary adjustments for code-switching phenomena, particularly in head assignment within mixed-language constructions.

Qualitative analysis of the treebank reveals distinctive code-switching patterns, including English verbs with Turkish auxiliaries, academic terminology, and pragmatic expressions. A notable pattern is the morphological integration of English verbs into Turkish syntax, exemplified by constructions like "drop-bylayacağım" ("I will drop by"), where English phrasal verbs receive Turkish morphological markers.

The Universal Dependencies analysis demonstrates three key syntactic patterns in Boğaziçi Turkish: preservation of Turkish syntactic structure with English lexical insertions, morphological adaptation of English verbs, and code-switching at specific syntactic boundaries.

This treebank provides a standardized resource for analyzing syntactic patterns in Turkish-English code-switching, facilitating further research in computational linguistics. While the initial release contains a modest number of representative sentences, the resource will hopefully be expanded in future releases.

## Acknowledgments

We would like to express our gratitude to all the Boğaziçi University students who participated in our survey and provided examples of code-switched sentences for this treebank. Their contributions were essential for capturing authentic instances of Turkish-English code-switching patterns.

We thank the Universal Dependencies community for their guidelines and support during the annotation process. Special thanks to the ArboratorGrew team for providing the annotation platform that facilitated our collaborative work.

We also acknowledge the contributions of Claude 3.5 Sonnet in the preliminary annotation phase, which helped streamline our workflow and allowed the annotation team to focus on refining and validating the dependency structures.

This work was conducted as part of a research project at Boğaziçi University, with support from the Departments of Linguistics and Computer Engineering. We appreciate the academic environment that encouraged this interdisciplinary collaboration between computational and sociolinguistic approaches to the study of code-switching.

## References

* Nivre, J., et al. (2020). Universal Dependencies v2: An evergrowing multilingual treebank collection. In Proceedings of the 12th Language Resources and Evaluation Conference. European Language Resources Association.
* Guillaume, B., et al. (2021). Grew-match: An online tool for comparative corpus queries and quantitative analyses of UD treebanks. In Proceedings of the Fourth Workshop on Universal Dependencies.
* Anthropic (2024). Claude 3.5 Sonnet [Large Language Model]. https://www.anthropic.com/claude


# Statistics of UD Turkish English BUTR

## POS Tags

[ADJ](qti_butr-pos-ADJ.html) – [ADP](qti_butr-pos-ADP.html) – [ADV](qti_butr-pos-ADV.html) – [AUX](qti_butr-pos-AUX.html) – [CCONJ](qti_butr-pos-CCONJ.html) – [DET](qti_butr-pos-DET.html) – [NOUN](qti_butr-pos-NOUN.html) – [NUM](qti_butr-pos-NUM.html) – [PART](qti_butr-pos-PART.html) – [PRON](qti_butr-pos-PRON.html) – [PROPN](qti_butr-pos-PROPN.html) – [PUNCT](qti_butr-pos-PUNCT.html) – [SCONJ](qti_butr-pos-SCONJ.html) – [VERB](qti_butr-pos-VERB.html)

## Features

[Aspect](qti_butr-feat-Aspect.html) – [Case](qti_butr-feat-Case.html) – [Evident](qti_butr-feat-Evident.html) – [ExtPos](qti_butr-feat-ExtPos.html) – [Gender](qti_butr-feat-Gender.html) – [Mood](qti_butr-feat-Mood.html) – [Number](qti_butr-feat-Number.html) – [Number[psor]](qti_butr-feat-Number-psor.html) – [NumType](qti_butr-feat-NumType.html) – [Person](qti_butr-feat-Person.html) – [Person[psor]](qti_butr-feat-Person-psor.html) – [Polarity](qti_butr-feat-Polarity.html) – [PronType](qti_butr-feat-PronType.html) – [Tense](qti_butr-feat-Tense.html) – [Typo](qti_butr-feat-Typo.html) – [VerbForm](qti_butr-feat-VerbForm.html) – [Voice](qti_butr-feat-Voice.html)

## Relations

[acl](qti_butr-dep-acl.html) – [advcl](qti_butr-dep-advcl.html) – [advmod](qti_butr-dep-advmod.html) – [amod](qti_butr-dep-amod.html) – [aux](qti_butr-dep-aux.html) – [case](qti_butr-dep-case.html) – [cc](qti_butr-dep-cc.html) – [ccomp](qti_butr-dep-ccomp.html) – [compound](qti_butr-dep-compound.html) – [conj](qti_butr-dep-conj.html) – [det](qti_butr-dep-det.html) – [discourse](qti_butr-dep-discourse.html) – [fixed](qti_butr-dep-fixed.html) – [flat](qti_butr-dep-flat.html) – [mark](qti_butr-dep-mark.html) – [nmod](qti_butr-dep-nmod.html) – [nsubj](qti_butr-dep-nsubj.html) – [nummod](qti_butr-dep-nummod.html) – [obj](qti_butr-dep-obj.html) – [obl](qti_butr-dep-obl.html) – [parataxis](qti_butr-dep-parataxis.html) – [punct](qti_butr-dep-punct.html) – [root](qti_butr-dep-root.html) – [xcomp](qti_butr-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 51 sentences and 393 tokens.</li>
</ul>

<ul>
<li>This corpus contains 62 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 8 types of words that contain both letters and punctuation. Examples: Hoca'nın, KK'ya, Let's, That's, You're, doesn't, drop-bylayacağım, turn-offluyor</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 3 word types tagged as particles (PART): not, to, ya</li>
</ul>

<ul>
<li>This corpus contains 15 lemmas tagged as pronouns (PRON): I, ben, bir, biri, bu, bura, he, it, nere, o, sen, siz, that, this, you</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as determiners (DET): a, all, bir, bu, hangi, hiçbir, my, o, other, the</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as PRON and sometimes as DET: bir, bu, o</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): be, değil, do, mi, would</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: do</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: vermeden, çıkmadan</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: were</li>
    <li>VERB: Go, Let's, own, thought</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: go</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: alan, bitching, coming, ettiğine, giden, olacağı, olduğunuz, spinning, supposed, texting</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>VERB: etmeye, flörtleşmek, görüşmek, sormaya, yapmak</li>
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
      <li>PRON: it</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX: değiliz</li>
      <li>NOUN: Guys, decorations, aspectlere, machinelerden, terimlerde, şeyler</li>
      <li>PRON: Sizce</li>
      <li>VERB: alabiliriz, değinemiyoruz, eyleyelim, gideceğiz, görüşürüz, olduğunuz, olmayız, uyuyacağız, çıkıyoruz</li>
      <li>VERB-Part: olduğunuz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: karşıyayım</li>
      <li>AUX: değil, misin</li>
      <li>NOUN: şey, Bro, distinction, hat, head, lord, mercy, price, taste, Aklıma</li>
      <li>PRON: bu, i, Ben, bana, bence, beni, it, Birinin, Bunda, Bunu</li>
      <li>PROPN: barbie, Allah, Cem, Cumartesi, Daktilo, Didar, KK'ya, Kazım, Koyuncu, Yılmaz</li>
      <li>VERB: ettim, geldi, Depends, Gel, Seems, Soggyleşmiş, Yemişsin, attın, başlasam, bilmiyorum</li>
      <li>VERB-Fin: own</li>
      <li>VERB-Part: ettiğine, olacağı</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADV: önceden</li>
      <li>NOUN: machinelerden</li>
      <li>VERB-Conv: vermeden, çıkmadan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: boynumu, dersini, hocayı, sitesini, yolu, Şarkıyı</li>
      <li>PRON: beni, it, Bunu, onu, seni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: Aklıma, Derse, aspectlere, meşgule, üstüne, üzerine</li>
      <li>PRON: bana</li>
      <li>PROPN: KK'ya</li>
      <li>VERB-Part: ettiğine</li>
      <li>VERB-Vnoun: etmeye, sormaya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Equ
    <ul>
      <li>PRON: bence</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: Dünyanın, Hoca'nın, Okulun</li>
      <li>PRON: Birinin, Bunun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: itemıyla, metroyla, sevgilimle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: Kafamda, arada, gözlemede, tanımımda, terimlerde</li>
      <li>PRON: nerede, Bunda, burada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>NOUN: şey, Canım, Hoca, Kanka, aile, akşam, ayağın, cümle, diziydi, gece</li>
      <li>PRON: bu, i, Ben, u, Sizce, biri, o, you</li>
      <li>PROPN: Allah, Cem, Cumartesi, Daktilo, Didar, Kazım, Koyuncu, Yılmaz, ceren</li>
      <li>VERB: yapmak, etmek, flörtleşmek, görüşmek, olacağı, yürüyecek</li>
      <li>VERB-Part: olacağı, yürüyecek</li>
      <li>VERB-Vnoun: flörtleşmek, görüşmek, yapmak</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: değil, değiliz</li>
      <li>PART: not</li>
      <li>VERB: bilmiyorum, değinemiyoruz, düşünmezsen, düşürmedim, istemiyormuş, istemiyorum, olmayız, vermeden</li>
      <li>VERB-Conv: vermeden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>VERB: ettim, geldi, yapmak, Gel, Soggyleşmiş, Yemişsin, alabiliriz, alan, attın, başlasam</li>
      <li>VERB-Conv: çıkmadan</li>
      <li>VERB-Part: alan, ettiğine, giden, olacağı, olduğunuz, yaşayan, yürüyecek</li>
      <li>VERB-Vnoun: etmeye, flörtleşmek, görüşmek, sormaya, yapmak</li>
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
      <li>VERB: düşünmezsen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: alabiliriz, görüşürüz, istemiyormuş, olmayız</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB: ettim, geldi, Soggyleşmiş, Yemişsin, attın, dedi, diyeceğim, drop-bylayacağım, duyuldu, düşürmedim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB: bilmiyorum, değinemiyoruz, ediyorum, hissediyor, istemiyorum, turn-offluyor, çalışıyor, çıkıyoruz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>VERB: edecek</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB: başlasam, düşünmezsen, söyleseydin, yapsa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: Gel, Go, Let's, eyle, yapsana</li>
      <li>VERB-Fin: Go, Let's</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: were</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB: eyleyelim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>VERB: alabiliriz</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: diyeceğim, drop-bylayacağım, edecek, gideceğiz, olacağı, uyuyacağız, yürüyecek</li>
      <li>VERB-Part: olacağı, yürüyecek</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: were</li>
      <li>VERB: ettim, geldi, Soggyleşmiş, Yemişsin, attın, dedi, duyuldu, düşürmedim, ettiğine, gönderdi</li>
      <li>VERB-Fin: thought</li>
      <li>VERB-Part: ettiğine, olduğunuz, supposed</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: değil, değiliz</li>
      <li>VERB: Depends, Seems, alabiliriz, alan, bilmiyorum, bitching, coming, değinemiyoruz, düşünmezsen, ediyorum</li>
      <li>VERB-Fin: own</li>
      <li>VERB-Part: alan, bitching, coming, giden, spinning, texting, yaşayan</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: duyuldu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Fh
    <ul>
      <li>VERB: duyuldu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>VERB: Soggyleşmiş, Yemişsin, istemiyormuş, katletmişsin</li>
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
      <li>PRON: o</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: iki, bir</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADJ: karşıyayım</li>
      <li>AUX: değiliz</li>
      <li>NOUN: zorundayım</li>
      <li>PRON: i, Ben, bana, bence, beni</li>
      <li>VERB: ettim, Let's, alabiliriz, başlasam, bilmiyorum, değinemiyoruz, diyeceğim, drop-bylayacağım, düşürmedim, ediyorum</li>
      <li>VERB-Fin: Let's, own</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: misin</li>
      <li>PRON: u, Sizce, seni, you</li>
      <li>VERB: Gel, Go, Yemişsin, attın, düşünmezsen, eyle, katletmişsin, olduğunuz, söyleseydin, yapsana</li>
      <li>VERB-Fin: Go</li>
      <li>VERB-Part: olduğunuz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: değil</li>
      <li>NOUN: şey, Aklıma, Canım, Derse, Dünyanın, Hoca, Hoca'nın, Kafamda, Kanka, Okulun</li>
      <li>PRON: bu, it, Birinin, Bunda, Bunu, Bunun, biri, burada, onu</li>
      <li>PROPN: Allah, Cem, Cumartesi, Daktilo, Didar, KK'ya, Kazım, Koyuncu, Yılmaz, ceren</li>
      <li>VERB: geldi, Depends, Seems, Soggyleşmiş, dedi, duyuldu, edecek, ettiğine, gönderdi, hissediyor</li>
      <li>VERB-Part: ettiğine, olacağı</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: Aklıma, Canım, Kafamda, ayağın, boynumu, dersini, gerçeği, sevgilimle, sitesini, tanımımda</li>
      <li>VERB-Part: ettiğine, olacağı</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>ADJ: karşı</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: Of</li>
          <li>DET: All</li>
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
          <li>NOUN: Aklıma, Canım, Kafamda, boynumu, sevgilimle, tanımımda, zorundayım</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NOUN: ayağın</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>NOUN: dersini, gerçeği, sitesini, tokası, üslubu, üstüne, üzerine, şarkısı</li>
          <li>VERB-Part: ettiğine, olacağı</li>
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
          <li>ADV: know</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus does not contain copulas.</li>
</ul>

<ul>
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: değil, mi, be, do, would.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--NOUN-Nom (5)</li>
      <li>VERB--PRON (3)</li>
      <li>VERB--PRON-Nom (4)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Nom (2)</li>
      <li>VERB-Vnoun--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Abl (1)</li>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Nom (1)</li>
      <li>VERB--PRON (2)</li>
      <li>VERB--PRON-Acc (3)</li>
      <li>VERB-Fin--NOUN-Nom (2)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Vnoun--NOUN-Nom (1)</li>
      <li>VERB-Vnoun--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 13 relation types are not used in this corpus at all: <a>iobj</a>, <a>csubj</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>cop</a>, <a>appos</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
