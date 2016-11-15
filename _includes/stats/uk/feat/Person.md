

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

236 tokens (14%) have a non-empty value of `Person`.
104 types (15%) occur at least once with a non-empty value of `Person`.
66 lemmas (11%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: [uk-pos/VERB]() (130; 8% instances), [uk-pos/PRON]() (100; 6% instances), [uk-pos/DET]() (6; 0% instances).

### `VERB`

130 [uk-pos/VERB]() tokens (41% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (130; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (130; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (117; 90%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (116; 89%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (104; 80%), <tt><a href="Number.html">Number</a>=Sing</tt> (96; 74%).

`VERB` tokens may have the following values of `Person`:

* `1` (23; 18% of non-empty `Person`): <em>сплю, Вважаю, Запитаю, Сподіваємося, Зустріну, Маємо, Пишу, Піду, Сиджу, дрімаю</em>
* `2` (19; 15% of non-empty `Person`): <em>Почекайте, любиш, Іди, думай, Вчи, Знайди, Сиди, втікай, забудь, знаєш</em>
* `3` (88; 68% of non-empty `Person`): <em>є, каже, плаває, навчають, Кажуть, буде, мусять, запилюють, запилюються, змінять</em>
* `EMPTY` (189): <em>був, пішов, сказав, було, зберігати, зароблено, копати, плавати, розмовляти, чекати</em>

<table>
  <tr><th>Paradigm <i>мати</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Neg</tt></td><td></td><td><em>Немає</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>має</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>Маємо</em></td><td><em>мають</em></td></tr>
</table>

### `PRON`

100 [uk-pos/PRON]() tokens (65% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (100; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (61; 61%), <tt><a href="Case.html">Case</a>=Nom</tt> (57; 57%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (51; 51%).

`PRON` tokens may have the following values of `Person`:

* `1` (23; 23% of non-empty `Person`): <em>я, мені, мене, ми, нас, нами</em>
* `2` (16; 16% of non-empty `Person`): <em>ти, тебе, ви, тобі, вас</em>
* `3` (61; 61% of non-empty `Person`): <em>він, його, вона, її, вони, них, Їх, ним, йому, їй</em>
* `EMPTY` (53): <em>це, що, дехто, те, все, ніхто, собі, всім, дещо, нічого</em>

### `DET`

6 [uk-pos/DET]() tokens (18% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (6; 100%), <tt><a href="Poss.html">Poss</a>=Yes</tt> (6; 100%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (6; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (4; 67%), <tt><a href="Case.html">Case</a>=Nom</tt> (4; 67%).

`DET` tokens may have the following values of `Person`:

* `1` (2; 33% of non-empty `Person`): <em>моя, мій</em>
* `2` (1; 17% of non-empty `Person`): <em>Ваші</em>
* `3` (3; 50% of non-empty `Person`): <em>його, її</em>
* `EMPTY` (28): <em>Ті, свою, той, цей, Котра, Котру, Та, Ця, кожному, котрого</em>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (11; 58%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (2; 100%),
<tt>VERB --[<a href="../dep/vocative.html">vocative</a>]--> PRON</tt> (1; 100%).

