---
layout: base
title:  'UD_Romanian-SiMoNERo'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Romanian SiMoNERo

Language: [Romanian](/ro/index.html) (code: `ro`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.5 release.

The following people have contributed to making this treebank part of UD: Maria Mitrofan, Verginica Barbu Mititelu.

Repository: [UD_Romanian-SiMoNERo](https://github.com/UniversalDependencies/UD_Romanian-SiMoNERo)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udro_simonero26)<br />
Download all treebanks: [UD 2.6](/#download)

License: CC BY-SA 4.0

Genre: medical

Questions, comments?
General annotation questions (either Romanian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Romanian-SiMoNERo/issues).
If you want to collaborate, please contact [maria&nbsp;(æt)&nbsp;racai&nbsp;•&nbsp;ro vergi&nbsp;(æt)&nbsp;racai&nbsp;•&nbsp;ro].
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

SiMoNERo is a medical corpus of contemporary Romanian.




SiMoNERo contains texts from three medical subdomains: cardiology, diabetes, endocrinology. The texts come from scientific books, journal articles and blog posts, but predominant are those coming from books.
The texts display the following levels of annotation: tokenization, POS tagging, lemmatization, syntactic parsing and medical Named Entities (of the following types: ANAT (body parts), CHEM (Chemicals and Drugs), DISO (disorders), and PROC (procedures)). All levels, except for the syntactic one, are hand validated. The description of the corpus creation (excluding the syntactic annotation) is presented in Mitrofan et al. (2019).
The syntactic parsing was made with the NLP Cube (https://github.com/adobe/NLP-Cube) system.


## Acknowledgments

We are grateful to the following texts providers: http://federatiaromanadiabet.ro (accessed November 2016), https://rmj.com.ro/ (accessed November 2016), https://societate-diabet.ro/ (accessed November 2016), http://pentrudiabet.ro (accessed November 2016).

## References

Maria Mitrofan, Verginica Barbu Mititelu, Grigorina Mitrofan, MoNERo: a Biomedical Gold Standard Corpus for the Romanian Language, in Proceedings of the BioNLP workshop, Florence, Italy, 1 August 2019, p. 71-79, Association for Computational Linguistics (https://www.aclweb.org/anthology/W19-5008).



# Statistics of UD Romanian SiMoNERo

## POS Tags

[ADJ](ro_simonero-pos-ADJ.html) – [ADP](ro_simonero-pos-ADP.html) – [ADV](ro_simonero-pos-ADV.html) – [AUX](ro_simonero-pos-AUX.html) – [CCONJ](ro_simonero-pos-CCONJ.html) – [DET](ro_simonero-pos-DET.html) – [NOUN](ro_simonero-pos-NOUN.html) – [NUM](ro_simonero-pos-NUM.html) – [PART](ro_simonero-pos-PART.html) – [PRON](ro_simonero-pos-PRON.html) – [PROPN](ro_simonero-pos-PROPN.html) – [PUNCT](ro_simonero-pos-PUNCT.html) – [SCONJ](ro_simonero-pos-SCONJ.html) – [VERB](ro_simonero-pos-VERB.html) – [X](ro_simonero-pos-X.html)

## Features

[Abbr](ro_simonero-feat-Abbr.html) – [AdpType](ro_simonero-feat-AdpType.html) – [Case](ro_simonero-feat-Case.html) – [Definite](ro_simonero-feat-Definite.html) – [Degree](ro_simonero-feat-Degree.html) – [Gender](ro_simonero-feat-Gender.html) – [Mood](ro_simonero-feat-Mood.html) – [Number](ro_simonero-feat-Number.html) – [Number[psor]](ro_simonero-feat-Number-psor.html) – [NumForm](ro_simonero-feat-NumForm.html) – [NumType](ro_simonero-feat-NumType.html) – [PartType](ro_simonero-feat-PartType.html) – [Person](ro_simonero-feat-Person.html) – [Polarity](ro_simonero-feat-Polarity.html) – [Position](ro_simonero-feat-Position.html) – [Poss](ro_simonero-feat-Poss.html) – [PronType](ro_simonero-feat-PronType.html) – [Reflex](ro_simonero-feat-Reflex.html) – [Strength](ro_simonero-feat-Strength.html) – [Tense](ro_simonero-feat-Tense.html) – [Variant](ro_simonero-feat-Variant.html) – [VerbForm](ro_simonero-feat-VerbForm.html)

## Relations

[acl](ro_simonero-dep-acl.html) – [advcl](ro_simonero-dep-advcl.html) – [advmod](ro_simonero-dep-advmod.html) – [advmod:tmod](ro_simonero-dep-advmod-tmod.html) – [amod](ro_simonero-dep-amod.html) – [appos](ro_simonero-dep-appos.html) – [aux](ro_simonero-dep-aux.html) – [aux:pass](ro_simonero-dep-aux-pass.html) – [case](ro_simonero-dep-case.html) – [cc](ro_simonero-dep-cc.html) – [cc:preconj](ro_simonero-dep-cc-preconj.html) – [ccomp](ro_simonero-dep-ccomp.html) – [conj](ro_simonero-dep-conj.html) – [cop](ro_simonero-dep-cop.html) – [csubj](ro_simonero-dep-csubj.html) – [csubj:pass](ro_simonero-dep-csubj-pass.html) – [det](ro_simonero-dep-det.html) – [expl](ro_simonero-dep-expl.html) – [expl:impers](ro_simonero-dep-expl-impers.html) – [expl:pass](ro_simonero-dep-expl-pass.html) – [expl:poss](ro_simonero-dep-expl-poss.html) – [expl:pv](ro_simonero-dep-expl-pv.html) – [fixed](ro_simonero-dep-fixed.html) – [flat](ro_simonero-dep-flat.html) – [goeswith](ro_simonero-dep-goeswith.html) – [iobj](ro_simonero-dep-iobj.html) – [mark](ro_simonero-dep-mark.html) – [nmod](ro_simonero-dep-nmod.html) – [nmod:agent](ro_simonero-dep-nmod-agent.html) – [nmod:pmod](ro_simonero-dep-nmod-pmod.html) – [nmod:tmod](ro_simonero-dep-nmod-tmod.html) – [nsubj](ro_simonero-dep-nsubj.html) – [nsubj:pass](ro_simonero-dep-nsubj-pass.html) – [nummod](ro_simonero-dep-nummod.html) – [obj](ro_simonero-dep-obj.html) – [obl](ro_simonero-dep-obl.html) – [parataxis](ro_simonero-dep-parataxis.html) – [punct](ro_simonero-dep-punct.html) – [root](ro_simonero-dep-root.html) – [xcomp](ro_simonero-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 491 sentences and 14552 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 94 types of words that contain both letters and punctuation. Examples: s-, într-, ICAM-1, cardio-vasculară, dintr-, NT-proBNP, S., end-point, igieno-dietetic, loco-regională, non-diabetici, non-insulare, non-nozocomiale, &b.mu;g, 3-deoxiglucozona, CMV-Hb, GLUT-1, HMW-AOPPs, II-dependente, III-IV, LBF-leg, N-acetilaspartatului, NT-pro-BNP, PGC-1, STNH-1, acetil-CoA, afro-americane, afro-americani, antero-posterior, anulo-ventriculare, beta-adrenergici, beta-adrenergică, beta-lactamine, cardio-embolice, cardio-vascular, cardio-vasculari, clinico-paraclinic, coagulazo-negativ, computer-tomografic, computer-tomografică, de-, deoxiglucozon-ena, efectuându-, endotelio-dependentă, e​n​d​o​t​e​l​i​o​-​i​n​d​e​p​e​n​d​e​n​t, etc., fizico-clinice, forbol-esterii, f​o​s​f​o​r​i​l​a​r​e​-​d​e​f​o​s​f​o​r​i​l​a​r​e, gama-glutamil</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 3 word types tagged as particles (PART): a, nu, să</li>
</ul>

<ul>
<li>This corpus contains 12 lemmas tagged as pronouns (PRON): acela, acesta, altul, care, ce, el, fiecare, mult, sine, său, tot, unul</li>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as determiners (DET): a, acel, acela, același, acest, acesta, al, alt, anumit, atât, care, cel, celălalt, câtva, fiecare, lui, meu, mult, oarecare, oricare, orice, său, tot, un, însuși</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as PRON and sometimes as DET: acela, acesta, care, fiecare, mult, său, tot</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): avea, fi, vrea</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: avea, fi</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: este, sunt, au, ar, fie, vor, e, era</li>
    <li>VERB: poate, pot, are, trebuie, crește, determină, au, există, asociază, indică</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: fiind</li>
    <li>VERB: având, bătând, determinând, Studiind, aparținând, condiționând, constituind, crescând, deținând, folosind</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: fi</li>
    <li>VERB: putea, avea, determina, prezenta, produce, antrena, contribui, evidenția, evita, explica</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: fost</li>
    <li>VERB: asociată, asociate, dovedit, arătat, avut, inclus, putut, tratați, administrat, aflați</li>
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
      <li>ADJ: aortică, cardiacă, aortice, valvulare, severă, valvulară, chirurgicale, mitrală, ventriculară, chirurgicală</li>
      <li>DET: a, o, ale, unei, această, alte, aceste, cea, cele, sa</li>
      <li>NOUN: prezența, creșterea, mortalitatea, comorbidităților, vârsta, față, scăderea, valvei, bolii, evaluarea</li>
      <li>NUM: două, ambele, prima, primele, doua, primei, treime, ultima, ultimele</li>
      <li>PRON: cele, acestea, ceea, aceea, toate, o, unele, Ele, aceasta, acesteia</li>
      <li>VERB-Part: asociată, asociate, aplicate, considerate, demonstrată, determinată, efectuate, interpretate, legate, păstrată</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: vârstnici, crescut, chirurgical, important, pulmonar, cardiac, mitral, anticoagulant, lung, acut</li>
      <li>AUX-Part: fost</li>
      <li>DET: un, al, acest, cel, unui, ai, alt, său, săi, acestui</li>
      <li>NOUN: pacienții, ani, risc, bolnavii, vârstnici, pacienți, nivelul, tratament, tratamentul, cazul</li>
      <li>NUM: ultimilor, doi, doilea, primul, ultimii, ultimului</li>
      <li>PRON: cei, acesta, acestuia, aceștia, îl, unul, Mulți, cel, căruia, ei</li>
      <li>VERB-Part: dovedit, arătat, avut, inclus, putut, tratați, administrat, aflați, demonstrat, determinat</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: vârstnici, valvulare, frecvente, chirurgicale, crescute, normale, severe, ecocardiografice, importante, multiple</li>
      <li>AUX-Fin: sunt, au, vor</li>
      <li>DET: ale, alte, unor, ai, aceste, cele, multe, săi, acestor, mulți</li>
      <li>NOUN: pacienții, ani, bolnavii, vârstnici, pacienți, comorbidităților, pacienților, cazuri, comorbidități, factori</li>
      <li>NUM: 2, 30, 7, 15, 5, 60, 9, două, 10, 14</li>
      <li>PRON: cele, acestea, cei, acestora, celor, toate, aceștia, unele, Ele, Mulți</li>
      <li>VERB-Fin: pot, au, fac, cresc, par, scad, apar, produc, găsesc, includ</li>
      <li>VERB-Part: asociate, tratați, aflați, aplicate, considerate, efectuate, interpretate, legate, asociați, folosite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: aortică, cardiacă, mare, crescut, severă, valvulară, aortice, mitrală, ventriculară, chirurgicală</li>
      <li>AUX: este, a, fost, va, e, era</li>
      <li>AUX-Fin: este, e, era</li>
      <li>AUX-Part: fost</li>
      <li>DET: a, o, un, al, unei, această, acest, cel, unui, cea</li>
      <li>NOUN: risc, prezența, creșterea, nivelul, tratament, tratamentul, mortalitatea, cazul, vârsta, timp</li>
      <li>NUM: prima, I, III, IV, doilea, doua, primei, primul, treime, ultima</li>
      <li>PRON: ceea, aceea, fiecare, acesta, acestuia, o, îl, aceasta, acesteia, ea</li>
      <li>VERB-Fin: poate, are, crește, presupune, face, scade, reduce, rămâne, impune, depinde</li>
      <li>VERB-Part: asociată, dovedit, arătat, avut, inclus, putut, administrat, demonstrat, demonstrată, determinat</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADP: de, în, cu, la, prin, pentru, din, pe, dintre, după</li>
      <li>PRON: se, s-, sine, o, îl, îi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: datorită, conform, coform, potrivit</li>
      <li>PRON: li, îi, își</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat,Gen
    <ul>
      <li>DET: cărui</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: aortice, ventriculare, chirurgicale, ascendente, cardiace, renale, valvulare, cronice, stângi, atriale</li>
      <li>ADP: asupra, împotriva</li>
      <li>DET: unei, unui, unor, acestei, acestor, acestui, lui, altor, celei, celor</li>
      <li>NOUN: comorbidităților, pacientului, pacienților, riscului, valvei, bolii, tratamentului, funcției, mortalității, orificiului</li>
      <li>NUM: ultimilor, primei, ultimului</li>
      <li>PRON: acestora, celor, acestuia, acesteia, căreia, căruia</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: aortică, cardiacă, severă, valvulară, mare, mitrală, ventriculară, chirurgicală, crescută, scăzută</li>
      <li>DET: o, un, această, acest, alte, cel, aceste, cea, cele, sa</li>
      <li>NOUN: pacienții, bolnavii, prezența, creșterea, nivelul, tratamentul, mortalitatea, cazul, vârsta, față</li>
      <li>NUM: ambele, prima, primele, primul, treime, ultima, ultimele, ultimii</li>
      <li>PRON: care, ce, cele, acestea, ceea, aceea, cei, fiecare, toate, acesta</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: principala, principalele, Diureticele, Marea, Principalul, Vasodilatatoarele, diferitelor, diferiților, numita, primul</li>
      <li>DET: lui</li>
      <li>NOUN: pacienții, bolnavii, prezența, creșterea, nivelul, tratamentul, mortalitatea, cazul, comorbidităților, vârsta</li>
      <li>NUM: prima, primele, ultimilor, primei, primul, ultima, ultimele, ultimii, ultimului</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: aortică, cardiacă, aortice, mare, valvulare, vârstnici, crescut, severă, valvulară, chirurgicale</li>
      <li>NOUN: ani, risc, vârstnici, pacienți, tratament, timp, față, caz, cazuri, comorbidități</li>
      <li>NUM: treime</li>
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
      <li>ADJ: superioară</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: aortică, cardiacă, aortice, mare, valvulare, vârstnici, crescut, precoce, severă, valvulară</li>
      <li>ADV: frecvent, atât, special, chiar, ales, comparativ, respectiv, semnificativ, mult, puțin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: extreme</li>
      <li>ADV: extrem</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: nu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>CCONJ: și, sau, dar, însă, fie, ci, ori</li>
      <li>SCONJ: că, dacă, deoarece, deși, întrucât, fără, Întucât, încât</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADP: într-, dintr-, Într, de, de-, printr-</li>
      <li>PRON: s-, se</li>
      <li>VERB-Ger: efectuându-, producându-, utilizându-</li>
    </ul>
  </li>
</ul>

<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: este, sunt, e, era</li>
      <li>VERB-Fin: poate, pot, are, trebuie, crește, determină, au, există, asociază, indică</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: fie</li>
      <li>PART: să</li>
      <li>VERB-Fin: facă, adreseze, agraveze, constituie, influențeze, interfere, joace, realizeze, repete, întârzie</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era</li>
      <li>VERB-Fin: baza, erau, localiza</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: este, sunt, fie, e</li>
      <li>AUX-Inf: fi</li>
      <li>VERB-Fin: poate, pot, are, trebuie, crește, determină, au, există, asociază, indică</li>
      <li>VERB-Inf: putea, avea, determina, prezenta, produce, antrena, contribui, evidenția, evita, explica</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Art
    <ul>
      <li>DET: lui</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: această, acest, cel, aceste, cea, cele, acestei, acestor, acestui, aceeași</li>
      <li>PRON: cele, acestea, ceea, aceea, cei, acestora, celor, acesta, acestuia, aceștia</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: însăși</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: o, un, unei, alte, unui, unor, alt, multe, altă, mult</li>
      <li>PRON: fiecare, toate, unele, una, unul, Mulți, alta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADV: cât, cum, când, câte, precum, unde</li>
      <li>DET: căror, cărui</li>
      <li>PRON: care, ce, căreia, căruia</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nici</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: a, al, ale, ai, lor, sa, său, săi, noastră, ei</li>
      <li>PRON: se, s-, sine, o, îl, Ele, ea, îi, ei, el</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>NUM: ambele</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 2, 30, 7, 15, 5, 60, 9, două, 10, 14</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: treime</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primul</li>
      <li>NUM: prima, primele, ultimilor, I, III, IV, doilea, doua, primei, primul</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: a, al, ale, ai, lor, sa, său, săi, noastră, ei</li>
      <li>PRON: sale</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, s-, sine, își</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>DET: noastră, noastre, nostru</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: este, sunt, a, au, ar, va, fie, vor, e, era</li>
      <li>AUX-Fin: este, sunt, au, ar, fie, vor, e, era</li>
      <li>DET: această, acest, alte, aceste, lor, sa, alt, multe, său, acestei</li>
      <li>PRON: se, care, ce, s-, cele, acestea, ceea, aceea, cei, acestora</li>
      <li>VERB-Fin: poate, pot, are, trebuie, crește, determină, au, există, asociază, indică</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: lor, noastră, noastre, nostru</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: sa, său, săi, ei, lui</li>
      <li>PRON: sale</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: IC, EI, VS, FE, Im, T2DM, BAC, FA, ICA, VD</li>
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
          <li>ADP: de, în, cu, la, prin, pentru, din, pe, dintre, după</li>
          <li>PUNCT: /</li>
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
          <li>NUM: 2, 30, 7, 15, 5, 60, 9, 10, 14, 4</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: I, III, IV</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: primul</li>
          <li>NUM: două, trei, prima, primele, ultimilor, doi, doilea, doua, primei, primul</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Inf
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Position</a>
    <ul>
      <li>Prenom
        <ul>
          <li>DET: această, acest, alte, aceste, alt, acestei, acestor, acestui, altă, aceeași</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Strength</a>
    <ul>
      <li>Strong
        <ul>
          <li>PRON: sine, Ele, ea, ei, el</li>
        </ul>
      </li>
      <li>Weak
        <ul>
          <li>PRON: se, s-, o, îl, îi, li, își</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: fi.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: avea, vrea, fi.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: fi.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (51)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-Nom (209)</li>
      <li>VERB-Fin--PRON-Nom (88)</li>
      <li>VERB-Ger--NOUN (1)</li>
      <li>VERB-Ger--NOUN-Nom (7)</li>
      <li>VERB-Inf--NOUN (3)</li>
      <li>VERB-Inf--NOUN-Nom (10)</li>
      <li>VERB-Inf--PRON-Nom (4)</li>
      <li>VERB-Part--NOUN (11)</li>
      <li>VERB-Part--NOUN-Nom (48)</li>
      <li>VERB-Part--PRON-Nom (15)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (42)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (159)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Nom-ADP(pe) (2)</li>
      <li>VERB-Ger--NOUN (5)</li>
      <li>VERB-Ger--NOUN-Nom (16)</li>
      <li>VERB-Inf--NOUN (15)</li>
      <li>VERB-Inf--NOUN-Nom (30)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Part--NOUN (13)</li>
      <li>VERB-Part--NOUN-Nom (15)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-Gen (6)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Ger--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN (2)</li>
      <li>VERB-Part--NOUN-Gen (12)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 41 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: dovedi s-, face se, indica se, produce se, putea se, referi se, baza se, găsi se, manifesta se, numi se, realiza se, însoți se, adapta se, adresa se, afla se, agrava se, asocia s-, asocia se, aștepta se, continua se, datora se, datori se, evidenția s-, extinde se, interveni se, localiza se, modifica s-, ocluziona se, pierde se, practica se, prefera se, preta se, părea se, recolta s-, recurge se, reduce se, reface se, repeta se, rezolva se, vindeca se, încadra se</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 45 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: indica se, asocia se, face se, recomanda se, impune se, prefera se, putea se, adăuga se, constata s-, demonstra s-, reflecta se, utiliza se, administra s-, administra se, adresa se, asculta se, clampa se, clasifica se, corela se, datora se, descrie se, detașa se, determina se, dezvolta se, dori se, efectua se, elibera se, evalua s-, evita se, explica se, folosi se, instala s-, observa s-, practica se, preconiza se, produce se, pune s-, reimplanta se, studia s-, suprapune se, încerca se, înregistra s-, însoți se, întâlni se, ști se</li>
</ul>


<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>advmod:tmod</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>csubj:pass</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>expl:poss</a>, <a>expl:pv</a>, <a>nmod:agent</a>, <a>nmod:pmod</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a></li>
<li>The following 9 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>orphan</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
