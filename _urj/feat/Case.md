---
layout: feature
title: 'Case'
shortdef: 'case'
---


`Case` is usually an inflectional feature of nouns, and, in many Uralic
languages, adjectives, pronouns, and numerals, some adpositions and adverbs,
and non-finite forms of verbs. The case feature typically matches case
suffixes. Some cases can be considered derivational, creating a new lexeme
rather than part of the original lexical features, this is often case with
marginal semantic cases that are not part of lexical constructions. Uralic
languages have rich case systems and there are few dozens of values that can be
used, it is advisable to try and match an existing value before documenting a
new one.

The values can be roughly separated into grammatical (`Nom`, `Acc`, `Dat`) and
semantic. Semantic cases are typically derived of proto-Uralic directional case
systems (to, on, from, and later: inner, outer and surficial, etc.), but are
different between Uralic languages. Marginal cases are sometimes considered as
derivational suffixes instead.

The case systems of Uralic languages vary a lot, a care should be taken in
using correct values mapping between different languages. For example,
Hungarian has full nominative-accusative-dative grammatical case system, 
whereas Finnish has genitive and partitive standing in for object cases and
no dative; Hungarian has a 9 locative case system whereas Finnish has 6 and
North Sámi 4. It is not always easy to map between them using descriptions here
as only guideline.

Distinguishing between marginal cases and derivations have to be done on a
case by case basis. Potential evidence against Case feature includes: no
phonological evidence (e.g. lack of vowel harmony indicates a postpositional
enclitic / compound), no syntactic evidence (e.g. lack of case agreement in
noun phrases) and limited productivity.

<!-- Grammatical cases -->

### `Nom`: Nominative

Nominative is typically an unmarked base form, the form of subject's in basic
clauses, often also the dictionary form and lemma form of the word.

#### Nominative examples

* [fi] _kissa_ "cat", _talo_ "house"
* [fi] _nopea_ "fast", _juokseva_ "running"
* [fi] _minä_ "I", _kolme_ "three"

~~~ conllu
# sentence-text: Tämä ongelma voidaan ratkaista siten, että pieni tarkkailijoiden ydinryhmä toimii pidemmällä aikavälillä.
1       Tämä    tämä    PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       2       det     _       _
2       ongelma ongelma NOUN    N       Case=Nom|Number=Sing    4       dobj    _       _
3       voidaan voida   AUX     V       Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass     4       aux     _       _
4       ratkaista       ratkaista       VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    0       root
    _       _
5       siten   siten   ADV     Adv     _       4       advmod  _       SpaceAfter=No
6       ,       ,       PUNCT   Punct   _       11      punct   _       _
7       että    että    SCONJ   C       _       11      mark    _       _
8       pieni   pieni   ADJ     A       Case=Nom|Degree=Pos|Number=Sing 10      amod    _       _
9       tarkkailijoiden tarkkailija     NOUN    N       Case=Gen|Number=Plur    10      nmod:poss       _       _
10      ydinryhmä       ydin#ryhmä      NOUN    N       Case=Nom|Number=Sing    11      nsubj   _       _
11      toimii  toimia  VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 5       ccomp
   _       _
12      pidemmällä      pitkä   ADJ     A       Case=Ade|Degree=Cmp|Number=Sing 13      amod    _       _
13      aikavälillä     aika#väli       NOUN    N       Case=Ade|Number=Sing    11      nmod    _       SpaceAfter=No
14      .       .       PUNCT   Punct   _       4       punct   _       _
~~~


### `Acc`: Accusative

Accusative is typically the form of direct object, but not necessarily solely.
For example, in Finnish the direct object is mainly seen in genitive `Gen` and
partitive `Par` forms instead (because of language history).

#### Accusative examples

* [fi] _hänet_ "him"

~~~ conllu
1       -       -       PUNCT   Punct   _       5       punct   _       _
2       Opettaja        opettaja        NOUN    N       Case=Nom|Number=Sing    5       vocative        _       SpaceA
fter=No
3       ,       ,       PUNCT   Punct   _       2       punct   _       _
4       mä      minä    PRON    Pron    Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll   5       nsubj   _
       _
5       näin    nähdä   VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
6       sut     sinä    PRON    Pron    Case=Acc|Number=Sing|Person=2|PronType=Prs|Style=Coll   5       dobj    _
       _
