---
layout: base
title:  'UD_North_Sami-Giella'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD North Sami Giella

Language: [North Sami](/sme/index.html) (code: `sme`)<br/>
Family: Uralic, Sami

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Trond Trosterud, Lene Antonsen, Francis Tyers.

Repository: [UD_North_Sami-Giella](https://github.com/UniversalDependencies/UD_North_Sami-Giella)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsme_giella29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: nonfiction, news

Questions, comments?
General annotation questions (either North Sami-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_North_Sami-Giella/issues).
If you want to collaborate, please contact [ftyers&nbsp;(æt)&nbsp;prompsit&nbsp;•&nbsp;com].
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

This is a North Sámi treebank based on a manually disambiguated and function-labelled gold-standard
corpus of North Sámi produced by the Giellatekno team at UiT Norgga árktalaš universitehta.



The corpus was first analysed using a finite-state morphological analyser for North Sámi, and then
disambiguated using a constraint-grammar-based disambiguator. The constraint grammar disambiguator
also annotated syntactic function labels. The analyses and the function labels were manually
corrected to produce a gold standard, and then a rule-based dependency parser was run on top
of the gold data. On top of those parsers a series of tree-rewrite rules were used to convert
the corpus to Universal Dependencies. Please see the paper below for details.

## Acknowledgments

We are immensely grateful to the Giellatekno team, and especially to Trond Trosterud and Lene Antonsen
for annotating the original data and for producing the rule-based parser on which the treebank is
based. Their comments and help were invaluable.

If you use this data in your work, please cite:

@inproceedings{sheyanova:2017,
author = {Mariya Sheyanova and Francis M. Tyers},
title = {Annotation schemes in North Sámi dependency parsing},
booktitle = {Proceedings of the 3rd International Workshop for Computational Linguistics of Uralic Languages},
pages = {66--75},
year = 2017
}


# Statistics of UD North Sami Giella

## POS Tags

[ADJ](sme_giella-pos-ADJ.html) – [ADP](sme_giella-pos-ADP.html) – [ADV](sme_giella-pos-ADV.html) – [AUX](sme_giella-pos-AUX.html) – [CCONJ](sme_giella-pos-CCONJ.html) – [INTJ](sme_giella-pos-INTJ.html) – [NOUN](sme_giella-pos-NOUN.html) – [NUM](sme_giella-pos-NUM.html) – [PART](sme_giella-pos-PART.html) – [PRON](sme_giella-pos-PRON.html) – [PROPN](sme_giella-pos-PROPN.html) – [PUNCT](sme_giella-pos-PUNCT.html) – [SCONJ](sme_giella-pos-SCONJ.html) – [VERB](sme_giella-pos-VERB.html)

## Features

[Aspect](sme_giella-feat-Aspect.html) – [Case](sme_giella-feat-Case.html) – [Connegative](sme_giella-feat-Connegative.html) – [Degree](sme_giella-feat-Degree.html) – [Mood](sme_giella-feat-Mood.html) – [Number](sme_giella-feat-Number.html) – [Number[psor]](sme_giella-feat-Number-psor.html) – [NumType](sme_giella-feat-NumType.html) – [Person](sme_giella-feat-Person.html) – [Person[psor]](sme_giella-feat-Person-psor.html) – [Polarity](sme_giella-feat-Polarity.html) – [PronType](sme_giella-feat-PronType.html) – [Reflex](sme_giella-feat-Reflex.html) – [Tense](sme_giella-feat-Tense.html) – [VerbForm](sme_giella-feat-VerbForm.html) – [Voice](sme_giella-feat-Voice.html)

## Relations

[acl](sme_giella-dep-acl.html) – [acl:relcl](sme_giella-dep-acl-relcl.html) – [advcl](sme_giella-dep-advcl.html) – [advmod](sme_giella-dep-advmod.html) – [amod](sme_giella-dep-amod.html) – [appos](sme_giella-dep-appos.html) – [aux](sme_giella-dep-aux.html) – [aux:neg](sme_giella-dep-aux-neg.html) – [case](sme_giella-dep-case.html) – [cc](sme_giella-dep-cc.html) – [cc:preconj](sme_giella-dep-cc-preconj.html) – [ccomp](sme_giella-dep-ccomp.html) – [compound](sme_giella-dep-compound.html) – [compound:nn](sme_giella-dep-compound-nn.html) – [conj](sme_giella-dep-conj.html) – [cop](sme_giella-dep-cop.html) – [csubj](sme_giella-dep-csubj.html) – [det](sme_giella-dep-det.html) – [discourse](sme_giella-dep-discourse.html) – [flat](sme_giella-dep-flat.html) – [mark](sme_giella-dep-mark.html) – [nmod](sme_giella-dep-nmod.html) – [nmod:poss](sme_giella-dep-nmod-poss.html) – [nsubj](sme_giella-dep-nsubj.html) – [nummod](sme_giella-dep-nummod.html) – [obj](sme_giella-dep-obj.html) – [obl](sme_giella-dep-obl.html) – [parataxis](sme_giella-dep-parataxis.html) – [punct](sme_giella-dep-punct.html) – [root](sme_giella-dep-root.html) – [vocative](sme_giella-dep-vocative.html) – [xcomp](sme_giella-dep-xcomp.html) – [xcomp:obj](sme_giella-dep-xcomp-obj.html) – [xcomp:pred](sme_giella-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3122 sentences and 26845 tokens.</li>
</ul>

<ul>
<li>This corpus contains 4085 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 173 types of words that contain both letters and punctuation. Examples: dan_dihte, ovdal_go, danne_go, M., Spider-Man, dearvvašvuođa-, A., dalle_go, Biret-Elle, Joneš-bojá, Mr., Sámi_Jienat, seamma_láhkai, 1982:s, 1995:s, Davvi-Romssas, Harry_Potter-girjji, IL_Nordlys, Oarje-Finnmárkkus, Soagŋu-girji, danin_go, das_go, e-boasta, e-boastačujuhusa, giella-, jna., máná-guovttos, seamma_ládje, skuvla-, 1600-logu, 1700-jagiin, 1700-logu, 1700-lohkui, 1800-logu, 1834:s, 1877:s, 1898:s, 1899:s, 1912:s, 1926:s, 1936:s, 1944:s, 1947:s, 1948:s, 1949:s, 1951:s, 1960:s, 1968:s, 1970-logu, 1970:s</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: DET, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 16 word types tagged as particles (PART): Almma, Amma, Na, bat, dat, ge, ges, gis, go, goit, goittot, goittotge, han, mat, nai, son</li>
</ul>

<ul>
<li>This corpus contains 56 lemmas tagged as pronouns (PRON): buohkat, buot, dakkár, dat, diekkár, diet, don, dot, duot, dákkár, dát, eanaš, eanebut, earrása, eará, eatnagat, eatnat, gait, gii, gii_nu, giige, goabbat, goabbá, goappaš, goappašagat, goappašat, guhte, guhtege, guktot, guoibmi, ieš, iešguhtege, iešguhtet, iežá, juoga, juohke, juohkehaš, makkár, makkárge, mihkkege, mii, mii_nu, muhtin, muhtun, mun, nubbi, oktage, ollugat, olus, seammá, soames, son, uhccán, unnán, veháš, visot</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 24 lemmas tagged as auxiliaries (AUX): beassat, berret, boahtit, bállet, dáidit, fertet, galgat, gillet, gártat, háliidit, ii, leat, lávet, máhttit, nagodit, orrut, sihtat, soaitit, sáhttit, veadjit, viggat, áigut, álgit, šaddat</li>
</ul>

<ul>
<li>Out of the above, 19 lemmas occurred sometimes as AUX and sometimes as VERB: beassat, boahtit, dáidit, fertet, galgat, gillet, gártat, háliidit, leat, lávet, máhttit, orrut, sihtat, sáhttit, veadjit, viggat, áigut, álgit, šaddat</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: lea, leat, ii, lei, eai, ledje, galgá, lean, sáhttá, in</li>
    <li>VERB: lea, leat, lei, ledje, bođii, boahtá, manai, dieđe, lohká, lean</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: leamen, áigume, áigumin</li>
    <li>VERB: beroškeahttá, boahtimin, manadettiin, orodettiin, ráhkadettiin, vácci, fárremin, leamen, čierastallame, čuoigga</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: leat, beassat, sáhttit, leahkit, máhttit, álgit</li>
    <li>VERB: leat, vuolgit, boahtit, bargat, mannat, geahččat, oastit, oažžut, dahkat, ráhkadit</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: leamaš, beassan, berren, gártan, leamašan, sáhttán</li>
    <li>VERB: oaidnán, ožžon, boahtán, leamaš, mannan, oahppan, čállán, bargan, dahkan, váldán</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>AUX: amadet, amas, amaset, amat</li>
    <li>VERB: vuoššažit</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>AUX-Fin: leaba, leahppi, eaba, ean, fertebeahtti, letne, leigga, eahppi, ferteba, fertiiga</li>
      <li>PRON: soai, moai, doai, munno, dudno, sudno, sudnos, ieža, dudnos, munnos</li>
      <li>VERB-Fin: boahtiba, attiiga, leaba, lohkaba, vácciiga, Boahtti, Gárvodeahkku, Leahppi, Manni, bohte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: buorit, čeahpit, duhtavaččat, stuorrát, buriid, viššalat, bivnnuhat, boarrásepmosat, buoremusaid, dehálaččat</li>
      <li>AUX-Fin: leat, eai, ledje, eat, galget, lehpet, sáhttet, fertejit, sáhtte, eaige</li>
      <li>AUX-Sup: amadet, amaset</li>
      <li>NOUN: olbmot, mánát, mánáid, oahppit, olbmuid, nieiddat, sápmelaččat, biktasiid, sámiid, sámit</li>
      <li>NUM: Galliid, golmmain, guovttit, Galliin, Gallit, golmmaide, golmmaiguin, guvttiid, njealjit, ovttaid</li>
      <li>PRON: mii, sii, min, sin, daid, geat, dii, dat, mat, mis</li>
      <li>PROPN: Sámi_Jienat, Davviriikkaid</li>
      <li>VERB-Fin: leat, ledje, bohte, ožžot, bidjat, orro, bohtet, manne, šaddet, vulget</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: buorre, váttis, nuppi, vejolaš, veara, boaris, dehálaš, suohtas, buori, divrras</li>
      <li>AUX-Fin: lea, ii, lei, galgá, sáhttá, in, lean, leat, áiggun, it</li>
      <li>AUX-Sup: amas, amat</li>
      <li>NOUN: sámi, jagi, sámegiela, eadni, beaivvi, gánda, oahpaheaddji, olmmoš, stállu, olbmo</li>
      <li>NUM: guokte, golbma, ovtta, okta, moadde, máŋga, golmma, vihtta, guovtti, máŋgga</li>
      <li>PRON: son, mun, dan, dat, dán, mu, don, mii, maid, su</li>
      <li>PROPN: Gállá, Liná, Norgga, Kárášjogas, Máret, Finnmárkku, Guovdageainnus, Máhtte, Sámi, Kárášjoga</li>
      <li>VERB-Fin: lea, lei, bođii, boahtá, manai, lohká, šattai, šaddá, oidnen, manná</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abe
    <ul>
      <li>VERB-Ger: beroškeahttá, eahpitkeahttá, logakeahttá, bážikeahttá, dieđikeahttá, mávssekeahtes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: buori, buriid, ollu, Goalmmáda, baháid, buhtismeahttumiid, doloža, guoskevačča, sullasačča, suohttasiiddiska</li>
      <li>NOUN: sámegiela, veahki, bierggu, biktasiid, mánáid, reivve, girjji, girjjiid, gáfe, barggu</li>
      <li>NUM: guokte, moadde, golbma, máŋga, ovtta, vihtta, Galliid, guhtta, njeallje, 1300</li>
      <li>PRON: dan, maid, su, iežas, daid, dán, iežaset, du, mu, maidege</li>
      <li>PROPN: Sarvva, Liná, Divvuma, Máhte, Sámedikki, Antonsen, Beckham, Buolbmága, Busi, Efraima</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: buriin</li>
      <li>NOUN: biillain, mánáiguin, mánáin, vugiin, beatnagiiddisguin, beatnagiin, biillaiguin, bissuin, boazodoaluin, borramušain</li>
      <li>NUM: ovttain, golmmain, guvttiin, viđain, galliin, golmmaiguin, čuđiin</li>
      <li>PRON: dainna, daiguin, dáinna, iežainis, nuppiin, suinna, duinna, iežainan, iežaineaskka, maiguin</li>
      <li>PROPN: Sámedikkiin, Birehiin, Hanseniin, Iŋggáin, Juffáin, Máhte-Iŋggáin, Márehiin, Nilut_Cupain, Rihtáin, Riibmagállásiin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ess
    <ul>
      <li>ADJ: duhtavažžan, nubbin, seavdnjadin, nuorran, ruoksadin, bassin, bivnnuhin, boarisin, buhtisin, buhtismeahttumin</li>
      <li>AUX-Ger: leamen, áigume, áigumin</li>
      <li>NOUN: oahpaheaddjin, lassin, veahkkin, ovdamearkan, vuođđun, buohccedivššárin, nuorran, Eurohpameašttirin, bassin, buohccin</li>
      <li>NUM: guoktin, oktan</li>
      <li>PRON: danin, dákkárin, iehčaneame</li>
      <li>PROPN: Gállábárdnin, Jesusin, Mihkkalažžan, Márehažžan, Smierrun</li>
      <li>VERB-Ger: boahtimin, fárremin, leamen, čierastallame, bargame, bargamin, bassaladdame, bassame, boahtime, oađđimin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: nuppi, jagáš, buoremusaid, buori, 7-jahkásačča, buriid, doloža, parlamentáralaččaid, ráhkkásis</li>
      <li>NOUN: sámi, jagi, beaivvi, áigge, olbmo, sámegiela, máná, áiggi, skuvlla, sámiid</li>
      <li>NUM: golmma, viđa, máŋgga, ovtta, 12, guovtti, 1.8.2001, moatti, 05.01.00, 12.03.2010</li>
      <li>PRON: mu, dan, dán, min, su, iežas, sin, du, daid, iežaset</li>
      <li>PROPN: Norgga, Sámi, Finnmárkku, Kárášjoga, Romssa, Sámedikki, Ipmila, Guovdageainnu, Deanu, Ruoŧa</li>
      <li>VERB-Ger: vácci, čuoigga, gudnejahttin, ráhkistan, Mearkkašan, Suga, bora, fuopmášan, namahan, njága</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ill
    <ul>
      <li>ADJ: sullásaččaide</li>
      <li>NOUN: mánáide, skuvlii, gávpogii, meahccái, sámegillii, internáhttii, mollii, bargui, heajaide, siidii</li>
      <li>NUM: golmma, beannot, guovtti, čuohtái, moatti, máŋgga, njealji, ovtta, golmmaide</li>
      <li>PRON: munnje, dasa, sutnje, dutnje, sidjiide, alccesis, dán, midjiide, dan, earáide</li>
      <li>PROPN: Kárášjohkii, Sápmái, Ellii, Finnmárkkuopmodahkii, Gáivutnii, Hámmárfestii, Trosterudii, Aarbortii, Abbai, Arnii</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: nuppi, Nuorabuin, Nuoramusain, doložis, ráhkkásisttán</li>
      <li>NOUN: skuvllas, internáhtas, guovllus, viesus, oasis, oktavuođas, olbmuin, barggus, goađis, gávpogis</li>
      <li>NUM: ovtta, guovtti, 1982:s, 1995:s, golmmain, máŋgga, 1834:s, 1877:s, 1898:s, 1899:s</li>
      <li>PRON: mus, dus, das, mis, sis, sus, dán, dan, mas, dain</li>
      <li>PROPN: Kárášjogas, Guovdageainnus, Finnmárkkus, Deanus, Gáivuonas, Norggas, Romssas, Máhtes, Olmmáivákkis, Oslos</li>
      <li>VERB-Ger: goargŋumis, juhkamis, bargamis, borgguheames, botkemis, deaivvadeamis, gođđimis, guldaleames, jáhkkimis, vuostáváldimis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: buorre, váttis, vejolaš, veara, buorit, boaris, dehálaš, suohtas, divrras, duohta</li>
      <li>NOUN: olbmot, mánát, eadni, gánda, olmmoš, stállu, oahppit, mánná, nieida, oahpaheaddji</li>
      <li>NUM: okta, guokte, golbma, máŋga, njeallje, vihtta, moadde, 1971, 2005, 50</li>
      <li>PRON: son, mun, mii, dat, sii, don, dát, soai, moai, geat</li>
      <li>PROPN: Gállá, Máret, Máhtte, Liná, Ánde, Sámediggi, Ánne, Biret, Ipmil, Finnmárkkuopmodat</li>
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
      <li>ADJ: buoret, eanet, stuorát, guhkit, ovddit, vuolit, heajut, stuorit, dárkilet, geahppaset</li>
      <li>ADV: eanet, eambbo, unnit, buorebut, geahppaseabbot, lagat, viidáseappot, viidáseppot, árabuš, árat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: buoremus, boarráseamos, maŋimuš, maŋimus, nuoramus, eanemus, maŋemus, ođđaseamos, riggámus, Máttimus</li>
      <li>ADV: buoremusat, millosepmosit, unnimustá</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: ii, eai, in, eat, it, ale, eaba, iige, eaige, ean</li>
      <li>AUX-Sup: amadet, amas, amaset, amat</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Part: leamaš, beassan, berren, gártan, leamašan, sáhttán</li>
      <li>VERB-Part: oaidnán, ožžon, boahtán, leamaš, mannan, oahppan, čállán, bargan, dahkan, váldán</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: livččii, livčče, galggaše, galggašii, sáhtášii, berrešii, livččen, áiggošin, Sáhtášeidde, Sáhtášeigga</li>
      <li>VERB-Fin: boađášii, livččii, Dieđálin, Gillešeiddet, Gorošii, adnojuvvošii, barggašeimme, barggašii, bisošedje, boađáše</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: ale, allet, Leage, Lehket</li>
      <li>VERB-Fin: boađe, mana, váldde, bija, geahča, Gula, Oahpa, Addet, Atte, Bidjet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: lea, leat, ii, lei, eai, ledje, galgá, lean, sáhttá, in</li>
      <li>VERB-Fin: lea, leat, lei, ledje, bođii, boahtá, manai, lohká, dieđe, lean</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>AUX-Fin: leažžá, leaččan, sáhtežan, Leaččat, leažžat, ležže, sáhtežetne, sáhtežit</li>
      <li>VERB-Fin: bođeža, leažžá, bođežit, Bođežehpet, Leaččan, bođežeaba, dagažit, eležat, Boraža, Boražeaba</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: lei, ledje, galggai, lean, fertii, ledjen, sáhtte, gillen, leimmet, lávejedje</li>
      <li>VERB-Fin: lei, ledje, bođii, manai, šattai, lean, bohte, oidnen, oinnii, válddii</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: lea, leat, galgá, sáhttá, lean, galget, áiggun, leaba, ferte, lehpet</li>
      <li>VERB-Fin: lea, leat, boahtá, lohká, dieđe, šaddá, ožžot, manná, oažžu, bidjat</li>
      <li>VERB-Part: orru, dábuhahtti, gođđi, johtti, Leahkki, buolli, ealli, fátmmasteaddji, juolludeaddji, vahágahtti</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: adnojuvvo, álggahuvvui, addojuvvo, dárbbašuvvojit, gáibiduvvo, mearriduvvo, biddjojuvvo, bálkestuvvo, daddjojuvvo, geavahuvvo</li>
      <li>VERB-Inf: adnojuvvot, árvvoštallojuvvot, čuovvoluvvot, addojuvvot, bisuhuvvot, dahkkot, dohkkehuvvot, dubmejuvvot, gávnnahuvvot, hábmejuvvot</li>
      <li>VERB-Part: filbmejuvvon, ráddjejuvvon, ráhkaduvvon, biddjon, bovdejuvvon, dahkkojuvvon, gildojuvvon, gorrojuvvon, hábmejuvvon, mearriduvvon</li>
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
      <li>PRON: dat, dan, dán, dát, dakkár, daid, dasa, das, dákkár, dainna</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: buot, juohke, eará, muhtun, unnán, muhtin, seamma, oktage, nubbi, makkárge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: makkár, maid, Mii, gii, Gean, Goabbá, maidba</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: son, mun, mii, sii, mu, don, su, iežas, soai, min</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: guhtet, goabbat, guimmiideaset, guimmiideasetguin, guoimmiska, nubbi, nuppiin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: mii, maid, geat, mat, gii, mas, gean, guhte, man, geain</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: guokte, golbma, ovtta, okta, moadde, máŋga, golmma, vihtta, guovtti, máŋgga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Coll
    <ul>
      <li>NOUN: máŋggas, guovttis, Máŋgasat, golbmasa, golbmasis, golmmas, guovttos, máná-guovttos, viđas, Biera-guovttos</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: iežas, iežaset, ieš, ieža, iežan, iežat, alccesis, alddis, iežadet, iežamet</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: in, lean, eat, áiggun, leat, ledjen, ean, ferten, fertet, leimmet</li>
      <li>PRON: mun, mii, mu, min, moai, munnje, mus, mis, mon, midjiide</li>
      <li>VERB-Fin: oidnen, bidjat, muittán, oainnán, attán, lean, orun, boađán, vuolggán, čállen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: leat, it, lehpet, ale, leahppi, fertet, galggat, sáhtát, allet, fertebeahtti</li>
      <li>AUX-Sup: amadet, amat</li>
      <li>PRON: don, dii, du, dus, doai, din, dutnje, dis, dudno, dudnos</li>
      <li>VERB-Fin: boađe, váldde, dovddat, mana, Bija, boađát, manat, oaččut, Gula, Máhtát</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: lea, ii, leat, lei, eai, ledje, galgá, sáhttá, galget, leaba</li>
      <li>AUX-Sup: amas, amaset</li>
      <li>PRON: son, sii, su, soai, sin, sis, sus, sutnje, sidjiide, sudno</li>
      <li>VERB-Fin: lea, leat, lei, ledje, bođii, boahtá, manai, lohká, šattai, bohte</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: suohttasiiddiska, suohttasiiddáme</li>
      <li>NOUN: beatnagasaska, mánáidasame, Oappásteame, basttiideaskka, beatnageatte, beatnagiiddiska, botnjiideaskka, bártnisteatte, girjjiideatte, gusade</li>
      <li>PRON: iežade, iežaska, alcceseame, iežaineaskka, alcceseaskka, alcceseatte, alddiska, alddáde, guoimmiska, iehčaneame</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: suohttasiiddámet</li>
      <li>ADV: gaskaneaset</li>
      <li>NOUN: mánáideaset, Oabbámet, beatnagasaset, biergasiiddiset, biillaideattetguin, dávviriiddádet, eatnigielaset, elliideaset, fulkkiideaset, gieđaideaset</li>
      <li>PRON: iežaset, iežadet, iežamet, alcceseamet, alcceseaset, alcceseattet, alddiset, alddámet, guimmiideaset, guimmiideasetguin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ráhkkásis, ráhkkásisttán, suohttasiiddán</li>
      <li>ADV: badjelasas</li>
      <li>NOUN: vielljan, eatnis, áhčis, dahkamušaidis, namas, beatnagiiddisguin, beatnagiiddásis, beatnagis, bártniidis, bártnážan</li>
      <li>PRON: iežas, iežan, iežat, alccesis, alddis, iežainis, alcces, alccesan, alccesat, iežainan</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Connegative</a>
    <ul>
      <li>Yes
        <ul>
          <li>AUX-Fin: leat, sáhte, lean, galgga, gillen, sáhttán, nagot, galggaše, háliit, hálit</li>
          <li>VERB-Fin: leat, dieđe, lean, boađe, beasa, diehtán, daga, oaččo, dovdda, liikon</li>
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
          <li>ADJ: ráhkkásisttán, suohttasiiddáme, suohttasiiddámet, suohttasiiddán</li>
          <li>NOUN: vielljan, bártnážan, heaggan, mánáidasame, mánážan, vielljasan, áhkkán, Oabbámet, Oappásteame, beatnagan</li>
          <li>PRON: iežan, iežamet, alcceseamet, alccesan, alcceseame, iežainan, alddámet, alddán, iehčaneame, iežaineame</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NOUN: mánát, áhččát, beatnagat, beatnageatte, beatnagiiddát, biergasiiddát, biiggáinat, biillaideattetguin, bálvaleddjiidat, bártnisteatte</li>
          <li>PRON: iežat, iežadet, iežade, alccesat, alcceseattet, alcceseatte, alddáde, iežaineatte</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: ráhkkásis, suohttasiiddiska</li>
          <li>ADV: badjelasas, gaskaneaset</li>
          <li>NOUN: eatnis, áhčis, dahkamušaidis, mánáideaset, namas, beatnagasaska, beatnagiiddisguin, beatnagiiddásis, beatnagis, bártniidis</li>
          <li>PRON: iežas, iežaset, alccesis, alddis, iežainis, iežaska, alcces, alcceseaset, alddiset, iežaineaskka</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: leat.</li>
</ul>

<ul>
<li>This corpus uses 23 lemmas as auxiliaries (<a>aux</a>). Examples: leat, sáhttit, galgat, fertet, áigut, lávet, háliidit, beassat, máhttit, orrut, álgit, berret, nagodit, dáidit, gillet, boahtit, šaddat, soaitit, gártat, viggat, bállet, sihtat, veadjit.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (3)</li>
      <li>VERB-Fin--NOUN-Gen (44)</li>
      <li>VERB-Fin--NOUN-Nom (1053)</li>
      <li>VERB-Fin--PRON-Nom (811)</li>
      <li>VERB-Ger--NOUN-Acc (5)</li>
      <li>VERB-Ger--NOUN-Gen (2)</li>
      <li>VERB-Ger--NOUN-Nom (16)</li>
      <li>VERB-Ger--PRON-Acc (2)</li>
      <li>VERB-Ger--PRON-Gen (2)</li>
      <li>VERB-Ger--PRON-Nom (12)</li>
      <li>VERB-Inf--NOUN-Acc (19)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Nom (142)</li>
      <li>VERB-Inf--PRON-Acc (12)</li>
      <li>VERB-Inf--PRON-Nom (137)</li>
      <li>VERB-Part--NOUN-Acc (4)</li>
      <li>VERB-Part--NOUN-Gen (6)</li>
      <li>VERB-Part--NOUN-Nom (128)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Acc (9)</li>
      <li>VERB-Part--PRON-Nom (124)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (632)</li>
      <li>VERB-Fin--NOUN-Gen (23)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Acc (170)</li>
      <li>VERB-Ger--NOUN-Acc (24)</li>
      <li>VERB-Ger--PRON-Acc (5)</li>
      <li>VERB-Inf--NOUN-Acc (340)</li>
      <li>VERB-Inf--NOUN-Gen (6)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-Acc (56)</li>
      <li>VERB-Part--NOUN-Acc (123)</li>
      <li>VERB-Part--NOUN-Gen (4)</li>
      <li>VERB-Part--PRON-Acc (44)</li>
      <li>VERB-Sup--NOUN-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 16 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: lohkat iežas, lohkat iežaset, atnit iežas, bargat iežaset, dahkat iežaset, doalahit iežas, doallat iežas, dovdat iežas, dovdat iežaset, dovdat iežat, geahččat iežas, geažuhit iežas, heivehallat iežaset, kvalifiseret iežaset, ovddidit iežas, rábmot iežat</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>acl:relcl</a>, <a>aux:neg</a>, <a>cc:preconj</a>, <a>compound:nn</a>, <a>nmod:poss</a>, <a>xcomp:obj</a>, <a>xcomp:pred</a></li>
<li>The following 10 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
