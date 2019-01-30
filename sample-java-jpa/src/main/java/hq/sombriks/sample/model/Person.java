package hq.sombriks.sample.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name = "person")
public class Person {

  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "person_id")
  private Integer id;

  @Column(name = "person_creation")
  @Temporal(TemporalType.TIMESTAMP)
  private Date creation;

  @Column(name = "person_name")
  private String name;

  @PrePersist
  public void preInsert() {
    if (creation == null)
      creation = new Date();
  }
}