7       eilen   eilen   ADV     Adv     _       5       advmod  _       _
8       kaupungilla     kaupunki        NOUN    N       Case=Ade|Number=Sing    5       nmod    _       SpaceAfter=No
9       .       .       PUNCT   Punct   _       5       punct   _       _
~~~

### `Dat`: Dative

Dative is typically a form for indirect object, though many other (semantic)
cases are used in constructions that are considered indirect objects in some of
the grammars.

#### Dative examples

None in Finnish.

### `Par`: Partitive

Partitive is used for various tasks, including object case, indefinite semantics
etc.

#### Partitive examples

* [fi] _kissaa_ "a cat, of a cat", _taloa_ "a house, of a house"

~~~ conllu
# sentence-text: Se ravasi käytännössä siksakkia joen toisen penkan muurilta toiselle, kävi tervehtimässä kaikkia vastaantulijoita ja varmuuden vuoksi kyräili jokaista hiihtäjää.
1       Se      se      PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       2       nsubj   11:nsubj|12:nsubj|18:nsubj      _
2       ravasi  ravata  VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
3       käytännössä     käytäntö        NOUN    N       Case=Ine|Number=Sing    2       nmod    _       _
4       siksakkia       siksakki        NOUN    N       Case=Par|Number=Sing    2       dobj    _       _
5       joen    joki    NOUN    N       Case=Gen|Number=Sing    7       nmod:poss       _       _
6       toisen  toinen  PRON    Pron    Case=Gen|Number=Sing|PronType=Rcp       7       det     _       _
7       penkan  penkka  NOUN    N       Case=Gen|Number=Sing    8       nmod:poss       _       _
8       muurilta        muuri   NOUN    N       Case=Abl|Number=Sing    2       nmod    _       _
9       toiselle        toinen  PRON    Pron    Case=All|Number=Sing|PronType=Rcp       2       nmod    _       SpaceAfter=No
10      ,       ,       PUNCT   Punct   _       2       punct   _       _
11      kävi    käydä   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 2       conj
    _       _
12      tervehtimässä   tervehtiä       VERB    V       Case=Ine|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act   11
      xcomp   _       _
13      kaikkia kaikki  PRON    Pron    Case=Par|Number=Plur|PronType=Ind       14      det     _       _
14      vastaantulijoita        vastaantulija   NOUN    N       Case=Par|Number=Plur    12      dobj    _       _
15      ja      ja      CONJ    C       _       2       cc      _       _
16      varmuuden       varmuus NOUN    N       Case=Gen|Number=Sing    18      nmod    _       _
17      vuoksi  vuoksi  ADP     Adp     AdpType=Post    16      case    _       _
18      kyräili kyräillä        VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 2
       conj    _       _
19      jokaista        jokainen        PRON    Pron    Case=Par|Number=Sing|PronType=Ind       20      det     _
       _
20      hiihtäjää       hiihtäjä        NOUN    N       Case=Par|Number=Sing    18      dobj    _       SpaceAfter=No
21      .       .       PUNCT   Punct   _       2       punct   _       _
~~~


<!-- Genitive -->

### `Gen`: Genitive

Genitive is typically used to form owning construction. In Finnish, genitive
is used for many grammatical constructions, such as necessive subject, direct
object, and so forth. Historically Finnish may have had an accusative suffix
of _-m_ whereas genitive suffix is _-n_, that have been merged, however, this
distinction is not made in Universal Dependencies analysis (there should be a
guideline saying that historical analyses are to be avoided).

#### Genitive examples

* [fi] _kissan_ "cat’s", _talon_ "house’s"

~~~ conllu
# sentence-text: Ainoastaan ihan lopun tapahtumat alkoivat olla dramaturgisesti puuroa, ikään kuin innostus olisi vienyt tarinaa eteenpäin, mutta yhtäkkiä olisi tullut ongelma, mihin jutun päättää.
1       Ainoastaan      ainoastaan      ADV     Adv     _       3       advmod  _       _
2       ihan    ihan    ADV     Adv     _       3       advmod  _       _
3       lopun   loppu   NOUN    N       Case=Gen|Number=Sing    4       nmod:poss       _       _
4       tapahtumat      tapahtuma       NOUN    N       Case=Nom|Number=Plur    5       nsubj   8:nsubj:cop     _
5       alkoivat        alkaa   VERB    V       Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 0
       root    _       _
