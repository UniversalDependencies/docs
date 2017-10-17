

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This feature is language-specific.
It occurs with 2 different values: `1`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Person](), [Person[psor]]().

77 tokens (15%) have a non-empty value of `Person[psor]`.
66 types (21%) occur at least once with a non-empty value of `Person[psor]`.
51 lemmas (20%) occur at least once with a non-empty value of `Person[psor]`.
The feature is used with 6 part-of-speech tags: [kk-pos/NOUN]() (59; 11% instances), [kk-pos/PRON]() (6; 1% instances), [kk-pos/VERB]() (6; 1% instances), [kk-pos/NUM]() (4; 1% instances), [kk-pos/ADJ]() (1; 0% instances), [kk-pos/PROPN]() (1; 0% instances).

### `NOUN`

59 [kk-pos/NOUN]() tokens (42% of all `NOUN` tokens) have a non-empty value of `Person[psor]`.

The most frequent other feature values with which `NOUN` and `Person[psor]` co-occurred: <tt><a href="Number[psor].html">Number[psor]</a>=Plur,Sing</tt> (58; 98%).

`NOUN` tokens may have the following values of `Person[psor]`:


<table>
  <tr><th>Paradigm <i>өмір</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number[psor].html">Number[psor]</a>=Plur,Sing|<a href="Person[psor].html">Person[psor]</a>=3</tt></td><td></td><td><em>өмірімен</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person[psor].html">Person[psor]</a>=1</tt></td><td><em>өмірім</em></td><td></td></tr>
</table>

`Person[psor]` seems to be **lexical feature** of `NOUN`. 98% lemmas (41) occur only with one value of `Person[psor]`.

### `VERB`

6 [kk-pos/VERB]() tokens (8% of all `VERB` tokens) have a non-empty value of `Person[psor]`.

The most frequent other feature values with which `VERB` and `Person[psor]` co-occurred: <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (6; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (6; 100%), <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (6; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (6; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (6; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Ger</tt> (6; 100%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (5; 83%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (5; 83%), <tt><a href="Case.html">Case</a>=Nom</tt> (4; 67%).

`VERB` tokens may have the following values of `Person[psor]`:


### `PRON`

6 [kk-pos/PRON]() tokens (33% of all `PRON` tokens) have a non-empty value of `Person[psor]`.

The most frequent other feature values with which `PRON` and `Person[psor]` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (6; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=Plur,Sing</tt> (6; 100%), <tt><a href="PronType.html">PronType</a>=Ref</tt> (6; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (6; 100%).

`PRON` tokens may have the following values of `Person[psor]`:


### `NUM`

4 [kk-pos/NUM]() tokens (21% of all `NUM` tokens) have a non-empty value of `Person[psor]`.

The most frequent other feature values with which `NUM` and `Person[psor]` co-occurred: <tt><a href="NumType.html">NumType</a>=Coll</tt> (4; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=Plur,Sing</tt> (4; 100%).

`NUM` tokens may have the following values of `Person[psor]`:


### `PROPN`

1 [kk-pos/PROPN]() tokens (3% of all `PROPN` tokens) have a non-empty value of `Person[psor]`.

The most frequent other feature values with which `PROPN` and `Person[psor]` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1; 100%), <tt><a href="Case.html">Case</a>=Gen</tt> (1; 100%).

`PROPN` tokens may have the following values of `Person[psor]`:


### `ADJ`

1 [kk-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `Person[psor]`.

The most frequent other feature values with which `ADJ` and `Person[psor]` co-occurred: <tt><a href="Case.html">Case</a>=Nom</tt> (1; 100%).

`ADJ` tokens may have the following values of `Person[psor]`:


## Relations with Agreement in `Person[psor]`

The 10 most frequent relations where parent and child node agree in `Person[psor]`:
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (3; 75%),
<tt>NOUN --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> NUM</tt> (2; 100%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (2; 67%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (1; 100%).

