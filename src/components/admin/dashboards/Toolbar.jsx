"use client";
import { useEffect, useState } from "react";
import Checkbox from "../../Checkbox";
import Tag from "../Tag.jsx";
import { FaTrashAlt } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { COLORS } from "@/data/Tags";
import Popup from "../Popup";
import Input from "../Input";
import axios from "axios";
import toast from "react-hot-toast";

const Toolbar = ({
  input,
  setInput,
  tags,
  setObjects,
  objects,
  filters,
  api,
}) => {
  const [popup, setPopup] = useState({
    title: "Delete Confirmation",
    text: "Are you sure you want to delete these row(s)? This action is irreversible.",
    color: "red",
    visible: false,
  });
  const [toggle, setToggle] = useState(false);

  const onClick = (text) => {
    setToggle(false);
    const items = objects.filter((object) => object.selected);
    axios.put(`/api/${api}`, {
      objects: items,
      status: text,
      attribute: "status",
    });
    setObjects(
      objects.map((a) => {
        if (a.selected) {
          a.status = text;
          a.selected = false;
        }
        return a;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setObjects(
      objects.map((a) => {
        let boolean = false;

        Object.entries(filters).map(([filter, value]) => {
          if (
            a.status === filter &&
            value &&
            a.name.toLowerCase().match(input.input.toLowerCase())
          ) {
            boolean = true;
          }
        });
        return { ...a, hidden: !boolean };
      })
    );
  };

  const selectAll = () => {
    setObjects(
      objects.map((a) => {
        a.selected = !toggle;
        return a;
      })
    );
    setToggle(!toggle);
  };

  const handleDelete = () => {
    setToggle(false);
    const remove = objects.filter((object) => object.selected);
    const keep = objects.filter((object) => !object.selected);
    setObjects(keep);
    axios
      .put(`/api/${api}`, { objects: remove, attribute: "role" })
      .then(() => {
        toast("✅ Successfully Deleted");
      });
  };

  const handleReload = () => {
    axios.get(`/api/${api}`).then((response) => {
      setObjects(response.data.items);
    });
  };

  useEffect(() => {
    handleReload();
  }, []);

  return (
    <div className="w-full flex items-center" data-cy="toolbar">
      <div className="w-2/3 flex items-center">
        <div className="mr-4" data-cy="select-all">
          <Checkbox onClick={selectAll} toggle={toggle} />
        </div>
        <div className="flex flex-row gap-2 ">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag.text}
              name={tag.name}
              onClick={() => onClick(tag.text)}
              color={COLORS[tag.text]}
              setObjects={setObjects}
              objects={objects}
            />
          ))}
        </div>
        <form className="flex ml-2 w-full items-center" onSubmit={handleSubmit}>
          <Input
            classes="w-full"
            object={input}
            setObject={setInput}
            clear={true}
            label="input"
            maxLength={60}
            placeholder="search"
            showLabel={false}
          />
        </form>
      </div>
      <TbReload onClick={handleReload} />
      <div className="flex w-1/3">
        <button
          data-cy="delete"
          onClick={() =>
            setPopup({
              ...popup,
              visible: true,
            })
          }
        >
          <FaTrashAlt
            size={22.5}
            className="ml-5 text-hackathon-gray-300 hover:opacity-70 duration-150"
          />
        </button>
        {popup.visible && (
          <Popup
            popup={popup}
            onClick={handleDelete}
            setPopup={setPopup}
            text="confirm"
          />
        )}
      </div>
    </div>
  );
};

export default Toolbar;
