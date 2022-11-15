const CoreModel = require("./coreModel");
const client = require("../database");
class Question extends CoreModel {

  static tableName = "question";

  question;
  anecdote;
  wiki;
  status;
  level_id;
  answer_id;
  quiz_id;

  constructor(obj) {
    super(obj);
    this.question = obj.question;
    this.anecdote = obj.anecdote;
    this.wiki = obj.wiki;
    this.status = obj.status;
    this.level_id = obj.level_id;
    this.answer_id = obj.answer_id;
    this.quiz_id = obj.quiz_id;
  };

  //GETTERS
  get question() {
    return this.question;
  };

  get anecdote() {
    return this.anecdote;
  };

  get wiki() {
    return this.wiki;
  };

  get status() {
    return this.status;
  };

  get level_id() {
    return this.level_id;
  };

  get answer_id() {
    return this.answer_id;
  };

  get quiz_id() {
    return this.quiz_id;
  };

  //SETTERS

  set question(value) {
    this.question = value;
  };

  set anecdote(value) {
    this.anecdote = value;
  };

  set wiki(value) {
    this.wiki = value;
  };

  set status(value) {
    this.status = value;
  };

  set level_id(value) {
    this.level_id = value;
  };

  set answer_id(value) {
    this.answer_id = value;
  };

  set quiz_id(value) {
    this.quiz_id = value;
  };
}

module.exports = Question;