6       olla    olla    VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    8       cop     _       _
7       dramaturgisesti dramaturginen   ADV     Adv     Derivation=Sti  8       advmod  _       _
8       puuroa  puuro   NOUN    N       Case=Par|Number=Sing    5       xcomp   _       SpaceAfter=No
9       ,       ,       PUNCT   Punct   _       14      punct   _       _
10      ikään   ikään   ADV     Adv     _       14      advmod  21:advmod       _
11      kuin    kuin    ADV     Adv     _       10      mwe     _       _
12      innostus        innostus        NOUN    N       Case=Nom|Number=Sing    14      nsubj   _       _
13      olisi   olla    AUX     V       Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act    14      aux     _
       _
14      vienyt  viedä   VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act   5
       advcl   _       _
15      tarinaa tarina  NOUN    N       Case=Par|Number=Sing    14      dobj    _       _
16      eteenpäin       eteenpäin       ADV     Adv     _       14      advmod  _       SpaceAfter=No
17      ,       ,       PUNCT   Punct   _       14      punct   _       _
18      mutta   mutta   CONJ    C       _       14      cc      _       _
19      yhtäkkiä        yhtäkkiä        ADV     Adv     _       21      advmod  _       _
20      olisi   olla    AUX     V       Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act    21      aux     _
       _
21      tullut  tulla   VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act   14
      conj    5:advcl _
22      ongelma ongelma NOUN    N       Case=Nom|Number=Sing    21      nsubj   _       SpaceAfter=No
23      ,       ,       PUNCT   Punct   _       26      punct   _       _
24      mihin   mikä    PRON    Pron    Case=Ill|Number=Sing|PronType=Int       26      nmod    _       _
25      jutun   juttu   NOUN    N       Case=Gen|Number=Sing    26      dobj    _       _
26      päättää päättää VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 22      ccomp
   _       SpaceAfter=No
27      .       .       PUNCT   Punct   _       5       punct   _       _
~~~


<!-- Locative case systems -->

### `Ine`: Inessive case

Inessive is case for "being inside". It is a part of the Uralic extended
locative case system.

#### Inessive examples

* [fi] _kissassa_ "in a cat", _talossa_ "in a house"

~~~ conllu
# sentence-text: Rakastan värkätä kaikenlaista juttua omassa verstaassani niin, että aika vain suhahtaa ohi.
1       Rakastan        rakastaa        VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act 0       root    _       _
2       värkätä värkätä VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    1       xcomp   _       _
3       kaikenlaista    kaikenlainen    ADJ     A       Case=Par|Degree=Pos|Number=Sing 4       amod    _       _
4       juttua  juttu   NOUN    N       Case=Par|Number=Sing    2       dobj    _       _
5       omassa  oma     ADJ     A       Case=Ine|Degree=Pos|Number=Sing 6       amod    _       _
6       verstaassani    verstas NOUN    N       Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=1   2       nmod
    _       _
7       niin    niin    ADV     Adv     _       2       advmod  _       SpaceAfter=No
8       ,       ,       PUNCT   Punct   _       12      punct   _       _
9       että    että    SCONJ   C       _       12      mark    _       _
10      aika    aika    NOUN    N       Case=Nom|Number=Sing    12      nsubj   _       _
11      vain    vain    ADV     Adv     _       12      advmod  _       _
12      suhahtaa        suhahtaa        VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 7       ccomp   _       _
13      ohi     ohi     ADV     Adv     _       12      advmod  _       SpaceAfter=No
14      .       .       PUNCT   Punct   _       1       punct   _       _
~~~


### `Ela`: Elative case

Elative is case for "moving out from inside". It is a part of the Uralic
extended locative case system.

#### Elative examples

* [fi] _kissasta_ "from a cat", _talosta_ " from a house"

~~~ conllu
# sentence-text: Tykkään aivan mielettömästi piirretyistä ja tästä tuli kyllä eräs uusista elokuvasuosikeistani.:)
1       Tykkään tykätä  VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
2       aivan   aivan   ADV     Adv     _       3       advmod  _       _
3       mielettömästi   mielettömästi   ADV     Adv     _       1       advmod  _       _
4       piirretyistä    piirretty       NOUN    N       Case=Ela|Number=Plur    1       nmod    _       _
5       ja      ja      CONJ    C       _       1       cc      _       _
6       tästä   tämä    PRON    Pron    Case=Ela|Number=Sing|PronType=Dem       7       nmod    _       _
7       tuli    tulla   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act 1       conj
    _       _
