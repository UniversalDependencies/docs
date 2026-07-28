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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udla_circse218)<br />
Download all treebanks: [UD 2.18](/#download)

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




This treebank repository is a work in progress collective endeavour. Presently, it contains the following annotated texts: Seneca *Hercules Furens*, Seneca *Agamemnon*, Tacitus *Germania*, Seneca *Oedipus*, Seneca *Phoenissae*.

#### Seneca *Hercules Furens*

*Hercules Furens* is a tragedy written by Seneca the younger in 1st century CE. The source text was received with tokenisation, and annotation with respect to lemmatisation, POS tagging, and morphological features from the Opera Latina corpus built by the [LASLA](http://web.philo.ulg.ac.be/lasla/) laboratory in Liège.
In few cases, the [received annotation](http://github.com/CIRCSE/LASLA) with regard to POS tag and morphological annotation was modified during the syntactic annotation; deviations from the received annotation are detailed in the file [SenecaYounger_HercF_LASLA_CIRCSE](https://github.com/CIRCSE/UD_Latin-CIRCSE/blob/main/documentation/SenecaYounger_HercF_LASLA_CIRCSE.md).
The syntactic annotation was performed manually at CIRCSE, and follows the UD scheme.
The text (7714 tokens, 555 sentences) was enhanced with the annotation of the speakers to whom each sentence is attributed. This annotation, performed manually at CIRCSE, is formatted as a comment in the conllu file following the comment line reporting the text of the sentence, as exemplified in what follows:

## Acknowledgments

The annotation of Seneca *Hercules Furens* and *Agamemnon* has been conducted in the framework of the _LiLa: Linking Latin_ project. LiLa has received funding from the European Research Council (ERC) under the European Union’s Horizon 2020 research and innovation programme – Grant Agreement No. 769994. Warmful thanks to Federica Gamba and Flavio Massimiliano Cecchini for their support and precious advices during the annotation process.
The maintenance of the treebank benefits from the partecipation to [UniDive COST Action CA21167](https://unidive.lisn.upsaclay.fr/).



# Statistics of UD Latin CIRCSE

## POS Tags

[ADJ](la_circse-pos-ADJ.html) – [ADP](la_circse-pos-ADP.html) – [ADV](la_circse-pos-ADV.html) – [AUX](la_circse-pos-AUX.html) – [CCONJ](la_circse-pos-CCONJ.html) – [DET](la_circse-pos-DET.html) – [INTJ](la_circse-pos-INTJ.html) – [NOUN](la_circse-pos-NOUN.html) – [NUM](la_circse-pos-NUM.html) – [PART](la_circse-pos-PART.html) – [PRON](la_circse-pos-PRON.html) – [PROPN](la_circse-pos-PROPN.html) – [SCONJ](la_circse-pos-SCONJ.html) – [VERB](la_circse-pos-VERB.html)

## Features

[AdpType](la_circse-feat-AdpType.html) – [AdvType](la_circse-feat-AdvType.html) – [Aspect](la_circse-feat-Aspect.html) – [Case](la_circse-feat-Case.html) – [Compound](la_circse-feat-Compound.html) – [Degree](la_circse-feat-Degree.html) – [ExtPos](la_circse-feat-ExtPos.html) – [Form](la_circse-feat-Form.html) – [Gender](la_circse-feat-Gender.html) – [InflClass](la_circse-feat-InflClass.html) – [InflClass[nominal]](la_circse-feat-InflClass-nominal.html) – [Mood](la_circse-feat-Mood.html) – [NameType](la_circse-feat-NameType.html) – [Number](la_circse-feat-Number.html) – [Number[psor]](la_circse-feat-Number-psor.html) – [NumForm](la_circse-feat-NumForm.html) – [NumType](la_circse-feat-NumType.html) – [NumValue](la_circse-feat-NumValue.html) – [PartType](la_circse-feat-PartType.html) – [Person](la_circse-feat-Person.html) – [Person[psor]](la_circse-feat-Person-psor.html) – [Polarity](la_circse-feat-Polarity.html) – [Poss](la_circse-feat-Poss.html) – [PronType](la_circse-feat-PronType.html) – [Proper](la_circse-feat-Proper.html) – [Reflex](la_circse-feat-Reflex.html) – [Tense](la_circse-feat-Tense.html) – [Variant](la_circse-feat-Variant.html) – [VerbForm](la_circse-feat-VerbForm.html) – [Voice](la_circse-feat-Voice.html)

## Relations

[acl](la_circse-dep-acl.html) – [acl:relcl](la_circse-dep-acl-relcl.html) – [advcl](la_circse-dep-advcl.html) – [advcl:abs](la_circse-dep-advcl-abs.html) – [advcl:cmp](la_circse-dep-advcl-cmp.html) – [advcl:pred](la_circse-dep-advcl-pred.html) – [advcl:relcl](la_circse-dep-advcl-relcl.html) – [advmod](la_circse-dep-advmod.html) – [advmod:emph](la_circse-dep-advmod-emph.html) – [advmod:lmod](la_circse-dep-advmod-lmod.html) – [advmod:neg](la_circse-dep-advmod-neg.html) – [advmod:tmod](la_circse-dep-advmod-tmod.html) – [amod](la_circse-dep-amod.html) – [appos](la_circse-dep-appos.html) – [aux](la_circse-dep-aux.html) – [aux:pass](la_circse-dep-aux-pass.html) – [case](la_circse-dep-case.html) – [cc](la_circse-dep-cc.html) – [ccomp](la_circse-dep-ccomp.html) – [ccomp:relcl](la_circse-dep-ccomp-relcl.html) – [ccomp:reported](la_circse-dep-ccomp-reported.html) – [conj](la_circse-dep-conj.html) – [conj:expl](la_circse-dep-conj-expl.html) – [cop](la_circse-dep-cop.html) – [csubj](la_circse-dep-csubj.html) – [csubj:pass](la_circse-dep-csubj-pass.html) – [csubj:relcl](la_circse-dep-csubj-relcl.html) – [det](la_circse-dep-det.html) – [det:numgov](la_circse-dep-det-numgov.html) – [discourse](la_circse-dep-discourse.html) – [dislocated](la_circse-dep-dislocated.html) – [dislocated:csubj](la_circse-dep-dislocated-csubj.html) – [dislocated:nsubj](la_circse-dep-dislocated-nsubj.html) – [fixed](la_circse-dep-fixed.html) – [flat](la_circse-dep-flat.html) – [flat:gov](la_circse-dep-flat-gov.html) – [flat:name](la_circse-dep-flat-name.html) – [flat:redup](la_circse-dep-flat-redup.html) – [iobj](la_circse-dep-iobj.html) – [mark](la_circse-dep-mark.html) – [nmod](la_circse-dep-nmod.html) – [nsubj](la_circse-dep-nsubj.html) – [nsubj:pass](la_circse-dep-nsubj-pass.html) – [nummod](la_circse-dep-nummod.html) – [obj](la_circse-dep-obj.html) – [obl](la_circse-dep-obl.html) – [obl:agent](la_circse-dep-obl-agent.html) – [obl:arg](la_circse-dep-obl-arg.html) – [obl:cmp](la_circse-dep-obl-cmp.html) – [obl:lmod](la_circse-dep-obl-lmod.html) – [obl:tmod](la_circse-dep-obl-tmod.html) – [orphan](la_circse-dep-orphan.html) – [orphan:missing](la_circse-dep-orphan-missing.html) – [parataxis](la_circse-dep-parataxis.html) – [parataxis:reporting](la_circse-dep-parataxis-reporting.html) – [root](la_circse-dep-root.html) – [vocative](la_circse-dep-vocative.html) – [xcomp](la_circse-dep-xcomp.html) – [xcomp:relcl](la_circse-dep-xcomp-relcl.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1972 sentences, 28287 tokens and 29055 syntactic words.</li>
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
<li>This corpus contains 768 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 610 types of multi-word tokens. Examples: tuque, quaeque, tecum, quique, mecum, eoque, secum, iamque, numquid, quodque, seque, teque, aperitque, cumque, eosque, etsi, fluctusque, geminumque, itane, magisque, meque, noctemque, perque, plusque, quidue, saxaque, septemque, siue, suisque, tenetque, uirtusque, uultusque, acieque, animoque, auidumque, caelumque, dominumque, eaque, egone, estne, ferrumque, flammasque, formasque, frameaque, fratresque, gemuitque, genetrixque, habitusque, idemque, ideoque.</li>
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
<li>This corpus contains 16 lemmas tagged as pronouns (PRON): aliquis, ego, is, nemo, nihil, nonnihil, nos, quantulum, quantum, qui, quis, quisquam, quisquis, sui, tu, uos</li>
</ul>

<ul>
<li>This corpus contains 50 lemmas tagged as determiners (DET): alius, alter, ambo, ceterus, complures, cunctus, hic, idem, ille, ipse, is, iste, istic, mei, meus, multum, multus, noster, nostri, nullus, omnis, paucus, plerusque, qualis, quantum, quantus, quicumque, quidam, quilibet, quis, quisque, quisquis, quot, quotus, solus, sui, suus, talis, tantum, tantus, tot, totidem, totus, tui, tuus, uester, ullus, unus, uter, uterque</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as PRON and sometimes as DET: is, quantum, quis, quisquis, sui</li>
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
    <li>AUX: est, sunt, es, fuit, sit, sum, erit, esset, foret, fuerat</li>
    <li>VERB: potest, precor, uenit, tulit, dedit, licet, iacet, iuuat, stetit, tenet</li>
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
    <li>VERB: ferendo, imperando, nocendi, pereundo, petendo, pugnandi, remeandi, soluendo, ueniendi, uiuendi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: esse, fuisse, fore</li>
    <li>NOUN: uisu</li>
    <li>VERB: mori, facere, pati, uidere, uinci, dare, ire, sequi, ferre, fieri</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: notum, aperta, detecta, diuersa, edito, fractum, futurae, nota, notam, olentem</li>
    <li>NOUN: occidentem, secreta, Occidentis, Oriens, Orientis, aduentibus, flexu, instituta, nupta, secretum</li>
    <li>VERB: gerens, iussus, furens, uicta, trahens, comitata, intuens, iuncta, mixta, relicto</li>
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
      <li>ADJ: alta, magna, prima, saeua, longa, noua, atra, graues, misera, tristis</li>
      <li>ADJ-Part: detecta, futurae, nota, notam, olentem, paratam, solita</li>
      <li>DET: ipsa, nulla, haec, hanc, illa, ista, nostra, ulla, omnis, alia</li>
      <li>NOUN: manus, manu, tellus, domus, pars, turba, dextra, manum, poenas, uia</li>
      <li>NOUN-Part: nupta</li>
      <li>NUM: una, duas, tris, unius</li>
      <li>PRON: quae, quas, quam, qua, ea, quibus, aliqua, eae, eas, eam</li>
      <li>PROPN: Fortuna, Germaniae, Thebis, Troia, Iuno, Stygis, Fortunae, Mycenas, Styga, Thebae</li>
      <li>VERB-Gdv: metuenda, colenda, cremandis, frangenda, habenda, habendae, perdenda, rapienda, reseranda, temptanda</li>
      <li>VERB-Part: comitata, rupta, uicta, iuncta, captae, debitas, decreta, mixta, perempta, trementes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADJ: fortem, nocentes, prior, segnis, leuis, parem, Thespias, altior, consortem, exsanguis</li>
      <li>DET: quisquis, omnis, qualis, omnes, quisque, nostris, plures, quales, suis</li>
      <li>NOUN: diem, caelitum, comes, dies, duce, hostis, coniunx, exul, hostem, sanguine</li>
      <li>PRON: quis, aliquis, quisquam, quibus</li>
      <li>PROPN: Manes, Phrygum, Phrygibus, Troas, Abydo, Arabum, Araxen, Ismenos, Parnasos, Phocidos</li>
      <li>VERB-Part: abnuentem, abnuentes, cupientem, cupientes, dominantem, fluentes, fodientem, loquentem, manantes, metuentem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc,Neut
    <ul>
      <li>ADJ: nocens, demens, innocens, libens, amens, infelix, miseris, felix, fessis, furenti</li>
      <li>DET: his, suis, huius, illis, omnibus, aliis, illi, alterius, ipsis, meis</li>
      <li>NOUN: senibus</li>
      <li>NUM: uni</li>
      <li>PRON: cuius, cui, quibus, cuiquam, quis</li>
      <li>PROPN: Creo, Eryx, Iuno, Lucifer, Mors, Nereus</li>
      <li>VERB-Part: iubente, metuens, petens, efferens, fugiens, furens, iacens, mouens, timens, agens</li>
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
      <li>ADJ: ferox, primus, saeuus, Germanorum, dubius, grauis, magni, truces, fessus, maestus</li>
      <li>ADJ-Part: notum, secreti, secreto</li>
      <li>DET: ipse, ille, hic, hunc, meos, nullus, suos, illum, iste, illos</li>
      <li>NOUN: deos, pater, uultus, genitor, diem, animus, artus, metus, uictor, loco</li>
      <li>NOUN-Inf: uisu</li>
      <li>NOUN-Part: occidentem, Occidentis, Oriens, Orientis, aduentibus, flexu</li>
      <li>NUM: uno, duos, unus, ducenti, tribus, tris, uni, unum</li>
      <li>PRON: qui, quem, quis, quos, quo, eos, quibus, eius, aliquis, cui</li>
      <li>PROPN: Phoebus, Ditis, Phoebi, Herculis, Titan, Lycus, Penates, Theseu, Alcides, Bacchi</li>
      <li>VERB-Gdv: colendos, euocandus, extrahendus, hauriendum, paenitendi, timendos, timendum</li>
      <li>VERB-Part: iussus, gerens, furens, uictus, fusus, genitus, natus, peremptus, positus, trahens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>ADJ: nouum, obuium, tuto, Ausonio, Icario, Ionii, Thracis, abditum, afflictum, cristati</li>
      <li>DET: hoc, illo, utrumque, tanti, alterum, sui, horum, idem, ipsum, meorum</li>
      <li>NOUN: parens, sacerdos</li>
      <li>NUM: duo, duobus</li>
      <li>PRON: quo, quantulum</li>
      <li>PROPN: Argos</li>
      <li>VERB-Gdv: timendum</li>
      <li>VERB-Part: uinctum, abstrusum, conditum, conuictum, datum, morituro, pensi, perempti, praescriptum, pulsum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: maius, saeua, graue, triste, regium, geminum, dira, noua, altum, durum</li>
      <li>ADJ-Part: notum, aperta, diuersa, edito, fractum, secretiora, solitum, stato</li>
      <li>DET: hoc, quicquid, omne, haec, omnia, cuncta, suo, aliud, ista, mea</li>
      <li>NOUN: caput, arma, regna, scelus, caelum, bella, fata, mare, nefas, malis</li>
      <li>NOUN-Part: secreta, instituta, secretum</li>
      <li>NUM: unum, uno, tria, unius, milia</li>
      <li>PRON: quod, quid, quae, id, aliquid, aliquod, quicquam, quo, quorum, ea</li>
      <li>PROPN: Argos, Cithaeron, Ilium, Acheron, Actaeon, Amphion, Ilio, Pelion, Amazon, Asciburgium</li>
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
      <li>ADJ: graues, saeua, truces, Germanorum, altis, leues, Germanos, dira, nocentes, noua</li>
      <li>ADJ-Part: aperta, diuersa, secreti, secretiora</li>
      <li>AUX-Fin: sunt, fuerant, sint, erant, erimus, estis, fuerunt, fuissent</li>
      <li>DET: suis, meis, haec, omnium, omnis, omnes, omnibus, meos, omnia, suos</li>
      <li>NOUN: arma, manus, regna, deos, bella, fata, malis, tela, poenas, sceptra</li>
      <li>NOUN-Part: secreta, aduentibus, instituta</li>
      <li>NUM: duos, mille, septem, decem, duas, tria, tris, centum, ducenti, duo</li>
      <li>PRON: quae, quas, quibus, quos, nos, qui, nobis, uos, eos, quorum</li>
      <li>PROPN: Manes, Penates, Thebis, Lares, Mycenas, Thebae, Thebas, Danaum, Gallias, Phrygibus</li>
      <li>VERB-Fin: date, ferunt, agunt, iacent, petunt, arbitrantur, habent, ite, tenent, colunt</li>
      <li>VERB-Gdv: colendos, cremandis, deflenda, ferienda, laudanda, metuenda, mouenda, timendos</li>
      <li>VERB-Part: cadentes, data, debitas, discreti, trementes, uictos, acceptis, agitata, ausos, captas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: alta, maius, grauis, ferox, magna, prima, tristis, graui, magni, magno</li>
      <li>ADJ-Part: notum, detecta, edito, fractum, futurae, nota, notam, olentem, paratam, secreto</li>
      <li>AUX-Fin: est, es, fuit, sit, sum, erit, esset, foret, fuerat, fuerit</li>
      <li>DET: hoc, ipse, ille, quicquid, hic, omne, hunc, ipsa, nulla, haec</li>
      <li>NOUN: caput, manu, diem, pater, tellus, domus, scelus, caelum, parens, mare</li>
      <li>NOUN-Inf: uisu</li>
      <li>NOUN-Part: occidentem, Occidentis, Oriens, Orientis, flexu, nupta, secretum</li>
      <li>NUM: una, uno, unum, unus, uni, unius</li>
      <li>PRON: te, me, qui, quod, quid, tibi, quae, mihi, se, tu</li>
      <li>PROPN: Phoebus, Ditis, Fortuna, Germaniae, Phoebi, Alcidae, Cithaeron, Herculis, Titan, Lycus</li>
      <li>VERB-Fin: potest, precor, uenit, tulit, dedit, licet, iacet, iuuat, stetit, tenet</li>
      <li>VERB-Gdv: timendum, agendum, metuenda, colenda, euocandus, extrahendus, frangenda, habenda, habendae, hauriendum</li>
      <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, petendo, pugnandi, remeandi, soluendo, ueniendi, uiuendi</li>
      <li>VERB-Part: gerens, iussus, furens, trahens, comitata, intuens, relicto, rupta, uicta, uictus</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: magno, graui, longo, primo, altis, leui, alto, medio, alta, gemino</li>
      <li>ADJ-Part: edito, secreto, solita, stato</li>
      <li>DET: hoc, ipso, illo, nullo, omni, suis, toto, meis, sua, tantis</li>
      <li>NOUN: manu, ferro, sanguine, caelo, ore, dextra, loco, armis, caede, regno</li>
      <li>NOUN-Inf: uisu</li>
      <li>NOUN-Part: aduentibus, flexu</li>
      <li>NUM: uno, una, tribus</li>
      <li>PRON: te, me, quo, qua, se, quibus, eo, nobis, aliqua, aliquo</li>
      <li>PROPN: Ioue, Erebo, Hercule, Lare, Marte, Thebis, Uenere, Alcide, Alcmena, Austro</li>
      <li>VERB-Ger: ferendo, imperando, pereundo, petendo</li>
      <li>VERB-Part: relicto, rupta, rupto, caeso, iubente, acceptis, acto, congesto, deiecto, discussa</li>
      <li>VERB-Sup: fatu, auditu, uisu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: graues, maius, regium, saeua, nouum, Germanos, certum, nobilem, nocentes, clarum</li>
      <li>ADJ-Part: aperta, notam, notum, olentem, paratam, secretiora, solitum</li>
      <li>DET: hoc, hunc, quicquid, hanc, omne, omnis, haec, meos, suos, suum</li>
      <li>NOUN: caput, manus, deos, diem, arma, regna, caelum, bella, manum, poenas</li>
      <li>NOUN-Part: occidentem, secreta, instituta, secretum</li>
      <li>NUM: duos, unum, duas, tris, milia, tria</li>
      <li>PRON: te, me, quod, quid, se, quem, quae, quas, quam, quos</li>
      <li>PROPN: Manes, Herculem, Iouem, Penates, Rhenum, Lares, Mycenas, Phoebum, Styga, Thebas</li>
      <li>VERB-Gdv: timendum, colendos, deflenda, hauriendum, laudanda, metuenda, timendos</li>
      <li>VERB-Part: cadentes, debitas, dominantem, editum, raptum, uictos, uinctum, abstrusum, ausos, captas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: fessis, miseris, Cadmeis, Herculeo, fortibus, furenti, iratae, nouis, saeuis, singulis</li>
      <li>DET: meis, cuique, omnibus, suis, nulli, tuis, suo, illi, illis, nostris</li>
      <li>NOUN: malis, matri, patri, regi, rebus, manibus, populis, superis, uiro, uulneri</li>
      <li>NUM: uni, duobus</li>
      <li>PRON: tibi, mihi, cui, quibus, sibi, nobis, uobis, cuiquam, quis, tibimet</li>
      <li>PROPN: Ioui, Phoebo, Thebis, Alcidae, Baccho, Fortunae, Oceano, Achilli, Danais, Diti</li>
      <li>VERB-Gdv: cremandis, habendae</li>
      <li>VERB-Ger: soluendo</li>
      <li>VERB-Part: petenti, pugnanti, uicto, abeunti, aestimanti, agendis, bellantibus, carenti, collatis, concupiscentibus</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: magni, Germanorum, noui, Tonantis, atri, irati, Gallorum, alieni, audacis, ignotae</li>
      <li>ADJ-Part: futurae</li>
      <li>DET: omnium, mei, nostrae, nostri, tui, huius, sui, tanti, suae, meorum</li>
      <li>NOUN: patris, regni, mundi, regis, deorum, domus, parentis, gentis, lucis, maris</li>
      <li>NOUN-Part: Occidentis, Orientis</li>
      <li>NUM: unius</li>
      <li>PRON: cuius, sui, eius, quorum, tui, eorum, mei, nostri, earum</li>
      <li>PROPN: Ditis, Germaniae, Phoebi, Herculis, Bacchi, Iouis, Alcidae, Stygis, Tartari, Cadmi</li>
      <li>VERB-Gdv: paenitendi</li>
      <li>VERB-Ger: nocendi, pugnandi, remeandi, ueniendi, uiuendi</li>
      <li>VERB-Part: cadentis, captae, aedificandi, clausi, coercendi, coeuntium, dati, deiecti, deuicti, electorum</li>
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
      <li>ADJ: grauis, prima, alta, tristis, maior, saeua, felix, ferox, nocens, noua</li>
      <li>ADJ-Part: notum, detecta, diuersa, fractum, nota, secreti</li>
      <li>DET: ipse, ille, hoc, hic, haec, nulla, ipsa, quisquis, omnis, ista</li>
      <li>NOUN: tellus, pars, pater, animus, turba, fides, parens, arma, uia, mater</li>
      <li>NOUN-Part: Oriens, nupta</li>
      <li>NUM: una, unus, ducenti, duo, tria, unum</li>
      <li>PRON: qui, quae, quis, quod, quid, ego, tu, nemo, id, aliquis</li>
      <li>PROPN: Phoebus, Lycus, Titan, Alcides, Cithaeron, Fortuna, Troia, Agamemnon, Thebae, Eurystheus</li>
      <li>VERB-Gdv: agendum, metuenda, colenda, euocandus, extrahendus, ferienda, frangenda, habenda, insaniendum, mouenda</li>
      <li>VERB-Part: gerens, iussus, furens, uicta, comitata, intuens, iuncta, trahens, uictus, fugiens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: magnanime, cara, consors, demens, dira, fallax, ferox, fortes, fortis, magne</li>
      <li>DET: ipsa, ipsae, ipse, nulla, talis</li>
      <li>NOUN: genitor, parens, anime, pater, coniunx, nate, famuli, rector, regina, uirgo</li>
      <li>PRON: tu, uos</li>
      <li>PROPN: Theseu, Phoebe, Aegisthe, Iuno, Alcide, Fortuna, Argos, Bacche, Cassandra, Cithaeron</li>
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
      <li>ADJ: prima, primus, primo, maximum, proximi, extremum, summa, summo, imis, imo</li>
      <li>ADV: maxime, primum, minime, primo, latissime, optime, optume, plurimum</li>
      <li>DET: plurimis, paucissima, plurimae, plurimi, plurimum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: maius, maior, melior, minor, prior, maiora, grauius, grauior, maioribus, peior</li>
      <li>ADJ-Part: secretiora</li>
      <li>ADV: magis, potius, melius, minus, propius, saepius, plus, prius, amplius, ocius</li>
      <li>DET: plus, plura, pluris, plures, pluribus</li>
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
      <li>ADJ: saeua, alta, magna, noua, grauis, graues, longa, tristis, dira, ferox</li>
      <li>ADV: iam, nunc, hinc, semper, et, huc, sic, tandem, tamen, retro</li>
      <li>DET: cuncta, multo, cunctos, multa, cunctis, multis, pauca, cuncti, multos</li>
      <li>VERB-Gdv: metuenda, timendum, agendum, colenda, colendos, cremandis, deflenda, euocandus, extrahendus, ferienda</li>
      <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, petendo, pugnandi, remeandi, soluendo, ueniendi, uiuendi</li>
      <li>VERB-Part: gerens, iussus, furens, uicta, trahens, comitata, intuens, iuncta, mixta, relicto</li>
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
      <li>PART: non, an, haut, ne, haud, quin, num</li>
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
      <li>PROPN: Cithaeron, Titan, Theseu, Alcides, Argos, Agamemnon, Styga, Eurystheus, Pallas, Achilles</li>
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
      <li>AUX-Fin: est, sunt, es, sit, sum, erit, esset, foret, sint, erant</li>
      <li>AUX-Inf: esse, fore</li>
      <li>VERB-Fin: potest, precor, licet, iacet, uenit, iuuat, tenet, adest, potes, redde</li>
      <li>VERB-Inf: mori, facere, pati, uidere, uinci, dare, ire, sequi, ferre, fieri</li>
      <li>VERB-Part: gerens, furens, trahens, intuens, fugiens, iacens, metuens, petens, agens, cadens</li>
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
      <li>AUX-Fin: fuit, fuerat, fuerit, fuerant, fuerunt, fui, fuissent</li>
      <li>AUX-Inf: fuisse</li>
      <li>VERB-Fin: tulit, dedit, stetit, uidi, cecidit, uidit, fecit, potuit, sensit, abstulit</li>
      <li>VERB-Inf: nosse, meminisse, uixisse, addidisse, adisse, arsisse, cecidisse, dixisse, errasse, eualuisse</li>
      <li>VERB-Part: iussus, uicta, comitata, iuncta, mixta, relicto, rupta, uictus, data, fusus</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>VERB-Gdv: metuenda, timendum, agendum, colenda, colendos, cremandis, deflenda, euocandus, extrahendus, ferienda</li>
      <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, petendo, pugnandi, remeandi, soluendo, ueniendi, uiuendi</li>
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
      <li>VERB-Fin: redde, date, parce, ite, da, ede, effare, fare, perge, pete</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: est, sunt, es, fuit, sum, erit, fuerat, fuerant, erant, erimus</li>
      <li>VERB-Fin: potest, precor, uenit, tulit, dedit, licet, iacet, iuuat, stetit, tenet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sit, esset, foret, fuerit, sint, essem, fores, fuissent, sim, sis</li>
      <li>VERB-Fin: liceat, ferat, petat, ducat, eat, cadat, fiat, pateat, reddat, scias</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: erit, foret, erimus, eris, fores, fuerit</li>
      <li>VERB-Fin: dabit, ibo, feret, feram, poterit, ueniet, uolet, faciet, fiet, petet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fuit, esset, fuerit, erant, essem, fuerat, fuerunt, fui, fuissent</li>
      <li>VERB-Fin: tulit, dedit, stetit, uidi, cecidit, uidit, fecit, potuit, sensit, abstulit</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX-Fin: fuerant, fuerat</li>
      <li>VERB-Fin: armasset, constiterant, creueras, fecerat, fefellissem, flexerat, fouerat, fugeram, fugissem, gesseras</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: est, sunt, es, sit, sum, fuit, sint, estis, sim, sis</li>
      <li>VERB-Fin: potest, precor, licet, iacet, uenit, iuuat, tenet, adest, potes, redde</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Fin: potest, uenit, tulit, dedit, licet, iacet, iuuat, stetit, tenet, uidi</li>
      <li>VERB-Inf: facere, uidere, dare, ire, ferre, fieri, nosse, perire, regnare, timere</li>
      <li>VERB-Part: gerens, furens, trahens, intuens, fugiens, iacens, metuens, petens, agens, cadens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: precor, sequitur, arbitrantur, effare, fare, sequor, datur, patitur, fruor, loquar</li>
      <li>VERB-Gdv: metuenda, timendum, agendum, colenda, colendos, cremandis, deflenda, euocandus, extrahendus, ferienda</li>
      <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, petendo, pugnandi, remeandi, soluendo, ueniendi, uiuendi</li>
      <li>VERB-Inf: mori, pati, uinci, sequi, loqui, fari, moliri, reuerti, iungi, nasci</li>
      <li>VERB-Part: iussus, uicta, comitata, iuncta, mixta, relicto, rupta, uictus, data, fusus</li>
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
      <li>DET: cetera, sola, solus, alia, aliis, aliud, utrumque, alter, solis, solum</li>
      <li>SCONJ: utrum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: ita, sic, tam, tamen, tantum, hinc, tunc, inde, hic, illic</li>
      <li>DET: hoc, ipse, ille, haec, hic, ipsa, hunc, ista, illa, hanc</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: aliquanto, quondam</li>
      <li>DET: ulla, alia, nulla, multo, unum, nullis, aliud, multa, uterque, nullo</li>
      <li>PRON: aliquid, quid, aliquis, quod, aliquod, nemo, quicquam, quisquam, aliqua, cuiquam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: quid, cur, quo, ubi, unde, quam, ut, quare, utrumne, quando</li>
      <li>DET: quota, quanta, quale, qualis, quanto, quantum, quot, uter, utras, utrum</li>
      <li>PRON: quid, quis, quae, quem, cui, quo, quod, quas, qua, quam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: nulla, nullus, nullo, nullum, nulli, nullas, nullam, nullos</li>
      <li>PRON: nemo, nil, nihil</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: nostra, suis, mea, meis, sua, tua, meum, suo, meos, suos</li>
      <li>PRON: te, me, tibi, mihi, se, tu, ego, nos, id, sibi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: ubi, quam, qua, unde, quo, quando, quanto, quotiens, quantum, quippe</li>
      <li>DET: quicquid, quisquis, qualis, quodcumque, quale, quantum, quantus, quemcumque, quicumque, quo</li>
      <li>PART: quin</li>
      <li>PRON: qui, quae, quod, quem, cuius, quas, quibus, quos, quo, quam</li>
      <li>SCONJ: ut, quam, qua, quod, quo, quia, cum, quamquam, tamquam, ubi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: omnis, omne, omnium, omnes, omnibus, omni, omnia, tota, cuncta, quisque</li>
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
      <li>DET: multo, unum, multa, plus, quota, pauca, plura, plurimis, pluris, quanta</li>
      <li>NUM: una, uno, unum, decem, duos, mille, septem, unus, uni, unius</li>
      <li>PRON: quantulum, quantum</li>
      <li>SCONJ: quantum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>ADJ: singulis, bina, terna, centeni, seno, septena, singulos, binas, binos, centena</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADJ: duplices, duplici, simplex, triplici</li>
      <li>ADV: bis, ter, semel, quotiens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: prima, primus, primo, prior, primum, decima, primi, primos, tertiae, tertius</li>
      <li>ADV: prius, primum, primo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: nostra, suis, mea, meis, sua, tua, meum, suo, meos, suos</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: suis, sua, suo, suos, suum, suas, suae, sui, suam, suorum</li>
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
      <li>AUX-Fin: sum, erimus, essem, fui, sim, sunt</li>
      <li>PRON: me, mihi, ego, nos, nobis, mei, nostri, memet, mihimet</li>
      <li>VERB-Fin: precor, uidi, uideo, ibo, feci, feram, fugio, sequor, tuli, peto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: es, eris, estis, fores, sis</li>
      <li>PRON: te, tibi, tu, uos, uobis, temet, tui, tibimet</li>
      <li>VERB-Fin: potes, redde, date, parce, ite, iubes, da, ede, effare, fare</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: est, sunt, fuit, sit, erit, esset, foret, fuerat, fuerit, fuerant</li>
      <li>PRON: se, sibi, id, sui, ea, eius, eos, eo, semet, eae</li>
      <li>VERB-Fin: potest, uenit, tulit, dedit, licet, iacet, iuuat, stetit, tenet, adest</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: nostra, nostro, nostrae, nostri, nostris, nostrum, nostras, noster, nostros, nostram</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: mea, meis, tua, meum, meos, tuis, tuo, meas, tuam, tuum</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: in, ad, per, cum, ex, post, a, inter, ab, e</li>
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
          <li>ADJ: alta, magna, prima, saeua, longa, noua, atra, misera, impia, laeta</li>
          <li>ADJ-Part: detecta, futurae, nota, notam, paratam, solita</li>
          <li>DET: nostra, sua, mea, meas, tua, tuam, nostrae, suas, suae, suis</li>
          <li>NOUN: turba, dextra, poenas, uia, aras, fortuna, terra, ira, unda, causa</li>
          <li>NOUN-Part: nupta</li>
          <li>NUM: una, duas</li>
          <li>PROPN: Fortuna, Germaniae, Alcidae, Thebis, Alcides, Troia, Fortunae, Mycenas, Thebae, Thebas</li>
        </ul>
      </li>
      <li>IndEurA,IndEurO
        <ul>
          <li>ADJ: miseris, fessis, adflictis, auidis, diris, intonsis, inuitis, nouis, piis, scelestis</li>
          <li>DET: suis, meis, tuis, cunctis, nostris</li>
        </ul>
      </li>
      <li>IndEurE
        <ul>
          <li>NOUN: diem, fides, fidem, dies, acies, rebus, die, aciem, rerum, res</li>
          <li>PROPN: Macies</li>
        </ul>
      </li>
      <li>IndEurI
        <ul>
          <li>ADJ: grauis, ferox, graues, tristis, graui, nocens, felix, graue, triste, truces</li>
          <li>ADJ-Part: olentem</li>
          <li>DET: omnis, omne, qualis, omnium, omnes, omnibus, omni, omnia, omnem, quale</li>
          <li>NOUN: parens, mare, pars, ora, sanguine, ore, ignes, mors, nox, mortem</li>
          <li>NOUN-Part: occidentem, Occidentis, Oriens, Orientis</li>
          <li>NUM: tria, tris, milia, tribus</li>
          <li>PROPN: Ditis, Manes, Herculis, Penates, Herculem, Lares, Hercule, Lare, Mors, Phrygibus</li>
        </ul>
      </li>
      <li>IndEurO
        <ul>
          <li>ADJ: magni, magno, saeua, primus, saeuus, Germanorum, dubius, longo, nouum, primo</li>
          <li>ADJ-Part: notum, aperta, diuersa, edito, fractum, secreti, secreto, solitum, stato</li>
          <li>DET: meum, suo, meis, meos, suos, suum, tuo, cuncta, mea, nostro</li>
          <li>NOUN: arma, regna, deos, caelum, bella, fata, malis, caelo, ferro, tela</li>
          <li>NOUN-Part: secreta, instituta, secretum</li>
          <li>NUM: uno, unum, duos, unus, uni, ducenti, duo, duobus, unius</li>
          <li>PRON: quantulum, quantum</li>
          <li>PROPN: Phoebus, Phoebi, Lycus, Argos, Bacchi, Phoebo, Rhenum, Tartari, Aegisthe, Baccho</li>
        </ul>
      </li>
      <li>IndEurU
        <ul>
          <li>NOUN: manus, manu, domus, uultus, manum, artus, domum, metus, ortus, sinus</li>
          <li>NOUN-Inf: uisu</li>
          <li>NOUN-Part: aduentibus, flexu</li>
          <li>PROPN: Luctus, Metus</li>
        </ul>
      </li>
      <li>IndEurX
        <ul>
          <li>ADJ: maius, maior, melior, minor, prior, maiora, grauius, sospes, grauior, maioribus</li>
          <li>ADJ-Part: secretiora</li>
          <li>DET: plus, plura, pluris, plures, pluribus, compluris</li>
          <li>NOUN: caput, pater, tellus, scelus, nomen, pectus, genitor, genus, mater, coniunx</li>
          <li>PRON: nemo</li>
          <li>PROPN: Cithaeron, Titan, Theseu, Iouem, Iouis, Iuno, Stygis, Agamemnon, Ioue, Ioui</li>
        </ul>
      </li>
      <li>LatA
        <ul>
          <li>VERB-Fin: precor, dedit, iuuat, stetit, date, stat, uocat, arbitrantur, dabit, parat</li>
          <li>VERB-Gdv: cremandis, euocandus, laudanda, occupandum, precandum, reseranda, sanandum, temptanda</li>
          <li>VERB-Ger: imperando, pugnandi, remeandi</li>
          <li>VERB-Inf: dare, regnare, fari, praestare, stare, agitare, celebrare, cessare, dari, errare</li>
          <li>VERB-Part: comitata, data, agitata, datum, daturus, dominantem, dicatum, domitus, errantem, expectans</li>
          <li>VERB-Sup: fatu</li>
        </ul>
      </li>
      <li>LatAnom
        <ul>
          <li>AUX-Fin: est, sunt, es, fuit, sit, sum, erit, esset, foret, fuerat</li>
          <li>AUX-Inf: esse, fuisse, fore</li>
          <li>PRON: te, me, tibi, mihi, se, tu, ego, nos, sibi, nobis</li>
          <li>VERB-Fin: potest, tulit, adest, potes, ferunt, redit, potuit, abstulit, ibo, ite</li>
          <li>VERB-Ger: ferendo, pereundo</li>
          <li>VERB-Inf: ire, ferre, fieri, perire, posse, adesse, abire, inesse, inire, referre</li>
          <li>VERB-Part: efferens, ferens, praeferens, pereunte, reditura, abeunti, ablatam, adituri, ambiens, coeuntium</li>
        </ul>
      </li>
      <li>LatE
        <ul>
          <li>VERB-Fin: licet, iacet, tenet, uidi, uideo, uidit, habet, placet, timet, iacent</li>
          <li>VERB-Gdv: timendum, deflenda, habenda, habendae, mouenda, paenitendi, pudendum, timenda, timendos, tuenda</li>
          <li>VERB-Ger: nocendi</li>
          <li>VERB-Inf: uidere, timere, deflere, lugere, miscere, tacere, cohibere, flere, tenere, timeri</li>
          <li>VERB-Part: iussus, intuens, mixta, iacens, ausus, debitas, iubente, mixtus, sedens, ausos</li>
          <li>VERB-Sup: uisu</li>
        </ul>
      </li>
      <li>LatI
        <ul>
          <li>VERB-Fin: uenit, sensit, nescit, sensere, ueni, ueniet, aperit, ferit, nescio, scias</li>
          <li>VERB-Gdv: ferienda, hauriendum, insaniendum</li>
          <li>VERB-Ger: ueniendi</li>
          <li>VERB-Inf: moliri, scire, aperire, audiri, mollire, nescire, audire, experiri, finire, interuenire</li>
          <li>VERB-Part: uinctum, adortus, audita, orti, ortus, permensus, redimita, sepultis, ueniente, uentum</li>
          <li>VERB-Sup: auditu</li>
        </ul>
      </li>
      <li>LatI2
        <ul>
          <li>VERB-Fin: fecit, fugit, refugit, feci, fugio, patitur, cape, faciet, profuge, rapuit</li>
          <li>VERB-Gdv: rapienda</li>
          <li>VERB-Inf: mori, facere, pati, accipere, aggredi, aspici, eripere, adicere, capere, capi</li>
          <li>VERB-Part: fugiens, captae, concutiens, quatiens, rapta, raptum, acceptis, captas, captus, cupientem</li>
        </ul>
      </li>
      <li>LatPron
        <ul>
          <li>DET: hoc, ipse, ille, haec, quicquid, hic, ipsa, nulla, hunc, ista</li>
          <li>NUM: unius, uni</li>
          <li>PRON: quae, qui, quod, quid, quis, quem, quas, quo, cuius, quibus</li>
        </ul>
      </li>
      <li>LatX
        <ul>
          <li>VERB-Fin: cecidit, petit, redde, furit, agit, agunt, sequitur, parce, petunt, cadit</li>
          <li>VERB-Gdv: metuenda, agendum, colenda, colendos, extrahendus, frangenda, perdenda</li>
          <li>VERB-Ger: petendo, soluendo, uiuendi</li>
          <li>VERB-Inf: uinci, sequi, loqui, nosse, flectere, reuerti, cadere, cedere, cernere, credere</li>
          <li>VERB-Part: gerens, furens, uicta, trahens, iuncta, relicto, rupta, uictus, fusus, genitus</li>
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
          <li>AUX-Inf: esse, fore, fuisse</li>
          <li>VERB-Inf: mori, facere, pati, uidere, uinci, dare, sequi, ferre, fieri, ire</li>
        </ul>
      </li>
      <li>IndEurA
        <ul>
          <li>VERB-Gdv: metuenda, colenda, cremandis, frangenda, habenda, habendae, perdenda, rapienda, reseranda, temptanda</li>
          <li>VERB-Part: comitata, rupta, uicta, iuncta, captae, debitas, decreta, mixta, perempta, uersa</li>
        </ul>
      </li>
      <li>IndEurA,IndEurO
        <ul>
          <li>VERB-Part: depositis, natis, obductis, sepultis, uenturis</li>
        </ul>
      </li>
      <li>IndEurI
        <ul>
          <li>VERB-Part: gerens, furens, trahens, intuens, fugiens, iacens, metuens, petens, agens, cadens</li>
        </ul>
      </li>
      <li>IndEurO
        <ul>
          <li>VERB-Gdv: timendum, agendum, colendos, deflenda, euocandus, extrahendus, ferienda, hauriendum, insaniendum, laudanda</li>
          <li>VERB-Ger: ferendo, imperando, nocendi, pereundo, petendo, pugnandi, remeandi, soluendo, ueniendi, uiuendi</li>
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
          <li>PROPN: Arctos, Hesperum, Luna, Aurora, Auroram, Bootes, Hesperus, Lucifer, Luciferi, Orion</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: Thebana, Argolicas, Delphico, Gnosius, Libycus, Stygias, Stygios, Thracis, Actaea, Aegaea</li>
          <li>NOUN: Oceano, Oceanus, Oceanum, Occidentis, Oceani, Oriens, Orientis</li>
          <li>NOUN-Part: Occidentis, Oriens, Orientis</li>
          <li>PROPN: Germaniae, Cithaeron, Thebis, Argos, Troia, Rhenum, Stygis, Tartari, Mycenas, Styga</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>ADJ: Cadmea, Herculea, Herculeis, Herculeo, Cadmeis, Herculeae, Herculeas, Pelopia, Agamemnonias, Amphionios</li>
          <li>NOUN: hydrae</li>
          <li>PROPN: Alcidae, Herculis, Lycus, Theseu, Alcides, Herculem, Agamemnon, Alcide, Cadmi, Aegisthe</li>
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
          <li>PROPN: Phoebus, Ditis, Manes, Phoebi, Fortuna, Titan, Penates, Bacchi, Iouis, Iuno</li>
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
          <li>PART: o, ne</li>
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
          <li>DET: nostra, mea, meis, meum, meos, meas, nostro, mei, meo, nostrae</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>DET: tua, tuis, tuo, tuam, tuum, tui, tuus, tuos, tuae, tuas</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>DET: suis, sua, suo, suos, suum, suas, suae, sui, suam, suorum</li>
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
      <li>VERB-Fin--NOUN (3)</li>
      <li>VERB-Fin--NOUN-Acc (6)</li>
      <li>VERB-Fin--NOUN-Nom (1319)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Nom (236)</li>
      <li>VERB-Fin--PRON-Voc (1)</li>
      <li>VERB-Gdv--NOUN-Nom (4)</li>
      <li>VERB-Gdv--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Acc (29)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (16)</li>
      <li>VERB-Part--NOUN-Abl (24)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
      <li>VERB-Part--NOUN-Nom (13)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Abl (3)</li>
      <li>VERB-Part--PRON-Nom (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (13)</li>
      <li>VERB-Fin--NOUN-Abl (1)</li>
      <li>VERB-Fin--NOUN-Acc (1638)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(in) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(per) (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (12)</li>
      <li>VERB-Fin--PRON (13)</li>
      <li>VERB-Fin--PRON-Acc (287)</li>
      <li>VERB-Fin--PRON-Acc-ADP(contra) (1)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--NOUN-Acc (203)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(per) (1)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-Acc (15)</li>
      <li>VERB-Part--NOUN-Abl (1)</li>
      <li>VERB-Part--NOUN-Acc (204)</li>
      <li>VERB-Part--PRON (3)</li>
      <li>VERB-Part--PRON-Acc (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (2)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 26 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: uerto se, offero se, absoluo se, ago semet, capio sese, celo semet, credo se, damno se, defleo suos, do se, explico se, exsoluo se, frango se, iacio se, impingo se, induo semet, insero se, miror se, oppono se, premo se, puto se, retineo se, scindo se, spargo se, tego se, uinco se</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 30 relation subtypes: <a>acl:relcl</a>, <a>advcl:abs</a>, <a>advcl:cmp</a>, <a>advcl:pred</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>advmod:lmod</a>, <a>advmod:neg</a>, <a>advmod:tmod</a>, <a>aux:pass</a>, <a>ccomp:relcl</a>, <a>ccomp:reported</a>, <a>conj:expl</a>, <a>csubj:pass</a>, <a>csubj:relcl</a>, <a>det:numgov</a>, <a>dislocated:csubj</a>, <a>dislocated:nsubj</a>, <a>flat:gov</a>, <a>flat:name</a>, <a>flat:redup</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:cmp</a>, <a>obl:lmod</a>, <a>obl:tmod</a>, <a>orphan:missing</a>, <a>parataxis:reporting</a>, <a>xcomp:relcl</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>punct</a>, <a>dep</a></li>
</ul>
