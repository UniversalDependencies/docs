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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udro_simonero29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: medical

Questions, comments?
General annotation questions (either Romanian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Romanian-SiMoNERo/issues).
If you want to collaborate, please contact [maria&nbsp;(æt)&nbsp;racai&nbsp;•&nbsp;ro, vergi&nbsp;(æt)&nbsp;racai&nbsp;•&nbsp;ro].
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

Mititelu, V.B. and Mitrofan, M., The Romanian Medical Treebank - SiMoNERo. Proceedings of the The 15th Edition of the International Conference on Linguistic Resources and Tools for Natural Language Processing – ConsILR-2020ISSN 1843-911X, p.7-16, 2020.

Maria Mitrofan, Verginica Barbu Mititelu, Grigorina Mitrofan, MoNERo: a Biomedical Gold Standard Corpus for the Romanian Language, in Proceedings of the BioNLP workshop, Florence, Italy, 1 August 2019, p. 71-79, Association for Computational Linguistics (https://www.aclweb.org/anthology/W19-5008).



# Statistics of UD Romanian SiMoNERo

## POS Tags

[ADJ](ro_simonero-pos-ADJ.html) – [ADP](ro_simonero-pos-ADP.html) – [ADV](ro_simonero-pos-ADV.html) – [AUX](ro_simonero-pos-AUX.html) – [CCONJ](ro_simonero-pos-CCONJ.html) – [DET](ro_simonero-pos-DET.html) – [INTJ](ro_simonero-pos-INTJ.html) – [NOUN](ro_simonero-pos-NOUN.html) – [NUM](ro_simonero-pos-NUM.html) – [PART](ro_simonero-pos-PART.html) – [PRON](ro_simonero-pos-PRON.html) – [PROPN](ro_simonero-pos-PROPN.html) – [PUNCT](ro_simonero-pos-PUNCT.html) – [SCONJ](ro_simonero-pos-SCONJ.html) – [VERB](ro_simonero-pos-VERB.html) – [X](ro_simonero-pos-X.html)

## Features

[Abbr](ro_simonero-feat-Abbr.html) – [AdpType](ro_simonero-feat-AdpType.html) – [Case](ro_simonero-feat-Case.html) – [Definite](ro_simonero-feat-Definite.html) – [Degree](ro_simonero-feat-Degree.html) – [Gender](ro_simonero-feat-Gender.html) – [Mood](ro_simonero-feat-Mood.html) – [Number](ro_simonero-feat-Number.html) – [Number[psor]](ro_simonero-feat-Number-psor.html) – [NumForm](ro_simonero-feat-NumForm.html) – [NumType](ro_simonero-feat-NumType.html) – [PartType](ro_simonero-feat-PartType.html) – [Person](ro_simonero-feat-Person.html) – [Polarity](ro_simonero-feat-Polarity.html) – [Position](ro_simonero-feat-Position.html) – [Poss](ro_simonero-feat-Poss.html) – [PronType](ro_simonero-feat-PronType.html) – [Reflex](ro_simonero-feat-Reflex.html) – [Strength](ro_simonero-feat-Strength.html) – [Tense](ro_simonero-feat-Tense.html) – [Variant](ro_simonero-feat-Variant.html) – [VerbForm](ro_simonero-feat-VerbForm.html)

## Relations

[acl](ro_simonero-dep-acl.html) – [advcl](ro_simonero-dep-advcl.html) – [advcl:tcl](ro_simonero-dep-advcl-tcl.html) – [advmod](ro_simonero-dep-advmod.html) – [advmod:tmod](ro_simonero-dep-advmod-tmod.html) – [amod](ro_simonero-dep-amod.html) – [appos](ro_simonero-dep-appos.html) – [aux](ro_simonero-dep-aux.html) – [aux:pass](ro_simonero-dep-aux-pass.html) – [case](ro_simonero-dep-case.html) – [cc](ro_simonero-dep-cc.html) – [cc:preconj](ro_simonero-dep-cc-preconj.html) – [ccomp](ro_simonero-dep-ccomp.html) – [ccomp:pmod](ro_simonero-dep-ccomp-pmod.html) – [compound](ro_simonero-dep-compound.html) – [conj](ro_simonero-dep-conj.html) – [cop](ro_simonero-dep-cop.html) – [csubj](ro_simonero-dep-csubj.html) – [csubj:pass](ro_simonero-dep-csubj-pass.html) – [dep](ro_simonero-dep-dep.html) – [det](ro_simonero-dep-det.html) – [expl](ro_simonero-dep-expl.html) – [expl:impers](ro_simonero-dep-expl-impers.html) – [expl:pass](ro_simonero-dep-expl-pass.html) – [expl:poss](ro_simonero-dep-expl-poss.html) – [expl:pv](ro_simonero-dep-expl-pv.html) – [fixed](ro_simonero-dep-fixed.html) – [flat](ro_simonero-dep-flat.html) – [goeswith](ro_simonero-dep-goeswith.html) – [iobj](ro_simonero-dep-iobj.html) – [mark](ro_simonero-dep-mark.html) – [nmod](ro_simonero-dep-nmod.html) – [nmod:tmod](ro_simonero-dep-nmod-tmod.html) – [nsubj](ro_simonero-dep-nsubj.html) – [nsubj:pass](ro_simonero-dep-nsubj-pass.html) – [nummod](ro_simonero-dep-nummod.html) – [obj](ro_simonero-dep-obj.html) – [obl](ro_simonero-dep-obl.html) – [obl:agent](ro_simonero-dep-obl-agent.html) – [obl:pmod](ro_simonero-dep-obl-pmod.html) – [orphan](ro_simonero-dep-orphan.html) – [parataxis](ro_simonero-dep-parataxis.html) – [punct](ro_simonero-dep-punct.html) – [root](ro_simonero-dep-root.html) – [xcomp](ro_simonero-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 4681 sentences and 146020 tokens.</li>
</ul>

<ul>
<li>This corpus contains 20472 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 687 types of words that contain both letters and punctuation. Examples: s-, într-, printr-, dr., &b.beta;-celulare, etc., de-, dintr-, SF-36, fig., și-, D-, Graves-Basedow, N.C.R., &b.beta;, &b.alpha;, &b.mu;g, ex., l-, omega-3, IGF-, așa-, &b.beta;-celulară, E., aorto-bifemural, morbi-mortalității, &b.beta;-pancreatice, &b.beta;-pancreatică, aorto-iliace, beta-celulară, cardio-vasculare, le-, meta-analiză, pre-test, HDL-colesterolului, angio-CT, anti-incretine, meta-analize, morfo-funcționale, post-receptor, vs., într-adevăr, ICAM-1, acetil-CoA, aorto-iliacă, aprox., cardio-vascular, cardio-vasculară, dvs., femuro-popliteale</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 6 word types tagged as particles (PART): a, n-, nu, sa, să, să-</li>
</ul>

<ul>
<li>This corpus contains 32 lemmas tagged as pronouns (PRON): acel, acela, același, acesta, altceva, altul, care, ce, ceea_ce, celălalt, ceva, cine, cineva, cât, câtva, dumneavoastră, dânsul, el, eu, fiecare, lui, mult, noi, oricare, oricine, sine, său, tot, tu, unul, vreunul, ﬁecare</li>
</ul>

<ul>
<li>This corpus contains 36 lemmas tagged as determiners (DET): a, acel, acela, același, acest, acesta, al, alt, anumit, atât, care, ce, cel, celălalt, câte, câtva, fiecare, lui, meu, mult, nici_un, niște, o, oarecare, oricare, orice, puțin, său, tot, tău, ul, un, uri, vreun, însuși, ﬁecare</li>
</ul>

<ul>
<li>Out of the above, 15 lemmas occurred sometimes as PRON and sometimes as DET: acel, acela, același, acesta, care, ce, celălalt, câtva, fiecare, lui, mult, oricare, său, tot, ﬁecare</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): avea, fi, putea, vrea</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: avea, fi, putea, vrea</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: este, au, sunt, ar, fie, am, vor, era, e, erau</li>
    <li>VERB: poate, pot, are, trebuie, există, au, reprezintă, prezintă, privește, determină</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: fiind, nefiind</li>
    <li>VERB: având, privind, putând, folosind, aparținând, reprezentând, incluzând, prezentând, începând, ținând</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: fi, fiind, putea</li>
    <li>VERB: putea, avea, determina, duce, face, preveni, trebui, produce, crește, prezenta</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: fost, putut</li>
    <li>VERB: arătat, demonstrat, asociată, efectuat, avut, dovedit, legate, constatat, prezentat, tratați</li>
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
      <li>ADJ: mare, clinice, cardiacă, cardiace, renală, crescute, cronică, cardiovasculare, renale, crescută</li>
      <li>DET: a, o, ale, această, unei, cele, aceste, alte, multe, cea</li>
      <li>NOUN: insulină, creșterea, vârsta, cazuri, scăderea, creștere, insulinei, prezența, vârstă, glucoză</li>
      <li>NUM: două, prima, ambele, primele, doua, primă, ultima, primei, ultimele, treia</li>
      <li>PRON: ceea, acestea, cea, cele, aceasta, aceea, ele, toate, o, ea</li>
      <li>PROPN: Americii, Americă, Asiei, Europei, Franței, Greciei, României</li>
      <li>VERB-Part: asociată, legate, asociate, diagnosticate, efectuate, folosite, cauzată, considerate, utilizate, utilizată</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: vârstnici, crescut, zaharat, mare, important, clinic, vascular, cardiac, lung, normal</li>
      <li>AUX-Part: fost, putut</li>
      <li>DET: un, al, unui, acest, cel, ai, acești, același, acestui, săi</li>
      <li>NOUN: pacienții, pacienți, ani, nivelul, diabet, risc, cazul, tip, tratamentul, tratament</li>
      <li>NUM: primul, doilea, ultimii, doi, ultimul, treilea, primii, ultimilor, ultimului, prim</li>
      <li>PRON: cei, cel, acesta, aceștia, unul, el, acestuia, îl, ei, l-</li>
      <li>VERB-Part: arătat, demonstrat, efectuat, avut, dovedit, constatat, prezentat, tratați, inclus, observat</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: vârstnici, mici, clinice, mari, adverse, crescute, diferite, frecvente, cardiovasculare, importante</li>
      <li>AUX-Fin: au, sunt, vor, erau, veți, vom, ați, suntem, sunteți, a</li>
      <li>DET: ale, unor, cele, aceste, alte, multe, ai, acestor, toate, acești</li>
      <li>NOUN: pacienții, pacienți, ani, cazuri, pacienților, vârstnici, studii, ori, celulele, celule</li>
      <li>NUM: două, trei, ambele, primele, patru, cinci, ultimii, șase, doi, ultimele</li>
      <li>PRON: acestea, cei, cele, acestora, ele, aceștia, celor, toate, le, li</li>
      <li>VERB-Fin: pot, au, apar, fac, cresc, aveau, produc, scad, susțin, includ</li>
      <li>VERB-Part: legate, tratați, asociate, diagnosticate, efectuate, folosite, aflați, considerate, diagnosticați, utilizate</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: mare, crescut, zaharat, cardiacă, important, renală, cronică, clinic, severă, chirurgicală</li>
      <li>AUX: este, a, fost, va, era, e, Aș, esti, fii, i</li>
      <li>AUX-Fin: este, era, e, Aș, esti, fii, i, sunt, voi</li>
      <li>AUX-Part: fost, putut</li>
      <li>DET: a, o, un, al, unui, acest, această, unei, cel, cea</li>
      <li>NOUN: nivelul, diabet, risc, cazul, insulină, tip, creșterea, tratamentul, tratament, vârsta</li>
      <li>NUM: 2, 1, 3, 4, 5, 30, 10, 20, 6, 15</li>
      <li>PRON: ceea, cea, aceasta, cel, aceea, acesta, unul, el, o, acestuia</li>
      <li>PROPN: Americii, Americă, Asiei, Europei, Franței, Greciei, României</li>
      <li>VERB-Fin: poate, are, privește, crește, produce, face, rămâne, scade, apare, pare</li>
      <li>VERB-Part: arătat, demonstrat, asociată, efectuat, avut, dovedit, constatat, prezentat, inclus, observat</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADP: de, în, la, cu, din, pentru, prin, pe, dintre, după</li>
      <li>PRON: se, s-, o, îl, le, ne, sine, l-, vă, l</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc,Nom
    <ul>
      <li>NUM: unul</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: datorită, conform, potrivit, coform, grație</li>
      <li>PRON: își, li, și-, i, le, îi, se, i-, le-, ne</li>
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
      <li>ADJ: cardiace, ventriculare, arteriale, renale, aortice, cronice, diabetice, coronariene, orale, &b.beta;-celulare</li>
      <li>ADP: asupra, înaintea, împotriva, deasupra</li>
      <li>DET: unui, unei, unor, acestor, acestei, acestui, celor, altor, lui, căror</li>
      <li>NOUN: pacienților, diabetului, insulinei, tratamentului, bolii, celulelor, glucozei, riscului, pacientului, funcției</li>
      <li>NUM: primei, ambelor, ultimilor, ultimului, primului, ambilor, primilor, ultimei</li>
      <li>PRON: acestora, celor, acestuia, acesteia, cărora, celei, căreia, căruia, celui, lui</li>
      <li>PROPN: Americii, Asiei, Europei, Franței, Greciei, României</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: mare, cardiacă, renală, cronică, severă, chirurgicală, crescută, aortică, mică, necesară</li>
      <li>DET: o, un, acest, această, cel, cele, aceste, alte, cea, toate</li>
      <li>NOUN: pacienții, nivelul, cazul, insulină, creșterea, tratamentul, vârsta, scăderea, creștere, riscul</li>
      <li>NUM: primul, prima, ambele, primele, primă, ultimii, ultimul, ultima, ultimele, primii</li>
      <li>PRON: care, ce, ceea, acestea, cei, cea, cele, aceasta, cel, aceea</li>
      <li>PROPN: Americă</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: postoperator, prolactina, retinopatia, trimetorpin</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: principalul, principala, marea, principalele, următoarele, singura, diferitelor, întreaga, diversele, numita</li>
      <li>DET: lui, ul, a, urile</li>
      <li>NOUN: pacienții, nivelul, cazul, creșterea, tratamentul, vârsta, pacienților, scăderea, riscul, diabetului</li>
      <li>NUM: primul, prima, primele, ultimii, ultimul, ultima, primei, ultimele, primii, ultimilor</li>
      <li>PROPN: Americii, Asiei, Europei, Franței, Greciei, României</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: mare, vârstnici, crescut, zaharat, clinice, mici, cardiacă, cardiace, mari, important</li>
      <li>NOUN: pacienți, ani, diabet, risc, insulină, tip, tratament, timp, studiu, cazuri</li>
      <li>NUM: primă, milioane, treime, ultimă, mii, prim, miliarde, ultim, zeci</li>
      <li>PROPN: Americă</li>
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
      <li>ADJ: superioară, superioare, superior, inferioare, superiori</li>
      <li>ADV: succesiv</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: mare, vârstnici, crescut, zaharat, clinice, precoce, mici, cardiacă, cardiace, mari</li>
      <li>ADV: atât, mult, astfel, chiar, asemenea, frecvent, comparativ, puțin, doar, bine</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: extreme</li>
      <li>ADV: extrem, excesiv, perfect</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: nu, n-</li>
      <li>SCONJ: că, dacă, deși, deoarece, până, încât, întrucât, fără, să, daca</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>CCONJ: și, sau, dar, însă, fie, deci, ci, ori, si, încă</li>
      <li>SCONJ: că, dacă, deoarece, deși, întrucât, fără, Întucât, încât, până</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADP: într-, printr-, de-, dintr-, în, într, de</li>
      <li>AUX-Fin: a, au, i</li>
      <li>DET: ul, a, urile</li>
      <li>PART: n-</li>
      <li>PRON: s-, se, și-, l-, l, le-, o, i-, le, i</li>
      <li>SCONJ: până</li>
      <li>VERB-Ger: ajungându, considerându, demonstrându-, folosindu, prevenindu, utilizându, Avându-, Bazându-, adăugându-, ajutându-</li>
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
      <li>VERB-Fin: vezi, consultați, Contactați, simțiți, spune-, sunați, Învățați</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: este, sunt, era, e, erau, au, suntem, sunteți, esti, i</li>
      <li>VERB-Fin: poate, pot, are, trebuie, există, au, reprezintă, prezintă, privește, determină</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: fie, fii, fim, ﬁe</li>
      <li>PART: să, sa, să-</li>
      <li>VERB-Fin: aibă, facă, țină, apară, crească, explice, moară, poată, scadă, ia</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, erau</li>
      <li>VERB-Fin: aveau, prezentau, avea, consumau, baza, credea, cunoșteau, datora, dorea, era</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB-Fin: comportă</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>VERB-Fin: fuseseră, primiseră, publicaseră, ﬁe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: este, sunt, fie, e, au, suntem, sunteți, esti, fii, fim</li>
      <li>AUX-Inf: fi, fiind, putea</li>
      <li>VERB-Fin: poate, pot, are, trebuie, există, au, reprezintă, prezintă, privește, determină</li>
      <li>VERB-Inf: putea, avea, determina, duce, face, preveni, trebui, produce, crește, prezenta</li>
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
      <li>DET: lui, ul, a, urile</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: acest, această, cel, cele, aceste, cea, acestor, acestei, acești, același</li>
      <li>PRON: ceea, acestea, cei, cea, cele, acestora, aceasta, cel, aceea, acesta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: însăși, însuși, înșiși</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: o, un, unui, unei, unor, alte, multe, toate, altă, unele</li>
      <li>PRON: unul, toate, multe, una, fiecare, unele, mulți, toți, altele, unii</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADV: cât, când, cum, precum, unde, câte, atât, oare</li>
      <li>DET: căror, cărei, cărui, care, ce, câte</li>
      <li>PRON: care, ce, cărora, căreia, căruia, câte, ce-, ceea-ce, cine</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nici, niciodată, nicidecum</li>
      <li>DET: niciun, nicio, niciunei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: a, al, ale, lor, ai, săi, ei, sa, său, sale</li>
      <li>PRON: se, s-, ele, el, o, le, îl, își, ei, li</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>NUM: ambele, ambelor, ambii, ambilor, amândouă</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 2, 1, două, 3, 4, 5, 30, 10, 20, 6</li>
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
      <li>ADJ: ultimul, opta, primul</li>
      <li>NUM: primul, II, iv, III, prima, i, primele, doua, doilea, primă</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: a, al, ale, lor, ai, săi, ei, sa, său, sale</li>
      <li>PRON: lor, lui, sa, sale</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, s-, își, și-, sine</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: am, vom, suntem, Aș, fim, sunt, voi</li>
      <li>DET: noastră, nostru, noastre, mele, noștri</li>
      <li>PRON: ne, ne-, noi, Mă, mi, mi-, nouă, îmi</li>
      <li>VERB-Fin: avem, putem, menționăm, Dorim, Sperăm, am, amintim, consider, considerăm, cred</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: veți, ați, sunteți, esti, fii</li>
      <li>DET: tău</li>
      <li>PRON: vă, v-, dumneavoastră, te, tine, ți</li>
      <li>VERB-Fin: vezi, aveți, consultați, observați, participați, puteți, Contactați, acceptați, aflați, ai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: este, a, au, sunt, ar, va, fie, vor, era, e</li>
      <li>AUX-Fin: este, au, sunt, ar, fie, vor, era, e, erau, a</li>
      <li>DET: acest, această, aceste, alte, lor, multe, acestor, toate, acestei, acești</li>
      <li>PRON: care, se, ce, s-, ceea, acestea, cei, cea, cele, acestora</li>
      <li>VERB-Fin: poate, pot, are, trebuie, există, au, reprezintă, prezintă, privește, determină</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: lor, noastră, nostru, noastre</li>
      <li>PRON: lor</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: săi, ei, sa, său, sale, lui, noastre, mele, noștri, tău</li>
      <li>PRON: lui, sa, sale</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: AV</li>
          <li>ADP: vs.</li>
          <li>ADV: vs, cca, aprox, etc, etc., vs., aprox.</li>
          <li>NOUN: mg, IC, vs, HTA, TA, DZ, FA, AVC, dl, EI</li>
          <li>X: GH, AG, max, ș.a.</li>
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
          <li>ADP: de, în, la, cu, din, pentru, prin, pe, dintre, după</li>
          <li>PUNCT: /, ;</li>
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
          <li>NUM: 31.12.2012</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 2, 1, 3, 4, 5, 30, 10, 20, 6, 15</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: II, iv, III, i, V, l, VII, XIX, I-, VIII</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: ultimul, opta, primul</li>
          <li>NUM: două, trei, primul, prima, primele, doua, doilea, patru, primă, cinci</li>
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
      <li>Postnom
        <ul>
          <li>DET: Acestea, acesteia</li>
        </ul>
      </li>
      <li>Prenom
        <ul>
          <li>DET: acest, această, aceste, alte, acestor, acestei, acești, altă, unele, același</li>
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
          <li>PRON: ele, el, ei, ea, sine, lui, noi, dumneavoastră, dânșii, lor</li>
        </ul>
      </li>
      <li>Weak
        <ul>
          <li>PRON: se, s-, o, le, îl, își, li, ne, și-, i</li>
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
      <li>VERB-Fin--NOUN (458)</li>
      <li>VERB-Fin--NOUN-ADP(de) (2)</li>
      <li>VERB-Fin--NOUN-Gen (3)</li>
      <li>VERB-Fin--NOUN-Nom (1874)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(decât) (1)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Nom (934)</li>
      <li>VERB-Ger--NOUN (10)</li>
      <li>VERB-Ger--NOUN-Nom (42)</li>
      <li>VERB-Ger--PRON-Nom (19)</li>
      <li>VERB-Inf--NOUN (37)</li>
      <li>VERB-Inf--NOUN-Nom (121)</li>
      <li>VERB-Inf--PRON-Nom (32)</li>
      <li>VERB-Part--NOUN (167)</li>
      <li>VERB-Part--NOUN-ADP(dintre) (1)</li>
      <li>VERB-Part--NOUN-ADP(la) (2)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Nom (591)</li>
      <li>VERB-Part--NOUN-Nom-ADP(la) (1)</li>
      <li>VERB-Part--PRON-Nom (229)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (566)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-ADP(pe) (2)</li>
      <li>VERB-Fin--NOUN-ADP(în) (2)</li>
      <li>VERB-Fin--NOUN-Gen (2)</li>
      <li>VERB-Fin--NOUN-Nom (1309)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(la) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(pe) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(în) (1)</li>
      <li>VERB-Fin--PRON-Acc (26)</li>
      <li>VERB-Fin--PRON-Dat (5)</li>
      <li>VERB-Fin--PRON-Nom (9)</li>
      <li>VERB-Fin--PRON-Nom-ADP(a) (1)</li>
      <li>VERB-Fin--PRON-Nom-ADP(pe) (19)</li>
      <li>VERB-Ger--NOUN (76)</li>
      <li>VERB-Ger--NOUN-ADP(pe) (1)</li>
      <li>VERB-Ger--NOUN-ADP(în) (1)</li>
      <li>VERB-Ger--NOUN-Nom (199)</li>
      <li>VERB-Ger--NOUN-Nom-ADP(la) (1)</li>
      <li>VERB-Ger--PRON-Acc (3)</li>
      <li>VERB-Ger--PRON-Nom (1)</li>
      <li>VERB-Ger--PRON-Nom-ADP(pe) (1)</li>
      <li>VERB-Inf--NOUN (164)</li>
      <li>VERB-Inf--NOUN-ADP(de) (1)</li>
      <li>VERB-Inf--NOUN-Nom (339)</li>
      <li>VERB-Inf--PRON-Acc (7)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Inf--PRON-Nom-ADP(pe) (2)</li>
      <li>VERB-Part--NOUN (197)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--NOUN-ADP(pe) (1)</li>
      <li>VERB-Part--NOUN-Nom (302)</li>
      <li>VERB-Part--NOUN-Nom-ADP(de) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(decât) (1)</li>
      <li>VERB-Part--NOUN-Nom-ADP(pe) (2)</li>
      <li>VERB-Part--PRON-Acc (7)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Nom (5)</li>
      <li>VERB-Part--PRON-Nom-ADP(pe) (10)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (9)</li>
      <li>VERB-Fin--NOUN-Gen (42)</li>
      <li>VERB-Fin--NOUN-Nom (1)</li>
      <li>VERB-Fin--PRON-Acc (11)</li>
      <li>VERB-Fin--PRON-Dat (8)</li>
      <li>VERB-Fin--PRON-Gen (5)</li>
      <li>VERB-Ger--NOUN (4)</li>
      <li>VERB-Ger--NOUN-Gen (9)</li>
      <li>VERB-Ger--PRON-Dat (1)</li>
      <li>VERB-Inf--NOUN (3)</li>
      <li>VERB-Inf--NOUN-Gen (11)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (4)</li>
      <li>VERB-Inf--PRON-Dat (4)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Part--NOUN (27)</li>
      <li>VERB-Part--NOUN-ADP(de) (2)</li>
      <li>VERB-Part--NOUN-ADP(din) (1)</li>
      <li>VERB-Part--NOUN-Gen (93)</li>
      <li>VERB-Part--NOUN-Gen-ADP(asupra) (1)</li>
      <li>VERB-Part--PRON-Acc (3)</li>
      <li>VERB-Part--PRON-Dat (8)</li>
      <li>VERB-Part--PRON-Gen (10)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 224 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: putea se, produce se, dovedi s-, asocia se, afla se, părea se, datora se, face se, baza se, găsi se, referi se, demonstra s-, indica se, realiza se, caracteriza se, manifesta se, întâlni se, considera se, lega se, reduce se, ameliora se, arăta s-, constitui se, corela se, datora s-, face s-, prezenta se, pune se, încadra s-, însoți se, ști se, adapta se, ajunge se, ameliora s-, asocia s-, extinde se, instala se, modifica s-, numi se, observa s-, prefera se, produce s-, recurge se, regăsi se, transforma se, înregistra s-, întâmpla se, adresa se, adăuga s-, afirma se</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 248 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: face se, putea se, recomanda se, constata s-, asocia se, demonstra s-, folosi se, observa s-, constata se, indica se, administra s-, administra se, adăuga se, corela se, întâlni se, considera se, impune se, menține se, utiliza se, înregistra s-, înregistra se, efectua se, prezenta se, aplica se, datora se, dezvolta se, obține se, prefera se, produce se, realiza se, baza se, caracteriza se, determina se, pune se, reflecta se, ști se, analiza s-, defini se, descrie se, dovedi s-, face s-, forma se, modifica se, observa se, practica se, putea s-, păstra se, suprapune se, considera s-, cunoaște se</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: regla își</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 14 relation subtypes: <a>advcl:tcl</a>, <a>advmod:tmod</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>ccomp:pmod</a>, <a>csubj:pass</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>expl:poss</a>, <a>expl:pv</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:pmod</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