8       kyllä   kyllä   ADV     Adv     _       7       advmod  _       _
9       eräs    eräs    PRON    Pron    Case=Nom|Number=Sing|PronType=Ind       7       nsubj   _       _
10      uusista uusi    ADJ     A       Case=Ela|Degree=Pos|Number=Plur 11      amod    _       _
11      elokuvasuosikeistani    elo#kuva#suosikki       NOUN    N       Case=Ela|Number=Plur|Number[psor]=Sing|Person[psor]=1   9       nmod    _       SpaceAfter=No
12      .       .       PUNCT   Punct   _       1       punct   _       SpaceAfter=No
13      :)      :)      SYM     Symb    _       1       discourse       _       _
~~~

### `Ill`: Illative case

Illative is case for "moving into inside". It is a part of the Uralic extended
locative case system.

#### Illative examples

* [fi] _kissaan_ "into a cat", _taloon_ "into a house"

~~~ conllu
# sentence-text: Luulenpa että yksi syy jäädä kotiin on nimenomaan se, että tekemistä on ollut kovin paljon.
1       Luulenpa        luulla  VERB    V       Clitic=Pa|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=
Act       0       root    _       _
2       että    että    SCONJ   C       _       9       mark    _       _
3       yksi    yksi    NUM     Num     Case=Nom|Number=Sing|NumType=Card       4       nummod  _       _
4       syy     syy     NOUN    N       Case=Nom|Number=Sing    9       nsubj:cop       _       _
5       jäädä   jäädä   VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    4       acl     _       _
6       kotiin  koti    NOUN    N       Case=Ill|Number=Sing    5       nmod    _       _
7       on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 9       cop
     _       _
8       nimenomaan      nimen#omaan     ADV     Adv     _       9       advmod  _       _
9       se      se      PRON    Pron    Case=Nom|Number=Sing|PronType=Dem       1       ccomp   _       SpaceAfter=No
10      ,       ,       PUNCT   Punct   _       16      punct   _       _
11      että    että    SCONJ   C       _       16      mark    _       _
12      tekemistä       tekeminen       NOUN    N       Case=Par|Number=Sing    16      nsubj:cop       _       _
13      on      olla    AUX     V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 16      aux
     _       _
14      ollut   olla    VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act   16
      cop     _       _
15      kovin   kovin   ADV     Adv     _       16      advmod  _       _
16      paljon  paljon  ADV     Adv     _       9       ccomp   _       SpaceAfter=No
17      .       .       PUNCT   Punct   _       1       punct   _       _
~~~

### `Ade`: Adessive case

Adessive is case for "being outside". It is a part of the Uralic
extended locative case system.

#### Adessive examples

* [fi] _kissalla_ "on a cat", _talolla_ "near a house"

~~~
# sentence-text: Vietin eilisen päivän tosiaan sohvalla lepäillen ja jalkaani hoitaen.
1       Vietin  viettää VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
2       eilisen eilinen ADJ     A       Case=Gen|Degree=Pos|Number=Sing 3       amod    _       _
3       päivän  päivä   NOUN    N       Case=Gen|Number=Sing    1       dobj    _       _
4       tosiaan tosiaan ADV     Adv     _       1       advmod  _       _
5       sohvalla        sohva   NOUN    N       Case=Ade|Number=Sing    6       nmod    _       _
6       lepäillen       lepäillä        VERB    V       Case=Ins|InfForm=2|Number=Sing|VerbForm=Inf|Voice=Act   1
       advcl   _       _
7       ja      ja      CONJ    C       _       6       cc      _       _
8       jalkaani        jalka   NOUN    N       Case=Par|Number=Sing|Number[psor]=Sing|Person[psor]=1   9       dobj
    _       _
9       hoitaen hoitaa  VERB    V       Case=Ins|InfForm=2|Number=Sing|VerbForm=Inf|Voice=Act   6       conj    1:advcl SpaceAfter=No
10      .       .       PUNCT   Punct   _       1       punct   _       _
~~~

### `Abl`: Ablative case

Ablative is case for "moving from outside". It is a part of the Uralic extended
locative case system.

#### Ablative examples

* [fi] _kissalta_ "from a cat", _talolta_ "from around a house"

