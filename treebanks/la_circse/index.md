---
layout: base
title:  'UD_Latin-CIRCSE'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Latin CIRCSE

Language: [Latin](/la/index.html) (code: `la`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.14 release.

The following people have contributed to making this treebank part of UD: Federica Iurescia, Federica Gamba, Flavio Massimiliano Cecchini, Francesco Mambrini, Giovanni Moretti, Marco Passarotti, Paolo Ruffolo.

Repository: [UD_Latin-CIRCSE](https://github.com/UniversalDependencies/UD_Latin-CIRCSE)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udla_circse216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-SA 4.0

Genre: fiction, poetry

Questions, comments?
General annotation questions (either Latin-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Latin-CIRCSE/issues).
If you want to collaborate, please contact [federica&nbsp;•&nbsp;iurescia&nbsp;(æt)&nbsp;unicatt&nbsp;•&nbsp;it].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually, natively in UD style |

## Description

UD_Latin-CIRCSE is a repository of treebanks featuring Latin texts natively annotated at the CIRCSE Research Centre in Milan (https://centridiricerca.unicatt.it/circse/en.html) following the Universal Dependencies (UD) (https://universaldependencies.org) annotation scheme.
The repository includes prose and poetry texts from different periods.




This treebank repository is a work in progress collective endeavour. Presently, it contains the following annotated texts: Seneca *Hercules Furens*, Seneca *Agamemnon*, Tacitus *Germania*, Seneca *Oedipus*.

#### Seneca *Hercules Furens*

*Hercules Furens* is a tragedy written by Seneca the younger in 1st century CE. The source text was received with tokenisation, and annotation with respect to lemmatisation, POS tagging, and morphological features from the Opera Latina corpus built by the [LASLA](http://web.philo.ulg.ac.be/lasla/) laboratory in Liège.
In few cases, the [received annotation](http://github.com/CIRCSE/LASLA) with regard to POS tag and morphological annotation was modified during the syntactic annotation; deviations from the received annotation are detailed in the file [SenecaYounger_HercF_LASLA_CIRCSE](https://github.com/CIRCSE/UD_Latin-CIRCSE/blob/main/documentation/SenecaYounger_HercF_LASLA_CIRCSE.md).
The syntactic annotation was performed manually at CIRCSE, and follows the UD scheme.
The text (7714 tokens, 555 sentences) was enhanced with the annotation of the speakers to whom each sentence is attributed. This annotation, performed manually at CIRCSE, is formatted as a comment in the conllu file following the comment line reporting the text of the sentence, as exemplified in what follows:

## Acknowledgments

The annotation of Seneca *Hercules Furens* and *Agamemnon* has been conducted in the framework of the _LiLa: Linking Latin_ project. LiLa has received funding from the European Research Council (ERC) under the European Union’s Horizon 2020 research and innovation programme – Grant Agreement No. 769994. Warmful thanks to Federica Gamba and Flavio Massimiliano Cecchini for their support and precious advices during the annotation process.


# Statistics of UD Latin CIRCSE

## POS Tags

[ADJ](la_circse-pos-ADJ.html) – [ADP](la_circse-pos-ADP.html) – [ADV](la_circse-pos-ADV.html) – [AUX](la_circse-pos-AUX.html) – [CCONJ](la_circse-pos-CCONJ.html) – [DET](la_circse-pos-DET.html) – [INTJ](la_circse-pos-INTJ.html) – [NOUN](la_circse-pos-NOUN.html) – [NUM](la_circse-pos-NUM.html) – [PART](la_circse-pos-PART.html) – [PRON](la_circse-pos-PRON.html) – [PROPN](la_circse-pos-PROPN.html) – [SCONJ](la_circse-pos-SCONJ.html) – [VERB](la_circse-pos-VERB.html)

## Features

[AdpType](la_circse-feat-AdpType.html) – [AdvType](la_circse-feat-AdvType.html) – [Aspect](la_circse-feat-Aspect.html) – [Case](la_circse-feat-Case.html) – [Compound](la_circse-feat-Compound.html) – [Degree](la_circse-feat-Degree.html) – [ExtPos](la_circse-feat-ExtPos.html) – [Form](la_circse-feat-Form.html) – [Gender](la_circse-feat-Gender.html) – [InflClass](la_circse-feat-InflClass.html) – [InflClass[nominal]](la_circse-feat-InflClass-nominal.html) – [Mood](la_circse-feat-Mood.html) – [NameType](la_circse-feat-NameType.html) – [Number](la_circse-feat-Number.html) – [Number[psor]](la_circse-feat-Number-psor.html) – [NumForm](la_circse-feat-NumForm.html) – [NumType](la_circse-feat-NumType.html) – [NumValue](la_circse-feat-NumValue.html) – [PartType](la_circse-feat-PartType.html) – [Person](la_circse-feat-Person.html) – [Person[psor]](la_circse-feat-Person-psor.html) – [Polarity](la_circse-feat-Polarity.html) – [Poss](la_circse-feat-Poss.html) – [PronType](la_circse-feat-PronType.html) – [Proper](la_circse-feat-Proper.html) – [Reflex](la_circse-feat-Reflex.html) – [Tense](la_circse-feat-Tense.html) – [Variant](la_circse-feat-Variant.html) – [VerbForm](la_circse-feat-VerbForm.html) – [Voice](la_circse-feat-Voice.html)

## Relations

[acl](la_circse-dep-acl.html) – [acl:relcl](la_circse-dep-acl-relcl.html) – [advcl](la_circse-dep-advcl.html) – [advcl:abs](la_circse-dep-advcl-abs.html) – [advcl:cmp](la_circse-dep-advcl-cmp.html) – [advcl:pred](la_circse-dep-advcl-pred.html) – [advcl:relcl](la_circse-dep-advcl-relcl.html) – [advmod](la_circse-dep-advmod.html) – [advmod:emph](la_circse-dep-advmod-emph.html) – [advmod:lmod](la_circse-dep-advmod-lmod.html) – [advmod:neg](la_circse-dep-advmod-neg.html) – [advmod:tmod](la_circse-dep-advmod-tmod.html) – [amod](la_circse-dep-amod.html) – [appos](la_circse-dep-appos.html) – [aux](la_circse-dep-aux.html) – [aux:pass](la_circse-dep-aux-pass.html) – [case](la_circse-dep-case.html) – [cc](la_circse-dep-cc.html) – [ccomp](la_circse-dep-ccomp.html) – [ccomp:relcl](la_circse-dep-ccomp-relcl.html) – [ccomp:reported](la_circse-dep-ccomp-reported.html) – [conj](la_circse-dep-conj.html) – [conj:expl](la_circse-dep-conj-expl.html) – [cop](la_circse-dep-cop.html) – [csubj](la_circse-dep-csubj.html) – [csubj:pass](la_circse-dep-csubj-pass.html) – [csubj:relcl](la_circse-dep-csubj-relcl.html) – [det](la_circse-dep-det.html) – [det:numgov](la_circse-dep-det-numgov.html) – [discourse](la_circse-dep-discourse.html) – [dislocated:csubj](la_circse-dep-dislocated-csubj.html) – [dislocated:nsubj](la_circse-dep-dislocated-nsubj.html) – [fixed](la_circse-dep-fixed.html) – [flat](la_circse-dep-flat.html) – [flat:gov](la_circse-dep-flat-gov.html) – [flat:name](la_circse-dep-flat-name.html) – [flat:redup](la_circse-dep-flat-redup.html) – [iobj](la_circse-dep-iobj.html) – [mark](la_circse-dep-mark.html) – [nmod](la_circse-dep-nmod.html) – [nsubj](la_circse-dep-nsubj.html) – [nsubj:pass](la_circse-dep-nsubj-pass.html) – [nummod](la_circse-dep-nummod.html) – [obj](la_circse-dep-obj.html) – [obl](la_circse-dep-obl.html) – [obl:agent](la_circse-dep-obl-agent.html) – [obl:arg](la_circse-dep-obl-arg.html) – [obl:cmp](la_circse-dep-obl-cmp.html) – [obl:lmod](la_circse-dep-obl-lmod.html) – [obl:tmod](la_circse-dep-obl-tmod.html) – [orphan](la_circse-dep-orphan.html) – [orphan:missing](la_circse-dep-orphan-missing.html) – [parataxis](la_circse-dep-parataxis.html) – [parataxis:reporting](la_circse-dep-parataxis-reporting.html) – [root](la_circse-dep-root.html) – [vocative](la_circse-dep-vocative.html) – [xcomp](la_circse-dep-xcomp.html) – [xcomp:relcl](la_circse-dep-xcomp-relcl.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1664 sentences, 24217 tokens and 24899 syntactic words.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
<li>This corpus contains 682 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 552 types of multi-word tokens. Examples: tuque, tecum, quaeque, eoque, mecum, quique, secum, numquid, quodque, aperitque, cumque, eosque, etsi, fluctusque, geminumque, iamque, itane, meque, noctemque, plusque, saxaque, siue, suisque, tenetque, teque, uirtusque, uultusque, animoque, auidumque, caelumque, dominumque, eaque, egone, estne, ferrumque, formasque, frameaque, gemuitque, habitusque, idemque, idque, ipsaque, ipsosque, ipsumque, iraque, iterque, magisque, magnumque, manuque, minimeque.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, PUNCT, X</li>
</ul>

<ul>
<li>This corpus contains 18 word types tagged as particles (PART): an, autem, enim, enimuero, equidem, haud, haut, igitur, nam, namque, ne, nempe, non, num, o, quidem, quin, quoque</li>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as pronouns (PRON): aliquis, ego, is, nemo, nihil, nonnihil, nos, qui, quis, quisquam, quisquis, sui, tu, uos</li>
</ul>

<ul>
<li>This corpus contains 49 lemmas tagged as determiners (DET): alius, alter, ambo, ceterus, complures, cunctus, hic, idem, ille, ipse, iste, istic, mei, meus, multum, multus, noster, nostri, nullus, omnis, paucus, plerusque, qualis, quantum, quantus, quicumque, quidam, quilibet, quis, quisque, quisquis, quot, quotus, solus, sui, suus, talis, tantum, tantus, tot, totidem, totus, tui, tuus, uester, ullus, unus, uter, uterque</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as PRON and sometimes as DET: quis, quisquis, sui</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): sum</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 6 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: est, sunt, fuit, sit, es, erit, sum, fuerat, esset, foret</li>
    <li>VERB: tulit, iacet, potest, precor, uenit, licet, stetit, dedit, iuuat, tenet</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Gdv
  <ul>
    <li>VERB: metuenda, timendum, agendum, colenda, colendos, cremandis, deflenda, euocandus, extrahendus, ferienda</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>VERB: ferendo, imperando, nocendi, pereundo, pugnandi, remeandi, soluendo, ueniendi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: esse, fuisse, fore</li>
    <li>NOUN: uisu</li>
    <li>VERB: mori, pati, facere, uidere, uinci, fieri, ire, loqui, nosse, sequi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: notum, aperta, detecta, diuersa, edito, fractum, futurae, nota, notam, olentem</li>
    <li>NOUN: occidentem, secreta, Occidentis, Oriens, Orientis, aduentibus, flexu, instituta, nupta, secretum</li>
    <li>VERB: gerens, iussus, furens, uicta, intuens, iuncta, relicto, uictus, comitata, data</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>VERB: fatu, auditu, uisu</li>
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
      <li>ADJ: alta, magna, longa, prima, noua, saeua, tristis, atra, laeta, sera</li>
      <li>ADJ-Part: detecta, futurae, nota, notam, olentem, paratam, solita</li>
      <li>DET: ipsa, haec, nulla, illa, nostra, omnis, ulla, alia, ista, hanc</li>
      <li>NOUN: manus, manu, domus, tellus, turba, pars, aras, dextra, uia, domum</li>
      <li>NOUN-Part: nupta</li>
      <li>NUM: una, duas, tris, unius</li>
      <li>PRON: quae, quas, quam, qua, ea, quibus, aliqua, eae, eas, eam</li>
      <li>PROPN: Germaniae, Fortuna, Troia, Iuno, Stygis, Thebis, Mycenas, Styga, Fortunae, Germania</li>
      <li>VERB-Gdv: metuenda, colenda, cremandis, habendae, perdenda, rapienda, reseranda, temptanda, timenda, tuenda</li>
      <li>VERB-Part: uicta, comitata, iuncta, rupta, captae, debitas, perempta, trementes, uersa, cadens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADJ: fortem, leuis, parem, segnis, Thespias, altior, consortem, felicem, fidelis, graues</li>
      <li>DET: quisquis, omnis, qualis, omnes, quisque, nostris, plures, quales, suis</li>
      <li>NOUN: caelitum, diem, comes, dies, coniunx, hostis, auctorem, duce, sanguine, specum</li>
      <li>PRON: quis, aliquis, quisquam, quibus</li>
      <li>PROPN: Manes, Phrygum, Phrygibus, Troas, Arabum, Araxen, Ismenos, Parnasos, Phocidos, Proetides</li>
      <li>VERB-Part: fluentes, fodientem, loquentem, manantes, metuentem, natis, obsidentem, praeferens, properantes, recedentem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc,Neut
    <ul>
      <li>ADJ: nocens, demens, amens, miseris, felix, fessis, innocens, libens, minax, potens</li>
      <li>DET: his, huius, illi, omnibus, aliis, illis, ipsis, nulli, solis, suis</li>
      <li>NUM: uni</li>
      <li>PRON: cuius, cui, quibus, quis, cuiquam</li>
      <li>PROPN: Creo, Eryx, Iuno, Lucifer, Mors, Nereus</li>
      <li>VERB-Part: metuens, petens, efferens, furens, iacens, mouens, timens, carenti, cupienti, depositis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Neut
    <ul>
      <li>NOUN: syrma</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: Germanorum, ferox, grauis, primus, truces, dubius, maestus, magni, saeuus, Germanos</li>
      <li>ADJ-Part: notum, secreti, secreto</li>
      <li>DET: ipse, ille, hic, hunc, nullus, suos, iste, illum, meos, omnis</li>
      <li>NOUN: deos, uultus, pater, diem, artus, genitor, metus, labor, loco, mundi</li>
      <li>NOUN-Inf: uisu</li>
      <li>NOUN-Part: occidentem, Occidentis, Oriens, Orientis, aduentibus, flexu</li>
      <li>NUM: uno, unus, duos, ducenti, tribus, tris, uni, unum</li>
      <li>PRON: qui, quem, quis, quos, quo, eos, quibus, eius, aliquis, cui</li>
      <li>PROPN: Phoebus, Ditis, Phoebi, Herculis, Titan, Lycus, Theseu, Alcides, Bacchi, Herculem</li>
      <li>VERB-Gdv: colendos, euocandus, extrahendus, hauriendum, paenitendi, timendos, timendum</li>
      <li>VERB-Part: iussus, gerens, furens, uictus, fusus, genitus, natus, peremptus, positus, ausus</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>ADJ: obuium, tuto, Ausonio, Icario, Thracis, afflictum, cristati, cruenti, extremum, fesso</li>
      <li>DET: illo, hoc, alterum, horum, idem, ipsum, meorum, quantum, sui, suum</li>
      <li>NOUN: parens, sacerdos</li>
      <li>NUM: duo</li>
      <li>PRON: quo</li>
      <li>PROPN: Argos</li>
      <li>VERB-Gdv: timendum</li>
      <li>VERB-Part: conditum, conuictum, datum, perempti, pulsum, raptum, rupto, uicto, uictum, uiduatum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: saeua, maius, regium, geminum, triste, graue, altum, maiora, medio, nobile</li>
      <li>ADJ-Part: notum, aperta, diuersa, edito, fractum, secretiora, solitum, stato</li>
      <li>DET: hoc, quicquid, omne, haec, omnia, aliud, cetera, cuncta, mea, sua</li>
      <li>NOUN: caput, arma, regna, caelum, fata, mare, bella, genus, nomen, caelo</li>
      <li>NOUN-Part: secreta, instituta, secretum</li>
      <li>NUM: unum, uno, tria, unius, milia</li>
      <li>PRON: quid, quod, quae, id, aliquid, aliquod, quo, quorum, quicquam, ea</li>
      <li>PROPN: Argos, Ilium, Acheron, Amphion, Ilio, Pelion, Actaeon, Amazon, Asciburgium, Bella</li>
      <li>VERB-Gdv: agendum, deflenda, ferienda, insaniendum, laudanda, metuenda, mouenda, occupandum, precandum, pudendum</li>
      <li>VERB-Part: relicto, data, mersum, acceptis, additum, agitata, clausa, concessum, congesto, decepto</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: saeua, truces, Germanorum, graues, leues, Germanos, altis, proximi, singulis, tristes</li>
      <li>ADJ-Part: aperta, diuersa, secreti, secretiora</li>
      <li>AUX-Fin: sunt, fuerant, erant, fuerunt, fuissent, sint</li>
      <li>DET: suis, meis, omnis, haec, omnes, omnium, omnibus, suos, omnia, cetera</li>
      <li>NOUN: manus, arma, deos, regna, fata, bella, malis, aras, artus, ora</li>
      <li>NOUN-Part: secreta, aduentibus, instituta</li>
      <li>NUM: mille, septem, decem, duos, tria, tris, centum, duas, ducenti, duo</li>
      <li>PRON: quae, quibus, quas, quos, nos, qui, nobis, uos, eos, quorum</li>
      <li>PROPN: Manes, Thebis, Lares, Mycenas, Penates, Thebae, Danaum, Gallias, Phrygibus, Phrygum</li>
      <li>VERB-Fin: agunt, ferunt, iacent, arbitrantur, habent, ite, petunt, colunt, date, sensere</li>
      <li>VERB-Gdv: colendos, cremandis, deflenda, ferienda, laudanda, metuenda, mouenda, timendos</li>
      <li>VERB-Part: cadentes, data, debitas, discreti, trementes, uictos, acceptis, agitata, ausos, captas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: alta, grauis, tristis, graui, magna, maior, ferox, longa, magni, prima</li>
      <li>ADJ-Part: notum, detecta, edito, fractum, futurae, nota, notam, olentem, paratam, secreto</li>
      <li>AUX-Fin: est, fuit, sit, es, erit, sum, fuerat, esset, foret, fuerit</li>
      <li>DET: hoc, ipse, ille, quicquid, hic, omne, ipsa, haec, nulla, hunc</li>
      <li>NOUN: caput, manu, diem, domus, tellus, caelum, mare, pater, turba, genus</li>
      <li>NOUN-Inf: uisu</li>
      <li>NOUN-Part: occidentem, Occidentis, Oriens, Orientis, flexu, nupta, secretum</li>
      <li>NUM: una, uno, unum, unus, uni, unius</li>
      <li>PRON: te, qui, quid, quod, me, quae, tibi, se, mihi, quis</li>
      <li>PROPN: Phoebus, Ditis, Germaniae, Phoebi, Alcidae, Fortuna, Herculis, Titan, Lycus, Theseu</li>
      <li>VERB-Fin: tulit, iacet, potest, precor, uenit, licet, stetit, dedit, iuuat, tenet</li>
      <li>VERB-Gdv: timendum, agendum, metuenda, colenda, euocandus, extrahendus, habendae, hauriendum, insaniendum, occupandum</li>
      <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, pugnandi, remeandi, soluendo, ueniendi</li>
      <li>VERB-Part: gerens, iussus, furens, intuens, relicto, uicta, uictus, comitata, fusus, genitus</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: graui, magno, primo, alto, longo, medio, altis, impio, ingenti, leui</li>
      <li>ADJ-Part: edito, secreto, solita, stato</li>
      <li>DET: hoc, ipso, illo, omni, suis, nullo, sua, suo, tantis, meis</li>
      <li>NOUN: manu, caelo, ferro, ore, sanguine, caede, dextra, loco, uultu, gradu</li>
      <li>NOUN-Inf: uisu</li>
      <li>NOUN-Part: aduentibus, flexu</li>
      <li>NUM: uno, una, tribus</li>
      <li>PRON: te, quo, me, qua, se, quibus, eo, nobis, aliqua, aliquo</li>
      <li>PROPN: Ioue, Erebo, Hercule, Marte, Thebis, Uenere, Alcide, Alcmena, Austro, Baccho</li>
      <li>VERB-Ger: ferendo, imperando, pereundo</li>
      <li>VERB-Part: relicto, rupta, rupto, caeso, acceptis, acto, congesto, deiecto, discussa, exceptis</li>
      <li>VERB-Sup: fatu, auditu, uisu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: regium, saeua, Germanos, certum, graues, leuem, nouum, clarum, feros, fortem</li>
      <li>ADJ-Part: aperta, notam, notum, olentem, paratam, secretiora, solitum</li>
      <li>DET: hoc, quicquid, hunc, omnis, hanc, suum, omne, suos, tuam, illum</li>
      <li>NOUN: caput, manus, deos, diem, caelum, bella, regna, aras, arma, mare</li>
      <li>NOUN-Part: occidentem, secreta, instituta, secretum</li>
      <li>NUM: unum, duos, tris, duas, milia, tria</li>
      <li>PRON: te, me, quid, quod, se, quem, quae, quas, quam, quos</li>
      <li>PROPN: Manes, Herculem, Iouem, Rhenum, Mycenas, Phoebum, Styga, Germaniam, Lares, Penates</li>
      <li>VERB-Gdv: timendum, colendos, deflenda, hauriendum, laudanda, metuenda, timendos</li>
      <li>VERB-Part: cadentes, debitas, raptum, uictos, ausos, captas, clausum, data, datum, detracta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: fessis, miseris, Cadmeis, fortibus, iratae, nouis, singulis, Ausonio, Batauis, Cadmeae</li>
      <li>DET: cuique, meis, omnibus, nulli, suis, illi, nostris, illis, suo, tuis</li>
      <li>NOUN: patri, malis, regi, rebus, manibus, populis, genti, matri, superis, uulneri</li>
      <li>NUM: uni</li>
      <li>PRON: tibi, mihi, cui, quibus, sibi, nobis, uobis, cuiquam, quis, tibimet</li>
      <li>PROPN: Ioui, Phoebo, Alcidae, Fortunae, Oceano, Thebis, Achilli, Baccho, Danais, Diti</li>
      <li>VERB-Gdv: cremandis, habendae</li>
      <li>VERB-Ger: soluendo</li>
      <li>VERB-Part: petenti, uicto, abeunti, aestimanti, agendis, bellantibus, carenti, concupiscentibus, cupienti, deceptis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: magni, Germanorum, noui, Tonantis, atri, Gallorum, audacis, ignotae, immensae, irati</li>
      <li>ADJ-Part: futurae</li>
      <li>DET: omnium, nostri, huius, mei, nostrae, tui, sui, suae, ipsius, aliarum</li>
      <li>NOUN: mundi, deorum, domus, regis, regni, gentis, lucis, maris, patris, regum</li>
      <li>NOUN-Part: Occidentis, Orientis</li>
      <li>NUM: unius</li>
      <li>PRON: cuius, sui, eius, quorum, eorum, nostri, tui, earum, mei</li>
      <li>PROPN: Ditis, Germaniae, Phoebi, Herculis, Bacchi, Iouis, Alcidae, Stygis, Tartari, Rheni</li>
      <li>VERB-Gdv: paenitendi</li>
      <li>VERB-Ger: nocendi, pugnandi, remeandi, ueniendi</li>
      <li>VERB-Part: cadentis, captae, aedificandi, coercendi, coeuntium, deuicti, electorum, emergentis, eruentis, euersi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADV: hinc, hic</li>
      <li>NOUN: domi, humi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: grauis, tristis, maior, prima, alta, felix, ferox, noua, primus, dubius</li>
      <li>ADJ-Part: notum, detecta, diuersa, fractum, nota, secreti</li>
      <li>DET: ipse, ille, hic, hoc, haec, ipsa, nulla, quisquis, illa, ista</li>
      <li>NOUN: tellus, pars, turba, fides, arma, dies, pater, uia, domus, labor</li>
      <li>NOUN-Part: Oriens, nupta</li>
      <li>NUM: una, unus, ducenti, duo, tria, unum</li>
      <li>PRON: qui, quae, quis, quid, quod, tu, nemo, ego, id, aliquis</li>
      <li>PROPN: Phoebus, Lycus, Titan, Alcides, Fortuna, Troia, Agamemnon, Cithaeron, Eurystheus, Thebae</li>
      <li>VERB-Gdv: agendum, metuenda, colenda, euocandus, extrahendus, ferienda, insaniendum, mouenda, occupandum, perdenda</li>
      <li>VERB-Part: gerens, iussus, furens, uicta, intuens, iuncta, uictus, comitata, fusus, genitus</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: consors, demens, dira, fallax, fortes, magnanime, magne, misera, miseranda, potens</li>
      <li>DET: ipsa, ipsae, ipse, nulla, talis</li>
      <li>NOUN: genitor, anime, coniunx, pater, parens, famuli, nate, rector, decus, genus</li>
      <li>PRON: tu, uos</li>
      <li>PROPN: Theseu, Phoebe, Aegisthe, Iuno, Alcide, Argos, Bacche, Cassandra, Fortuna, Oresta</li>
      <li>VERB-Part: armati, assidens, congresse, coniuncta, efferens, infectae, oblite, occurrens, petens, quatiens</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADJ: prima, primo, primus, proximi, extremum, maximum, summo, imis, imo, summa</li>
      <li>ADV: maxime, primum, minime, primo, latissime, plurimum</li>
      <li>DET: plurimis, paucissima, plurimae, plurimi, plurimum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: maior, maius, minor, maiora, melior, grauior, grauius, maioribus, peior, propior</li>
      <li>ADJ-Part: secretiora</li>
      <li>ADV: magis, potius, minus, saepius, melius, plus, amplius, prius, plerumque, ocius</li>
      <li>DET: plura, pluris, plus, plures, pluribus</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dim
    <ul>
      <li>NOUN: ancillis, anulum, auunculi, auunculum, capillum, sagulo, surculos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: saeua, alta, grauis, longa, magna, noua, tristis, graui, laeta, felix</li>
      <li>ADV: iam, nunc, semper, hinc, huc, et, tandem, retro, saepe, sic</li>
      <li>DET: cuncta, multo, cunctis, cunctos, multis, cuncti, multa, pauca</li>
      <li>VERB-Gdv: metuenda, timendum, agendum, colenda, colendos, cremandis, deflenda, euocandus, extrahendus, ferienda</li>
      <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, pugnandi, remeandi, soluendo, ueniendi</li>
      <li>VERB-Part: gerens, iussus, furens, uicta, intuens, iuncta, relicto, comitata, fusus, genitus</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: implacabiles, inaccesso, incerta, incompti, ingrata, inuiolata</li>
      <li>ADV: nondum, numquam</li>
      <li>CCONJ: nec, neque</li>
      <li>DET: nulla, nullis, nullo, nulli, nullum, nullam, nullas, nullus</li>
      <li>NOUN: nefas, inediam, inimicitiae, inimicitias</li>
      <li>PART: non, an, ne, haut, haud, quin, num</li>
      <li>PRON: nemo, nihil</li>
      <li>SCONJ: nisi, ne, sin, neue, ni</li>
      <li>VERB-Fin: negauerint, nesciunt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Greek
    <ul>
      <li>ADJ: Arcados, Ismenida, Libys, Lyrnesida, Scythen, Thespias</li>
      <li>NOUN: chaos, aer, aether, maenas, syrma, aedon, chelyn, chelys, delphin, lampada</li>
      <li>PROPN: Titan, Theseu, Alcides, Argos, Cithaeron, Agamemnon, Styga, Eurystheus, Pallas, Achilles</li>
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
      <li>AUX-Fin: est, sunt, sit, es, erit, sum, esset, foret, erant, eris</li>
      <li>AUX-Inf: esse, fore</li>
      <li>VERB-Fin: iacet, potest, precor, licet, iuuat, tenet, uenit, adest, habet, stat</li>
      <li>VERB-Inf: mori, pati, facere, uidere, uinci, fieri, ire, loqui, sequi, fari</li>
      <li>VERB-Part: gerens, furens, intuens, metuens, petens, trahens, cadens, cadentes, cadentis, concutiens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inch
    <ul>
      <li>VERB-Fin: poscit, agnoscat, agnoscunt, clarescunt, concupiscunt, dignoscas, erubescunt, excrescunt, incalescat, intumescat</li>
      <li>VERB-Part: concupiscentibus, durescente, quiescentibus</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: fuit, fuerat, fuerant, fuerit, fuerunt, fuissent</li>
      <li>AUX-Inf: fuisse</li>
      <li>VERB-Fin: tulit, stetit, dedit, cecidit, uidi, uidit, fecit, sensit, potuit, sonuit</li>
      <li>VERB-Inf: nosse, meminisse, addidisse, adisse, arsisse, cecidisse, dixisse, eualuisse, extitisse, fecisse</li>
      <li>VERB-Part: iussus, uicta, iuncta, relicto, uictus, comitata, data, fusus, genitus, mixta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>VERB-Gdv: metuenda, timendum, agendum, colenda, colendos, cremandis, deflenda, euocandus, extrahendus, ferienda</li>
      <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, pugnandi, remeandi, soluendo, ueniendi</li>
      <li>VERB-Part: daturus, reditura, uenturis, accipiendis, adituri, aedificandi, agendis, asciscendis, ausuram, coercendi</li>
      <li>VERB-Sup: fatu, auditu, uisu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: redde, ite, parce, date, ede, fare, da, effare, pete, cape</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: est, sunt, fuit, es, erit, sum, fuerat, fuerant, erant, eris</li>
      <li>VERB-Fin: tulit, iacet, potest, precor, uenit, licet, stetit, dedit, iuuat, tenet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sit, esset, foret, fuerit, fuissent, sim, sint, sis</li>
      <li>VERB-Fin: liceat, ducat, eat, pateat, petat, reddat, scias, teneat, agant, ament</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: erit, foret, eris</li>
      <li>VERB-Fin: dabit, ueniet, feram, petet, poterit, aderit, colam, faciet, feret, uolet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fuit, esset, fuerit, erant, fuerat, fuerunt, fuissent</li>
      <li>VERB-Fin: tulit, stetit, dedit, cecidit, uidi, uidit, fecit, sensit, potuit, mouit</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX-Fin: fuerant, fuerat</li>
      <li>VERB-Fin: armasset, constiterant, creueras, flexerat, fouerat, fugeram, gesseras, iusserat, norat, praebuerat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: est, sunt, sit, es, sum, fuit, sim, sint, sis</li>
      <li>VERB-Fin: iacet, potest, precor, licet, iuuat, tenet, uenit, adest, habet, stat</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Fin: tulit, iacet, potest, uenit, licet, stetit, dedit, iuuat, tenet, cecidit</li>
      <li>VERB-Inf: facere, uidere, fieri, ire, nosse, ferre, flectere, posse, regnare, scire</li>
      <li>VERB-Part: gerens, furens, intuens, metuens, petens, trahens, cadens, cadentes, cadentis, concutiens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: precor, sequitur, arbitrantur, fare, effare, patitur, datur, utuntur, agitur, aspernantur</li>
      <li>VERB-Gdv: metuenda, timendum, agendum, colenda, colendos, cremandis, deflenda, euocandus, extrahendus, ferienda</li>
      <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, pugnandi, remeandi, soluendo, ueniendi</li>
      <li>VERB-Inf: mori, pati, uinci, loqui, sequi, fari, reuerti, iungi, moliri, nasci</li>
      <li>VERB-Part: iussus, uicta, iuncta, relicto, uictus, comitata, data, fusus, genitus, mixta</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Con
    <ul>
      <li>ADV: ceterum, solum, utrimque</li>
      <li>DET: cetera, sola, solus, alia, aliis, aliud, solis, solum, aliarum, ceterae</li>
      <li>SCONJ: utrum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: ita, sic, tam, tamen, tantum, hinc, tunc, inde, hic, illic</li>
      <li>DET: hoc, ipse, ille, haec, hic, ipsa, illa, ista, hunc, ipsum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: aliquanto, quondam</li>
      <li>DET: ulla, alia, nulla, multo, nullis, aliud, uterque, nullo, quidam, unum</li>
      <li>PRON: aliquid, quid, aliquis, aliquod, nemo, quod, aliqua, nihil, qua, quicquam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: quid, cur, ubi, quo, unde, quam, ut, utrumne, quare, quonam</li>
      <li>DET: quota, qualis, quanta, quanto, quantum, quot, utras</li>
      <li>PRON: quid, quis, quae, cui, quem, quo, quod, quas, qua, quam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: nulla, nullus, nulli, nullo, nullum, nullos</li>
      <li>PRON: nemo, nil, nihil</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: nostra, sua, suis, mea, meis, tua, suo, suum, meum, suos</li>
      <li>PRON: te, me, tibi, se, mihi, tu, nos, ego, id, nobis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: quam, qua, unde, quo, quando, quanto, ubi, quantum, quippe, quotiens</li>
      <li>DET: quicquid, quisquis, qualis, quale, quantum, quantus, quemcumque, quicumque, quo, quodcumque</li>
      <li>PART: quin</li>
      <li>PRON: qui, quae, quod, quem, quibus, cuius, quos, quam, quas, quo</li>
      <li>SCONJ: ut, quam, quod, quia, cum, quamquam, qua, tamquam, ubi, quamuis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: omnis, omne, omnes, omnium, omni, omnibus, quisque, tota, omnia, cuique</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADV: tantum, multum, plus, quanto, aliquanto, plurimum, quantulum, quantum</li>
      <li>DET: multo, quota, unum, multa, plura, plurimis, pluris, plus, quantum, quot</li>
      <li>NUM: una, uno, unum, decem, mille, septem, unus, uni, unius, centum</li>
      <li>SCONJ: quantum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>ADJ: singulis, bina, terna, centeni, seno, singulos, binos, centena, quinis, sena</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADJ: duplices, duplici, simplex, triplici</li>
      <li>ADV: bis, semel, ter, quotiens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: prima, primo, primus, decima, primi, primum, prior, tertiae, tertius, decimus</li>
      <li>ADV: primum, prius, primo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: nostra, sua, suis, mea, meis, tua, suo, suum, meum, suos</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: sua, suis, suo, suum, suos, suas, suae, suam, sui, suorum</li>
      <li>PRON: se, sibi, sui, semet, sese, sibimet</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sum, sim, sunt</li>
      <li>PRON: me, mihi, nos, ego, nobis, nostri, mei, memet, mihimet</li>
      <li>VERB-Fin: precor, uidi, uideo, feci, feram, nescio, teneo, tuli, uidimus, cadam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: es, eris, sis</li>
      <li>PRON: te, tibi, tu, uos, temet, uobis, tibimet, tui</li>
      <li>VERB-Fin: redde, ite, parce, date, ede, fare, da, effare, iubes, pete</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: est, sunt, fuit, sit, erit, fuerat, esset, foret, fuerant, fuerit</li>
      <li>PRON: se, id, sibi, sui, ea, eius, eos, eo, semet, eae</li>
      <li>VERB-Fin: tulit, iacet, potest, uenit, licet, stetit, dedit, iuuat, tenet, cecidit</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: nostra, nostri, nostris, nostro, nostrum, nostrae, nostras, nostros, noster, nostram</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: mea, meis, tua, meum, tuam, meos, tuum, meo, tui, tuis</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: in, ad, per, cum, post, ex, inter, a, ab, e</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdvType</a>
    <ul>
      <li>Loc
        <ul>
          <li>ADV: qua, deinde, ergo, ibi, insuper, unde, hinc, passim, retro, hic</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: iam, mox, olim, nunc, simul, adhuc, ante, tum, semper, diu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Compound</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADV: etiam, adhuc, insuper, adeo, uelut, alibi, ideo, quatenus</li>
          <li>DET: totidem</li>
          <li>PART: enimuero</li>
          <li>SCONJ: prout, tamquam, uelut, sicut, dummodo, quominus, quasi, quatenus, quoniam</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>CCONJ
        <ul>
          <li>PRON: id</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Form</a>
    <ul>
      <li>Emp
        <ul>
          <li>ADV: tamen, plerumque, denique, quippe, ubique, utrimque</li>
          <li>CCONJ: ac, atque</li>
          <li>DET: ipse, ipso, eadem, ipsa, idem, ipsum, ipsi, eodem, ipsam, ipsos</li>
          <li>PART: quoque, enim, nempe</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>InflClass</a>
    <ul>
      <li>Ind
        <ul>
          <li>ADJ: satis, necesse, sat, sati</li>
          <li>DET: tot, quot</li>
          <li>NOUN: nefas, fas, opus</li>
          <li>NUM: mille, septem, decem, centum</li>
          <li>PRON: nil, nihil</li>
          <li>PROPN: Manto, Tempe</li>
        </ul>
      </li>
      <li>IndEurA
        <ul>
          <li>ADJ: alta, magna, longa, prima, noua, saeua, atra, laeta, sera, uidua</li>
          <li>ADJ-Part: detecta, futurae, nota, notam, paratam, solita</li>
          <li>DET: nostra, sua, tuam, mea, suas, suis, tua, meas, nostrae, suae</li>
          <li>NOUN: turba, aras, dextra, uia, poenas, terra, unda, ira, umbras, terras</li>
          <li>NOUN-Part: nupta</li>
          <li>NUM: una, duas</li>
          <li>PROPN: Germaniae, Alcidae, Fortuna, Alcides, Troia, Thebis, Mycenas, Fortunae, Germania, Germaniam</li>
        </ul>
      </li>
      <li>IndEurA,IndEurO
        <ul>
          <li>ADJ: miseris, fessis, adflictis, intonsis, inuitis, nouis, piis, singulis, uernis</li>
          <li>DET: suis, cunctis, meis, nostris</li>
        </ul>
      </li>
      <li>IndEurE
        <ul>
          <li>NOUN: diem, dies, fides, fidem, rebus, acies, aciem, die, rerum, res</li>
          <li>PROPN: Macies</li>
        </ul>
      </li>
      <li>IndEurI
        <ul>
          <li>ADJ: grauis, tristis, graui, ferox, truces, felix, graues, audax, ingens, leues</li>
          <li>ADJ-Part: olentem</li>
          <li>DET: omnis, omne, qualis, omnes, omnium, omni, omnibus, omnia, omnem, quale</li>
          <li>NOUN: mare, pars, parens, ora, ore, sanguine, ignes, nox, gentes, gentis</li>
          <li>NOUN-Part: occidentem, Occidentis, Oriens, Orientis</li>
          <li>NUM: tria, tris, milia, tribus</li>
          <li>PROPN: Ditis, Manes, Herculis, Herculem, Lares, Penates, Hercule, Mors, Phrygibus, Phrygum</li>
        </ul>
      </li>
      <li>IndEurO
        <ul>
          <li>ADJ: magni, saeua, Germanorum, magno, primo, primus, regium, dubius, geminum, maestus</li>
          <li>ADJ-Part: notum, aperta, diuersa, edito, fractum, secreti, secreto, solitum, stato</li>
          <li>DET: suo, suum, meum, suos, meis, cetera, cuncta, mea, meos, nostri</li>
          <li>NOUN: arma, deos, regna, caelum, fata, bella, caelo, malis, ferro, sceptra</li>
          <li>NOUN-Part: secreta, instituta, secretum</li>
          <li>NUM: uno, unum, unus, duos, uni, ducenti, duo, unius</li>
          <li>PROPN: Phoebus, Phoebi, Lycus, Bacchi, Argos, Phoebo, Rhenum, Tartari, Aegisthe, Phoebum</li>
        </ul>
      </li>
      <li>IndEurU
        <ul>
          <li>NOUN: manus, manu, domus, uultus, artus, domum, metus, manum, ortus, uultu</li>
          <li>NOUN-Inf: uisu</li>
          <li>NOUN-Part: aduentibus, flexu</li>
          <li>PROPN: Luctus, Metus</li>
        </ul>
      </li>
      <li>IndEurX
        <ul>
          <li>ADJ: maior, maius, minor, maiora, melior, sospes, grauior, grauius, maioribus, peior</li>
          <li>ADJ-Part: secretiora</li>
          <li>DET: plura, pluris, plus, plures, pluribus, compluris</li>
          <li>NOUN: caput, tellus, pater, genus, nomen, scelus, coniunx, decus, genitor, latus</li>
          <li>PRON: nemo</li>
          <li>PROPN: Titan, Theseu, Iouem, Iouis, Iuno, Cithaeron, Stygis, Agamemnon, Ioue, Ioui</li>
        </ul>
      </li>
      <li>LatA
        <ul>
          <li>VERB-Fin: precor, stetit, dedit, iuuat, stat, arbitrantur, parat, sonuit, uacat, uocat</li>
          <li>VERB-Gdv: cremandis, euocandus, laudanda, occupandum, precandum, reseranda, sanandum, temptanda</li>
          <li>VERB-Ger: imperando, pugnandi, remeandi</li>
          <li>VERB-Inf: fari, regnare, dare, praestare, agitare, celebrare, cessare, dari, errare, lacrimare</li>
          <li>VERB-Part: comitata, data, agitata, datum, daturus, dicatum, domitus, expectans, iactans, iactantem</li>
          <li>VERB-Sup: fatu</li>
        </ul>
      </li>
      <li>LatAnom
        <ul>
          <li>AUX-Fin: est, sunt, fuit, sit, es, erit, sum, fuerat, esset, foret</li>
          <li>AUX-Inf: esse, fuisse, fore</li>
          <li>PRON: te, me, tibi, se, mihi, tu, nos, ego, nobis, sibi</li>
          <li>VERB-Fin: tulit, potest, adest, redit, ferunt, ite, potuit, perit, adit, fert</li>
          <li>VERB-Ger: ferendo, pereundo</li>
          <li>VERB-Inf: fieri, ire, ferre, posse, adesse, perire, inesse, inire, referre, superesse</li>
          <li>VERB-Part: efferens, ferens, praeferens, pereunte, reditura, abeunti, ablatam, adituri, ambiens, coeuntium</li>
        </ul>
      </li>
      <li>LatE
        <ul>
          <li>VERB-Fin: iacet, licet, tenet, uidi, habet, timet, uidit, decet, iacent, latet</li>
          <li>VERB-Gdv: timendum, deflenda, habendae, mouenda, paenitendi, pudendum, timenda, timendos, tuenda</li>
          <li>VERB-Ger: nocendi</li>
          <li>VERB-Inf: uidere, deflere, lugere, tacere, timere, cohibere, flere, miscere, timeri, tueri</li>
          <li>VERB-Part: iussus, intuens, mixta, ausus, debitas, iacens, sedens, ausos, commota, commotae</li>
          <li>VERB-Sup: uisu</li>
        </ul>
      </li>
      <li>LatI
        <ul>
          <li>VERB-Fin: uenit, sensit, nescit, sensere, ueniet, aperit, ferit, nescio, scias, exoritur</li>
          <li>VERB-Gdv: ferienda, hauriendum, insaniendum</li>
          <li>VERB-Ger: ueniendi</li>
          <li>VERB-Inf: scire, moliri, aperire, audiri, nescire, audire, experiri, finire, interuenire, lenire</li>
          <li>VERB-Part: audita, ortus, permensus, redimita, sepultis, ueniente, uentum, uenturis, uinctum, adortus</li>
          <li>VERB-Sup: auditu</li>
        </ul>
      </li>
      <li>LatI2
        <ul>
          <li>VERB-Fin: fugit, fecit, refugit, patitur, cape, feci, profuge, rapuit, effugit, excipit</li>
          <li>VERB-Gdv: rapienda</li>
          <li>VERB-Inf: mori, pati, facere, accipere, aggredi, aspici, capere, commori, concutere, congredi</li>
          <li>VERB-Part: captae, concutiens, fugiens, quatiens, rapta, raptum, acceptis, captas, captus, decepto</li>
        </ul>
      </li>
      <li>LatPron
        <ul>
          <li>DET: hoc, ipse, ille, haec, quicquid, hic, ipsa, nulla, illa, ista</li>
          <li>NUM: unius, uni</li>
          <li>PRON: quae, qui, quid, quod, quis, quem, quibus, cuius, quas, quo</li>
        </ul>
      </li>
      <li>LatX
        <ul>
          <li>VERB-Fin: cecidit, petit, agunt, sequitur, redde, agit, furit, gerit, parce, petunt</li>
          <li>VERB-Gdv: metuenda, agendum, colenda, colendos, extrahendus, perdenda</li>
          <li>VERB-Ger: soluendo</li>
          <li>VERB-Inf: uinci, loqui, nosse, sequi, flectere, reuerti, cernere, credere, iungi, meminisse</li>
          <li>VERB-Part: gerens, furens, uicta, iuncta, relicto, uictus, fusus, genitus, metuens, natus</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>InflClass[nominal]</a>
    <ul>
      <li>Ind
        <ul>
          <li>AUX-Inf: esse, fore</li>
          <li>VERB-Inf: mori, facere, pati, uidere, uinci, fieri, loqui, sequi, fari, ferre</li>
        </ul>
      </li>
      <li>IndEurA
        <ul>
          <li>VERB-Gdv: metuenda, colenda, cremandis, habendae, perdenda, rapienda, reseranda, temptanda, timenda, tuenda</li>
          <li>VERB-Part: uicta, comitata, iuncta, rupta, captae, debitas, perempta, uersa, captas, coacta</li>
        </ul>
      </li>
      <li>IndEurA,IndEurO
        <ul>
          <li>VERB-Part: depositis, natis, obductis, sepultis, uenturis</li>
        </ul>
      </li>
      <li>IndEurI
        <ul>
          <li>VERB-Part: gerens, furens, intuens, metuens, petens, trahens, cadens, cadentes, cadentis, concutiens</li>
        </ul>
      </li>
      <li>IndEurO
        <ul>
          <li>VERB-Gdv: timendum, agendum, colendos, deflenda, euocandus, extrahendus, ferienda, hauriendum, insaniendum, laudanda</li>
          <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, pugnandi, remeandi, soluendo, ueniendi</li>
          <li>VERB-Part: iussus, relicto, uictus, fusus, genitus, natus, peremptus, positus, rupto, ausus</li>
        </ul>
      </li>
      <li>IndEurU
        <ul>
          <li>VERB-Sup: fatu, auditu, uisu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Ast
        <ul>
          <li>PROPN: Arctos, Hesperum, Luna, Aurora, Auroram, Bootes, Lucifer, Luciferi, Orion, Perseus</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: Thebana, Argolicas, Delphico, Gnosius, Libycus, Stygias, Stygios, Thracis, Actaea, Aegaeo</li>
          <li>NOUN: Oceano, Oceanus, Oceanum, Occidentis, Oceani, Oriens, Orientis</li>
          <li>NOUN-Part: Occidentis, Oriens, Orientis</li>
          <li>PROPN: Germaniae, Troia, Argos, Cithaeron, Rhenum, Stygis, Tartari, Thebis, Mycenas, Styga</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>ADJ: Herculea, Herculeis, Cadmea, Cadmeis, Herculeae, Herculeas, Herculeo, Pelopia, Agamemnonias, Amphionios</li>
          <li>NOUN: hydrae</li>
          <li>PROPN: Alcidae, Herculis, Lycus, Theseu, Alcides, Herculem, Agamemnon, Alcide, Aegisthe, Eurystheus</li>
        </ul>
      </li>
      <li>Met
        <ul>
          <li>NOUN: coris, notis</li>
          <li>PROPN: Auster, Austro, Notus, Zephyri, Aquilo, Boreae, Boreas, Corus, Euro, Eurus</li>
        </ul>
      </li>
      <li>Nat
        <ul>
          <li>ADJ: Germanorum, Germanos, Germani, Gallorum, Parthi, Romana, Romanis, Gallica, Gallos, Germanis</li>
          <li>NOUN: Sueborum, Chattos, Chattorum, Quadi, Sarmatis, Angriuarios, Buri, Chamauos, Chattis, Chaucorum</li>
          <li>PROPN: Danaum, Phrygibus, Phrygum, Danais, Iliades, Indos, Troades, Aethiopas, Amazon, Arabas</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>ADJ: Phoebea, Herceum, Cyclopia, Eoo, Gorgoneo, Phoebei, Phoebeos, Zminthea</li>
          <li>NOUN: Penates, Bacchis, Penatium</li>
          <li>PROPN: Phoebus, Ditis, Manes, Phoebi, Titan, Fortuna, Bacchi, Iouis, Iuno, Iouem</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: Carbone, Aurelio, Caepione, Caesari, Caesaris, Cassio, Druso, Drusus, Iulius, Mallio</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Word
        <ul>
          <li>ADJ: singulis, centeni, primi, primus, singulos, prima, primum, quadragesimum, septimum, sescentesimum</li>
          <li>DET: unum, uni, uno, una, unam, unus</li>
          <li>NUM: tris, centum, decem, ducenti, milia, quinque, sex, sexaginta</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumValue</a>
    <ul>
      <li>1
        <ul>
          <li>DET: unum, uni, uno, una, unam, unus</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Emp
        <ul>
          <li>PART: o</li>
        </ul>
      </li>
      <li>Int
        <ul>
          <li>PART: ne, an, num</li>
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
          <li>DET: nostra, mea, meis, meum, meos, nostri, nostris, meo, nostro, nostrum</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>DET: tua, tuam, tuum, tui, tuis, tuos, tuus, tuae, tuo, tuas</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>DET: sua, suis, suo, suum, suos, suas, suae, suam, sui, suorum</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Proper</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Maximo</li>
          <li>NOUN: Oceano, Oceanus, Oceanum, Oceani, Oriens</li>
          <li>NOUN-Part: Oriens</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: sum.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: sum.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: sum.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-Acc (3)</li>
      <li>VERB-Fin--NOUN-Nom (1165)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Nom (170)</li>
      <li>VERB-Gdv--NOUN-Nom (3)</li>
      <li>VERB-Gdv--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Acc (23)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (15)</li>
      <li>VERB-Part--NOUN-Abl (21)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
      <li>VERB-Part--NOUN-Nom (12)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (8)</li>
      <li>VERB-Fin--NOUN-Abl (1)</li>
      <li>VERB-Fin--NOUN-Acc (1373)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(in) (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (6)</li>
      <li>VERB-Fin--PRON (9)</li>
      <li>VERB-Fin--PRON-Acc (232)</li>
      <li>VERB-Fin--PRON-Acc-ADP(contra) (1)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--NOUN-Acc (170)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(per) (1)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (11)</li>
      <li>VERB-Part--NOUN-Abl (1)</li>
      <li>VERB-Part--NOUN-Acc (183)</li>
      <li>VERB-Part--PRON (3)</li>
      <li>VERB-Part--PRON-Acc (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 24 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: absoluo se, ago semet, capio sese, celo semet, credo se, damno se, defleo suos, do se, explico se, exsoluo se, frango se, iacio se, impingo se, induo semet, miror se, offero se, premo se, puto se, retineo se, scindo se, spargo se, tego se, uerto se, uinco se</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 30 relation subtypes: <a>acl:relcl</a>, <a>advcl:abs</a>, <a>advcl:cmp</a>, <a>advcl:pred</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>advmod:lmod</a>, <a>advmod:neg</a>, <a>advmod:tmod</a>, <a>aux:pass</a>, <a>ccomp:relcl</a>, <a>ccomp:reported</a>, <a>conj:expl</a>, <a>csubj:pass</a>, <a>csubj:relcl</a>, <a>det:numgov</a>, <a>dislocated:csubj</a>, <a>dislocated:nsubj</a>, <a>flat:gov</a>, <a>flat:name</a>, <a>flat:redup</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:cmp</a>, <a>obl:lmod</a>, <a>obl:tmod</a>, <a>orphan:missing</a>, <a>parataxis:reporting</a>, <a>xcomp:relcl</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>dislocated</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>punct</a>, <a>dep</a></li>
</ul>
