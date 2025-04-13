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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udla_circse215)<br />
Download all treebanks: [UD 2.15](/#download)

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




This treebank repository is a work in progress collective endeavour. Presently, it contains the following annotated texts: Seneca *Hercules Furens*, Seneca *Agamemnon*, Tacitus *Germania*.

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

[AdpType](la_circse-feat-AdpType.html) – [AdvType](la_circse-feat-AdvType.html) – [Aspect](la_circse-feat-Aspect.html) – [Case](la_circse-feat-Case.html) – [Compound](la_circse-feat-Compound.html) – [Degree](la_circse-feat-Degree.html) – [Form](la_circse-feat-Form.html) – [Gender](la_circse-feat-Gender.html) – [InflClass](la_circse-feat-InflClass.html) – [InflClass[nominal]](la_circse-feat-InflClass-nominal.html) – [Mood](la_circse-feat-Mood.html) – [NameType](la_circse-feat-NameType.html) – [Number](la_circse-feat-Number.html) – [Number[psor]](la_circse-feat-Number-psor.html) – [NumForm](la_circse-feat-NumForm.html) – [NumType](la_circse-feat-NumType.html) – [NumValue](la_circse-feat-NumValue.html) – [PartType](la_circse-feat-PartType.html) – [Person](la_circse-feat-Person.html) – [Person[psor]](la_circse-feat-Person-psor.html) – [Polarity](la_circse-feat-Polarity.html) – [Poss](la_circse-feat-Poss.html) – [PronType](la_circse-feat-PronType.html) – [Proper](la_circse-feat-Proper.html) – [Reflex](la_circse-feat-Reflex.html) – [Tense](la_circse-feat-Tense.html) – [Variant](la_circse-feat-Variant.html) – [VerbForm](la_circse-feat-VerbForm.html) – [Voice](la_circse-feat-Voice.html)

## Relations

[acl](la_circse-dep-acl.html) – [acl:relcl](la_circse-dep-acl-relcl.html) – [advcl](la_circse-dep-advcl.html) – [advcl:abs](la_circse-dep-advcl-abs.html) – [advcl:cmp](la_circse-dep-advcl-cmp.html) – [advcl:pred](la_circse-dep-advcl-pred.html) – [advcl:relcl](la_circse-dep-advcl-relcl.html) – [advmod](la_circse-dep-advmod.html) – [advmod:emph](la_circse-dep-advmod-emph.html) – [advmod:lmod](la_circse-dep-advmod-lmod.html) – [advmod:neg](la_circse-dep-advmod-neg.html) – [advmod:tmod](la_circse-dep-advmod-tmod.html) – [amod](la_circse-dep-amod.html) – [appos](la_circse-dep-appos.html) – [aux](la_circse-dep-aux.html) – [aux:pass](la_circse-dep-aux-pass.html) – [case](la_circse-dep-case.html) – [cc](la_circse-dep-cc.html) – [ccomp](la_circse-dep-ccomp.html) – [ccomp:relcl](la_circse-dep-ccomp-relcl.html) – [ccomp:reported](la_circse-dep-ccomp-reported.html) – [conj](la_circse-dep-conj.html) – [conj:expl](la_circse-dep-conj-expl.html) – [cop](la_circse-dep-cop.html) – [csubj](la_circse-dep-csubj.html) – [csubj:pass](la_circse-dep-csubj-pass.html) – [csubj:relcl](la_circse-dep-csubj-relcl.html) – [det](la_circse-dep-det.html) – [det:numgov](la_circse-dep-det-numgov.html) – [discourse](la_circse-dep-discourse.html) – [dislocated:csubj](la_circse-dep-dislocated-csubj.html) – [dislocated:nsubj](la_circse-dep-dislocated-nsubj.html) – [fixed](la_circse-dep-fixed.html) – [flat](la_circse-dep-flat.html) – [flat:gov](la_circse-dep-flat-gov.html) – [flat:name](la_circse-dep-flat-name.html) – [flat:redup](la_circse-dep-flat-redup.html) – [iobj](la_circse-dep-iobj.html) – [mark](la_circse-dep-mark.html) – [nmod](la_circse-dep-nmod.html) – [nsubj](la_circse-dep-nsubj.html) – [nsubj:pass](la_circse-dep-nsubj-pass.html) – [nummod](la_circse-dep-nummod.html) – [obj](la_circse-dep-obj.html) – [obl](la_circse-dep-obl.html) – [obl:agent](la_circse-dep-obl-agent.html) – [obl:arg](la_circse-dep-obl-arg.html) – [obl:cmp](la_circse-dep-obl-cmp.html) – [obl:lmod](la_circse-dep-obl-lmod.html) – [obl:tmod](la_circse-dep-obl-tmod.html) – [orphan](la_circse-dep-orphan.html) – [orphan:missing](la_circse-dep-orphan-missing.html) – [parataxis](la_circse-dep-parataxis.html) – [parataxis:rep](la_circse-dep-parataxis-rep.html) – [parataxis:reporting](la_circse-dep-parataxis-reporting.html) – [root](la_circse-dep-root.html) – [vocative](la_circse-dep-vocative.html) – [xcomp](la_circse-dep-xcomp.html) – [xcomp:relcl](la_circse-dep-xcomp-relcl.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1263 sentences, 18453 tokens and 18968 syntactic words.</li>
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
<li>This corpus contains 515 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 436 types of multi-word tokens. Examples: tuque, eoque, quaeque, tecum, numquid, eosque, quique, quodque, secum, siue, animoque, aperitque, caelumque, cumque, eaque, estne, etsi, fluctusque, formasque, frameaque, geminumque, habitusque, iamque, idemque, idque, ipsaque, ipsumque, iraque, magnumque, mecum, meque, minimeque, nobiscum, noctemque, nonne, omnisque, omniumque, parensque, partemque, pecorumque, postque, pudorque, quidue, saxaque, seque, siquidem, suisque, tandemque, tardusque, tellusque.</li>
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
    <li>AUX: est, sunt, fuit, sit, es, erit, sum, esset, fuerat, erant</li>
    <li>VERB: uenit, iuuat, potest, licet, precor, tulit, uidi, dedit, tenet, agunt</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Gdv
  <ul>
    <li>VERB: timendum, agendum, colenda, colendos, cremandis, ferienda, habendae, hauriendum, insaniendum, laudanda</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>VERB: ferendo, imperando, pereundo, pugnandi, remeandi, ueniendi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: esse, fuisse, fore</li>
    <li>NOUN: uisu</li>
    <li>VERB: mori, pati, uidere, uinci, facere, flectere, ire, sequi, adesse, cernere</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: notum, aperta, detecta, diuersa, edito, fractum, futurae, nota, notam, olentem</li>
    <li>NOUN: occidentem, secreta, Occidentis, Oriens, Orientis, aduentibus, flexu, instituta, nupta, secretum</li>
    <li>VERB: gerens, furens, uicta, iuncta, iussus, relicto, uictus, data, natus, peremptus</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>VERB: fatu</li>
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
      <li>ADJ: alta, longa, prima, sera, tristis, uidua, laeta, magna, maior, noua</li>
      <li>ADJ-Part: detecta, futurae, nota, notam, olentem, paratam, solita</li>
      <li>DET: haec, ipsa, nulla, alia, hanc, illa, nostra, ista, omnis, eadem</li>
      <li>NOUN: manu, manus, domus, pars, tellus, turba, aras, dextra, domum, uia</li>
      <li>NOUN-Part: nupta</li>
      <li>NUM: una, tris, unius</li>
      <li>PRON: quae, quas, quam, qua, ea, quibus, aliqua, eae, eas, eam</li>
      <li>PROPN: Germaniae, Fortuna, Troia, Iuno, Mycenas, Germania, Germaniam, Styga, Stygis, Troiae</li>
      <li>VERB-Gdv: colenda, cremandis, habendae, metuenda, perdenda, rapienda, timenda</li>
      <li>VERB-Part: uicta, iuncta, captae, comitata, rupta, cadentes, captas, coacta, concita, debitas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADJ: fortem, parem, segnis, Thespias, altior, consortem, felicem, fidelis, grauior, inermem</li>
      <li>DET: quisquis, omnis, omnes, quisque, nostris, quales, qualis, suis</li>
      <li>NOUN: diem, caelitum, dies, hostis, comes, coniunx, duce, caelites, ciuibus, coniugem</li>
      <li>PRON: quis, aliquis, quibus, quisquam</li>
      <li>PROPN: Phrygum, Phrygibus, Troas, Arabum, Sarmatis, Stymphalidas, Taenari, Taenarus, Tanain</li>
      <li>VERB-Part: fluentes, fodientem, loquentem, manantes, metuentem, natis, properantes, residens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc,Neut
    <ul>
      <li>ADJ: amens, demens, felix, libens, miseris, nocens, potens, sospes, Bistonis, absentis</li>
      <li>DET: omnibus, aliis, his, illi, ipsis, nulli, solis, suis, alterius, huius</li>
      <li>NUM: uni</li>
      <li>PRON: cuius, cui, quibus, quis</li>
      <li>PROPN: Iuno</li>
      <li>VERB-Part: furens, metuens, efferens, exerens, fugiens, iacens, insultans, obductis, petenti, properanti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: Germanorum, ferox, Germanos, primus, proximi, truces, magni, singulis, Germani, Tonantis</li>
      <li>ADJ-Part: notum, secreti, secreto</li>
      <li>DET: ille, ipse, hic, hunc, nullus, suos, iste, quisque, cuique, idem</li>
      <li>NOUN: deos, pater, diem, uultus, uictor, animo, furor, genitor, labor, mundi</li>
      <li>NOUN-Inf: uisu</li>
      <li>NOUN-Part: occidentem, Occidentis, Oriens, Orientis, aduentibus, flexu</li>
      <li>NUM: uno, unus, ducenti, duos, tribus, tris</li>
      <li>PRON: qui, quem, quis, quos, eos, quibus, quo, eius, cui, cuius</li>
      <li>PROPN: Herculis, Lycus, Theseu, Alcides, Ditis, Herculem, Iouem, Titan, Iouis, Manes</li>
      <li>VERB-Gdv: colendos, hauriendum, timendos, timendum</li>
      <li>VERB-Part: gerens, iussus, uictus, furens, natus, peremptus, ferens, fusus, uicti, agens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>ADJ: Ausonio, Icario, Thracis, cristati, cruenti, fesso, furibundum, magno, miserum, obuium</li>
      <li>DET: illo, hoc, horum, idem, ipsum, meorum, sui, toto, tui</li>
      <li>NOUN: parens, sacerdos</li>
      <li>NUM: duo</li>
      <li>PRON: quo</li>
      <li>PROPN: Argos</li>
      <li>VERB-Gdv: timendum</li>
      <li>VERB-Part: rupto, uicto, uictum, uinctum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: saeua, geminum, maius, nobile, regium, magna, maiora, medio, notum, praecipuum</li>
      <li>ADJ-Part: notum, aperta, diuersa, edito, fractum, secretiora, solitum, stato</li>
      <li>DET: hoc, quicquid, omne, haec, cetera, sua, aliud, cuncta, meum, nostra</li>
      <li>NOUN: caput, arma, bella, caelum, mare, genus, malis, regna, nomen, scelus</li>
      <li>NOUN-Part: secreta, instituta, secretum</li>
      <li>NUM: unum, tria, milia, unius, uno</li>
      <li>PRON: quod, quid, quae, id, aliquid, quorum, aliquod, quicquam, quo, ea</li>
      <li>PROPN: Argos, Cithaeron, Ilium, Ilio, Pelion, Acheron, Amazon, Amphion, Asciburgium, Bella</li>
      <li>VERB-Gdv: agendum, ferienda, insaniendum, laudanda, mouenda, occupandum, pudendum, sanandum, timendum</li>
      <li>VERB-Part: relicto, data, acceptis, additum, clausa, concessum, congesto, decepto, detracta, flexo</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: Germanorum, saeua, Germanos, proximi, singulis, truces, Germani, altis, fortes, graues</li>
      <li>ADJ-Part: aperta, diuersa, secreti, secretiora</li>
      <li>AUX-Fin: sunt, erant, fuerant, fuerunt, fuissent, sint</li>
      <li>DET: suis, omnes, omnium, haec, meis, omnibus, omnis, suos, cetera, sua</li>
      <li>NOUN: arma, manus, bella, deos, malis, regna, aras, tela, armis, fata</li>
      <li>NOUN-Part: secreta, aduentibus, instituta</li>
      <li>NUM: mille, decem, septem, tria, tris, centum, ducenti, duo, duos, milia</li>
      <li>PRON: quae, quibus, quas, qui, quos, nos, uos, eos, nobis, quorum</li>
      <li>PROPN: Manes, Mycenas, Danaum, Gallias, Lares, Phrygibus, Phrygum, Danais, Iliades, Manibus</li>
      <li>VERB-Fin: agunt, ferunt, arbitrantur, colunt, date, habent, iacent, credunt, gaudent, gerunt</li>
      <li>VERB-Gdv: colendos, cremandis, ferienda, laudanda, mouenda, timendos</li>
      <li>VERB-Part: cadentes, data, acceptis, ausos, captas, clausa, debitas, detracta, discreti, exceptis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: alta, felix, ferox, maior, tristis, magni, geminum, graui, grauis, ingens</li>
      <li>ADJ-Part: notum, detecta, edito, fractum, futurae, nota, notam, olentem, paratam, secreto</li>
      <li>AUX-Fin: est, fuit, sit, es, erit, sum, esset, fuerat, eris, foret</li>
      <li>DET: hoc, ille, ipse, hic, quicquid, omne, haec, ipsa, nulla, hunc</li>
      <li>NOUN: manu, caput, diem, domus, pater, caelum, mare, genus, pars, tellus</li>
      <li>NOUN-Inf: uisu</li>
      <li>NOUN-Part: occidentem, Occidentis, Oriens, Orientis, flexu, nupta, secretum</li>
      <li>NUM: una, uno, unum, unus, unius, uni</li>
      <li>PRON: te, quod, qui, me, quae, quid, tibi, se, mihi, tu</li>
      <li>PROPN: Germaniae, Alcidae, Herculis, Fortuna, Lycus, Theseu, Alcides, Ditis, Herculem, Iouem</li>
      <li>VERB-Fin: uenit, iuuat, potest, licet, precor, tulit, uidi, dedit, tenet, cecidit</li>
      <li>VERB-Gdv: timendum, agendum, colenda, habendae, hauriendum, insaniendum, metuenda, occupandum, perdenda, pudendum</li>
      <li>VERB-Ger: ferendo, imperando, pereundo, pugnandi, remeandi, ueniendi</li>
      <li>VERB-Part: gerens, furens, iussus, relicto, uicta, uictus, iuncta, natus, peremptus, rupto</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: magno, primo, alto, graui, ingenti, medio, imo, longa, longo, molli</li>
      <li>ADJ-Part: edito, secreto, solita, stato</li>
      <li>DET: ipso, omni, hoc, nullo, suis, illo, nullis, suo, toto, meis</li>
      <li>NOUN: manu, caede, caelo, dextra, malis, ore, armis, ferro, animo, loco</li>
      <li>NOUN-Inf: uisu</li>
      <li>NOUN-Part: aduentibus, flexu</li>
      <li>NUM: uno, una, tribus</li>
      <li>PRON: te, quo, me, qua, quibus, se, eo, nobis, aliqua, aliquo</li>
      <li>PROPN: Ioue, Hercule, Uenere, Alcide, Alcmena, Austro, Carbone, Danuuio, Erebo, Italia</li>
      <li>VERB-Ger: ferendo, imperando, pereundo</li>
      <li>VERB-Part: relicto, rupto, rupta, acceptis, caeso, congesto, exceptis, excusso, flexo, pulsis</li>
      <li>VERB-Sup: fatu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: saeua, Germanos, nouum, regium, clarum, grauem, miserum, nobilem, atrum, certum</li>
      <li>ADJ-Part: aperta, notam, notum, olentem, paratam, secretiora, solitum</li>
      <li>DET: hoc, quicquid, hunc, hanc, omnis, suos, omne, tuam, illos, illum</li>
      <li>NOUN: caput, diem, manus, deos, bella, arma, caelum, aras, mare, domum</li>
      <li>NOUN-Part: occidentem, secreta, instituta, secretum</li>
      <li>NUM: unum, tris, duos, milia, tria</li>
      <li>PRON: te, quod, me, se, quem, quid, quae, quas, quos, quam</li>
      <li>PROPN: Herculem, Iouem, Manes, Rhenum, Mycenas, Germaniam, Phoebum, Styga, Troiam, Eurydicen</li>
      <li>VERB-Gdv: timendum, colendos, hauriendum, laudanda, timendos</li>
      <li>VERB-Part: cadentes, ausos, captas, data, debitas, detracta, editum, iactantem, missum, oblitos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: fessis, fortibus, iratae, miseris, singulis, Ausonio, Batauis, Cadmeis, Doricae, Germanico</li>
      <li>DET: cuique, omnibus, nulli, meis, suis, illi, nostris, tuis, illis, solis</li>
      <li>NOUN: patri, malis, regi, manibus, rebus, populis, superis, caelo, neci, oculis</li>
      <li>NUM: uni</li>
      <li>PRON: tibi, mihi, quibus, cui, sibi, nobis, uobis, tibimet, cuiquam, ei</li>
      <li>PROPN: Ioui, Alcidae, Oceano, Achilli, Danais, Hectori, Herculi, Phrygibus, Priamo, Troiae</li>
      <li>VERB-Gdv: cremandis, habendae</li>
      <li>VERB-Part: uicto, abeunti, aestimanti, agendis, bellantibus, concupiscentibus, deceptis, decepto, defunctis, empto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: Germanorum, magni, Tonantis, atri, Gallorum, immensae, noui, Romani, Thracis, alieni</li>
      <li>ADJ-Part: futurae</li>
      <li>DET: omnium, tui, nostrae, nostri, sui, mei, huius, ipsius, suae, aliarum</li>
      <li>NOUN: mundi, domus, gentis, deorum, regni, maris, patris, lucis, noctis, regis</li>
      <li>NOUN-Part: Occidentis, Orientis</li>
      <li>NUM: unius</li>
      <li>PRON: cuius, sui, eius, quorum, eorum, nostri, tui, earum, mei</li>
      <li>PROPN: Germaniae, Herculis, Ditis, Alcidae, Iouis, Tartari, Phoebi, Rheni, Stygis, Bacchi</li>
      <li>VERB-Ger: pugnandi, remeandi, ueniendi</li>
      <li>VERB-Part: captae, cadentis, aedificandi, coercendi, coeuntium, deuicti, electorum, emergentis, euersi, fulminantis</li>
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
      <li>ADJ: felix, maior, tristis, ferox, grauis, prima, primus, proximi, alta, impotens</li>
      <li>ADJ-Part: notum, detecta, diuersa, fractum, nota, secreti</li>
      <li>DET: ille, ipse, haec, hic, hoc, nulla, ipsa, quisquis, illa, alia</li>
      <li>NOUN: pars, tellus, arma, pater, turba, dies, domus, fides, furor, labor</li>
      <li>NOUN-Part: Oriens, nupta</li>
      <li>NUM: una, unus, ducenti, duo, tria, unum</li>
      <li>PRON: qui, quae, quis, quod, quid, tu, nemo, id, ego, ea</li>
      <li>PROPN: Lycus, Alcides, Fortuna, Phoebus, Titan, Troia, Agamemnon, Eurystheus, Achilles, Aiax</li>
      <li>VERB-Gdv: agendum, colenda, ferienda, insaniendum, metuenda, mouenda, occupandum, perdenda, pudendum, rapienda</li>
      <li>VERB-Part: gerens, furens, uicta, iuncta, iussus, uictus, natus, peremptus, comitata, ferens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: consors, demens, fortes, magne, Argolica, Cadmea, Dorici, Ophionium, Thespias, audax</li>
      <li>DET: ipsa, ipsae, nulla, talis</li>
      <li>NOUN: genitor, pater, coniunx, parens, anime, nate, famuli, genus, rector, regina</li>
      <li>PRON: tu, uos</li>
      <li>PROPN: Theseu, Aegisthe, Iuno, Phoebe, Alcide, Argos, Cassandra, Fortuna, Oresta, Pallas</li>
      <li>VERB-Part: assidens, congresse, coniuncta, efferens, infectae, oblite, petens, quatiens, sata, satiate</li>
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
      <li>ADJ: prima, primo, primus, proximi, imo, summo, extremum, imis, maximum, summa</li>
      <li>ADV: maxime, minime, primo, primum, latissime, plurimum</li>
      <li>DET: plurimis, paucissima, plurimae, plurimi, plurimum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: maior, maius, maiora, melior, minor, maioribus, propior, acrior, grauior, grauius</li>
      <li>ADJ-Part: secretiora</li>
      <li>ADV: magis, potius, minus, saepius, melius, prius, plerumque, amplius, plus, propius</li>
      <li>DET: plura, pluris, plus, pluribus, plures</li>
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
      <li>ADJ: alta, saeua, felix, tristis, ferox, laeta, longa, sera, geminum, graui</li>
      <li>ADV: iam, nunc, hinc, semper, sic, tandem, et, huc, retro, hic</li>
      <li>DET: cuncta, multo, cunctos, multis, cuncti, cunctis, multa, pauca</li>
      <li>VERB-Gdv: timendum, agendum, colenda, colendos, cremandis, ferienda, habendae, hauriendum, insaniendum, laudanda</li>
      <li>VERB-Ger: ferendo, imperando, pereundo, pugnandi, remeandi, ueniendi</li>
      <li>VERB-Part: gerens, furens, uicta, iuncta, iussus, relicto, natus, peremptus, rupto, uictus</li>
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
      <li>PART: non, ne, an, haut, haud, quin, num</li>
      <li>PRON: nemo, nihil</li>
      <li>SCONJ: nisi, ne, sin, neue</li>
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
      <li>ADJ: Arcados, Libys, Lyrnesida, Scythen, Thespias</li>
      <li>NOUN: chaos, aer, aether, aedon, chelys, lampada, maenas, syrma</li>
      <li>PROPN: Theseu, Alcides, Titan, Agamemnon, Argos, Eurystheus, Pallas, Styga, Achilles, Alcide</li>
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
      <li>AUX-Fin: est, sunt, sit, es, erit, sum, esset, erant, eris, foret</li>
      <li>AUX-Inf: esse, fore</li>
      <li>VERB-Fin: iuuat, potest, licet, precor, uenit, tenet, agunt, iacet, adest, ferunt</li>
      <li>VERB-Inf: mori, pati, uidere, uinci, facere, flectere, ire, sequi, adesse, cernere</li>
      <li>VERB-Part: gerens, furens, cadentes, ferens, intuens, metuens, quatiens, sedens, trahens, tremens</li>
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
      <li>AUX-Fin: fuit, fuerat, fuerant, fuerunt, fuissent</li>
      <li>AUX-Inf: fuisse</li>
      <li>VERB-Fin: tulit, uidi, dedit, cecidit, stetit, fecit, sensit, potuit, uicit, cessit</li>
      <li>VERB-Inf: meminisse, nosse, addidisse, adisse, eualuisse, extitisse, fugisse, immigrasse, imperasse, mersisse</li>
      <li>VERB-Part: uicta, iuncta, iussus, relicto, uictus, data, natus, peremptus, rupto, captae</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>VERB-Gdv: timendum, agendum, colenda, colendos, cremandis, ferienda, habendae, hauriendum, insaniendum, laudanda</li>
      <li>VERB-Ger: ferendo, imperando, pereundo, pugnandi, remeandi, ueniendi</li>
      <li>VERB-Part: daturus, reditura, uenturis, accipiendis, adituri, aedificandi, agendis, asciscendis, ausuram, coercendi</li>
      <li>VERB-Sup: fatu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: date, redde, da, parce, cape, ite, pande, crede, perge, pete</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: est, sunt, fuit, es, erit, sum, fuerat, erant, eris, fuerant</li>
      <li>VERB-Fin: uenit, iuuat, potest, licet, precor, tulit, uidi, dedit, tenet, agunt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sit, esset, foret, fuissent, sim, sint, sis</li>
      <li>VERB-Fin: eat, pateat, teneat, agant, ament, cessent, occupet, reddat, scias, sonent</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: erit, eris, foret</li>
      <li>VERB-Fin: dabit, feram, petet, poterit, ueniet, aderit, colam, faciet, feret, cremabo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fuit, esset, erant, fuerat, fuerunt, fuissent</li>
      <li>VERB-Fin: tulit, uidi, cecidit, dedit, stetit, fecit, sensit, potuit, uicit, uidit</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX-Fin: fuerant, fuerat</li>
      <li>VERB-Fin: armasset, constiterant, iusserat, praebuerat, senserat, sparserat, tinxisset, traxerat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: est, sunt, sit, es, sum, fuit, sim, sint, sis</li>
      <li>VERB-Fin: iuuat, potest, licet, precor, uenit, tenet, agunt, iacet, adest, ferunt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Fin: uenit, iuuat, potest, licet, tulit, uidi, dedit, tenet, agunt, cecidit</li>
      <li>VERB-Inf: uidere, facere, flectere, ire, adesse, cernere, credere, deflere, ferre, fieri</li>
      <li>VERB-Part: gerens, furens, cadentes, ferens, intuens, metuens, quatiens, sedens, trahens, tremens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: precor, arbitrantur, patitur, sequitur, utuntur, agitur, aspernantur, graditur, quaeritur, reuertor</li>
      <li>VERB-Gdv: timendum, agendum, colenda, colendos, cremandis, ferienda, habendae, hauriendum, insaniendum, laudanda</li>
      <li>VERB-Ger: ferendo, imperando, pereundo, pugnandi, remeandi, ueniendi</li>
      <li>VERB-Inf: mori, pati, uinci, sequi, iungi, loqui, nasci, reuerti, aggredi, aspici</li>
      <li>VERB-Part: uicta, iuncta, iussus, relicto, uictus, data, natus, peremptus, rupto, captae</li>
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
      <li>DET: hoc, haec, ille, ipse, hic, ipsa, hunc, idem, ista, eadem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: aliquanto, quondam</li>
      <li>DET: nulla, ulla, alia, nullis, aliud, multo, nullo, quidam, unum, uterque</li>
      <li>PRON: nemo, quid, quod, aliquid, aliqua, aliquod, nihil, qua, quicquam, aliquis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: quid, cur, ubi, quo, unde, quam, ut, utrumne, quare, quonam</li>
      <li>DET: quota, qualis, quanta, quanto, quot, utras</li>
      <li>PRON: quid, quis, quae, cui, quas, quem, quod, quo, qua, quam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: nulla, nullus, nulli, nullo, nullos, nullum</li>
      <li>PRON: nemo, nil, nihil</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: nostra, sua, suis, mea, meis, meum, suos, suo, tua, tuam</li>
      <li>PRON: te, me, tibi, se, mihi, tu, id, nos, ego, ea</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: quam, qua, unde, quando, quanto, quo, ubi, quantum, quippe, quotiens</li>
      <li>DET: quicquid, quisquis, qualis, quale, quantum, quantus, quemcumque, quo, quodcumque, quaecumque</li>
      <li>PART: quin</li>
      <li>PRON: qui, quae, quod, quem, quibus, cuius, quos, quas, quam, quo</li>
      <li>SCONJ: ut, quam, quod, quia, cum, quamquam, tamquam, ubi, quamuis, qua</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: omnis, omne, omnes, omnium, quisque, omni, omnibus, cuique, cuncta, omnia</li>
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
      <li>DET: multo, unum, multa, plura, plurimis, pluris, plus, quota, multis, multum</li>
      <li>NUM: una, uno, decem, mille, unum, unus, centum, septem, tria, tris</li>
      <li>SCONJ: quantum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dist
    <ul>
      <li>ADJ: singulis, terna, bina, centeni, seno, singulos, binos, centena, quinis, singularum</li>
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
      <li>ADJ: prima, primo, primus, primi, primum, tertiae, decima, decimus, millesimam, primam</li>
      <li>ADV: prius, primo, primum</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: nostra, sua, suis, mea, meis, meum, suos, suo, tua, tuam</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: sua, suis, suos, suo, suas, sui, suum, suae, suam, suorum</li>
      <li>PRON: se, sui, sibi, sese</li>
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
      <li>PRON: me, mihi, nos, ego, nobis, nostri, mei</li>
      <li>VERB-Fin: precor, uidi, uideo, feram, uidimus, colam, feci, reuertor, teneo, agnosco</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: es, eris, sis</li>
      <li>PRON: te, tibi, tu, uos, temet, uobis, tibimet, tui</li>
      <li>VERB-Fin: date, redde, da, parce, cape, ite, iubes, pande, cessas, crede</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: est, sunt, fuit, sit, erit, esset, fuerat, erant, foret, fuerant</li>
      <li>PRON: se, id, ea, sui, eius, eos, sibi, eo, eae, eas</li>
      <li>VERB-Fin: uenit, iuuat, potest, licet, tulit, dedit, tenet, agunt, cecidit, iacet</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: nostra, nostris, nostrum, nostrae, nostri, nostro, noster, nostras, nostros, nostram</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: mea, meis, meum, tua, tuam, meos, tui, tuos, tuis, tuum</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: in, ad, per, cum, post, e, ex, a, ab, ante</li>
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
  <li><a>Form</a>
    <ul>
      <li>Emp
        <ul>
          <li>ADV: tamen, plerumque, denique, quippe, ubique, utrimque</li>
          <li>CCONJ: ac, atque</li>
          <li>DET: eadem, idem, ipso, ipsum, eodem, ipsa, ipse, ipsi, ipsis, eundem</li>
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
          <li>ADJ: necesse, satis</li>
          <li>DET: tot, quot</li>
          <li>NOUN: nefas, fas, opus</li>
          <li>NUM: mille, decem, septem, centum</li>
          <li>PRON: nil, nihil</li>
          <li>PROPN: Tempe, Manto</li>
        </ul>
      </li>
      <li>IndEurA
        <ul>
          <li>ADJ: alta, longa, prima, sera, uidua, laeta, magna, noua, regia, auida</li>
          <li>ADJ-Part: detecta, futurae, nota, notam, paratam, solita</li>
          <li>DET: nostra, tuam, suas, sua, mea, meas, nostrae, suae, tanta, tua</li>
          <li>NOUN: turba, aras, dextra, uia, terra, unda, fortuna, ira, poenas, terras</li>
          <li>NOUN-Part: nupta</li>
          <li>NUM: una</li>
          <li>PROPN: Germaniae, Alcidae, Fortuna, Alcides, Troia, Mycenas, Germania, Germaniam, Troiae, Troiam</li>
        </ul>
      </li>
      <li>IndEurA,IndEurO
        <ul>
          <li>ADJ: miseris, fessis, intonsis, inuitis, nouis, piis, singulis</li>
          <li>DET: suis, meis, nostris</li>
        </ul>
      </li>
      <li>IndEurE
        <ul>
          <li>NOUN: diem, dies, fides, fidem, acies, rebus, aciem, rerum, res, die</li>
        </ul>
      </li>
      <li>IndEurI
        <ul>
          <li>ADJ: felix, ferox, tristis, graui, grauis, ingens, truces, fortis, impotens, ingenti</li>
          <li>ADJ-Part: olentem</li>
          <li>DET: omnis, omne, omnes, omnium, omni, omnibus, qualis, omnia, omnem, quale</li>
          <li>NOUN: mare, pars, ora, parens, gentis, nox, ore, gentes, rates, gens</li>
          <li>NOUN-Part: occidentem, Occidentis, Oriens, Orientis</li>
          <li>NUM: tria, tris, milia, tribus</li>
          <li>PROPN: Herculis, Ditis, Herculem, Manes, Hercule, Lares, Phrygibus, Phrygum, Tyndaris, Achilli</li>
        </ul>
      </li>
      <li>IndEurO
        <ul>
          <li>ADJ: Germanorum, saeua, magni, Germanos, geminum, magno, miserum, primo, primus, proximi</li>
          <li>ADJ-Part: notum, aperta, diuersa, edito, fractum, secreti, secreto, solitum, stato</li>
          <li>DET: meum, suos, cetera, sua, suo, meos, tui, tuos, cuncta, meis</li>
          <li>NOUN: arma, bella, deos, caelum, malis, regna, tela, caelo, armis, fata</li>
          <li>NOUN-Part: secreta, instituta, secretum</li>
          <li>NUM: uno, unum, unus, ducenti, duo, duos, uni</li>
          <li>PROPN: Lycus, Phoebus, Rhenum, Tartari, Aegisthe, Argos, Phoebi, Eurystheus, Oceano, Phoebum</li>
        </ul>
      </li>
      <li>IndEurU
        <ul>
          <li>NOUN: manu, manus, domus, uultus, domum, manum, artus, manibus, sinus, uultu</li>
          <li>NOUN-Inf: uisu</li>
          <li>NOUN-Part: aduentibus, flexu</li>
          <li>PROPN: Luctus, Metus</li>
        </ul>
      </li>
      <li>IndEurX
        <ul>
          <li>ADJ: maior, maius, maiora, melior, minor, maioribus, propior, sospes, Thracis, acrior</li>
          <li>ADJ-Part: secretiora</li>
          <li>DET: plura, pluris, plus, pluribus, compluris, plures</li>
          <li>NOUN: caput, pater, genus, tellus, coniunx, nomen, scelus, decus, uictor, furor</li>
          <li>PRON: nemo</li>
          <li>PROPN: Theseu, Iouem, Iuno, Titan, Iouis, Agamemnon, Ioue, Ioui, Pallas, Styga</li>
        </ul>
      </li>
      <li>LatA
        <ul>
          <li>VERB-Fin: iuuat, precor, dedit, stat, stetit, arbitrantur, date, uacat, da, dat</li>
          <li>VERB-Gdv: cremandis, laudanda, occupandum, sanandum</li>
          <li>VERB-Ger: imperando, pugnandi, remeandi</li>
          <li>VERB-Inf: agitare, celebrare, cessare, lacrimare, numerare, parare, penetrare, praestare, regnare, uerberare</li>
          <li>VERB-Part: data, comitata, agitata, datum, daturus, dicatum, iactans, iactantem, manantes, perdomita</li>
          <li>VERB-Sup: fatu</li>
        </ul>
      </li>
      <li>LatAnom
        <ul>
          <li>AUX-Fin: est, sunt, fuit, sit, es, erit, sum, esset, fuerat, erant</li>
          <li>AUX-Inf: esse, fuisse, fore</li>
          <li>PRON: te, me, tibi, se, mihi, tu, nos, ego, sui, uos</li>
          <li>VERB-Fin: potest, tulit, adest, ferunt, potuit, redit, perit, adit, eat, feram</li>
          <li>VERB-Ger: ferendo, pereundo</li>
          <li>VERB-Inf: ire, adesse, ferre, fieri, posse, inesse, inire, perire, referre, abesse</li>
          <li>VERB-Part: ferens, efferens, praeferens, reditura, abeunti, ablatam, adituri, ambiens, coeuntium, delatum</li>
        </ul>
      </li>
      <li>LatE
        <ul>
          <li>VERB-Fin: licet, uidi, tenet, iacet, uideo, habet, uidet, decet, habent, iacent</li>
          <li>VERB-Gdv: timendum, habendae, mouenda, pudendum, timenda, timendos</li>
          <li>VERB-Inf: uidere, deflere, lugere, miscere, tueri, arcere, coercere, cohibere, fateri, flere</li>
          <li>VERB-Part: iussus, intuens, sedens, ausos, ausus, concita, debitas, iacens, solitus, tenens</li>
        </ul>
      </li>
      <li>LatI
        <ul>
          <li>VERB-Fin: uenit, sensit, nescit, ueniet, aperit, ferit, haurit, scias, audiat, nescio</li>
          <li>VERB-Gdv: ferienda, hauriendum, insaniendum</li>
          <li>VERB-Ger: ueniendi</li>
          <li>VERB-Inf: aperire, audiri, moliri, nescire, scire, audire, experiri, finire, interuenire, lenire</li>
          <li>VERB-Part: ortus, permensus, uentum, uenturis, uinctum, adortus, amicta, audita, compertum, deuinctus</li>
        </ul>
      </li>
      <li>LatI2
        <ul>
          <li>VERB-Fin: fecit, fugit, patitur, refugit, cape, effugit, excipit, faciet, feci, graditur</li>
          <li>VERB-Gdv: rapienda</li>
          <li>VERB-Inf: mori, pati, facere, accipere, aggredi, aspici, commori, dissicere, eripere, fugisse</li>
          <li>VERB-Part: captae, quatiens, acceptis, captas, captus, concutiens, decepto, exceptis, excusso, fugiens</li>
        </ul>
      </li>
      <li>LatPron
        <ul>
          <li>DET: hoc, haec, ille, ipse, hic, quicquid, nulla, ipsa, hunc, ista</li>
          <li>NUM: unius</li>
          <li>PRON: quae, qui, quod, quid, quis, quem, quibus, cuius, quas, id</li>
        </ul>
      </li>
      <li>LatX
        <ul>
          <li>VERB-Fin: agunt, cecidit, agit, petit, colunt, gerit, redde, soluit, uicit, cadit</li>
          <li>VERB-Gdv: agendum, colenda, colendos, metuenda, perdenda</li>
          <li>VERB-Inf: uinci, flectere, sequi, cernere, credere, iungi, loqui, meminisse, nasci, nosse</li>
          <li>VERB-Part: gerens, furens, uicta, iuncta, relicto, uictus, natus, peremptus, rupto, cadentes</li>
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
          <li>VERB-Inf: mori, pati, uidere, uinci, facere, flectere, sequi, cernere, deflere, ferre</li>
        </ul>
      </li>
      <li>IndEurA
        <ul>
          <li>VERB-Gdv: colenda, cremandis, habendae, metuenda, perdenda, rapienda, timenda</li>
          <li>VERB-Part: uicta, iuncta, captae, comitata, rupta, captas, coacta, concita, debitas, decreta</li>
        </ul>
      </li>
      <li>IndEurA,IndEurO
        <ul>
          <li>VERB-Part: natis, obductis, uenturis</li>
        </ul>
      </li>
      <li>IndEurI
        <ul>
          <li>VERB-Part: gerens, furens, cadentes, ferens, intuens, metuens, quatiens, sedens, trahens, tremens</li>
        </ul>
      </li>
      <li>IndEurO
        <ul>
          <li>VERB-Gdv: timendum, agendum, colendos, ferienda, hauriendum, insaniendum, laudanda, mouenda, occupandum, pudendum</li>
          <li>VERB-Ger: ferendo, imperando, pereundo, pugnandi, remeandi, ueniendi</li>
          <li>VERB-Part: iussus, relicto, uictus, natus, peremptus, rupto, data, fusus, uicti, acceptis</li>
        </ul>
      </li>
      <li>IndEurU
        <ul>
          <li>VERB-Sup: fatu</li>
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
          <li>PROPN: Hesperum, Arctos, Aurora, Auroram, Bootes, Luna, Orion, Perseus, Phosphoros, Sol</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: Thebana, Argolicas, Gnosius, Stygios, Thracis, Actaea, Aetnaeis, Arcadia, Arcadii, Arcados</li>
          <li>NOUN: Oceano, Oceanus, Oceanum, Occidentis, Oceani, Oriens, Orientis</li>
          <li>NOUN-Part: Occidentis, Oriens, Orientis</li>
          <li>PROPN: Germaniae, Troia, Rhenum, Tartari, Argos, Mycenas, Germania, Germaniam, Rheni, Styga</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>ADJ: Herculea, Herculeis, Herculeas, Herculeo, Pelopia, Agamemnonias, Cadmea, Cadmeis, Dardana, Dardaniae</li>
          <li>NOUN: hydrae</li>
          <li>PROPN: Alcidae, Herculis, Lycus, Theseu, Alcides, Herculem, Agamemnon, Alcide, Aegisthe, Eurystheus</li>
        </ul>
      </li>
      <li>Met
        <ul>
          <li>NOUN: coris, notis</li>
          <li>PROPN: Austro, Notus, Aquilo, Auster, Boreae, Corus, Euro, Eurus, Zephyri, Zephyro</li>
        </ul>
      </li>
      <li>Nat
        <ul>
          <li>ADJ: Germanorum, Germanos, Germani, Gallorum, Romana, Romanis, Gallica, Gallos, Germanis, Parthi</li>
          <li>NOUN: Sueborum, Chattos, Chattorum, Quadi, Sarmatis, Angriuarios, Buri, Chamauos, Chattis, Chaucorum</li>
          <li>PROPN: Danaum, Phrygibus, Phrygum, Danais, Iliades, Troades, Aethiopas, Amazon, Arabum, Danai</li>
        </ul>
      </li>
      <li>Rel
        <ul>
          <li>ADJ: Herceum, Cyclopia, Eoo, Gorgoneo, Phoebea, Phoebei, Phoebeos, Zminthea</li>
          <li>NOUN: Penates, Bacchis, Penatium</li>
          <li>PROPN: Ditis, Fortuna, Iuno, Titan, Iouem, Iouis, Manes, Phoebus, Ioue, Phoebi</li>
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
          <li>DET: nostra, mea, meis, meum, meos, nostris, nostrum, meas, nostrae, nostri</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>DET: tua, tuam, tui, tuos, tuis, tuum, tuus, tuo, tuae, tuas</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>DET: sua, suis, suos, suo, suas, sui, suum, suae, suam, suorum</li>
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
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (2)</li>
      <li>VERB-Fin--NOUN-Nom (822)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Nom (120)</li>
      <li>VERB-Gdv--NOUN-Nom (2)</li>
      <li>VERB-Gdv--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Acc (18)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (12)</li>
      <li>VERB-Part--NOUN-Abl (18)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
      <li>VERB-Part--NOUN-Nom (9)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (6)</li>
      <li>VERB-Fin--NOUN-Abl (1)</li>
      <li>VERB-Fin--NOUN-Acc (975)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(in) (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (5)</li>
      <li>VERB-Fin--PRON (7)</li>
      <li>VERB-Fin--PRON-Acc (161)</li>
      <li>VERB-Fin--PRON-Acc-ADP(contra) (1)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--NOUN-Acc (137)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(per) (1)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (9)</li>
      <li>VERB-Part--NOUN-Abl (1)</li>
      <li>VERB-Part--NOUN-Acc (118)</li>
      <li>VERB-Part--PRON (3)</li>
      <li>VERB-Part--PRON-Acc (3)</li>
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
  <li>This corpus contains 15 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: absoluo se, capio sese, credo se, defleo suos, exsoluo se, frango se, iacio se, impingo se, miror se, offero se, premo se, puto se, tego se, uerto se, uinco se</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 31 relation subtypes: <a>acl:relcl</a>, <a>advcl:abs</a>, <a>advcl:cmp</a>, <a>advcl:pred</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>advmod:lmod</a>, <a>advmod:neg</a>, <a>advmod:tmod</a>, <a>aux:pass</a>, <a>ccomp:relcl</a>, <a>ccomp:reported</a>, <a>conj:expl</a>, <a>csubj:pass</a>, <a>csubj:relcl</a>, <a>det:numgov</a>, <a>dislocated:csubj</a>, <a>dislocated:nsubj</a>, <a>flat:gov</a>, <a>flat:name</a>, <a>flat:redup</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:cmp</a>, <a>obl:lmod</a>, <a>obl:tmod</a>, <a>orphan:missing</a>, <a>parataxis:rep</a>, <a>parataxis:reporting</a>, <a>xcomp:relcl</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>dislocated</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>expl</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>punct</a>, <a>dep</a></li>
</ul>