~~~ conllu
# sentence-text: Tämän lisäksi osa rahoituksesta pyritään keräämään tulevalta yleisöltä (crowd funding).
1       Tämän   tämä    PRON    Pron    Case=Gen|Number=Sing|PronType=Dem       5       nmod    _       _
2       lisäksi lisäksi ADP     Adp     AdpType=Post    1       case    _       _
3       osa     osa     NOUN    N       Case=Nom|Number=Sing    6       dobj    _       _
4       rahoituksesta   rahoitus        NOUN    N       Case=Ela|Number=Sing    3       nmod    _       _
5       pyritään        pyrkiä  VERB    V       Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass     0       root    _
       _
6       keräämään       kerätä  VERB    V       Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act   5       xcomp
   _       _
7       tulevalta       tuleva  ADJ     A       Case=Abl|Degree=Pos|Number=Sing 8       amod    _       _
8       yleisöltä       yleisö  NOUN    N       Case=Abl|Number=Sing    6       nmod    _       _
9       (       (       PUNCT   Punct   _       10      punct   _       SpaceAfter=No
10      crowd   crowd   X       Foreign Foreign=Foreign 5       appos   _       _
11      funding funding X       Foreign Foreign=Foreign 10      foreign _       SpaceAfter=No
12      )       )       PUNCT   Punct   _       10      punct   _       SpaceAfter=No
13      .       .       PUNCT   Punct   _       5       punct   _       _
~~~

### `All`: Allative case

Allative is case for "moving to outside". It is a part of the Uralic
extended locative case system.

#### Allative examples

* [fi] _kissalle_ "to a cat", _talolle_ " to a house"

~~~ conllu
# sentence-text: Eilen ajoin yksin mökille.
1       Eilen   eilen   ADV     Adv     _       2       advmod  _       _
2       ajoin   ajaa    VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act 0       root
    _       _
3       yksin   yksin   ADV     Adv     _       2       advmod  _       _
4       mökille mökki   NOUN    N       Case=All|Number=Sing    2       nmod    _       SpaceAfter=No
5       .       .       PUNCT   Punct   _       2       punct   _       _
~̃~̃~

### `Sup`: Superessive case

Superessive is case for "being on a surface". It is a part of the Uralic extended
locative case system.

#### Superessive examples

None in Finnish.

### `Del`: Delative case

Elative is case for "moving out from surface". It is a part of the Uralic
extended locative case system.

#### Delative examples

None in Finnish.


### `Sub`: Sublative case

Sublative is case for "moving onto a surface". It is a part of the Uralic
extended locative case system.



#### Delative examples

None in Finnish.

<!--
  some Uralic languages will have more of a proto-Uralic three case system
  -->

### `Loc`: Locative case

Locative is case for "being in / at / on". It is a part of Proto-Uralic
basic locative case system.

#### Locative examples

None in Finnish

### `Lat`: Lative case

Lative is case for "moving in / at / on". It is a part of Proto-Uralic
basic locative case system.

#### Lative examples

None in Finnish

<!-- marginal locative -->

### `Ter`: Terminative case

Terminative is case for "moving until".

#### Terminative examples

None in Finnish

### `Pro?`: Prolative case

Prolative is a case for "moving via".

#### Prolative examples

None in Finnish

<!-- locative ~ stative case system -->

### `Ess`: Essive case

Essive is a case for "being something". It is a part of Uralic stative case
system.

#### Essive examples

* [fi] _kissana_ "as a cat", _talona_ "as a house"

~~~ conllu
# sentence-text: Tuomiokirkko rakennuksena tekee minuun aina suuren vaikutuksen.
1       Tuomiokirkko    tuomio#kirkko   NOUN    N       Case=Nom|Number=Sing    3       nsubj   _       _
2       rakennuksena    rakennus        NOUN    N       Case=Ess|Number=Sing    1       nmod    _       _
3       tekee   tehdä   VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
4       minuun  minä    PRON    Pron    Case=Ill|Number=Sing|Person=1|PronType=Prs      3       nmod    _       _
5       aina    aina    ADV     Adv     _       3       advmod  _       _
6       suuren  suuri   ADJ     A       Case=Gen|Degree=Pos|Number=Sing 7       amod    _       _
7       vaikutuksen     vaikutus        NOUN    N       Case=Gen|Number=Sing    3       dobj    _       SpaceAfter=No
8       .       .       PUNCT   Punct   _       3       punct   _       _
~~~

### `Exe`: Exessive case

Exessive is a case for "unbecoming something".

Finnish essives are treated as derivations, e.g. [fi] _papinta_ "from a
priest('s house)"

#### Exessive examples

None in Finnish

### `Tra`: Translative case

Translative is a case for "turning into something".

#### Translative examples

* [fi] _kissaksi_ "into a cat", _taloksi_ "as home, lit. into a house"

~~~ conllu
# sentence-text: Sitten pilkon sipulia hyvin pieneksi silpuksi ja lisään joukkoon.
1       Sitten  sitten  ADV     Adv     _       2       advmod  8:advmod        _
2       pilkon  pilkkoa VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act 0       root
    _       _
3       sipulia sipuli  NOUN    N       Case=Par|Number=Sing    2       dobj    8:dobj  _
4       hyvin   hyvin   ADV     Adv     _       5       advmod  _       _
5       pieneksi        pieni   ADJ     A       Case=Tra|Degree=Pos|Number=Sing 6       amod    _       _
6       silpuksi        silppu  NOUN    N       Case=Tra|Number=Sing    2       xcomp:ds        _       _
7       ja      ja      CONJ    C       _       2       cc      _       _
8       lisään  lisätä  VERB    V       Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act 2       conj
    _       _
9       joukkoon        joukko  NOUN    N       Case=Ill|Number=Sing    8       nmod    _       SpaceAfter=No
10      .       .       PUNCT   Punct   _       2       punct   _       _
~~~


<!-- other marginal -->

### `Abe`: Abessive case

Abessive is a case for "without". 

#### Abessive examples

* [fi] _kissatta_, "without a cat", _talotta_ "without a house"

~~~ conllu
# sentence-text: Olipa kysymys siis tuhansista kadonneista tai Jammun ja Kashmirin joukkohaudoista tai kristittyjen murhaamisesta Orissassa ja heihin kohdistuvista hyökkäyksistä, meidän on edelleen sitouduttava ihmisoikeuksiin ehdoitta 
ja varauksetta.
1       Olipa   olla    VERB    V       Clitic=Pa|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act
       23      advcl   _       _
2       kysymys kysymys NOUN    N       Case=Nom|Number=Sing    1       nsubj   _       _
3       siis    siis    ADV     Adv     _       1       advmod  _       _
4       tuhansista      tuhat   NUM     Num     Case=Ela|Number=Plur|NumType=Card       5       nummod  _       _
5       kadonneista     kadonnut        NOUN    N       Case=Ela|Number=Plur    1       nmod    _       _
6       tai     tai     CONJ    C       _       5       cc      _       _
7       Jammun  Jammu   PROPN   N       Case=Gen|Number=Sing    10      nmod:poss       _       _
8       ja      ja      CONJ    C       _       7       cc      _       _
9       Kashmirin       Kashmir PROPN   N       Case=Gen|Number=Sing    7       conj    10:nmod:poss    _
10      joukkohaudoista joukko#hauta    NOUN    N       Case=Ela|Number=Plur    5       conj    1:nmod  _
11      tai     tai     CONJ    C       _       5       cc      _       _
12      kristittyjen    kristitty       ADJ     A       Case=Gen|Degree=Pos|Number=Plur 13      nmod:gobj       _
       _
13      murhaamisesta   murhata NOUN    N       Case=Ela|Derivation=Minen|Number=Sing   5       conj    1:nmod  _
14      Orissassa       Orissa  PROPN   N       Case=Ine|Number=Sing    13      nmod    _       _
15      ja      ja      CONJ    C       _       13      cc      _       _
16      heihin  hän     PRON    Pron    Case=Ill|Number=Plur|Person=3|PronType=Prs      17      nmod    _       _
17      kohdistuvista   kohdistua       VERB    V       Case=Ela|Degree=Pos|Number=Plur|PartForm=Pres|VerbForm=Part|Vo
ice=Act   18      acl     _       _
18      hyökkäyksistä   hyökkäys        NOUN    N       Case=Ela|Number=Plur    13      conj    1:nmod  SpaceAfter=No
19      ,       ,       PUNCT   Punct   _       1       punct   _       _
20      meidän  minä    PRON    Pron    Case=Gen|Number=Plur|Person=1|PronType=Prs      23      nsubj   _       _
21      on      olla    AUX     V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 23      aux
     _       _
22      edelleen        edelleen        ADV     Adv     _       23      advmod  _       _
23      sitouduttava    sitoutua        VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Vo
ice=Pass  0       root    _       _
24      ihmisoikeuksiin ihmis#oikeus    NOUN    N       Case=Ill|Number=Plur    23      nmod    _       _
25      ehdoitta        ehto    NOUN    N       Case=Abe|Number=Plur    23      nmod    _       _
26      ja      ja      CONJ    C       _       25      cc      _       _
27      varauksetta     varaus  NOUN    N       Case=Abe|Number=Sing    25      conj    23:nmod SpaceAfter=No
28      .       .       PUNCT   Punct   _       23      punct   _       _
~~~

### `Ins`: Instructive or instrumental case

Instructive is a case for "with" (as a tool, means etc.).

Many Finnish instructives are treated as adverbs, e.g. [fi] _käsin_ "by hand,
manually".

#### Instructive examples

* [fi] _kissoin_ "with cats", _taloin_ "with houses"

~~~ conllu
# sentence-text: Joulun jälkeen on hyvä hetki katsella ruokakaupan hyllyjä aivan uusin silmin.
1       Joulun  joulu   NOUN    N       Case=Gen|Number=Sing    5       nmod    _       _
2       jälkeen jälkeen ADP     Adp     AdpType=Post    1       case    _       _
3       on      olla    VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 5       cop
     _       _
4       hyvä    hyvä    ADJ     A       Case=Nom|Degree=Pos|Number=Sing 5       amod    _       _
5       hetki   hetki   NOUN    N       Case=Nom|Number=Sing    0       root    _       _
6       katsella        katsella        VERB    V       InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act    5       acl
     _       _
7       ruokakaupan     ruoka#kauppa    NOUN    N       Case=Gen|Number=Sing    8       nmod:poss       _       _
8       hyllyjä hylly   NOUN    N       Case=Par|Number=Plur    6       dobj    _       _
9       aivan   aivan   ADV     Adv     _       10      advmod  _       _
10      uusin   uusi    ADJ     A       Case=Ins|Degree=Pos|Number=Plur 11      amod    _       _
11      silmin  silmä   NOUN    N       Case=Ins|Number=Plur    6       nmod    _       SpaceAfter=No
12      .       .       PUNCT   Punct   _       5       punct   _       _
~~~

### `Com`: Comitative or sociative case

Comitative is a case for "with" (as accompanied with, alongside).

#### Comitative examples

* [fi] _kissoine_ "with their cats", _taloine_ "with their houses"

~~~ conllu
# sentence-text: Itse asiassa siinä kulminoituu elämän koko kirjo iloineen ja suruineen.
1       Itse    itse    ADV     Adv     _       4       advmod  _       _
2       asiassa asiassa ADV     Adv     _       1       mwe     _       _
3       siinä   se      PRON    Pron    Case=Ine|Number=Sing|PronType=Dem       4       nmod    _       _
4       kulminoituu     kulminoitua     VERB    V       Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Ac
t 0       root    _       _
5       elämän  elämä   NOUN    N       Case=Gen|Number=Sing    7       nmod:poss       _       _
6       koko    koko    ADJ     A       _       7       amod    _       _
7       kirjo   kirjo   NOUN    N       Case=Nom|Number=Sing    4       nsubj   _       _
8       iloineen        ilo     NOUN    N       Case=Com|Person[psor]=3 7       nmod    _       _
9       ja      ja      CONJ    C       _       8       cc      _       _
10      suruineen       suru    NOUN    N       Case=Com|Person[psor]=3 8       conj    7:nmod  SpaceAfter=No
11      .       .       PUNCT   Punct   _       4       punct   _       _
~~~

### `Dis`: Distributive case

Distributive is a case for "each, one by one".

Finnish distributives are treated as derivations, such as [fi] _talottain_
"house by house".

#### Distributive examples


### `Tem`: Temporal case

Temporal is a case for "at" (for a given time).

Finnish temporal distributives are treated as derivations, such as [fi]
_perjantaisin_ "each Friday".


#### Temporal examples


### `Cau`: Causative or causal case

Causative is a case for "because of".

### `Add`: Additive case

Additive is an Estonian case...

### `Voc`: Vocative case

Vocative is a case for ...


#### Layered cases

Some Uralic languages allow stacking of case suffixes, which might be
implemented in UD as layered annotations or lexicalising the inflected form.

